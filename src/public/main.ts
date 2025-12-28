console.log("main.ts 실행됨");
// setZoom.ts
export function setPageZoom(percentage: number) {
  const value = `${percentage}%`;
  (document.body as HTMLElement).style.zoom = value;
}

import { htmlData } from "./htmlData";

export function getHead(html: string): string {
  const match = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
  return match ? match[1] : "";
}
export function getBody(html: string): string {
  const match = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : "";
}

export function onPageDown(handler: (e: KeyboardEvent) => void): () => void {
  // 이벤트 리스너
  function listener(e: KeyboardEvent) {
    // 최신 표준: e.code 또는 e.key 사용 권장
    if (
      e.code === "PageDown" ||
      e.key === "PageDown" ||
      (e as any).keyCode === 34
    ) {
      handler(e);
    }
  }

  window.addEventListener("keydown", listener);

  // 등록 취소(정리) 함수 반환
  return () => {
    window.removeEventListener("keydown", listener);
  };
}

export function onPageUp(handler: (e: KeyboardEvent) => void): () => void {
  // 이벤트 리스너
  function listener(e: KeyboardEvent) {
    // 최신 표준: e.code 또는 e.key 사용 권장
    if (
      e.code === "PageUp" ||
      e.key === "PageUp" ||
      (e as any).keyCode === 33
    ) {
      handler(e);
    }
  }

  window.addEventListener("keydown", listener);

  // 등록 취소(정리) 함수 반환
  return () => {
    window.removeEventListener("keydown", listener);
  };
}

// setPageZoom(150); // 페이지를 150%로 설정
// const headAndBody = getHeadAndBody(htmlData[0]);

const maxPage = htmlData.length - 1;
let currentPage = 0;

function changePage(pageNumber = 0) {
  if (pageNumber > maxPage) {
    pageNumber = 0;
  } else if (pageNumber < 0) {
    pageNumber = maxPage;
  }
  currentPage = pageNumber;
  let data = htmlData[pageNumber];
  data = data.replace(/AAAA/g, "`");
  data = data.replace(/BBBB/g, "${");
  data = data.replace(
    '<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>',
    tailwindStyle
  );
  document.head.innerHTML = getHead(data);
  document.body.innerHTML = getBody(data);
}

const pageUp = onPageUp((e) => {
  e.preventDefault();
  currentPage--;
  changePage(currentPage);
});

const pageDown = onPageDown((e) => {
  e.preventDefault();
  currentPage++;
  changePage(currentPage);
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { tailwindStyle } from "./tailwindcss_browser4";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwQBfBU1ktxAYT8t2Ee4h-skM9M8jvGGI",
  authDomain: "civil-act-slides.firebaseapp.com",
  projectId: "civil-act-slides",
  storageBucket: "civil-act-slides.firebasestorage.app",
  messagingSenderId: "224199581514",
  appId: "1:224199581514:web:579053596871a9d3b9ebb3",
};

let tailCode = "";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
async function main() {
  const res = await fetch(
    "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
  );
  tailCode = await res.text();
  console.log(tailCode);
  changePage();
}
