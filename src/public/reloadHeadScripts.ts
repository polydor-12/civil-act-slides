// reloadHeadScripts.ts

const scriptCache = new Map<string, Promise<string>>();

type ReloadOptions = {
  /** 외부 스크립트에 붙일 캐시무시 쿼리 키 (기본: _ts) */
  cacheBusterKey?: string;
  /** 외부 스크립트 로드 동시성(0 => 순차, >0 => 병렬 제한) */
  concurrency?: number;
  /** 스크립트 재삽입 후 원본 스크립트 요소를 제거할지 여부(기본 true) */
  removeOriginal?: boolean;
  /** 특정 스크립트(예: id 또는 src 포함)를 필터링할 콜백 */
  filter?: (el: HTMLScriptElement) => boolean;
};

function loadScriptElement(
  el: HTMLScriptElement,
  opts: ReloadOptions = {}
): Promise<HTMLScriptElement> {
  const { cacheBusterKey = "_ts" } = opts;

  return new Promise((resolve, reject) => {
    // 외부 src가 있는 경우
    if (el.src) {
      const scriptUrl = new URL(el.src, document.baseURI).href;
      let scriptContentPromise = scriptCache.get(scriptUrl);

      if (!scriptContentPromise) {
        // 스크립트가 캐시에 없는 경우, fetch 하고 캐시에 저장
        const fetchUrl = new URL(scriptUrl);
        fetchUrl.searchParams.set(cacheBusterKey, Date.now().toString());

        scriptContentPromise = fetch(fetchUrl.toString()).then((res) => {
          if (!res.ok) {
            throw new Error(
              `Failed to fetch script: ${res.url} ${res.status} ${res.statusText}`
            );
          }
          return res.text();
        });
        scriptCache.set(scriptUrl, scriptContentPromise);
      }

      scriptContentPromise
        .then((scriptContent) => {
          const script = document.createElement("script");
          // 원본 스크립트의 속성 복사 (integrity는 blob URL과 호환되지 않으므로 제외)
          if (el.type) script.type = el.type;
          if (el.async) script.async = el.async;
          if (el.defer) script.defer = el.defer;
          if (el.crossOrigin !== null) script.crossOrigin = el.crossOrigin;

          // 캐시된 내용으로 Blob URL 생성하여 src에 할당
          const blob = new Blob([scriptContent], { type: "text/javascript" });
          const blobUrl = URL.createObjectURL(blob);
          script.src = blobUrl;
          script.dataset.originalSrc = el.src;

          script.onload = () => {
            URL.revokeObjectURL(blobUrl); // 메모리 해제
            resolve(script);
          };

          script.onerror = () => {
            URL.revokeObjectURL(blobUrl);
            reject(new Error(`Failed to load script from blob: ${el.src}`));
          };

          document.head.appendChild(script);
        })
        .catch((error) => {
          // fetch가 실패하면 캐시에서 제거하여 다음 번에 재시도하도록 함
          scriptCache.delete(scriptUrl);
          reject(error);
        });

      return;
    }

    // 인라인 스크립트의 경우 textContent 복사하여 새로 실행
    const inlineScript = document.createElement("script");
    if (el.type) inlineScript.type = el.type;
    inlineScript.textContent = el.textContent ?? "";

    // inline script는 onload가 잘 동작하지 않으므로 microtask로 resolve
    document.head.appendChild(inlineScript);
    // 즉시 resolve (브라우저가 script를 만나자마자 실행)
    resolve(inlineScript);
  });
}

export async function reloadHeadScripts(
  opts: ReloadOptions = {}
): Promise<void> {
  const { concurrency = 5, removeOriginal = true, filter } = opts;

  // head 내의 스크립트들 수집(배열 복사)
  const scripts = Array.from(document.head.querySelectorAll("script")).filter(
    (s) => {
      // filter 콜백이 있으면 통과 여부 체크
      if (filter && !filter(s as HTMLScriptElement)) return false;
      // inline, external 모두 포함
      return true;
    }
  ) as HTMLScriptElement[];

  // 병렬 제한 처리
  const results: Promise<void>[] = [];
  let idx = 0;

  async function worker(): Promise<void> {
    while (idx < scripts.length) {
      const i = idx++;
      const el = scripts[i];
      try {
        await loadScriptElement(el, opts);
        // 원본 제거 옵션
        if (removeOriginal) {
          try {
            el.parentElement?.removeChild(el);
          } catch {
            /* ignore */
          }
        }
      } catch (err) {
        console.error("Script reload error:", err);
      }
    }
  }

  const workerCount = Math.max(1, Math.min(concurrency, scripts.length));
  for (let i = 0; i < workerCount; i++) results.push(worker());

  await Promise.all(results);
}
