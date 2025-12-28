(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(l){if(l.ep)return;l.ep=!0;const a=s(l);fetch(l.href,a)}})();const W=[`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>민법 (총칙, 물권)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }
      .animate-delay-1 {
        animation-delay: 0.2s;
      }
      .animate-delay-2 {
        animation-delay: 0.4s;
      }
      .animate-delay-3 {
        animation-delay: 0.6s;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 flex flex-col items-center justify-center text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Decorative elements -->
      <div
        class="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-blue-300 opacity-30"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-blue-300 opacity-30"
      ></div>
      <!-- Main content -->
      <div class="z-10 text-center px-16">
        <div class="mb-4 animate-fade-in">
          <h1 class="text-6xl font-bold mb-6">민 법</h1>
          <div class="text-4xl font-medium mb-8">(총칙, 물권)</div>
        </div>
        <div
          class="flex justify-center items-center mb-16 animate-fade-in animate-delay-1"
        >
          <div class="w-20 h-px bg-blue-300"></div>
          <div class="mx-6 text-7xl text-blue-300">
            <i class="fas fa-balance-scale"></i>
          </div>
          <div class="w-20 h-px bg-blue-300"></div>
        </div>
        <div class="mb-6 animate-fade-in animate-delay-2">
          <p class="text-3xl font-medium">장 민</p>
        </div>
        <div class="mb-10 animate-fade-in animate-delay-2">
          <p class="text-xl font-medium">창원대 법학과 교수</p>
        </div>
        <div class="animate-fade-in animate-delay-3">
          <div class="flex flex-col items-center">
            <div class="mb-1 text-blue-200">Report Generate Date</div>
            <div class="text-xl">2026-01-16</div>
          </div>
        </div>
      </div>
      <!-- Bottom information -->
      <div
        class="absolute bottom-8 text-center animate-fade-in animate-delay-3"
      >
        <div class="text-sm text-blue-200">
          제1강 민법의 개요 · 제2강 물권(점유권·소유권) · 제3강
          제한물권(용익물권ㆍ담보물권)
        </div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>제1강 민법의 개요</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .topic-card {
        transition: all 0.3s ease;
      }
      .topic-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title and lecture number -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">제1강 민법의 개요</h1>
            <div class="mt-2 text-blue-300">
              민법의 체계, 구성 및 기본 개념에 대한 소개
            </div>
          </div>
          <div class="text-right">
            <div class="text-blue-300">강의 일자</div>
            <div class="text-xl">1/16(금)</div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-20 left-0 right-0 px-16">
        <div class="grid grid-cols-3 gap-8 h-full">
          <!-- Card 1: 민법의 체계 -->
          <div
            class="topic-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700"
          >
            <div class="text-blue-300 text-4xl mb-4">
              <i class="fas fa-book-open"></i>
            </div>
            <h3 class="text-3xl font-bold mb-6">민법의 체계</h3>
            <ul class="space-y-6 text-2xl flex-grow">
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>형식적 의미의 민법</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>실질적 의미의 민법</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>민법의 특질</span>
              </li>
            </ul>
          </div>
          <!-- Card 2: 민법의 기본원리 -->
          <div
            class="topic-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700"
          >
            <div class="text-blue-300 text-4xl mb-4">
              <i class="fas fa-balance-scale"></i>
            </div>
            <h3 class="text-3xl font-bold mb-6">민법의 기본원리</h3>
            <ul class="space-y-6 text-2xl flex-grow">
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>근대민법의 기본원리</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>사유재산권존중의 원칙</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>사적자치의 원칙</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>과실책임의 원칙</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>민법의 수정원리</span>
              </li>
            </ul>
          </div>
          <!-- Card 3: 민법의 기본개념 -->
          <div
            class="topic-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700"
          >
            <div class="text-blue-300 text-4xl mb-4">
              <i class="fas fa-gavel"></i>
            </div>
            <h3 class="text-3xl font-bold mb-6">민법의 기본개념</h3>
            <ul class="space-y-6 text-2xl flex-grow">
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>사법상의 권리와 의무</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>법률관계</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>법률행위</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>신의성실의 원칙</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                <span>권리남용금지의 원칙</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">2 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>대한민국의 민법 - 체계 및 구성</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .civil-code-part {
        transition: all 0.3s ease;
      }
      .civil-code-part:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">대한민국의 민법 - 체계 및 구성</h1>
        <div class="mt-2 text-blue-300">
          형식적 의미의 민법과 민법전의 구성에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-37 bottom-16 left-0 right-0 px-16">
        <div class="flex h-full">
          <!-- Left column - Definition and history -->
          <div class="w-1/3 pr-8">
            <div class="mb-8">
              <h2 class="text-2xl font-bold mb-4 flex items-center">
                <i class="fas fa-book text-blue-300 mr-3"></i>
                형식적 의미의 민법
              </h2>
              <p class="text-lg">국회에서 제정한 &#39;민법&#39;이라는 법률</p>
            </div>
            <div class="mb-8">
              <h2 class="text-2xl font-bold mb-4 flex items-center">
                <i class="fas fa-history text-blue-300 mr-3"></i>
                연혁
              </h2>
              <ul class="space-y-3 text-lg">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mr-2 mt-1.5"></i>
                  <div>
                    <span class="font-semibold">제정:</span> 1958년 2월 22일
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mr-2 mt-1.5"></i>
                  <div>
                    <span class="font-semibold">시행:</span> 1960년 1월 1일
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mr-2 mt-1.5"></i>
                  <div>이전에는 일본민법 적용</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4 flex items-center">
                <i class="fas fa-sitemap text-blue-300 mr-3"></i>
                구성 체계
              </h2>
              <p class="text-lg mb-2">판덱텐 시스템 (Pandekten System)</p>
              <p class="text-lg">계수법의 성질을 보여주는 체계</p>
            </div>
          </div>
          <!-- Right column - Civil code structure -->
          <div class="w-2/3 pl-8 border-l border-blue-700">
            <h2 class="text-2xl font-bold mb-5 flex items-center">
              <i class="fas fa-layer-group text-blue-300 mr-3"></i>
              민법전의 5편 구성
            </h2>
            <div class="space-y-4">
              <!-- Part 1 -->
              <div
                class="civil-code-part flex bg-blue-800 bg-opacity-50 rounded-lg overflow-hidden border border-blue-700"
              >
                <div class="w-16 bg-blue-600 flex items-center justify-center">
                  <span class="text-2xl font-bold">1</span>
                </div>
                <div class="flex-grow p-3">
                  <div class="flex justify-between items-center">
                    <h3 class="text-xl font-bold">제1편 총칙</h3>
                    <span class="text-blue-300">(제1조-제184조)</span>
                  </div>
                  <p class="mt-1">
                    통칙, 인, 법인, 물건, 법률행위, 기간, 소멸시효
                  </p>
                </div>
              </div>
              <!-- Part 2 -->
              <div
                class="civil-code-part flex bg-blue-800 bg-opacity-50 rounded-lg overflow-hidden border border-blue-700"
              >
                <div class="w-16 bg-blue-600 flex items-center justify-center">
                  <span class="text-2xl font-bold">2</span>
                </div>
                <div class="flex-grow p-3">
                  <div class="flex justify-between items-center">
                    <h3 class="text-xl font-bold">제2편 물권</h3>
                    <span class="text-blue-300">(제185조-제372조)</span>
                  </div>
                  <p class="mt-1">
                    총칙, 점유권, 소유권, 지상권, 지역권, 전세권, 유치권, 질권,
                    저당권
                  </p>
                </div>
              </div>
              <!-- Part 3 -->
              <div
                class="civil-code-part flex bg-blue-800 bg-opacity-50 rounded-lg overflow-hidden border border-blue-700"
              >
                <div class="w-16 bg-blue-600 flex items-center justify-center">
                  <span class="text-2xl font-bold">3</span>
                </div>
                <div class="flex-grow p-3">
                  <div class="flex justify-between items-center">
                    <h3 class="text-xl font-bold">제3편 채권</h3>
                    <span class="text-blue-300">(제373조-제766조)</span>
                  </div>
                  <p class="mt-1">
                    총칙, 계약(총칙, 전형계약 15가지), 사무관리, 부당이득,
                    불법행위
                  </p>
                </div>
              </div>
              <!-- Part 4 -->
              <div
                class="civil-code-part flex bg-blue-800 bg-opacity-50 rounded-lg overflow-hidden border border-blue-700"
              >
                <div class="w-16 bg-blue-600 flex items-center justify-center">
                  <span class="text-2xl font-bold">4</span>
                </div>
                <div class="flex-grow p-3">
                  <div class="flex justify-between items-center">
                    <h3 class="text-xl font-bold">제4편 친족</h3>
                    <span class="text-blue-300">(제767조-제979조)</span>
                  </div>
                  <p class="mt-1">
                    총칙, 가족의 범위와 자의 성과 본, 혼인, 부모와 자, 후견,
                    부양
                  </p>
                </div>
              </div>
              <!-- Part 5 -->
              <div
                class="civil-code-part flex bg-blue-800 bg-opacity-50 rounded-lg overflow-hidden border border-blue-700"
              >
                <div class="w-16 bg-blue-600 flex items-center justify-center">
                  <span class="text-2xl font-bold">5</span>
                </div>
                <div class="flex-grow p-3">
                  <div class="flex justify-between items-center">
                    <h3 class="text-xl font-bold">제5편 상속</h3>
                    <span class="text-blue-300">(제997조-제1118조)</span>
                  </div>
                  <p class="mt-1">상속, 유언, 유류분</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">3 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>실질적 의미의 민법</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .law-item {
        transition: all 0.3s ease;
      }
      .law-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">실질적 의미의 민법</h1>
        <div class="mt-2 text-blue-300">
          민법전 외에 개인 간의 법률관계를 규율하는 법률들
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 left-0 right-0 px-15">
        <div class="flex flex-col space-y-3">
          <!-- Definition section -->
          <div
            class="bg-blue-800 bg-opacity-40 rounded-lg p-6 border border-blue-700"
          >
            <div class="flex items-start">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-book-open"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-1">실질적 의미의 민법이란?</h3>
                <p class="text-lg">
                  민법전뿐만 아니라 개인과 개인 사이의 법률관계에 적용되는
                  <span class="text-blue-300 font-semibold">모든 법률</span>을
                  의미합니다.
                </p>
              </div>
            </div>
          </div>
          <!-- Laws examples section -->
          <div class="grid grid-cols-3 gap-4">
            <div
              class="law-item bg-blue-800 bg-opacity-30 rounded-lg p-5 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-home"></i>
                </div>
                <h4 class="text-xl font-semibold">주택임대차보호법</h4>
              </div>
              <p>
                주택 임대차 관계에서 경제적 약자인 임차인의 주거권을 보호하기
                위한 법률
              </p>
            </div>
            <div
              class="law-item bg-blue-800 bg-opacity-30 rounded-lg p-5 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-store"></i>
                </div>
                <h4 class="text-xl font-semibold">상가건물 임대차보호법</h4>
              </div>
              <p>
                상가건물 임대차 관계에서 임차인의 영업권을 보호하기 위한 법률
              </p>
            </div>
            <div
              class="law-item bg-blue-800 bg-opacity-30 rounded-lg p-5 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-file-contract"></i>
                </div>
                <h4 class="text-xl font-semibold">부동산등기법</h4>
              </div>
              <p>
                부동산에 관한 권리관계를 공시하기 위한 등기제도를 규정한 법률
              </p>
            </div>
            <div
              class="law-item bg-blue-800 bg-opacity-30 rounded-lg p-5 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-file-signature"></i>
                </div>
                <h4 class="text-xl font-semibold">부동산등기 특별조치법</h4>
              </div>
              <p>
                부동산등기 절차를 간소화하고 부동산거래의 정상화를 위한 법률
              </p>
            </div>
            <div
              class="law-item bg-blue-800 bg-opacity-30 rounded-lg p-5 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-user-shield"></i>
                </div>
                <h4 class="text-xl font-semibold">
                  부동산 실권리자명의 등기에 관한 법률
                </h4>
              </div>
              <p>
                명의신탁 등 실제 권리자와 등기명의자가 다른 경우를 규제하는 법률
              </p>
            </div>
            <div
              class="law-item bg-blue-800 bg-opacity-30 rounded-lg p-5 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-lock"></i>
                </div>
                <h4 class="text-xl font-semibold">가등기담보 등에 관한 법률</h4>
              </div>
              <p>가등기 등을 이용한 담보거래를 규율하는 법률</p>
            </div>
          </div>
          <!-- Civil Code Article 1 -->
          <div
            class="bg-blue-700 bg-opacity-40 rounded-lg p-6 border border-blue-600 mt-4"
          >
            <div class="flex items-center">
              <div class="text-yellow-300 text-3xl mr-4">
                <i class="fas fa-paragraph"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">민법 제1조(법원)</h3>
                <p class="text-lg italic">
                  &#34;민사에 관하여 법률에 규정이 없으면 관습법에 의하고
                  관습법이 없으면 조리에 의한다.&#34;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">4 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>민법의 기본원리</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .timeline-item {
        position: relative;
      }
      .timeline-item::before {
        content: "";
        position: absolute;
        left: -40px;
        top: 24px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #4299e1;
        z-index: 1;
      }
      .timeline-item::after {
        content: "";
        position: absolute;
        left: -33px;
        top: 40px;
        width: 2px;
        height: calc(100% - 24px);
        background-color: #4299e1;
        z-index: 0;
      }
      .timeline-item:last-child::after {
        display: none;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h1 class="text-4xl font-bold">민법의 기본원리</h1>
            <div class="w-3"></div>
            <div class="mt-2 text-blue-300">
              근대민법의 기본원리와 역사적 배경
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-32 bottom-10 left-0 right-0 px-16">
        <div class="flex h-full">
          <!-- Left section: Historical background -->
          <div class="w-1/2 pr-8">
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-8 h-full border border-blue-700"
            >
              <h2 class="text-2xl font-bold mb-6 flex items-center">
                <i class="fas fa-history text-blue-300 mr-3"></i>
                역사적 배경
              </h2>
              <div class="pl-10">
                <div class="timeline-item pb-6">
                  <h3 class="text-xl font-semibold text-blue-300">
                    중세 봉건사회의 극복
                  </h3>
                  <p class="mt-2 text-lg">
                    신분구속적 봉건사회의 제약을 극복하고 근대 자본주의사회의
                    요구를 반영
                  </p>
                </div>
                <div class="timeline-item pb-6">
                  <h3 class="text-xl font-semibold text-blue-300">
                    개인의 재인식
                  </h3>
                  <p class="mt-2 text-lg">
                    개인을 인격적ㆍ이성적 존재로 이해하며 개인의 자유를 중시
                  </p>
                </div>
                <div class="timeline-item pb-6">
                  <h3 class="text-xl font-semibold text-blue-300">
                    근대 민법전의 성립
                  </h3>
                  <p class="mt-2 text-lg">
                    프랑스민법전, 독일민법전 등에서 근대민법의 기본원리가 확립됨
                  </p>
                </div>
                <div class="timeline-item">
                  <h3 class="text-xl font-semibold text-blue-300">
                    자본주의 발전
                  </h3>
                  <p class="mt-2 text-lg">
                    자본주의 경제체제의 발전과 함께 민법의 기본원리도 변화와
                    수정을 겪음
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Right section: Basic principles -->
          <div class="w-1/2 pl-8">
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-8 h-full border border-blue-700"
            >
              <h2 class="text-2xl font-bold mb-9 flex items-center">
                <i class="fas fa-balance-scale text-blue-300 mr-3"></i>
                근대민법의 기본원리
              </h2>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="text-3xl text-blue-300 mr-4">
                    <i class="fas fa-home"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold">사유재산권존중의 원칙</h3>
                    <p class="mt-1 text-lg">
                      개인의 재산이 타인 또는 국가권력으로부터 침해되지 않아야
                      함
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="text-3xl text-blue-300 mr-4">
                    <i class="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold">사적자치의 원칙</h3>
                    <p class="mt-1 text-lg">
                      개인의 자유로운 의사에 따라 법률행위를 통해 권리와 의무를
                      발생ㆍ변경ㆍ소멸시킬 수 있음
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="text-3xl text-blue-300 mr-4">
                    <i class="fas fa-gavel"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold">과실책임의 원칙</h3>
                    <p class="mt-1 text-lg">
                      행위자의 고의 또는 과실이 인정되지 않는 경우 그 손해에
                      대하여 책임을 지지 않는다는 원칙
                    </p>
                  </div>
                </div>
                <div
                  class="mt-8 p-4 bg-blue-700 bg-opacity-50 rounded-lg border border-blue-600"
                >
                  <p class="text-lg flex items-center">
                    <i class="fas fa-info-circle text-blue-300 mr-2"></i>
                    이러한 근대민법의 기본원리들은 현대에 와서 일부 수정되어
                    적용되고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">5 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html><html lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>민법의 기본원리 (계속)</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script><style>
        body {width: 1280px; min-height: 720px; margin: 0;
            padding: 0;}
        .slide-container {
            width: 1280px;
            min-height: 720px;
            position: relative;
            
        }
        .bg-pattern {
            opacity: 0.05;
            background-image: linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .principle-card {
            transition: all 0.3s ease;
        }
        .principle-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
    </style>
</head>
<body>
<div class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
<!-- Background pattern -->
<div class="bg-pattern absolute inset-0"></div>
<!-- Header with title -->
<div class="absolute top-0 left-0 right-0 px-12 py-8">
<div class="flex justify-between items-center">
<div>
<h1 class="text-4xl font-bold">민법의 기본원리 <span class="text-blue-300">(계속)</span></h1>
<div class="mt-2 text-blue-300">사유재산권존중의 원칙과 사적자치의 원칙에 대한 설명</div>
</div>
</div>
<div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
</div>
<!-- Main content -->
<div class="absolute top-40 bottom-20 left-0 right-0 px-16">
<div class="grid grid-cols-2 gap-12 h-full">
<!-- Principle 1: 사유재산권존중의 원칙 -->
<div class="principle-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700">
<div class="flex items-center mb-6">
<div class="text-blue-300 text-4xl mr-4">
<i class="fas fa-home"></i>
</div>
<h3 class="text-2xl font-bold">사유재산권존중의 원칙</h3>
</div>
<div class="mb-6">
<div class="text-xl font-semibold mb-2 text-blue-200">의의</div>
<p class="text-lg">개인의 재산이 타인 또는 국가권력으로부터 침해되지 않아야 한다는 원칙</p>
</div>
<div class="mb-6">
<div class="text-xl font-semibold mb-2 text-blue-200">역사적 배경</div>
<ul class="space-y-2 text-lg">
<li class="flex items-start">
<i class="fas fa-check-circle mt-1.5 mr-2 text-blue-300"></i>
<span>중세 신분구속적 봉건사회의 극복</span>
</li>
<li class="flex items-start">
<i class="fas fa-check-circle mt-1.5 mr-2 text-blue-300"></i>
<span>근대 자본주의사회의 요구 반영</span>
</li>
</ul>
</div>
<div class="mt-auto">
<div class="text-xl font-semibold mb-2 text-blue-200">근대민법의 핵심 원리</div>
<div class="flex items-center">
<i class="fas fa-lightbulb text-yellow-300 mr-2"></i>
<p class="text-lg">프랑스민법전, 독일민법전에 반영</p>
</div>
</div>
</div>
<!-- Principle 2: 사적자치의 원칙 -->
<div class="principle-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700">
<div class="flex items-center mb-6">
<div class="text-blue-300 text-4xl mr-4">
<i class="fas fa-handshake"></i>
</div>
<h3 class="text-2xl font-bold">사적자치의 원칙</h3>
</div>
<div class="mb-6">
<div class="text-xl font-semibold mb-2 text-blue-200">의의</div>
<p class="text-lg">개인은 자신의 자유로운 의사에 따라 법률행위를 통하여 권리와 의무를 발생ㆍ변경ㆍ소멸시킬 수 있도록 보장됨</p>
</div>
<div class="mb-6">
<div class="text-xl font-semibold mb-2 text-blue-200">다른 명칭</div>
<p class="text-lg">법률행위자유의 원칙</p>
</div>
<div class="mb-6">
<div class="text-xl font-semibold mb-2 text-blue-200">특징</div>
<ul class="space-y-2 text-lg">
<li class="flex items-start">
<i class="fas fa-check-circle mt-1.5 mr-2 text-blue-300"></i>
<span>개인을 인격적ㆍ이성적 존재로 이해</span>
</li>
<li class="flex items-start">
<i class="fas fa-check-circle mt-1.5 mr-2 text-blue-300"></i>
<span>개인의 자유 중시</span>
</li>
</ul>
</div>
<div class="mt-auto">
<div class="flex items-center">
<i class="fas fa-exclamation-circle text-yellow-300 mr-2"></i>
<p class="text-lg">계약자유의 원칙으로 구체화됨</p>
</div>
</div>
</div>
</div>
</div>
<!-- Footer with slide number -->
<div class="absolute bottom-4 right-8">
<div class="text-sm text-blue-300">6 / 50</div>
</div>
</div>

</body></html>`,`<!DOCTYPE html><html lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>민법의 기본원리 (계속)</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script><style>
        body {width: 1280px; min-height: 720px; margin: 0;
            padding: 0;}
        .slide-container {
            width: 1280px;
            min-height: 720px;
            position: relative;
            
        }
        .bg-pattern {
            opacity: 0.05;
            background-image: linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .principle-box {
            transition: all 0.3s ease;
        }
        .principle-box:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
    </style>
</head>
<body>
<div class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
<!-- Background pattern -->
<div class="bg-pattern absolute inset-0"></div>
<!-- Header with title -->
<div class="absolute top-0 left-0 right-0 px-12 py-8">
<h1 class="text-4xl font-bold">민법의 기본원리 (계속)</h1>
<div class="mt-2 text-blue-300">과실책임의 원칙과 민법의 수정원리에 대한 설명</div>
<div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
</div>
<!-- Main content -->
<div class="absolute top-36 bottom-16 left-0 right-0 px-16">
<!-- Traditional Principle Section -->
<div class="mb-10">
<div class="flex items-center mb-4">
<div class="text-3xl text-blue-300 mr-3">
<i class="fas fa-balance-scale"></i>
</div>
<h2 class="text-2xl font-bold">과실책임의 원칙</h2>
</div>
<div class="ml-12 bg-blue-800 bg-opacity-50 p-6 rounded-lg border border-blue-700 principle-box">
<p class="text-lg">행위자의 고의 또는 과실이 인정되지 않는 경우 그 손해에 대하여 책임을 지지 않는다는 원칙</p>
<p class="mt-2 text-blue-200">채무불이행 및 불법행위에 적용됨</p>
</div>
</div>
<!-- Modified Principles Section -->
<div>
<div class="flex items-center mb-6">
<div class="text-3xl text-blue-300 mr-3">
<i class="fas fa-sync-alt"></i>
</div>
<h2 class="text-2xl font-bold">민법의 수정원리</h2>
</div>
<div class="grid grid-cols-3 gap-6">
<!-- 사유재산권상대의 원칙 -->
<div class="bg-blue-800 bg-opacity-50 p-6 rounded-lg border border-blue-700 principle-box">
<div class="flex items-center mb-3">
<div class="text-xl text-blue-300 mr-2">
<i class="fas fa-home"></i>
</div>
<h3 class="text-xl font-semibold">사유재산권상대의 원칙</h3>
</div>
<ul class="space-y-2">
<li class="flex items-start">
<i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
<span>재산권 행사는 공공복리에 적합해야 함</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
<span>재산권은 법률에 의하여 그 내용과 한계가 정해짐</span>
</li>
</ul>
</div>
<!-- 계약공정의 원칙 -->
<div class="bg-blue-800 bg-opacity-50 p-6 rounded-lg border border-blue-700 principle-box">
<div class="flex items-center mb-3">
<div class="text-xl text-blue-300 mr-2">
<i class="fas fa-handshake"></i>
</div>
<h3 class="text-xl font-semibold">계약공정의 원칙</h3>
</div>
<ul class="space-y-2">
<li class="flex items-start">
<i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
<span>무제한의 자유는 개인 사이의 불평등을 심화시킴</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
<span>사회적·경제적 약자를 보호하기 위해 계약 체결 및 내용 결정에 제한 인정</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
<span>예: 청약철회권, 주택임대차보호법</span>
</li>
</ul>
</div>
<!-- 무과실책임의 일부 도입 -->
<div class="bg-blue-800 bg-opacity-50 p-6 rounded-lg border border-blue-700 principle-box">
<div class="flex items-center mb-3">
<div class="text-xl text-blue-300 mr-2">
<i class="fas fa-exclamation-triangle"></i>
</div>
<h3 class="text-xl font-semibold">무과실책임의 일부 도입</h3>
</div>
<ul class="space-y-2">
<li class="flex items-start">
<i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
<span>일정한 경우 손해가 발생하게 된 원인을 제공한 자에게 고의·과실이 없어도 책임을 지움</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
<span>적용 예:</span>
</li>
<li class="ml-6 space-y-1">
<div class="flex items-start">
<i class="fas fa-circle text-xs mt-1.5 mr-2 text-blue-300"></i>
<span>원자력손해</span>
</div>
<div class="flex items-start">
<i class="fas fa-circle text-xs mt-1.5 mr-2 text-blue-300"></i>
<span>제조물책임</span>
</div>
<div class="flex items-start">
<i class="fas fa-circle text-xs mt-1.5 mr-2 text-blue-300"></i>
<span>자동차운행자책임</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
<!-- Footer with slide number -->
<div class="absolute bottom-4 right-8">
<div class="text-sm text-blue-300">7 / 50</div>
</div>
</div>

</body></html>`,`<!DOCTYPE html><html lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>민법의 기본개념</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
<script src="https://d3js.org/d3.v7.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script><style>
        body {width: 1280px; min-height: 720px; margin: 0;
            padding: 0;}
        .slide-container {
            width: 1280px;
            min-height: 720px;
            position: relative;
            
        }
        .bg-pattern {
            opacity: 0.05;
            background-image: linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .concept-box {
            transition: all 0.3s ease;
        }
        .concept-box:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
    </style>
</head>
<body>
<div class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
<!-- Background pattern -->
<div class="bg-pattern absolute inset-0"></div>
<!-- Header with title -->
<div class="absolute top-0 left-0 right-0 px-12 py-8">
<div class="flex justify-between items-center">
<div>
<h1 class="text-4xl font-bold">민법의 기본개념</h1>
<div class="mt-2 text-blue-300">사법상의 권리와 의무에 대한 기본 개념 설명</div>
</div>
</div>
<div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
</div>
<!-- Main content -->
<div class="absolute top-40 bottom-20 left-0 right-0 px-16">
<div class="grid grid-cols-2 gap-10 h-full">
<!-- Left column: Rights -->
<div class="concept-box bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 flex flex-col">
<div class="flex items-center mb-6">
<div class="text-blue-300 text-3xl mr-4">
<i class="fas fa-shield-alt"></i>
</div>
<h3 class="text-2xl font-bold">사법상의 권리 (Rights)</h3>
</div>
<div class="mb-6">
<p class="text-lg mb-4">일정한 경제적인 이익을 얻을 수 있도록 국가에 의하여 보호되는 힘</p>
</div>
<div class="mb-6">
<h4 class="text-xl font-semibold mb-3 text-blue-300">권리의 종류</h4>
<div class="grid grid-cols-2 gap-4">
<!-- Content based on type -->
<div class="bg-blue-900 bg-opacity-40 p-4 rounded-lg">
<div class="font-semibold mb-2 flex items-center">
<i class="fas fa-layer-group text-blue-300 mr-2"></i>
                                    내용에 따른 분류
                                </div>
<ul class="pl-6 space-y-1">
<li class="flex items-start">
<i class="fas fa-angle-right mt-1 mr-2 text-blue-300 text-sm"></i>
<span>재산권 (물권, 채권, 지식재산권)</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1 mr-2 text-blue-300 text-sm"></i>
<span>인격권</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1 mr-2 text-blue-300 text-sm"></i>
<span>가족권</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1 mr-2 text-blue-300 text-sm"></i>
<span>사원권</span>
</li>
</ul>
</div>
<!-- Content based on effect -->
<div class="bg-blue-900 bg-opacity-40 p-4 rounded-lg">
<div class="font-semibold mb-2 flex items-center">
<i class="fas fa-bolt text-blue-300 mr-2"></i>
                                    효력 및 작용에 따른 분류
                                </div>
<ul class="pl-6 space-y-1">
<li class="flex items-start">
<i class="fas fa-angle-right mt-1 mr-2 text-blue-300 text-sm"></i>
<span>지배권</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1 mr-2 text-blue-300 text-sm"></i>
<span>청구권</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1 mr-2 text-blue-300 text-sm"></i>
<span>형성권</span>
</li>
<li class="flex items-start">
<i class="fas fa-angle-right mt-1 mr-2 text-blue-300 text-sm"></i>
<span>항변권</span>
</li>
</ul>
</div>
</div>
</div>
</div>
<!-- Right column: Obligations -->
<div class="concept-box bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 flex flex-col">
<div class="flex items-center mb-6">
<div class="text-blue-300 text-3xl mr-4">
<i class="fas fa-balance-scale"></i>
</div>
<h3 class="text-2xl font-bold">사법상의 의무 (Obligations)</h3>
</div>
<div class="mb-6">
<p class="text-lg mb-4">의무자의 의사와 관계없이 법에 의하여 이행이 요구되는 법률상의 구속</p>
</div>
<div class="mb-8">
<h4 class="text-xl font-semibold mb-3 text-blue-300">의무의 특성</h4>
<ul class="space-y-3">
<li class="flex items-start">
<div class="bg-blue-300 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
<i class="fas fa-link"></i>
</div>
<div>
<span class="font-semibold">권리와 표리관계</span>
<p class="text-sm mt-1">의무는 권리와 표리의 관계에 있으며, 권리가 있으면 그에 상응하는 의무가 존재함</p>
</div>
</li>
<li class="flex items-start">
<div class="bg-blue-300 text-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
<i class="fas fa-gavel"></i>
</div>
<div>
<span class="font-semibold">법적 구속력</span>
<p class="text-sm mt-1">법에 의하여 이행이 강제되며, 의무자의 의사와 관계없이 이행해야 함</p>
</div>
</li>
</ul>
</div>
<!-- Relationship diagram -->
<div class="mt-auto">
<h4 class="text-xl font-semibold mb-3 text-blue-300">권리와 의무의 관계</h4>
<div class="bg-blue-900 bg-opacity-40 p-4 rounded-lg flex items-center justify-center">
<div class="text-center px-8 py-2 border-2 border-blue-300 rounded-lg">
<span class="font-semibold">권리자</span>
</div>
<div class="mx-4 text-center">
<div class="text-blue-300">
<i class="fas fa-exchange-alt text-2xl"></i>
</div>
<div class="text-sm mt-1">상호관계</div>
</div>
<div class="text-center px-8 py-2 border-2 border-blue-300 rounded-lg">
<span class="font-semibold">의무자</span>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Footer with slide number -->
<div class="absolute bottom-4 right-8">
<div class="text-sm text-blue-300">8 / 50</div>
</div>
</div>

</body></html>`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>민법의 기본개념 (계속)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .concept-box {
        transition: all 0.3s ease;
        position: relative;
      }
      .concept-box:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">민법의 기본개념 (계속)</h1>
        <div class="mt-2 text-blue-300">법률관계의 정의와 특성에 대한 설명</div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-16">
        <!-- Definition section -->
        <div class="mb-5">
          <div class="flex items-center mb-4">
            <div class="text-blue-300 text-3xl mr-4">
              <i class="fas fa-balance-scale"></i>
            </div>
            <h2 class="text-2xl font-semibold">법률관계의 의의</h2>
          </div>
          <div class="pl-12 text-lg">
            <p>법에 의하여 규율되는 생활관계로서, 권리와 의무로 구성됩니다.</p>
            <p class="mt-2 text-blue-200 italic">
              모든 생활관계가 법률관계는 아니며, 모든 사적 다툼이 법률(민법)에
              의하여 해결될 수 있는 것은 아닙니다.
            </p>
          </div>
        </div>
        <!-- Two columns section -->
        <div class="grid grid-cols-2 gap-10">
          <!-- Left column - Legal relationships -->
          <div
            class="concept-box bg-blue-800 bg-opacity-50 rounded-lg p-5 border border-blue-700"
          >
            <div class="text-center mb-5">
              <div class="inline-block text-4xl text-blue-300 mb-2">
                <i class="fas fa-gavel"></i>
              </div>
              <h3 class="text-xl font-bold">법률관계</h3>
            </div>
            <ul class="space-y-4 text-lg">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                <span>권리와 의무로 구성된 관계</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                <span>법에 의하여 규율됨</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                <span>국가의 강제력(법의 적용)에 의하여 해결 가능</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                <span>예: 매매계약, 임대차계약, 고용계약</span>
              </li>
            </ul>
          </div>
          <!-- Right column - Non-legal relationships -->
          <div
            class="concept-box bg-blue-800 bg-opacity-50 rounded-lg p-5 border border-blue-700"
          >
            <div class="text-center mb-6">
              <div class="inline-block text-4xl text-blue-300 mb-2">
                <i class="fas fa-handshake"></i>
              </div>
              <h3 class="text-xl font-bold">호의관계</h3>
            </div>
            <ul class="space-y-4 text-lg">
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-400 mt-1 mr-3"></i>
                <span>법적 구속력이 없는 관계</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-400 mt-1 mr-3"></i>
                <span>도덕, 윤리, 관습 등에 의해 규율됨</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-400 mt-1 mr-3"></i>
                <span>법적 강제력으로 해결되지 않음</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-400 mt-1 mr-3"></i>
                <span>예: 친구에게 책을 빌려주기, 무상으로 차량 태워주기</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Bottom note -->
        <div
          class="mt-5 bg-blue-700 bg-opacity-30 p-5 rounded-lg border-l-4 border-blue-300"
        >
          <div class="flex items-start">
            <i class="fas fa-lightbulb text-yellow-300 text-2xl mt-1 mr-4"></i>
            <div>
              <p class="text-lg font-medium">중요 포인트</p>
              <p>
                법률관계인 경우에 한해 국가의 강제력(법의 적용)에 의하여
                해결됩니다. 모든 생활관계가 법률관계는 아니며, 법률관계와
                호의관계를 구별하는 것이 중요합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">9 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html><html lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>민법의 기본개념 (계속)</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script><style>
        body {width: 1280px; min-height: 720px; margin: 0;
            padding: 0;}
        .slide-container {
            width: 1280px;
            min-height: 720px;
            position: relative;
            
        }
        .bg-pattern {
            opacity: 0.05;
            background-image: linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .concept-box {
            transition: all 0.3s ease;
        }
        .concept-box:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .type-box {
            position: relative;
            
            transition: all 0.3s ease;
        }
        .type-box:hover {
            transform: translateY(-3px);
        }
        .type-box::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background-color: #4299e1;
        }
    </style>
</head>
<body>
<div class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
<!-- Background pattern -->
<div class="bg-pattern absolute inset-0"></div>
<!-- Header with title -->
<div class="absolute top-0 left-0 right-0 px-12 py-8">
<h1 class="text-4xl font-bold">민법의 기본개념 (계속)</h1>
<div class="mt-2 text-blue-300">법률행위의 의의와 종류에 대한 설명</div>
<div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
</div>
<!-- Main content -->
<div class="absolute top-36 left-0 right-0 px-12">
<!-- Definition section -->
<div class="flex mb-10">
<div class="w-1/6 flex flex-col items-center justify-center">
<div class="text-5xl text-blue-300">
<i class="fas fa-book-open"></i>
</div>
<div class="mt-3 text-xl font-bold">법률행위의 의의</div>
</div>
<div class="w-5/6 pl-8">
<div class="concept-box bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700">
<p class="text-lg leading-relaxed">
                            일정한 법률효과의 발생을 목적으로 하는 하나 또는 여러 개의 의사표시를 불가결의 요소로 하는 법률요건
                        </p>
<div class="mt-4 bg-blue-900 bg-opacity-50 p-4 rounded">
<h3 class="text-blue-300 font-bold mb-2">의사표시</h3>
<p>당사자가 일정한 법률효과의 발생을 목적으로 그 의사를 외부로 표시하는 행위</p>
<p class="mt-2">법률행위의 필수적 구성요소</p>
</div>
<div class="mt-4">
<p class="italic text-blue-200">법률행위가 유효하게 성립하면 그 내용대로 법률효과 즉, 권리의 발생, 변경, 소멸의 효과가 발생함</p>
</div>
</div>
</div>
</div>
<!-- Types section -->
<div>
<div class="flex items-center mb-5">
<div class="text-3xl text-blue-300">
<i class="fas fa-sitemap"></i>
</div>
<h2 class="text-2xl font-bold ml-3">법률행위의 종류 (의사표시의 수에 따른 분류)</h2>
</div>
<div class="grid grid-cols-3 gap-8">
<!-- Type 1: 단독행위 -->
<div class="type-box bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700">
<div class="flex items-center mb-4">
<div class="text-3xl text-blue-300 mr-3">
<i class="fas fa-user"></i>
</div>
<h3 class="text-xl font-bold">단독행위</h3>
</div>
<p class="text-lg">한 사람의 의사표시만으로 성립하는 법률행위</p>
<div class="mt-4 bg-blue-900 bg-opacity-50 p-3 rounded">
<p class="text-blue-200">예시: 유언, 상속포기, 취소, 해제</p>
</div>
</div>
<!-- Type 2: 계약 -->
<div class="type-box bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700">
<div class="flex items-center mb-4">
<div class="text-3xl text-blue-300 mr-3">
<i class="fas fa-handshake"></i>
</div>
<h3 class="text-xl font-bold">계약</h3>
</div>
<p class="text-lg">두 사람 이상의 서로 대립하는 의사표시의 합치로 성립하는 법률행위</p>
<div class="mt-4 bg-blue-900 bg-opacity-50 p-3 rounded">
<p class="text-blue-200">예시: 매매계약, 임대차계약, 고용계약</p>
</div>
</div>
<!-- Type 3: 합동행위 -->
<div class="type-box bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700">
<div class="flex items-center mb-4">
<div class="text-3xl text-blue-300 mr-3">
<i class="fas fa-users"></i>
</div>
<h3 class="text-xl font-bold">합동행위</h3>
</div>
<p class="text-lg">여러 사람의 의사표시가 서로 동일한 방향으로 결합하여 성립하는 법률행위</p>
<div class="mt-4 bg-blue-900 bg-opacity-50 p-3 rounded">
<p class="text-blue-200">예시: 사단법인의 설립행위, 조합설립계약</p>
</div>
</div>
</div>
</div>
</div>
<!-- Footer with slide number -->
<div class="absolute bottom-4 right-8">
<div class="text-sm text-blue-300">10 / 50</div>
</div>
</div>

</body></html>`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>신의성실의 원칙과 권리남용금지의 원칙</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .principle-card {
        transition: all 0.3s ease;
      }
      .principle-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">
          신의성실의 원칙과 권리남용금지의 원칙
        </h1>
        <div class="mt-2 text-blue-300">
          민법 제2조에 규정된 기본 원칙들에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Law Article Citation -->
      <div class="absolute top-32 left-0 right-0 px-12">
        <div
          class="bg-blue-700 bg-opacity-40 border border-blue-600 rounded-lg p-4 text-center"
        >
          <div class="text-xl font-medium">
            <i class="fas fa-balance-scale text-blue-300 mr-2"></i>
            민법 제2조(신의성실)
          </div>
          <div class="mt-2 text-lg">
            ① 권리의 행사와 의무의 이행은 신의에 좇아 성실히 하여야 한다.
            <br />
            ② 권리는 남용하지 못한다.
          </div>
        </div>
      </div>
      <!-- Main content -->
      <div
        class="absolute top-72 bottom-16 left-0 right-0 px-12 grid grid-cols-9 gap-6"
      >
        <!-- Principle of Good Faith (Left side - 3 columns) -->

        <div
          class="col-span-5 principle-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700 flex flex-col"
        >
          <div class="flex items-center mb-4">
            <div class="text-blue-300 text-3xl mr-3">
              <i class="fas fa-handshake"></i>
            </div>
            <h3 class="text-2xl font-bold">신의성실의 원칙</h3>
          </div>
          <div class="mb-4">
            <p class="text-lg">
              법률관계의 당사자들이 서로 상대방의 신뢰를 헛되지 않도록 성의있게
              행동하여야 한다는 원칙
            </p>
            <p class="text-lg text-blue-300 mt-1">
              사회공동생활에서 요구되는 도덕 내지 윤리 규범이었던 것을 민법이
              법규범으로 받아들인 것
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 text-xl">
            <div class="mb-4">
              <div class="font-medium text-blue-200 mb-1">기능</div>
              <ul class="space-y-1">
                <li class="flex items-start">
                  <i class="fas fa-circle-check text-blue-300 mt-1 mr-2"></i>
                  <span>권리와 의무내용의 구체화</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-circle-check text-blue-300 mt-1 mr-2"></i>
                  <span>법률행위해석의 표준</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-circle-check text-blue-300 mt-1 mr-2"></i>
                  <span>구체적 타당성의 실현</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-circle-check text-blue-300 mt-1 mr-2"></i>
                  <span>법의 수정 및 형성적 기능</span>
                </li>
              </ul>
            </div>
            <div>
              <div class="text-lg font-medium text-blue-200 mb-1">파생원칙</div>
              <ul class="space-y-1">
                <li class="flex items-start">
                  <i class="fas fa-caret-right text-blue-300 mt-1 mr-2"></i>
                  <span>사정변경의 원칙</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-caret-right text-blue-300 mt-1 mr-2"></i>
                  <span>모순행위금지의 원칙 (금반언의 원칙)</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-caret-right text-blue-300 mt-1 mr-2"></i>
                  <span>실효의 원칙</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Prohibition of Abuse of Rights (Right side - 2 columns) -->
        <div
          class="col-span-4 principle-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700 flex flex-col"
        >
          <div class="flex items-center mb-4">
            <div class="text-blue-300 text-3xl mr-3">
              <i class="fas fa-ban"></i>
            </div>
            <h3 class="text-2xl font-bold">권리남용금지의 원칙</h3>
          </div>
          <div class="mb-4">
            <p class="text-lg">
              권리의 행사가 외관상으로는 적법한 것으로 보이지만 권리의 사회성에
              비추어 보면 실질적으로 정당한 권리행사로 볼 수 없는 경우에는 그
              권리행사에 법적 효과를 인정할 수 없다는 원칙
            </p>
          </div>
          <div>
            <div class="font-medium text-blue-200 mb-1 text-xl">인정 예시</div>
            <ul class="space-y-1 text-xl">
              <li class="flex items-start">
                <i class="fas fa-times-circle text-blue-300 mt-1 mr-2"></i>
                <span>정당한 이익이 없는 권리행사</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-blue-300 mt-1 mr-2"></i>
                <span>부당한 이익의 획득을 위한 권리행사</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-blue-300 mt-1 mr-2"></i>
                <span>수인의 한도를 넘는 손해를 입히는 권리행사</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-blue-300 mt-1 mr-2"></i>
                <span>인륜에 반하는 권리행사</span>
              </li>
            </ul>
          </div>
          <!-- <div class="mt-auto text-sm text-blue-300 italic">
            <i class="fas fa-info-circle mr-1"></i> 다음 슬라이드에서 계속...
          </div> -->
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">11 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>신의성실의 원칙과 권리남용금지의 원칙 (계속)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .example-item {
        transition: all 0.3s ease;
      }
      .example-item:hover {
        transform: translateX(5px);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">
          신의성실의 원칙과 권리남용금지의 원칙 (계속)
        </h1>
        <div class="mt-2 text-blue-300">
          권리남용금지 원칙의 의미와 적용에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-20 left-0 right-0 px-16">
        <!-- Definition section -->
        <div class="mb-8">
          <div class="flex items-center mb-3">
            <div class="text-blue-300 text-2xl mr-3">
              <i class="fas fa-balance-scale"></i>
            </div>
            <h2 class="text-2xl font-bold">권리남용금지의 원칙</h2>
          </div>
          <div class="ml-10 text-lg">
            <p>
              권리의 행사가 외관상으로는 적법한 것으로 보이지만 권리의 사회성에
              비추어 보면 실질적으로 정당한 권리행사로 볼 수 없는 경우에는 그
              권리행사에 법적 효과를 인정할 수 없다는 원칙
            </p>
          </div>
        </div>
        <!-- Examples section -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="text-blue-300 text-2xl mr-3">
              <i class="fas fa-list-ul"></i>
            </div>
            <h2 class="text-2xl font-bold">권리남용이 인정되는 경우</h2>
          </div>
          <div class="grid grid-cols-2 gap-6 ml-10">
            <div
              class="example-item flex items-start bg-blue-800 bg-opacity-40 p-4 rounded-lg"
            >
              <div class="text-blue-300 text-lg mr-3 mt-1">
                <i class="fas fa-times-circle"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium mb-1">
                  정당한 이익이 없는 권리행사
                </h3>
                <p class="text-blue-100">
                  권리행사자에게 실질적인 이익이 없음에도 권리를 행사하는 경우
                </p>
              </div>
            </div>
            <div
              class="example-item flex items-start bg-blue-800 bg-opacity-40 p-4 rounded-lg"
            >
              <div class="text-blue-300 text-lg mr-3 mt-1">
                <i class="fas fa-hand-holding-usd"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium mb-1">
                  부당한 이익의 획득을 위한 권리행사
                </h3>
                <p class="text-blue-100">
                  불공정한 이득을 취하기 위한 목적으로 권리를 행사하는 경우
                </p>
              </div>
            </div>
            <div
              class="example-item flex items-start bg-blue-800 bg-opacity-40 p-4 rounded-lg"
            >
              <div class="text-blue-300 text-lg mr-3 mt-1">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium mb-1">
                  수인의 한도를 넘는 손해를 입히는 권리행사
                </h3>
                <p class="text-blue-100">
                  상대방에게 감내할 수 없는 과도한 손해를 초래하는 경우
                </p>
              </div>
            </div>
            <div
              class="example-item flex items-start bg-blue-800 bg-opacity-40 p-4 rounded-lg"
            >
              <div class="text-blue-300 text-lg mr-3 mt-1">
                <i class="fas fa-heart-broken"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium mb-1">인륜에 반하는 권리행사</h3>
                <p class="text-blue-100">
                  사회윤리나 도덕적 가치에 반하는 방식으로 권리를 행사하는 경우
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Additional information -->
        <div class="grid grid-cols-2 gap-10 ml-10">
          <div>
            <div class="flex items-center mb-3">
              <div class="text-blue-300 text-xl mr-3">
                <i class="fas fa-question-circle"></i>
              </div>
              <h3 class="text-xl font-bold">주관적 요건의 필요성</h3>
            </div>
            <div class="ml-9 text-lg">
              <p>
                권리행사의 목적이 오직 상대방에게 고통이나 손해를 주는 것이라는
                주관적 요건이 필요한가?
              </p>
              <p class="mt-2 text-blue-300 font-medium">
                → 다수설은 이를 부정함
              </p>
            </div>
          </div>
          <div>
            <div class="flex items-center mb-3">
              <div class="text-blue-300 text-xl mr-3">
                <i class="fas fa-gavel"></i>
              </div>
              <h3 class="text-xl font-bold">권리남용의 법률효과</h3>
            </div>
            <div class="ml-9 text-lg">
              <p>
                권리남용이 인정되는 경우 그 권리행사는 법률효과를 발생시키지
                않음
              </p>
              <p class="mt-2 text-blue-300 font-medium">
                → 민법 제2조 제2항: &#34;권리는 남용하지 못한다.&#34;
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">12 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>제2강 물권(점유권·소유권)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .feature-item {
        transition: all 0.3s ease;
      }
      .feature-item:hover {
        transform: translateX(5px);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Side decoration -->
      <div
        class="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-blue-400 to-blue-600"
      ></div>
      <!-- Header with title and lecture number -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">제2강 물권(점유권·소유권)</h1>
            <div class="mt-2 text-blue-300">
              물권법의 내용과 법원에 대한 소개
            </div>
          </div>
          <div class="text-right">
            <div class="text-blue-300">강의 일자</div>
            <div class="text-xl">1/21(수)</div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-20 left-0 right-0 px-16 flex">
        <!-- Left column - Main definition -->
        <div class="w-1/2 pr-8">
          <div
            class="bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 h-full flex flex-col"
          >
            <div class="flex items-center mb-6">
              <div class="text-blue-300 text-4xl mr-4">
                <i class="fas fa-book-law"></i>
              </div>
              <h3 class="text-2xl font-bold">물권법의 의의</h3>
            </div>
            <p class="text-lg mb-6">
              물건을 중심으로 하는 재화에 대한 지배 및 이용관계를 규율하는
              사법입니다.
            </p>
            <div class="bg-blue-900 bg-opacity-50 p-4 rounded-lg mb-6">
              <p class="text-lg">
                동산ㆍ부동산 등을 배타적으로 지배하고 이용할 수 있는 권리의
                종류와 내용을 규정하고 그 권리들의 발생ㆍ변경ㆍ소멸을 가져오는
                법률관계를 규율하는 법체계
              </p>
            </div>
            <div class="mt-auto">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4"
                >
                  <i class="fas fa-gavel"></i>
                </div>
                <div>
                  <h4 class="text-xl font-medium">물권의 본질</h4>
                  <p class="text-blue-300">
                    재화에 대한 직접적이고 배타적인 지배권
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right column - Key features -->
        <div class="w-1/2 pl-8">
          <h3 class="text-2xl font-bold mb-6 flex items-center">
            <i class="fas fa-list-ul text-blue-300 mr-3"></i>
            물권법에서 다룰 주요 내용
          </h3>
          <div class="space-y-4">
            <div
              class="feature-item flex bg-blue-800 bg-opacity-30 p-4 rounded-lg border-l-4 border-blue-400"
            >
              <div class="text-blue-300 text-2xl mr-4 pt-1">
                <i class="fas fa-hand-holding"></i>
              </div>
              <div>
                <h4 class="text-xl font-medium">점유권</h4>
                <p>물건을 사실상 지배함에 따라서 인정되는 권리</p>
              </div>
            </div>
            <div
              class="feature-item flex bg-blue-800 bg-opacity-30 p-4 rounded-lg border-l-4 border-blue-400"
            >
              <div class="text-blue-300 text-2xl mr-4 pt-1">
                <i class="fas fa-home"></i>
              </div>
              <div>
                <h4 class="text-xl font-medium">소유권</h4>
                <p>법률의 범위 내에서 물건을 사용ㆍ수익ㆍ처분할 수 있는 권리</p>
              </div>
            </div>
            <div
              class="feature-item flex bg-blue-800 bg-opacity-30 p-4 rounded-lg border-l-4 border-blue-400"
            >
              <div class="text-blue-300 text-2xl mr-4 pt-1">
                <i class="fas fa-exchange-alt"></i>
              </div>
              <div>
                <h4 class="text-xl font-medium">물권변동</h4>
                <p>물권의 발생ㆍ변경ㆍ소멸에 관한 법리</p>
              </div>
            </div>
            <div
              class="feature-item flex bg-blue-800 bg-opacity-30 p-4 rounded-lg border-l-4 border-blue-400"
            >
              <div class="text-blue-300 text-2xl mr-4 pt-1">
                <i class="fas fa-search"></i>
              </div>
              <div>
                <h4 class="text-xl font-medium">공시의 원칙</h4>
                <p>
                  물권의 존재 및 변동은 외부에서 인식할 수 있는 방법이
                  수반되어야 함
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">13 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>물권의 객체</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .concept-card {
        transition: all 0.3s ease;
        height: 100%;
      }
      .concept-card:hover {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .icon-box {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">물권의 객체</h1>
            <div class="mt-2 text-blue-300">
              물건과 일물일권주의에 대한 설명
            </div>
          </div>
          <div class="text-right">
            <div class="text-blue-300">제2강 물권(점유권·소유권)</div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-20 left-0 right-0 px-16">
        <div class="grid grid-cols-2 gap-10 h-full">
          <!-- Left section: 물건 (Things) -->
          <div
            class="concept-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700"
          >
            <div class="flex items-center mb-6">
              <div class="icon-box bg-blue-700 mr-4">
                <i class="fas fa-cube text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold">물건</h3>
            </div>
            <div class="space-y-10 flex-grow">
              <div>
                <h4 class="text-xl font-semibold mb-5 text-blue-300">정의</h4>
                <p class="text-lg">
                  민법은 총칙편에서 물건을 유체물 및 전기 기타 관리할 수 있는
                  자연력이라고 규정하고 있음
                </p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-5 text-blue-300">
                  물건의 분류
                </h4>
                <div class="grid grid-cols-2 gap-6 mt-3 text-lg">
                  <div
                    class="bg-blue-900 bg-opacity-40 px-4 py-6 rounded-lg flex items-center"
                  >
                    <i class="fas fa-home text-blue-300 mr-3"></i>
                    <span>부동산 (토지, 건물)</span>
                  </div>
                  <div
                    class="bg-blue-900 bg-opacity-40 p-4 rounded-lg flex items-center"
                  >
                    <i class="fas fa-car text-blue-300 mr-3"></i>
                    <span>동산</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Right section: 일물일권주의 (One Thing, One Right) -->
          <div
            class="concept-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700"
          >
            <div class="flex items-center mb-6">
              <div class="icon-box bg-blue-700 mr-4">
                <i class="fas fa-balance-scale-right text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold">일물일권주의</h3>
            </div>
            <div class="space-y-6 flex-grow">
              <div>
                <h4 class="text-xl font-semibold mb-2 text-blue-300">원칙</h4>
                <p class="text-lg">
                  하나의 물건에 대하여 동일한 내용을 가지는 물권이 하나만 성립할
                  수 있고, 물권의 목적이 되는 물건은 하나의 독립한 물건이어야
                  한다는 원칙
                </p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-2 text-blue-300">예외</h4>
                <ul class="space-y-3 text-lg">
                  <li class="flex items-start">
                    <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                    <span>소유권과 저당권 같이 내용이 다른 물권의 경우</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                    <span
                      >사회경제적으로 물건의 일부 또는 여러 물건에 하나의 물권이
                      성립할 필요가 있는 경우</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">14 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>물권법정주의와 물권의 종류</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .property-card {
        transition: all 0.3s ease;
      }
      .property-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">물권법정주의와 물권의 종류</h1>
        <div class="mt-2 text-blue-300">
          물권법정주의의 원칙과 민법상 규정된 물권의 종류
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-20 left-0 right-0 px-16">
        <div class="grid grid-cols-3 gap-6 h-full">
          <!-- Left column - 물권법정주의 -->
          <div class="col-span-1">
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-8 h-full border border-blue-700"
            >
              <div class="flex items-center mb-6">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-balance-scale-left"></i>
                </div>
                <h2 class="text-2xl font-bold">물권법정주의</h2>
              </div>
              <ul class="space-y-8 text-lg">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                  <div>법률의 규정에 따라서 물권의 종류와 내용이 한정됨</div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                  <div>
                    당사자들의 의사에 따라서 물권의 종류나 내용을 자유롭게 정할
                    수 없음
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                  <div>계약자유의 원칙이 인정되는 채권과 구별됨</div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right column - 물권의 종류 -->
          <div class="col-span-2">
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-8 h-full border border-blue-700"
            >
              <div class="flex items-center mb-6">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-sitemap"></i>
                </div>
                <h2 class="text-2xl font-bold">민법상 물권의 종류</h2>
              </div>
              <!-- Property rights hierarchy -->
              <div class="flex justify-center mt-4">
                <div
                  class="flex flex-col items-center space-y-6 w-full"
                  id="property-types-container"
                >
                  <!-- Main categories -->
                  <div class="grid grid-cols-13 gap-6 w-full">
                    <div class="col-span-4">
                      <div class="grid grid-rows-2 gap-6 h-full">
                        <!-- Ownership -->
                        <div
                          class="property-card bg-blue-700 rounded-lg p-3 text-center border border-blue-500"
                        >
                          <div class="text-blue-300 text-2xl mb-2 mt-11">
                            <i class="fas fa-home"></i>
                          </div>
                          <h3 class="text-xl font-semibold">소유권</h3>
                          <div class="text-sm mt-1 text-blue-200">완전물권</div>
                        </div>

                        <div
                          class="property-card bg-blue-700 rounded-lg p-3 text-center border border-blue-500"
                        >
                          <div class="text-blue-300 text-2xl mb-2 mt-9">
                            <i class="fas fa-hand-holding"></i>
                          </div>
                          <h3 class="text-xl font-semibold">점유권</h3>
                          <div class="text-sm mt-1 text-blue-200">
                            사실상 지배권
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Limited real rights -->
                    <div
                      class="property-card col-span-9 bg-blue-700 rounded-lg px-4 py-8 text-center border border-blue-500"
                    >
                      <div class="text-blue-300 text-2xl mb-2">
                        <i class="fas fa-layer-group"></i>
                      </div>
                      <h3 class="text-xl font-semibold">제한물권</h3>
                      <div class="text-sm mt-1 text-blue-200">
                        소유권에서 분리된 권리
                      </div>

                      <div class="grid grid-cols-2 mt-7 gap-5 w-full">
                        <!-- Usufructuary -->
                        <div
                          class="property-card bg-blue-600 rounded-lg p-3 text-center border border-blue-500"
                        >
                          <div class="text-blue-300 text-xl mb-1">
                            <i class="fas fa-tree"></i>
                          </div>
                          <h3 class="text-lg font-semibold">용익물권</h3>
                          <div class="text-xs mt-2 text-blue-200">
                            사용가치 지배
                          </div>

                          <!-- Surface rights -->
                          <div
                            class="property-card mt-3 bg-blue-500 rounded-lg p-2 text-center border border-blue-400"
                          >
                            <h4 class="text-sm font-semibold">지상권</h4>
                          </div>
                          <!-- Servitude -->
                          <div
                            class="property-card mt-3 bg-blue-500 rounded-lg p-2 text-center border border-blue-400"
                          >
                            <h4 class="text-sm font-semibold">지역권</h4>
                          </div>
                          <!-- Lease on deposit -->
                          <div
                            class="property-card mt-3 bg-blue-500 rounded-lg p-2 text-center border border-blue-400"
                          >
                            <h4 class="text-sm font-semibold">전세권</h4>
                          </div>
                        </div>
                        <!-- Security -->
                        <div
                          class="property-card bg-blue-600 rounded-lg p-3 text-center border border-blue-500"
                        >
                          <div class="text-blue-300 text-xl mb-1">
                            <i class="fas fa-shield-alt"></i>
                          </div>
                          <h3 class="text-lg font-semibold">담보물권</h3>
                          <div class="text-xs mt-2 text-blue-200">
                            교환가치 지배
                          </div>
                          <!-- Lien -->
                          <div
                            class="property-card mt-3 bg-blue-500 rounded-lg p-2 text-center border border-blue-400"
                          >
                            <h4 class="text-sm font-semibold">유치권</h4>
                          </div>
                          <!-- Pledge-->
                          <div
                            class="property-card mt-3 bg-blue-500 rounded-lg p-2 text-center border border-blue-400"
                          >
                            <h4 class="text-sm font-semibold">질권</h4>
                          </div>
                          <!--  Mortgage -->
                          <div
                            class="property-card mt-3 bg-blue-500 rounded-lg p-2 text-center border border-blue-400"
                          >
                            <h4 class="text-sm font-semibold">저당권</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">15 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>물권의 종류 (계속)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .comparison-card {
        transition: all 0.3s ease;
      }
      .comparison-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">물권의 종류 (계속)</h1>
        <div class="mt-2 text-blue-300">
          점유권과 본권, 소유권과 제한물권의 구분에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-5"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-20 left-0 right-0 px-16">
        <div class="flex flex-col h-full space-y-4">
          <!-- First comparison: 점유권과 본권 -->
          <div
            class="comparison-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700 flex-1"
          >
            <div class="flex items-center mb-3">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3 class="text-2xl font-bold">점유권과 본권</h3>
            </div>
            <div class="grid grid-cols-2 gap-8">
              <!-- 점유권 -->
              <div class="flex">
                <div class="text-blue-300 text-4xl mr-6 flex-shrink-0">
                  <i class="fas fa-hand-holding"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-2">점유권</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span
                        >물건을 점유하는 자(사실상 지배하는 자)에게 인정되는
                        물권</span
                      >
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span>법률상의 권원이 있는지의 여부와 관계없음</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span>사실상 지배 여부에 초점</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 본권 -->
              <div class="flex">
                <div class="text-blue-300 text-4xl mr-6 flex-shrink-0">
                  <i class="fas fa-scroll"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-2">본권</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span
                        >사실상 지배 여부와 관계없이 물건을 적법하게 지배할 수
                        있는 물권</span
                      >
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span
                        >물건을 지배하는데 정당성 및 합법성을 부여하는
                        근거</span
                      >
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span>법적 권원에 초점</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Second comparison: 소유권과 제한물권 -->
          <div
            class="comparison-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700 flex-1"
          >
            <div class="flex items-center mb-3">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-layer-group"></i>
              </div>
              <h3 class="text-2xl font-bold">소유권과 제한물권</h3>
            </div>
            <div class="grid grid-cols-2 gap-8">
              <!-- 소유권 -->
              <div class="flex">
                <div class="text-blue-300 text-4xl mr-6 flex-shrink-0">
                  <i class="fas fa-home"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-2">소유권</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span
                        >객체인 물건의 사용가치와 교환가치 모두를 전면적으로
                        지배할 수 있는 권리</span
                      >
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span>완전물권</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span>물건에 대한 전면적 지배권 포함</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 제한물권 -->
              <div class="flex">
                <div class="text-blue-300 text-4xl mr-6 flex-shrink-0">
                  <i class="fas fa-puzzle-piece"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-2">제한물권</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span
                        >소유권에 포함된 일부의 권능만을 지배할 수 있는
                        물권</span
                      >
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span
                        >사용가치만 지배: 용익물권 (지상권, 지역권,
                        전세권)</span
                      >
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                      <span
                        >교환가치만 지배: 담보물권 (유치권, 질권, 저당권)</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">16 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>물권의 종류 (계속)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .right-card {
        animation: slideInRight 0.8s ease-out forwards;
      }
      .left-card {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">물권의 종류 (계속)</h1>
            <div class="mt-2 text-blue-300">
              용익물권과 담보물권에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-20 left-0 right-0 px-16 flex">
        <!-- 용익물권 Section -->
        <div class="w-1/2 pr-6 left-card">
          <div
            class="bg-blue-800 bg-opacity-50 rounded-lg p-8 h-full border border-blue-700 flex flex-col"
          >
            <div class="flex items-center mb-6">
              <div class="text-5xl text-blue-300 mr-4">
                <i class="fas fa-home"></i>
              </div>
              <h2 class="text-3xl font-bold">용익물권</h2>
            </div>
            <div class="mb-4">
              <p class="text-lg mb-4">
                제한물권 중 물건의 사용가치만을 지배할 수 있는 권리
              </p>
            </div>
            <div class="space-y-6 flex-grow">
              <div class="flex items-start">
                <div class="text-2xl text-blue-300 mr-4">
                  <i class="fas fa-mountain"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">지상권</h3>
                  <p>
                    토지를 대상으로 하며, 건물이나 공작물, 수목을 소유하기 위한
                    권리
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-2xl text-blue-300 mr-4">
                  <i class="fas fa-road"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">지역권</h3>
                  <p>
                    토지를 대상으로 하며, 자기 토지의 편익을 위해 타인의 토지를
                    이용할 수 있는 권리
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-2xl text-blue-300 mr-4">
                  <i class="fas fa-building"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">전세권</h3>
                  <p>
                    토지와 건물을 대상으로 하며, 전세금을 지급하고 타인의
                    부동산을 사용·수익할 수 있는 권리
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 담보물권 Section -->
        <div class="w-1/2 pl-6 right-card">
          <div
            class="bg-blue-800 bg-opacity-50 rounded-lg p-8 h-full border border-blue-700 flex flex-col"
          >
            <div class="flex items-center mb-6">
              <div class="text-5xl text-blue-300 mr-4">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h2 class="text-3xl font-bold">담보물권</h2>
            </div>
            <div class="mb-4">
              <p class="text-lg mb-4">
                물건의 교환가치만을 지배할 수 있는 권리
              </p>
            </div>
            <div class="space-y-6 flex-grow">
              <div class="flex items-start">
                <div class="text-2xl text-blue-300 mr-4">
                  <i class="fas fa-hand-holding"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">유치권</h3>
                  <p>
                    동산과 부동산을 대상으로 하며, 타인의 물건을 점유한 자가 그
                    물건에 관하여 생긴 채권을 변제받을 때까지 물건을 유치할 수
                    있는 권리
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-2xl text-blue-300 mr-4">
                  <i class="fas fa-box"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">질권</h3>
                  <p>
                    동산을 대상으로 하며, 채권의 담보로 물건을 인도받아
                    채무불이행시 우선변제를 받을 수 있는 권리
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-2xl text-blue-300 mr-4">
                  <i class="fas fa-landmark"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">저당권</h3>
                  <p>
                    부동산을 대상으로 하며, 점유의 이전 없이 채무의 담보로
                    제공된 부동산에 대하여 우선변제를 받을 수 있는 권리
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">17 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>물권의 효력</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .content-box {
        background-color: rgba(26, 54, 93, 0.4);
        border: 1px solid rgba(66, 153, 225, 0.3);
        border-radius: 0.5rem;
        transition: all 0.3s ease;
      }
      .content-box:hover {
        box-shadow: 0 0 15px rgba(66, 153, 225, 0.3);
        transform: translateY(-2px);
      }
      .arrow-line {
        position: relative;
        height: 2px;
        background-color: #4299e1;
      }
      .arrow-line:after {
        content: "";
        position: absolute;
        right: 0;
        top: -4px;
        width: 0;
        height: 0;
        border-left: 10px solid #4299e1;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">물권의 효력</h1>
            <div class="mt-2 text-blue-300">
              물권의 우선적 효력과 물권적 청구권에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-20 left-0 right-0 px-16">
        <div class="grid grid-cols-2 gap-12 h-full">
          <!-- Left section: 우선적 효력 -->
          <div class="content-box p-8">
            <div class="flex items-center mb-6">
              <i class="fas fa-trophy text-3xl text-yellow-400 mr-4"></i>
              <h2 class="text-2xl font-bold">우선적 효력</h2>
            </div>
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-blue-300 mb-3">
                1. 물권과 물권 사이
              </h3>
              <div class="flex items-center mb-4">
                <div class="w-16 text-center text-blue-300">
                  <i class="fas fa-hourglass-start text-2xl"></i>
                </div>
                <div class="ml-4">
                  <div class="arrow-line w-48 mb-2"></div>
                  <p>시간적으로 먼저 성립한 물권이 우선</p>
                </div>
              </div>
            </div>
            <div class="mb-2">
              <h3 class="text-xl font-semibold text-blue-300 mb-3">
                2. 물권과 채권 사이
              </h3>
              <div class="flex mb-4">
                <div class="w-16 text-center text-blue-300">
                  <i class="fas fa-balance-scale text-2xl"></i>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-semibold text-blue-200 mb-2">
                    원칙:
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"
                      ></i>
                      <span>권리 발생 시기와 관계없이 언제나 물권이 우선</span>
                    </li>
                  </ul>
                  <h4 class="text-lg font-semibold text-blue-200 mt-4 mb-2">
                    예외:
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"
                      ></i>
                      <span>채권이 대항요건을 갖춘 경우 - 물권과 동일</span>
                    </li>
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"
                      ></i>
                      <span>법률이 특별히 보호하는 채권 - 물권에 우선</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Right section: 물권적 청구권 -->
          <div class="content-box p-8">
            <div class="flex items-center mb-6">
              <i class="fas fa-gavel text-3xl text-blue-300 mr-4"></i>
              <h2 class="text-2xl font-bold">물권적 청구권</h2>
            </div>
            <div class="mb-6">
              <p class="mb-4">
                물권자의 물권 행사가 방해되거나 방해가 예상되는 경우 그 방해의
                제거 또는 예방에 필요한 행위를 청구할 수 있는 권리
              </p>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-8">
              <div class="content-box p-4 flex flex-col items-center">
                <div class="text-blue-300 text-3xl mb-3">
                  <i class="fas fa-undo"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2 text-center">
                  물권적 반환청구권
                </h3>
                <p class="text-sm text-center">
                  물권의 침해로 점유를 상실한 경우
                </p>
              </div>
              <div class="content-box p-4 flex flex-col items-center">
                <div class="text-blue-300 text-3xl mb-3">
                  <i class="fas fa-ban"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2 text-center">
                  물권적 방해제거청구권
                </h3>
                <p class="text-sm text-center">물권 행사에 방해가 있는 경우</p>
              </div>
              <div class="content-box p-4 flex flex-col items-center">
                <div class="text-blue-300 text-3xl mb-3">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="text-lg font-semibold mb-2 text-center">
                  물권적 방해예방청구권
                </h3>
                <p class="text-sm text-center">
                  물권 행사에 방해가 예상되는 경우
                </p>
              </div>
            </div>
            <div class="mt-8 pt-4 border-t border-blue-700">
              <p class="text-blue-200">
                <i class="fas fa-info-circle mr-2"></i>점유권과 소유권에 관하여
                규정되어 있으며, 다른 물권에는 적절히 준용됨
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">18 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>우선변제의 순위</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .priority-row {
        transition: all 0.3s ease;
      }
      .priority-row:hover {
        transform: translateX(5px);
      }
      .priority-badge {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">우선변제의 순위</h1>
            <div class="mt-2 text-blue-300">
              담보물권과 관련된 우선변제 순위에 대한 표
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-20 left-0 right-0 px-16">
        <!-- Brief explanation -->
        <div class="mb-5">
          <p class="text-xl">
            담보물권에 의한 우선변제는 아래의 순위에 따라 이루어집니다. 이는
            채권자 간의 우선순위를 결정하는 중요한 기준입니다.
          </p>
        </div>
        <!-- Priority order table -->
        <div
          class="bg-blue-800 bg-opacity-40 rounded-lg overflow-hidden border border-blue-700"
          data-sk-source-container="chart"
          data-sk-source-id="IY9FDE"
        >
          <div class="grid grid-cols-12 gap-0">
            <!-- Table header -->
            <div
              class="col-span-2 bg-blue-700 p-4 font-bold text-center text-lg"
            >
              순위
            </div>
            <div
              class="col-span-10 bg-blue-700 p-4 font-bold text-center text-lg"
            >
              내용
            </div>
            <!-- 1st Priority -->
            <div
              class="col-span-2 border-b border-blue-700 p-4 flex justify-center items-center"
            >
              <div class="priority-badge bg-red-500">1</div>
            </div>
            <div class="col-span-10 border-b border-blue-700 p-4 priority-row">
              <div class="flex items-center space-x-3">
                <i class="fas fa-home text-red-400 text-2xl"></i>
                <div>
                  <p class="text-xl">
                    소액주택임차인의 보증금 중 일정액, 소액상가건물임차인의
                    보증금 중 일정액, 최종 3개월분의 임금 및 재해 보상금
                  </p>
                </div>
              </div>
            </div>
            <!-- 2nd Priority -->
            <div
              class="col-span-2 border-b border-blue-700 p-4 flex justify-center items-center"
            >
              <div class="priority-badge bg-orange-500">2</div>
            </div>
            <div class="col-span-10 border-b border-blue-700 p-4 priority-row">
              <div class="flex items-center space-x-3">
                <i
                  class="fas fa-file-invoice-dollar text-orange-400 text-2xl"
                ></i>
                <div>
                  <p class="text-xl">당해세 - 상속세, 증여세 및 종합부동산세</p>
                </div>
              </div>
            </div>
            <!-- 3rd Priority -->
            <div
              class="col-span-2 border-b border-blue-700 p-4 flex justify-center items-center"
            >
              <div class="priority-badge bg-yellow-500">3</div>
            </div>
            <div class="col-span-10 border-b border-blue-700 p-4 priority-row">
              <div class="flex items-center space-x-3">
                <i class="fas fa-lock text-yellow-400 text-2xl"></i>
                <div>
                  <p class="text-xl">
                    담보물권자(저당권, 질권, 전세권 등)의 피담보채권, 대항력과
                    확정일자를 갖춘 주택임차인 및 상가건물임차인의 보증금
                    반환청구권, 국세 및 지방세
                  </p>
                </div>
              </div>
            </div>
            <!-- 4th Priority -->
            <div
              class="col-span-2 border-b border-blue-700 p-4 flex justify-center items-center"
            >
              <div class="priority-badge bg-green-500">4</div>
            </div>
            <div class="col-span-10 border-b border-blue-700 p-4 priority-row">
              <div class="flex items-center space-x-3">
                <i class="fas fa-user-tie text-green-400 text-2xl"></i>
                <div>
                  <p class="text-xl">
                    최종 3월분 이외의 임금 기타 근로관계로 인한 채권(담보권자에
                    우선하지 않는 국세 및 지방세에는 우선함)
                  </p>
                </div>
              </div>
            </div>
            <!-- 5th Priority -->
            <div class="col-span-2 p-4 flex justify-center items-center">
              <div class="priority-badge bg-blue-500">5</div>
            </div>
            <div class="col-span-10 p-4 priority-row">
              <div class="flex items-center space-x-3">
                <i class="fas fa-file-contract text-blue-400 text-2xl"></i>
                <div>
                  <p class="text-xl">일반채권</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Additional note -->
        <div class="mt-6 text-blue-300 italic">
          <p>
            ※ 위 순위는 법률에 규정된 우선변제권의 순위로, 실제 사례에서는 개별
            법률의 규정에 따라 달라질 수 있습니다.
          </p>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">19 / 50</div>
      </div>
    </div>
    <script>
      // D3.js could be used here for more complex data visualization if needed
      // In this case, we're using a simple table layout instead
    <\/script>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>물권변동</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .arrow-animation {
        animation: arrowMove 2s infinite ease-in-out;
      }
      @keyframes arrowMove {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(10px);
        }
      }
      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">물권변동</h1>
            <div class="mt-2 text-blue-300">
              물권변동의 의의와 원인에 따른 분류
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-16">
        <!-- Definition section -->
        <div class="mb-12">
          <div class="flex items-center mb-4">
            <div class="text-3xl text-blue-300 mr-4">
              <i class="fas fa-info-circle"></i>
            </div>
            <h2 class="text-2xl font-bold">물권변동의 의의</h2>
          </div>
          <div class="pl-12 text-lg">
            <p>
              물권의 발생ㆍ변경ㆍ소멸을 의미합니다. 물권자의 측면에서 보면
              물권의 득실변경, 즉 취득ㆍ상실ㆍ변경이 됩니다.
            </p>
          </div>
        </div>
        <!-- Classification section -->
        <div class="grid grid-cols-2 gap-10">
          <!-- Legal acts -->
          <div
            class="bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 card-hover"
          >
            <div class="flex items-center mb-6">
              <div class="text-3xl text-blue-300 mr-4">
                <i class="fas fa-file-contract"></i>
              </div>
              <h3 class="text-2xl font-bold">법률행위에 의한 물권변동</h3>
            </div>
            <div class="space-y-4 text-lg">
              <p>법률행위에 의해 당사자의 의도대로 물권이 변동되는 경우</p>
              <ul class="pl-6 space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span>물권변동을 일으키는 법률행위는 물권행위입니다.</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span
                    >부동산의 경우에는
                    <span class="font-semibold text-blue-200">등기</span>,
                    동산의 경우에는
                    <span class="font-semibold text-blue-200">인도</span>가
                    필요합니다.</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- Legal provisions -->
          <div
            class="bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 card-hover"
          >
            <div class="flex items-center mb-6">
              <div class="text-3xl text-blue-300 mr-4">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3 class="text-2xl font-bold">법률규정에 의한 물권변동</h3>
            </div>
            <div class="space-y-4 text-lg">
              <p>법률의 규정에 따라 물권이 변동되는 경우</p>
              <ul class="pl-6 space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span
                    >소멸시효ㆍ취득시효ㆍ혼동ㆍ무주물선점ㆍ유실물습득ㆍ매장물발견ㆍ첨부ㆍ상속
                    등</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span>등기나 인도 없이도 물권변동이 일어납니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Bottom diagram -->
        <div class="flex justify-center mt-10">
          <div class="flex items-center">
            <div
              class="text-center px-6 py-3 rounded-lg bg-blue-700 bg-opacity-70"
            >
              <div class="text-2xl mb-1">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div>발생</div>
            </div>
            <div
              class="text-center px-6 ml-6 py-3 rounded-lg bg-blue-700 bg-opacity-70"
            >
              <div class="text-2xl mb-1">
                <i class="fas fa-exchange-alt"></i>
              </div>
              <div>변경</div>
            </div>
            <div
              class="text-center px-6 ml-6 py-3 rounded-lg bg-blue-700 bg-opacity-70"
            >
              <div class="text-2xl mb-1"><i class="fas fa-ban"></i></div>
              <div>소멸</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">20 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>공시의 원칙 및 공신의 원칙</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .principle-card {
        transition: all 0.3s ease;
      }
      .principle-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">공시의 원칙 및 공신의 원칙</h1>
        <div class="mt-2 text-blue-300">
          물권변동에서의 공시와 공신의 원칙에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-12">
        <!-- Introduction -->
        <div class="mb-5">
          <div class="flex items-start">
            <div class="text-blue-300 text-3xl mt-1 mr-4">
              <i class="fas fa-info-circle"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-2">물권변동과 공시방법</h3>
              <p class="text-lg">
                물권의 존재 및 변동은 언제나 외부에서 인식할 수 있는 방법이
                수반되어야 한다는 원칙
              </p>
              <p class="text-lg mt-1">
                민법은 성립요건주의(형식주의)를 규정함 - 공시방법을 갖추지
                않으면 물권변동이 일어나지 않음
              </p>
            </div>
          </div>
        </div>
        <!-- Two principles comparison -->
        <div class="grid grid-cols-2 gap-8">
          <!-- Public Notice Principle -->
          <div
            class="principle-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-4 border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div class="text-blue-300 text-3xl mr-3">
                <i class="fas fa-bullhorn"></i>
              </div>
              <h3 class="text-2xl font-bold">공시의 원칙</h3>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold mb-2 text-blue-200">개념</h4>
              <p class="ml-5">물권의 귀속 및 물권의 내용을 외부에 알리는 것</p>
              <p class="ml-5 mt-1">
                물권의 존재 및 변동은 외부에서 인식할 수 있는 방법이 수반되어야
                함
              </p>
            </div>
            <div
              class="principle-card bg-blue-800 bg-opacity-50 rounded-lg p-2 border border-blue-700"
            >
              <div class="space-y-4">
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-blue-200">동산</h4>
                  <ul class="space-y-2 ml-7">
                    <li class="flex items-start">
                      <i
                        class="fas fa-check-circle mt-1 mr-2 text-green-400"
                      ></i>
                      <span>동산의 공시방법 - 점유 (사실상의 지배)</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-info-circle mt-1 mr-2 text-blue-300"></i>
                      <span
                        >점유 이전의 방법 - 현실의 인도, 간의인도, 점유개정,
                        <br />
                        목적물반환청구권의 양도</span
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-blue-200">
                    부동산
                  </h4>
                  <ul class="space-y-2 ml-7">
                    <li class="flex items-start">
                      <i class="fas fa-times-circle mt-1 mr-2 text-red-400"></i>
                      <span>부동산의 공시방법 - 등기</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-info-circle mt-1 mr-2 text-blue-300"></i>
                      <span
                        >부동산 물권의 변동은 등기를 요건으로 함(예외도
                        있음)</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Public Faith Principle -->
          <div
            class="principle-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-4 border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div class="text-blue-300 text-3xl mr-3">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3 class="text-2xl font-bold">공신의 원칙</h3>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold mb-2 text-blue-200">개념</h4>
              <p class="ml-5">
                물권에 관한 공시방법을 믿고 거래한 자의 신뢰는 공시가 진실한
                권리관계와 일치하지 않는 경우에도 보호되어야 한다는 원칙
              </p>
            </div>
            <div
              class="principle-card bg-blue-800 bg-opacity-50 rounded-lg p-2 border border-blue-700"
            >
              <div class="space-y-4">
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-blue-200">동산</h4>
                  <ul class="space-y-2 ml-7">
                    <li class="flex items-start">
                      <i
                        class="fas fa-check-circle mt-1 mr-2 text-green-400"
                      ></i>
                      <span>점유의 공신력 인정 (선의취득 제도)</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-info-circle mt-1 mr-2 text-blue-300"></i>
                      <span
                        >동적 안전을 우선적으로 보호 - 동산의 원활한 유통
                        도모</span
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-blue-200">
                    부동산
                  </h4>
                  <ul class="space-y-2 ml-7">
                    <li class="flex items-start">
                      <i class="fas fa-times-circle mt-1 mr-2 text-red-400"></i>
                      <span>등기의 공신력 불인정</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-info-circle mt-1 mr-2 text-blue-300"></i>
                      <span>진정한 권리자 보호 (정적 안전 중시)</span>
                    </li>
                    <li class="flex items-start">
                      <i
                        class="fas fa-exclamation-circle mt-1 mr-2 text-yellow-400"
                      ></i>
                      <span>특별히 제3자 보호규정이 있는 경우에만 보호</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">21 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>점유권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .content-box {
        background-color: rgba(26, 54, 93, 0.4);
        border: 1px solid rgba(66, 153, 225, 0.3);
        border-radius: 0.5rem;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h1 class="text-4xl font-bold">점유권</h1>
            <div class="w-3"></div>
            <div class="mt-2 text-blue-300">
              점유권의 의의, 유형 및 내용에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-2"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-24 bottom-16 left-0 right-0 px-12">
        <div class="grid grid-cols-2 gap-6 h-full">
          <!-- Left column -->
          <div class="flex flex-col">
            <!-- Definition -->
            <div class="content-box px-6 py-5 mb-3">
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-book"></i>
                </div>
                <h3 class="text-2xl font-bold">점유권의 의의</h3>
              </div>
              <p class="text-lg">
                물건을 사실상 지배함(점유)에 따라서 인정되는 권리
              </p>
              <p class="text-lg mt-2">
                법률상의 권원(권리의 근거)이 있는지 여부와 관계없이 인정됨
              </p>
            </div>
            <!-- Types of possession -->
            <div class="content-box px-6 py-5 mb-3">
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-sitemap"></i>
                </div>
                <h3 class="text-2xl font-bold">점유의 유형</h3>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div class="flex flex-col items-center">
                  <div class="text-blue-300 text-xl mb-2">
                    <i class="fas fa-user-check"></i>
                  </div>
                  <p class="text-center">자주점유<br />타주점유</p>
                </div>
                <div class="flex flex-col items-center">
                  <div class="text-blue-300 text-xl mb-2">
                    <i class="fas fa-heart"></i>
                  </div>
                  <p class="text-center">선의점유<br />악의점유</p>
                </div>
                <div class="flex flex-col items-center">
                  <div class="text-blue-300 text-xl mb-2">
                    <i class="fas fa-hand-holding"></i>
                  </div>
                  <p class="text-center">직접점유<br />간접점유</p>
                </div>
              </div>
            </div>
            <!-- Content of possessory rights -->
            <div class="content-box px-6 py-5">
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-list-ul"></i>
                </div>
                <h3 class="text-2xl font-bold mb-0.5">점유권의 내용</h3>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span>점유의 추정적 효력 (선의, 평온, 공연하게 점유)</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span>권리의 적법추정</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span>선의점유자의 과실수취권</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span>점유자의 비용상환청구권</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                  <span>자력구제권 (자력방위권, 자력탈환권)</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right column -->
          <div class="flex flex-col space-y-1">
            <!-- Possessory protection claims -->
            <div class="content-box px-6 py-5">
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="text-2xl font-bold">점유보호청구권</h3>
              </div>
              <p class="text-lg mb-3">
                점유자가 제3자에 의해 점유를 침해당한 경우 본권이 있는지의
                여부와 관계없이 그 침해를 배제하고 점유 그 자체의 보호를 청구할
                수 있는 권리
              </p>
              <div class="grid grid-cols-3 gap-2 mt-3">
                <div
                  class="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center"
                >
                  <div class="text-blue-300 text-xl mb-2">
                    <i class="fas fa-undo"></i>
                  </div>
                  <p>점유물<br />반환청구권</p>
                </div>
                <div
                  class="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center"
                >
                  <div class="text-blue-300 text-xl mb-2">
                    <i class="fas fa-ban"></i>
                  </div>
                  <p>점유물<br />방해제거청구권</p>
                </div>
                <div
                  class="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center"
                >
                  <div class="text-blue-300 text-xl mb-2">
                    <i class="fas fa-exclamation-triangle"></i>
                  </div>
                  <p>점유물<br />방해예방청구권</p>
                </div>
              </div>
            </div>
            <!-- Possessory lawsuits vs. ownership lawsuits -->
            <div class="content-box px-6 py-5">
              <div class="flex items-center mb-3">
                <div class="text-blue-300 text-2xl mr-3">
                  <i class="fas fa-gavel"></i>
                </div>
                <h3 class="text-2xl font-bold">점유의 소와 본권의 소</h3>
              </div>
              <div class="flex items-center justify-center mt-3">
                <div
                  class="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center w-2/5"
                >
                  <div class="text-blue-300 text-2xl mb-3">
                    <i class="fas fa-hand-holding"></i>
                  </div>
                  <h4 class="text-xl font-semibold mb-2">점유의 소</h4>
                  <p>점유권에 기인한 소</p>
                </div>
                <div class="px-6 text-center">
                  <div class="text-blue-300 text-3xl">
                    <i class="fas fa-exchange-alt"></i>
                  </div>
                  <p class="mt-2">
                    별개 <br />
                    판단
                  </p>
                </div>
                <div
                  class="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center w-2/5"
                >
                  <div class="text-blue-300 text-2xl mb-3">
                    <i class="fas fa-home"></i>
                  </div>
                  <h4 class="text-xl font-semibold mb-2">본권의 소</h4>
                  <p>소유권에 기인한 소</p>
                </div>
              </div>
              <p class="text-center mt-4">
                점유권에 기인한 소는 본권에 관한 이유로 재판하지 못함
              </p>
              <p class="text-center mt-2">
                하나의 소에서 패소하여도 다시 다른 소를 제기할 수 있음
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">22 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>소유권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .right-feature {
        transition: all 0.3s ease;
      }
      .right-feature:hover {
        transform: translateX(5px);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">소유권</h1>
        <div class="mt-2 text-blue-300">소유권의 의의와 권능에 대한 설명</div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-16">
        <div class="flex h-full">
          <!-- Left column: Definition and basic info -->
          <div class="w-1/2 pr-8">
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 mb-6"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-book"></i>
                </div>
                <h3 class="text-2xl font-bold">소유권의 의의</h3>
              </div>
              <p class="text-xl">
                법률의 범위 내에서 물건을 사용 · 수익 · 처분할 수 있는 권리
              </p>
              <p class="mt-3 text-xl">
                물건에 대하여 사실상 · 법률상 전면적 지배권을 가진다는 뜻
              </p>
            </div>
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="text-2xl font-bold">물권적 청구권</h3>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-undo-alt mt-1 mr-3 text-blue-300"></i>
                  <span class="text-xl">소유물반환청구권</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-ban mt-1 mr-3 text-blue-300"></i>
                  <span class="text-xl">소유물방해제거청구권</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-shield-alt mt-1 mr-3 text-blue-300"></i>
                  <span class="text-xl">소유물방해예방청구권</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right column: Three main rights -->
          <div class="w-1/2 pl-8">
            <h3 class="text-2xl font-bold mb-5 flex items-center">
              <i class="fas fa-key text-blue-300 mr-3"></i>
              소유권의 3대 권능
            </h3>
            <div class="space-y-4">
              <!-- Use right -->
              <div
                class="right-feature bg-blue-800 bg-opacity-50 rounded-lg px-6 py-5 border border-blue-700 flex"
              >
                <div
                  class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center"
                >
                  <i class="fas fa-home text-3xl text-blue-300"></i>
                </div>
                <div class="ml-6">
                  <h4 class="text-2xl font-bold">사용권</h4>
                  <p class="mt-2 text-xl">
                    소유물에 대하여 직접 이용하거나 사용할 수 있는 권리
                  </p>
                </div>
              </div>
              <!-- Profit right -->
              <div
                class="right-feature bg-blue-800 bg-opacity-50 rounded-lg px-6 py-5 border border-blue-700 flex"
              >
                <div
                  class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center"
                >
                  <i class="fas fa-coins text-3xl text-blue-300"></i>
                </div>
                <div class="ml-6">
                  <h4 class="text-2xl font-bold">수익권</h4>
                  <p class="mt-2 text-xl">
                    소유물로부터 과실이나 이익을 얻을 수 있는 권리
                  </p>
                </div>
              </div>
              <!-- Disposal right -->
              <div
                class="right-feature bg-blue-800 bg-opacity-50 rounded-lg px-6 py-5 border border-blue-700 flex"
              >
                <div
                  class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center"
                >
                  <i class="fas fa-exchange-alt text-3xl text-blue-300"></i>
                </div>
                <div class="ml-6">
                  <h4 class="text-2xl font-bold">처분권</h4>
                  <p class="mt-2 text-xl">
                    소유물에 대한 교환가치를 지배하는 권리로, 양도, 담보설정,
                    포기 등을 할 수 있음
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">23 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>토지소유권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .land-visualization {
        height: 300px;
        position: relative;
      }
      .sky {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(
          to bottom,
          rgba(66, 153, 225, 0.3),
          rgba(66, 153, 225, 0.1)
        );
        border-top: 1px dashed rgba(255, 255, 255, 0.5);
      }
      .surface {
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(
          to bottom,
          rgba(66, 153, 225, 0.1),
          rgba(26, 54, 93, 0.5)
        );
        border-top: 2px solid rgba(255, 255, 255, 0.8);
        border-bottom: 2px solid rgba(255, 255, 255, 0.8);
      }
      .underground {
        position: absolute;
        top: 200px;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(
          to bottom,
          rgba(26, 54, 93, 0.5),
          rgba(26, 54, 93, 0.3)
        );
        border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">토지소유권</h1>
            <div class="mt-2 text-blue-300">
              토지소유권의 범위와 경계에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-16 flex">
        <!-- Left section: Scope of land ownership -->
        <div class="w-1/2 pr-8">
          <div class="mb-7">
            <h3 class="text-2xl font-bold mb-4 flex items-center">
              <i class="fas fa-expand-alt text-blue-300 mr-3"></i>
              토지소유권의 범위
            </h3>
            <div class="space-y-3 text-lg">
              <p class="ml-8">
                토지소유권은
                <span class="text-blue-300 font-semibold"
                  >토지의 정당한 이익이 있는 범위 내</span
                >에서 토지의 상하에 미침
              </p>
              <ul class="space-y-2 ml-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-blue-300 mt-1.5 mr-2"></i>
                  <span
                    >지하수, 암석, 모래, 건물 이외의 공작물은 토지의 일부</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-blue-300 mt-1.5 mr-2"></i>
                  <span
                    >미채굴 광물: 국가가 채굴취득권을 가짐 (국가소유 -
                    다수설)</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- Land visualization -->
          <div
            class="land-visualization mx-8 border border-blue-700 rounded-lg overflow-hidden"
          >
            <div class="sky flex items-center justify-center">
              <div class="flex flex-col items-center w-20">
                <i class="fas fa-cloud text-2xl"></i>
                <div class="text-sm mt-1">상공 이용권</div>
              </div>
            </div>
            <div class="surface flex items-center justify-between px-4">
              <div class="flex flex-col items-center w-20 space-y-1">
                <i class="fas fa-home text-2xl"></i>
                <div class="text-sm">공작물</div>
              </div>
              <div class="flex flex-col items-center w-20 space-y-1">
                <i class="fas fa-tree text-2xl"></i>
                <div class="text-sm">지표</div>
              </div>
              <div class="flex flex-col items-center w-20 space-y-1">
                <i class="fas fa-road text-2xl"></i>
                <div class="text-sm">도로</div>
              </div>
            </div>

            <div class="underground flex items-center justify-between px-4">
              <div class="flex flex-col items-center w-20 space-y-1">
                <i class="fas fa-water text-2xl"></i>
                <div class="text-sm">지하수</div>
              </div>
              <div class="flex flex-col items-center w-20 space-y-1">
                <i class="fas fa-cubes text-2xl"></i>
                <div class="text-sm">암석, 모래</div>
              </div>
              <div class="flex flex-col items-center w-20 space-y-1">
                <i class="fas fa-gem text-2xl text-yellow-400"></i>
                <div class="text-sm">광물(국가)</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right section: Land boundaries -->
        <div class="w-1/2 pl-8 border-l border-blue-700">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-4 flex items-center">
              <i class="fas fa-border-all text-blue-300 mr-3"></i>
              토지의 경계
            </h3>
            <div class="space-y-5 text-lg">
              <p class="ml-8">
                토지는 1필지를 단위로
                <span class="text-blue-300 font-semibold mb-5"
                  >소재 · 지번 · 지목 · 면적 · 경계 또는 좌표</span
                >
                등을 조사·측량하여 지적공부에 등록되고 부동산 등기부에 기록됨
              </p>
              <p class="ml-8">
                즉, 1필지의 토지가 하나의 물건으로 취급됨<br />
              </p>
              <div
                class="bg-blue-800 bg-opacity-50 p-6 rounded-lg border border-blue-700 ml-8"
              >
                <div class="text-xl font-semibold mb-5 flex items-center">
                  <i class="fas fa-exclamation-circle text-yellow-400 mr-2"></i>
                  현실 경계와 공부상 경계가 일치하지 않는 경우
                </div>
                <p class="mb-5">
                  현실의 경계와 공부상의 경계가 불일치하는 경우 소유권의 범위는
                  <span class="text-yellow-400 font-semibold"
                    >공부상의 경계에 따라 확정</span
                  >됨
                </p>
                <div class="flex items-center space-x-4 mt-4 py-3">
                  <div
                    class="flex-1 text-center px-3 py-6 bg-blue-900 bg-opacity-50 rounded-lg border border-blue-600"
                  >
                    <i class="fas fa-map-marked-alt text-2xl mb-2"></i>
                    <div>실제 경계</div>
                  </div>
                  <div class="text-2xl pr-3">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div
                    class="flex-1 text-center px-3 py-6 bg-blue-900 bg-opacity-50 rounded-lg border border-blue-600"
                  >
                    <i class="fas fa-file-contract text-2xl mb-2"></i>
                    <div>공부상 경계</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">24 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>토지소유권 (계속)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .concept-card {
        transition: all 0.3s ease;
        height: 100%;
      }
      .concept-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .icon-box {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">토지소유권 (계속)</h1>
            <div class="mt-2 text-blue-300">
              상린관계와 관련된 권리와 의무에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-20 left-0 right-0 px-16">
        <!-- Introduction to 상린관계 -->
        <div class="mb-5">
          <div class="flex items-center">
            <div class="icon-box bg-blue-700 mr-6">
              <i class="fas fa-home text-3xl text-blue-300"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-2">상린관계 (相隣關係)</h2>
              <p class="text-lg">
                토지소유자 상호간에 토지의 이용을 조절하기 위하여 제216조부터
                제244조까지 그들 사이의 토지이용과 관련된 <br />
                권리와 의무를 규정
              </p>
            </div>
          </div>
        </div>
        <!-- Three key rights in grid layout -->
        <div class="grid grid-cols-3 gap-8 h-67">
          <!-- 인지사용청구권 -->
          <div
            class="concept-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 flex flex-col border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4"
              >
                <i class="fas fa-tools text-blue-300"></i>
              </div>
              <h3 class="text-xl font-bold">인지사용청구권</h3>
            </div>
            <p class="text-lg mb-4">
              담ㆍ건물의 축조ㆍ수선을 위해 인접 토지의 사용이 가능함
            </p>
            <div class="mt-auto">
              <div class="flex items-center text-blue-300">
                <i class="fas fa-info-circle mr-2"></i>
                <span class="text-sm">민법 제216조부터 제244조</span>
              </div>
            </div>
          </div>
          <!-- 주위토지통행권 -->
          <div
            class="concept-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 flex flex-col border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4"
              >
                <i class="fas fa-road text-blue-300"></i>
              </div>
              <h3 class="text-xl font-bold">주위토지통행권</h3>
            </div>
            <p class="text-lg mb-4">
              공로로의 통로가 없는 경우 주위 토지를 통행하거나 통로를 개설할 수
              있는 권리
            </p>
            <div class="mt-auto">
              <div class="flex items-center text-blue-300">
                <i class="fas fa-hand-holding-usd mr-2"></i>
                <span class="text-sm">보상 필요</span>
              </div>
            </div>
          </div>
          <!-- 생활방해의 금지 -->
          <div
            class="concept-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 flex flex-col border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4"
              >
                <i class="fas fa-ban text-blue-300"></i>
              </div>
              <h3 class="text-xl font-bold">생활방해의 금지</h3>
            </div>
            <p class="text-lg mb-2">
              매연ㆍ열기체ㆍ액체ㆍ음향ㆍ진동 기타 이와 유사한 것에 의하여 이웃
              토지의 사용을 방해하거나 거주자의 생활에 고통을 주지 않도록 적당한
              조처를 할 의무
            </p>
            <div class="mt-auto">
              <div class="flex items-center text-blue-300">
                <i class="fas fa-exclamation-circle mr-2"></i>
                <span class="text-sm"
                  >통상 용도에 적당한 것인 경우에는 인용의무가 인정</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Additional information -->
        <div
          class="mt-8 bg-blue-800 bg-opacity-30 rounded-lg p-6 border border-blue-700"
        >
          <div class="flex items-start">
            <div class="text-3xl text-blue-300 mr-4">
              <i class="fas fa-balance-scale"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">상린관계의 의의</h3>
              <p class="text-lg">
                상린관계는 인접한 토지 소유자 사이에 발생하는 이해관계를
                조정하기 위한 법적 규정으로, 토지의 효율적이고 평화로운 이용을
                위한 권리와 의무 관계를 정립합니다. 각 토지 소유자는 자신의
                권리를 행사하면서도 이웃 토지 소유자의 이익을 고려해야 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">25 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>중간생략등기와 부동산명의신탁</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .content-card {
        background-color: rgba(30, 58, 138, 0.3);
        border: 1px solid rgba(96, 165, 250, 0.3);
        border-radius: 0.5rem;
      }
      .arrow {
        position: relative;
        height: 2px;
        background-color: #60a5fa;
      }
      .arrow:after {
        content: "";
        position: absolute;
        right: 0;
        top: -4px;
        width: 0;
        height: 0;
        border-left: 10px solid #60a5fa;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">중간생략등기와 부동산명의신탁</h1>
            <div class="mt-2 text-blue-300">
              중간생략등기의 개념과 부동산명의신탁의 유형에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div
        class="absolute top-36 bottom-16 left-0 right-0 px-12 grid grid-cols-2 gap-8"
      >
        <!-- 중간생략등기 섹션 -->
        <div class="content-card p-6">
          <div class="flex items-center mb-4">
            <div class="text-blue-300 text-3xl mr-3">
              <i class="fas fa-exchange-alt"></i>
            </div>
            <h2 class="text-2xl font-bold">중간생략등기</h2>
          </div>
          <div class="mb-6">
            <p class="mb-3 text-xl">
              중간취득자의 명의로 해야 할 등기를 생략하고 최초의 양도인으로부터
              직접 최후의 취득자에게 등기하는 것
            </p>
          </div>
          <div class="relative h-32 mb-9">
            <div class="w-full h-full" id="omission-diagram"></div>
          </div>
          <div class="space-y-3 ml-13">
            <div class="flex items-start text-xl">
              <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
              <p>
                부동산등기 특별조치법에서 금지하지만 <br />
                <span class="text-blue-300 font-medium">단속규정</span>으로 해석
              </p>
            </div>
            <div class="flex items-start text-xl">
              <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
              <p>
                판례는
                <span class="text-blue-300 font-medium">3자합의설</span>에 따라
                유효하다고 봄
              </p>
            </div>
            <div class="flex items-start text-xl">
              <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
              <p>중간생략등기청구권도 인정됨</p>
            </div>
          </div>
        </div>
        <!-- 부동산명의신탁 섹션 -->
        <div class="content-card p-6">
          <div class="flex items-center mb-4">
            <div class="text-blue-300 text-3xl mr-3">
              <i class="fas fa-user-shield"></i>
            </div>
            <h2 class="text-2xl font-bold">부동산명의신탁</h2>
          </div>
          <div class="mb-4 text-xl">
            <p class="mb-3">
              대내적으로 명의신탁자가 부동산의 소유권을 가지고 <br />
              관리 · 수익하지만 등기부상의 명의만을 명의수탁자로 <br />
              해두는 것
            </p>
          </div>
          <div class="space-y-6">
            <!-- 양자간 등기명의신탁 -->
            <div class="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
              <div class="flex items-center mb-4">
                <i class="fas fa-users text-blue-300 mr-2"></i>
                <h3 class="text-xl font-medium">양자간 등기명의신탁</h3>
              </div>
              <div class="pl-6">
                <div class="flex items-start text-xl">
                  <i class="fas fa-times-circle text-red-400 mt-1 mr-2"></i>
                  <p>
                    명의신탁 약정 및 그에 따른 등기는
                    <span class="text-red-300 font-medium">무효</span>
                  </p>
                </div>
              </div>
            </div>
            <!-- 계약명의신탁 -->
            <div class="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
              <div class="flex items-center mb-4">
                <i class="fas fa-file-contract text-blue-300 mr-2"></i>
                <h3 class="text-xl font-medium">계약명의신탁</h3>
              </div>
              <div class="pl-6 space-y-2 text-xl">
                <div class="flex items-start">
                  <i
                    class="fas fa-exclamation-circle text-yellow-300 mt-1 mr-2"
                  ></i>
                  <p>제3자가 명의신탁사실을 모른 경우</p>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-arrow-right text-blue-300 mt-1 mr-2"></i>
                  <p>제3자와 명의수탁자 사이의 물권변동이 인정됨</p>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-arrow-right text-blue-300 mt-1 mr-2"></i>
                  <p>
                    <span class="text-blue-300 font-medium"
                      >명의수탁자가 소유자가 됨</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">26 / 50</div>
      </div>
    </div>
    <script>
      // D3.js visualization for 중간생략등기
      document.addEventListener("DOMContentLoaded", function () {
        const svg = d3
          .select("#omission-diagram")
          .append("svg")
          .attr("width", "100%")
          .attr("height", "100%");

        // Add entities
        const entities = [
          { id: "first", name: "최초 양도인", x: 50, y: 60 },
          { id: "middle", name: "중간 취득자", x: 250, y: 60 },
          { id: "last", name: "최종 취득자", x: 450, y: 60 },
        ];

        // Create entity nodes
        const entityGroups = svg
          .selectAll("g")
          .data(entities)
          .enter()
          .append("g")
          .attr("transform", (d) => AAAAtranslate(BBBBd.x}, BBBBd.y})AAAA);

        // Add circles for entities
        entityGroups
          .append("circle")
          .attr("r", 30)
          .attr("fill", "rgba(30, 58, 138, 0.6)")
          .attr("stroke", "#60a5fa")
          .attr("stroke-width", 2);

        // Add entity labels
        entityGroups
          .append("text")
          .attr("text-anchor", "middle")
          .attr("dy", 5)
          .attr("fill", "white")
          .text((d) => d.name);

        // Add normal path arrow
        svg
          .append("line")
          .attr("x1", 80)
          .attr("y1", 60)
          .attr("x2", 220)
          .attr("y2", 60)
          .attr("stroke", "#60a5fa")
          .attr("stroke-width", 2)
          .attr("marker-end", "url(#arrow)");

        svg
          .append("line")
          .attr("x1", 280)
          .attr("y1", 60)
          .attr("x2", 420)
          .attr("y2", 60)
          .attr("stroke", "#60a5fa")
          .attr("stroke-width", 2)
          .attr("marker-end", "url(#arrow)");

        // Add omission path (curved arrow)
        svg
          .append("path")
          .attr("d", "M80,80 Q250,140 420,80")
          .attr("fill", "none")
          .attr("stroke", "#f87171")
          .attr("stroke-width", 2.5)
          .attr("stroke-dasharray", "5,5")
          .attr("marker-end", "url(#arrow-red)");

        // Add text for omission path
        svg
          .append("text")
          .attr("x", 250)
          .attr("y", 127)
          .attr("text-anchor", "middle")
          .attr("fill", "#f87171")
          .text("중간생략등기");

        // Define arrow markers
        svg
          .append("defs")
          .append("marker")
          .attr("id", "arrow")
          .attr("viewBox", "0 -5 10 10")
          .attr("refX", 8)
          .attr("refY", 0)
          .attr("markerWidth", 6)
          .attr("markerHeight", 6)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,-5L10,0L0,5")
          .attr("fill", "#60a5fa");

        svg
          .append("defs")
          .append("marker")
          .attr("id", "arrow-red")
          .attr("viewBox", "0 -5 10 10")
          .attr("refX", 8)
          .attr("refY", 0)
          .attr("markerWidth", 6)
          .attr("markerHeight", 6)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,-5L10,0L0,5")
          .attr("fill", "#f87171");
      });
    <\/script>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>건물의 구분소유권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .content-block {
        background-color: rgba(26, 54, 93, 0.4);
        border: 1px solid rgba(66, 153, 225, 0.3);
        transition: all 0.3s ease;
      }
      .content-block:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-color: rgba(66, 153, 225, 0.6);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">건물의 구분소유권</h1>
        <div class="mt-2 text-blue-300">
          건물 구분소유권의 의의와 성립요건에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-5 left-0 right-0 px-12">
        <div class="flex h-full">
          <!-- Left section: Definition -->
          <div class="w-1/2 pr-6">
            <div class="content-block rounded-lg p-6 h-full flex flex-col">
              <div class="flex items-center mb-4">
                <div class="text-3xl text-blue-300 mr-3">
                  <i class="fas fa-building"></i>
                </div>
                <h2 class="text-2xl font-bold">구분소유권의 의의</h2>
              </div>
              <div class="flex-grow">
                <p class="mb-4 text-lg">
                  건물은 원칙적으로 1동이 하나의 물건이지만, 다음과 같은 경우
                  구분소유권이 인정됩니다:
                </p>
                <ul class="space-y-3 text-lg">
                  <li class="flex">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                    <span
                      >1동의 건물이
                      <span class="text-blue-200 font-semibold"
                        >구조상·이용상 독립성</span
                      >을 가지는 여러 부분으로 나누어진 경우</span
                    >
                  </li>
                  <li class="flex">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                    <span
                      >각 부분이
                      <span class="text-blue-200 font-semibold"
                        >사회관념상 경제적으로 독립한 건물</span
                      >과 동일하게 취급되는 경우</span
                    >
                  </li>
                  <li class="flex">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                    <span>집합건물법에서 자세히 규정하고 있음</span>
                  </li>
                </ul>
              </div>
              <!-- Building Diagram -->
              <div class="mt-4 h-56 relative" id="building-diagram">
                <!-- Building outline -->
                <div
                  class="absolute inset-x-16 top-0 bottom-0 border-2 border-blue-300 rounded-t-lg"
                ></div>
                <!-- Floor divisions -->
                <div class="absolute inset-x-16 top-1/3 h-px bg-blue-300"></div>
                <div class="absolute inset-x-16 top-2/3 h-px bg-blue-300"></div>
                <!-- Unit divisions on each floor -->
                <div
                  class="absolute left-16 right-1/2 top-0 bottom-2/3 border-r-2 border-blue-300"
                ></div>
                <div
                  class="absolute left-16 right-1/2 top-1/3 bottom-1/3 border-r-2 border-blue-300"
                ></div>
                <div
                  class="absolute left-16 right-1/2 top-2/3 bottom-0 border-r-2 border-blue-300"
                ></div>
                <!-- Labels -->
                <div class="absolute left-28 top-6 text-center text-blue-200">
                  A호
                </div>
                <div class="absolute right-28 top-6 text-center text-blue-200">
                  B호
                </div>
                <div
                  class="absolute left-28 top-1/3 mt-6 text-center text-blue-200"
                >
                  C호
                </div>
                <div
                  class="absolute right-28 top-1/3 mt-6 text-center text-blue-200"
                >
                  D호
                </div>
                <div
                  class="absolute left-28 top-2/3 mt-6 text-center text-blue-200"
                >
                  E호
                </div>
                <div
                  class="absolute right-28 top-2/3 mt-6 text-center text-blue-200"
                >
                  F호
                </div>
                <!-- Floor labels -->
                <div class="absolute left-4 top-1/6 text-blue-300">3층</div>
                <div class="absolute left-4 top-1/2 text-blue-300">2층</div>
                <div class="absolute left-4 top-5/6 text-blue-300">1층</div>
              </div>
            </div>
          </div>
          <!-- Right section: Requirements -->
          <div class="w-1/2 pl-6">
            <div class="content-block rounded-lg p-6 mb-4">
              <div class="flex items-center mb-5">
                <div class="text-3xl text-blue-300 mr-3">
                  <i class="fas fa-clipboard-list"></i>
                </div>
                <h2 class="text-2xl font-bold">구분소유권의 성립요건</h2>
              </div>
              <div class="space-y-4">
                <div>
                  <h3 class="text-xl font-semibold mb-2 flex items-center">
                    <i class="fas fa-puzzle-piece text-blue-300 mr-2"></i>
                    <span>건물 일부의 이용상 · 구조상 독립성</span>
                  </h3>
                  <ul class="ml-8 space-y-2 text-lg">
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right text-blue-300 mt-1.5 mr-2"
                      ></i>
                      <span>다른 부분과 구조상 구분된 내부 구조</span>
                    </li>
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right text-blue-300 mt-1.5 mr-2"
                      ></i>
                      <span>다른 부분과 별도로 거주 또는 이용 가능해야 함</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2 flex items-center">
                    <i class="fas fa-gavel text-blue-300 mr-2"></i>
                    <span>처분권자의 구분행위</span>
                  </h3>
                  <ul class="ml-8 space-y-2 text-lg">
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right text-blue-300 mt-1.5 mr-2"
                      ></i>
                      <span>건물 소유자의 구분의사 필요</span>
                    </li>
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right text-blue-300 mt-1.5 mr-2"
                      ></i>
                      <span>구분소유권 설정을 위한 법률행위</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Additional info box -->
            <div class="content-block rounded-lg p-6">
              <div class="flex items-center mb-4">
                <div class="text-3xl text-blue-300 mr-3">
                  <i class="fas fa-info-circle"></i>
                </div>
                <h2 class="text-xl font-bold">구분소유권의 중요성</h2>
              </div>
              <p class="text-lg">
                구분소유권은 아파트, 오피스텔, 상가 등 현대 건축물에서 매우
                중요한 소유형태로, 각 구분소유자에게 전유부분에 대한 독립적인
                소유권을 부여합니다. 이는 다음 슬라이드에서 다룰 구분소유자의
                권리와 의무와 밀접하게 연관됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">27 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>건물의 구분소유권 (계속)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .content-box {
        transition: all 0.3s ease;
      }
      .content-box:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h1 class="text-4xl font-bold">건물의 구분소유권 (계속)</h1>
            <div class="w-5"></div>
            <div class="mt-2 text-blue-300">
              구분소유자의 권리와 의무에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-27 bottom-20 left-0 right-0 px-16">
        <h2 class="text-2xl font-semibold mb-4">구분소유자의 권리와 의무</h2>
        <div class="grid grid-cols-3 gap-8 h-auto">
          <!-- 전유부분 -->
          <div
            class="content-box bg-blue-800 bg-opacity-50 rounded-lg p-4 border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-blue-700 p-3 mr-4">
                <i class="fas fa-home text-2xl text-blue-300"></i>
              </div>
              <h3 class="text-2xl font-bold">전유부분</h3>
            </div>
            <p class="mb-4 text-lg">
              구조상 이용상의 독립성을 갖춘 건물부분으로 구분소유권의 목적이
              되는 부분
            </p>
            <ul class="space-y-3 text-lg">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>일반 소유권과 동일한 성질</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>배타적 사용·수익·처분 가능</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>각 소유자가 독립적으로 권리 행사</span>
              </li>
            </ul>
          </div>
          <!-- 공용부분 -->
          <div
            class="content-box bg-blue-800 bg-opacity-50 rounded-lg p-4 border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-blue-700 p-3 mr-4">
                <i class="fas fa-users text-2xl text-blue-300"></i>
              </div>
              <h3 class="text-2xl font-bold">공용부분</h3>
            </div>
            <p class="mb-4 text-lg">
              건물부분이나 건물의 부속물 중 전유부분에 속하지 않는 것
            </p>
            <ul class="space-y-3 text-lg">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>구분소유자들의 공유</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>복도, 계단, 엘리베이터, 옥상 등</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>공동으로 관리하고 사용</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>지분에 따른 권리·의무 발생</span>
              </li>
            </ul>
          </div>
          <!-- 대지사용권 -->
          <div
            class="content-box bg-blue-800 bg-opacity-50 rounded-lg p-4 border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-blue-700 p-3 mr-4">
                <i class="fas fa-map-marked-alt text-2xl text-blue-300"></i>
              </div>
              <h3 class="text-2xl font-bold">대지사용권</h3>
            </div>
            <p class="mb-4 text-lg">
              구분소유자가 전유부분을 소유하기 위하여 건물의 대지에 대하여
              가지는 권리
            </p>
            <ul class="space-y-3 text-lg">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>소유권, 지상권, 임차권 등 포함</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>전유부분과 분리하여 처분 불가</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>집합건물법에서 특별히 규정</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 관계도 -->
        <div
          class="mt-4 bg-blue-800 bg-opacity-30 rounded-lg p-4 border border-blue-700"
        >
          <h3 class="text-xl font-semibold mb-4 text-center">
            구분소유권 구성 요소의 관계
          </h3>
          <div class="flex justify-center items-center">
            <div class="flex flex-col items-center mx-6">
              <div
                class="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mb-2"
              >
                <i class="fas fa-home text-4xl text-blue-300"></i>
              </div>
              <div class="text-center">전유부분</div>
            </div>
            <div class="flex items-center mx-4">
              <i class="fas fa-plus text-blue-300 text-xl"></i>
            </div>
            <div class="flex flex-col items-center mx-6">
              <div
                class="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mb-2"
              >
                <i class="fas fa-users text-4xl text-blue-300"></i>
              </div>
              <div class="text-center">공용부분</div>
            </div>
            <div class="flex items-center mx-4">
              <i class="fas fa-plus text-blue-300 text-xl"></i>
            </div>
            <div class="flex flex-col items-center mx-6">
              <div
                class="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mb-2"
              >
                <i class="fas fa-map-marked-alt text-4xl text-blue-300"></i>
              </div>
              <div class="text-center">대지사용권</div>
            </div>
            <div class="flex items-center mx-4">
              <i class="fas fa-equals text-blue-300 text-xl"></i>
            </div>
            <div class="flex flex-col items-center mx-6">
              <div
                class="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mb-2"
              >
                <i class="fas fa-building text-4xl text-blue-300"></i>
              </div>
              <div class="text-center">구분소유권</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">28 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>법률의 규정에 따른 소유권취득</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .requirement-item {
        transition: all 0.2s ease;
      }
      .requirement-item:hover {
        transform: translateX(5px);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">법률의 규정에 따른 소유권취득</h1>
        <div class="mt-2 text-blue-300">취득시효의 의의와 요건에 대한 설명</div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-16">
        <!-- Introduction -->
        <div class="mb-5">
          <div class="flex items-center mb-4">
            <div class="text-3xl text-blue-300 mr-4">
              <i class="fas fa-hourglass-half"></i>
            </div>
            <h2 class="text-2xl font-bold">취득시효의 의의</h2>
          </div>
          <p class="text-lg ml-12">
            일정한 요건을 갖추어 일정 기간 동안 부동산 또는 동산을 점유한 자가
            그 재산의 소유권을 원시적으로 취득하게 되는 제도
          </p>
        </div>
        <!-- Two types of acquisitive prescription -->
        <div class="grid grid-cols-2 gap-10">
          <!-- Left column: 부동산 점유취득시효 -->
          <div
            class="bg-blue-800 bg-opacity-40 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="flex items-center mb-6">
              <div class="text-3xl text-blue-300 mr-4">
                <i class="fas fa-home"></i>
              </div>
              <h3 class="text-2xl font-semibold">부동산 점유취득시효</h3>
            </div>
            <div class="space-y-4 ml-4 text-xl">
              <div class="requirement-item flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div>
                  <p class="font-medium">소유의 의사로 평온ㆍ공연하게 점유</p>
                  <p class="text-lg text-blue-200">
                    자기 소유의 의사로 타인이 알 수 있는 방법으로 점유
                  </p>
                </div>
              </div>
              <div class="requirement-item flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div>
                  <p class="font-medium">20년 동안의 점유</p>
                  <p class="text-lg text-blue-200">
                    중단 없이 20년간 지속적으로 점유
                  </p>
                </div>
              </div>
              <div class="requirement-item flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div>
                  <p class="font-medium">취득시효완성에 따른 등기</p>
                  <p class="text-lg text-blue-200">
                    소유권 취득을 위해서는 등기 필요
                  </p>
                </div>
              </div>
            </div>
            <!-- Timeline visualization for 20 years -->
            <div class="mt-6 px-4" id="timeline1"></div>
          </div>
          <!-- Right column: 등기부취득시효 -->
          <div
            class="bg-blue-800 bg-opacity-40 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="flex items-center mb-6">
              <div class="text-3xl text-blue-300 mr-4">
                <i class="fas fa-file-contract"></i>
              </div>
              <h3 class="text-2xl font-semibold">등기부취득시효</h3>
            </div>
            <div class="space-y-4 ml-4 text-xl">
              <div class="requirement-item flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div>
                  <p class="font-medium">
                    소유의 의사ㆍ평온ㆍ공연ㆍ선의ㆍ무과실의 점유
                  </p>
                  <p class="text-lg text-blue-200">
                    선의와 무과실이 추가 요건으로 필요
                  </p>
                </div>
              </div>
              <div class="requirement-item flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div>
                  <p class="font-medium">점유자 명의의 등기</p>
                  <p class="text-lg text-blue-200">
                    이미 점유자의 명의로 등기가 되어 있어야 함
                  </p>
                </div>
              </div>
              <div class="requirement-item flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div>
                  <p class="font-medium">10년 동안의 점유와 등기</p>
                  <p class="text-lg text-blue-200">
                    점유와 등기가 10년간 지속되어야 함
                  </p>
                </div>
              </div>
            </div>
            <!-- Timeline visualization for 10 years -->
            <div class="mt-6 px-4" id="timeline2"></div>
          </div>
        </div>
        <!-- Note about effect -->
        <div
          class="mt-4 bg-blue-700 bg-opacity-30 p-4 rounded-lg border-l-4 border-blue-300"
        >
          <div class="flex items-center">
            <div class="text-xl text-blue-300 mr-3">
              <i class="fas fa-lightbulb"></i>
            </div>
            <p class="text-lg">
              취득시효가 완성되면 점유자는 점유물에 대한 권리를 확정적으로
              원시취득하며, 점유를 개시한 때로 소급하여 효력이 발생합니다.
            </p>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">29 / 50</div>
      </div>
    </div>
    <script>
      // Timeline visualization for 20 years
      const createTimeline = (elementId, years, label) => {
        const width = 500;
        const height = 50;

        const svg = d3
          .select(AAAA#BBBBelementId}AAAA)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        // Create a scale for the timeline
        const xScale = d3
          .scaleLinear()
          .domain([0, years])
          .range([0, width - 100]);

        // Add the line
        svg
          .append("line")
          .attr("x1", 0)
          .attr("y1", height / 2)
          .attr("x2", width - 100)
          .attr("y2", height / 2)
          .attr("stroke", "#93c5fd")
          .attr("stroke-width", 3);

        // Add start point
        svg
          .append("circle")
          .attr("cx", 0)
          .attr("cy", height / 2)
          .attr("r", 6)
          .attr("fill", "#93c5fd");

        // Add end point
        svg
          .append("circle")
          .attr("cx", width - 100)
          .attr("cy", height / 2)
          .attr("r", 6)
          .attr("fill", "#93c5fd");

        // Add label for years
        svg
          .append("text")
          .attr("x", width - 80)
          .attr("y", height / 2 + 5)
          .text(label)
          .attr("fill", "#93c5fd")
          .attr("font-size", "16px");
      };

      // Create both timelines
      createTimeline("timeline1", 20, "20년");
      createTimeline("timeline2", 10, "10년");
    <\/script>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>법률의 규정에 따른 소유권취득 (계속)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .acquisition-method {
        transition: all 0.3s ease;
      }
      .acquisition-method:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .timeline-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">법률의 규정에 따른 소유권취득 (계속)</h1>
        <div class="mt-2 text-blue-300">
          무주물 선점, 유실물 습득 등 기타 소유권 취득 방법에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-41 bottom-16 left-0 right-0 px-12">
        <div class="grid grid-cols-2 gap-8 h-full">
          <!-- Left column -->
          <div class="col-span-1">
            <div class="grid grid-rows-2 gap-2 h-full">
              <div class="row-span-1">
                <!-- 무주물 선점 -->
                <div
                  class="acquisition-method bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
                >
                  <div class="flex items-start">
                    <div class="text-blue-300 text-3xl mt-1 mr-4">
                      <i class="fas fa-flag"></i>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold mb-6">무주물 선점</h3>
                      <p class="text-xl mb-2">
                        소유자가 없는 동산을 소유의 의사로 점유한 자는
                      </p>
                      <p class="text-xl mb-6">그 소유권을 취득함</p>
                      <div class="flex items-center text-blue-200 text-lg">
                        <i class="fas fa-lightbulb mr-2"></i>
                        <span>소유의 의사와 점유만으로 원시취득</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-span-1">
                <!-- 유실물 습득 -->
                <div
                  class="acquisition-method bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
                >
                  <div class="flex items-start">
                    <div class="text-blue-300 text-3xl mt-1 mr-4">
                      <i class="fas fa-search"></i>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold mb-3">유실물 습득</h3>
                      <p class="text-xl mb-3">
                        유실물을 습득한 자는 법률의 규정에 따라 공고한 후
                      </p>
                      <p class="text-xl mb-3">
                        6개월 내에 소유자가 권리를 주장하지 않으면 유실물
                      </p>
                      <p class="text-xl mb-3">의 소유권을 취득</p>
                      <div class="flex items-center mt-3">
                        <div class="timeline-dot bg-blue-300"></div>
                        <div class="ml-3 h-px w-20 bg-blue-300"></div>
                        <div
                          class="ml-3 px-3 py-1 bg-blue-700 rounded-full text-lg"
                        >
                          6개월
                        </div>
                        <div class="ml-3 h-px w-20 bg-blue-300"></div>
                        <div class="ml-3 text-blue-200 text-lg">
                          <i class="fas fa-check-circle"></i> 소유권 취득
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Right column -->
          <div class="col-span-1">
            <div class="grid grid-rows-2 gap-2 h-full">
              <div class="row-span-1">
                <!-- 매장물 발견 -->
                <div
                  class="acquisition-method bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
                >
                  <div class="flex items-start">
                    <div class="text-blue-300 text-3xl mt-1 mr-4">
                      <i class="fas fa-gem"></i>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold mb-2">매장물 발견</h3>
                      <p class="text-xl mb-3">
                        매장물을 발견한 자는 법률의 규정에 따라 공고한 후 1년
                        내에 그 소유자가 권리를 주장하지 않으면 매장물의
                        소유권을 취득
                      </p>
                      <div class="flex items-center mt-3">
                        <div class="timeline-dot bg-blue-300"></div>
                        <div class="ml-3 h-px w-20 bg-blue-300"></div>
                        <div
                          class="ml-3 px-3 py-1 bg-blue-700 rounded-full text-lg"
                        >
                          1년
                        </div>
                        <div class="ml-3 h-px w-20 bg-blue-300"></div>
                        <div class="ml-3 text-blue-200 text-lg">
                          <i class="fas fa-check-circle"></i> 소유권 취득
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 첨부 -->
              <div class="row-span-1">
                <div
                  class="acquisition-method bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
                >
                  <div class="flex items-start">
                    <div class="text-blue-300 text-3xl mt-1 mr-4">
                      <i class="fas fa-object-group"></i>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold mb-2">첨부</h3>
                      <p class="text-xl mb-3">
                        민법은 다음과 같은 첨부의 형태를 규정함
                      </p>
                      <div class="grid grid-cols-3 gap-4 mt-4">
                        <div
                          class="bg-blue-700 bg-opacity-50 rounded-lg p-3 text-center"
                        >
                          <div class="text-blue-300 text-2xl mb-1">
                            <i class="fas fa-puzzle-piece"></i>
                          </div>
                          <div class="text-lg font-medium">부합</div>
                          <div class="text-ms text-blue-200 mt-1">
                            물건의 결합
                          </div>
                        </div>
                        <div
                          class="bg-blue-700 bg-opacity-50 rounded-lg p-3 text-center"
                        >
                          <div class="text-blue-300 text-2xl mb-1">
                            <i class="fas fa-water"></i>
                          </div>
                          <div class="text-lg font-medium">혼화</div>
                          <div class="text-ms text-blue-200 mt-1">
                            물건의 혼합
                          </div>
                        </div>
                        <div
                          class="bg-blue-700 bg-opacity-50 rounded-lg p-3 text-center"
                        >
                          <div class="text-blue-300 text-2xl mb-1">
                            <i class="fas fa-tools"></i>
                          </div>
                          <div class="text-lg font-medium">가공</div>
                          <div class="text-ms text-blue-200 mt-1">
                            물건의 가공
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">30 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>공동소유</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .ownership-card {
        transition: all 0.3s ease;
        height: 100%;
      }
      .ownership-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .icon-container {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">공동소유</h1>
            <div class="mt-2 text-blue-300">
              공유, 합유, 총유 등 공동소유의 형태에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-16 left-0 right-0 px-12">
        <div class="grid grid-cols-3 gap-6 h-full">
          <!-- 공유 (Co-ownership) -->
          <div
            class="ownership-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-11 flex flex-col border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div class="icon-container bg-blue-700">
                <i class="fas fa-users text-4xl text-blue-300"></i>
              </div>
              <h3 class="text-2xl font-bold ml-4">공유</h3>
            </div>
            <div class="text-lg space-y-4 flex-grow">
              <p class="border-l-4 border-blue-400 pl-3 mt-2 mb-1">
                가장 일반적이고 개인적인 공동소유의 형태
              </p>
              <div class="mt-4">
                <p class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span>공유자는 물건에 대한 <strong>지분</strong>을 가짐</span>
                </p>
                <p class="flex items-start mt-2">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span>지분을 자유롭게 처분할 수 있음</span>
                </p>
                <p class="flex items-start mt-2">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span>언제든지 공유물의 분할 청구가 가능함</span>
                </p>
              </div>
            </div>
            <div class="mt-4 text-sm text-blue-300">
              <div class="flex items-center">
                <i class="fas fa-lightbulb mr-2"></i>
                <span>개인의 자유로운 지분 행사가 특징</span>
              </div>
            </div>
          </div>
          <!-- 합유 (Partnership ownership) -->
          <div
            class="ownership-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-11 flex flex-col border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div class="icon-container bg-blue-700">
                <i class="fas fa-handshake text-4xl text-blue-300"></i>
              </div>
              <h3 class="text-2xl font-bold ml-4">합유</h3>
            </div>
            <div class="text-lg space-y-4 flex-grow">
              <p class="border-l-4 border-blue-400 pl-3 mt-2 mb-1">
                조합의 소유형태
              </p>
              <div class="mt-4">
                <p class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span
                    >조합원은 조합재산에 대하여 <strong>지분</strong>을
                    가짐</span
                  >
                </p>
                <p class="flex items-start mt-2">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span
                    >합유자 <strong>전원의 동의</strong> 없이는 지분을 처분할 수
                    없음</span
                  >
                </p>
                <p class="flex items-start mt-2">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span>조합관계가 종료할 때까지 합유물 분할청구 불가</span>
                </p>
              </div>
            </div>
            <div class="mt-4 text-sm text-blue-300">
              <div class="flex items-center">
                <i class="fas fa-lightbulb mr-2"></i>
                <span>공동체의 합의가 중요한 소유형태</span>
              </div>
            </div>
          </div>
          <!-- 총유 (Collective ownership) -->
          <div
            class="ownership-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-11 flex flex-col border border-blue-700"
          >
            <div class="flex items-center mb-4">
              <div class="icon-container bg-blue-700">
                <i class="fas fa-building text-4xl text-blue-300"></i>
              </div>
              <h3 class="text-2xl font-bold ml-4">총유</h3>
            </div>
            <div class="text-lg space-y-4 flex-grow">
              <p class="border-l-4 border-blue-400 pl-3 mt-2 mb-1">
                비법인사단의 사원이 집합체로서 물건을 소유하는 형태
              </p>
              <div class="mt-4">
                <p class="flex items-start">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span
                    >공유·합유와 달리
                    <strong>지분이 인정되지 않음</strong></span
                  >
                </p>
                <p class="flex items-start mt-2">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span
                    >사원의 자격을 취득하면 총유물에 관한 권리를 취득함</span
                  >
                </p>
                <p class="flex items-start mt-2">
                  <i class="fas fa-check-circle text-blue-300 mr-3 mt-1"></i>
                  <span>자격을 잃으면 그 권리를 상실함</span>
                </p>
              </div>
            </div>
            <div class="mt-4 text-sm text-blue-300">
              <div class="flex items-center">
                <i class="fas fa-lightbulb mr-2"></i>
                <span>구성원 자격에 따른 소유형태</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Visualization of ownership relationships -->
      <div
        class="absolute bottom-24 left-0 right-0 flex justify-center"
        id="ownership-viz"
      >
        <script>
          // D3.js visualization would go here if needed
          // For this content, icons and text are sufficient
        <\/script>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">31 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>제3강 제한물권(용익물권ㆍ담보물권)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .right-panel {
        clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
      }
      .category-card {
        transition: all 0.3s ease;
        position: relative;
      }
      .category-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: #4299e1;
      }
      .category-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .icon-circle {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(66, 153, 225, 0.2);
        border: 2px solid rgba(66, 153, 225, 0.5);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title and lecture number -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">
              제3강 제한물권(용익물권ㆍ담보물권)
            </h1>
            <div class="mt-2 text-blue-300">
              용익물권의 의의와 종류에 대한 소개
            </div>
          </div>
          <div class="text-right">
            <div class="text-blue-300">강의 일자</div>
            <div class="text-xl">1/29(목)</div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-20 left-0 right-0 px-16">
        <!-- Introduction to limited real rights -->
        <div class="mb-8">
          <h2 class="text-2xl font-medium text-2xl mb-4">제한물권의 개념</h2>
          <p class="text-lg">
            제한물권이란 소유권으로부터 일부 권능을 분리하여 만들어진 물권으로,
            소유권에 비해 제한된 내용을 가진 물권을 의미합니다. 크게 용익물권과
            담보물권으로 구분됩니다.
          </p>
        </div>
        <!-- Two categories -->
        <div class="grid grid-cols-2 gap-10">
          <!-- Usufructuary Rights -->
          <div
            class="category-card bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700"
          >
            <div class="flex items-center mb-6">
              <div class="icon-circle mr-6">
                <i class="fas fa-home text-4xl text-blue-300"></i>
              </div>
              <h3 class="text-3xl font-bold">용익물권</h3>
            </div>
            <p class="text-lg mb-6">
              타인의 부동산을 사용ㆍ수익할 수 있는 물권으로, 소유권의 권능 중
              사용가치를 분리하여 만든 제한물권입니다.
            </p>
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center">
                <div
                  class="bg-blue-700 bg-opacity-40 rounded-full p-4 mx-auto mb-2"
                  style="width: 60px; height: 60px"
                >
                  <i class="fas fa-tree text-2xl text-blue-300"></i>
                </div>
                <div class="font-medium text-2xl">지상권</div>
              </div>
              <div class="text-center">
                <div
                  class="bg-blue-700 bg-opacity-40 rounded-full p-4 mx-auto mb-2"
                  style="width: 60px; height: 60px"
                >
                  <i class="fas fa-route text-2xl text-blue-300"></i>
                </div>
                <div class="font-medium text-2xl">지역권</div>
              </div>
              <div class="text-center">
                <div
                  class="bg-blue-700 bg-opacity-40 rounded-full p-4 mx-auto mb-2"
                  style="width: 60px; height: 60px"
                >
                  <i class="fas fa-building text-2xl text-blue-300"></i>
                </div>
                <div class="font-medium text-2xl">전세권</div>
              </div>
            </div>
          </div>
          <!-- Security Rights -->
          <div
            class="category-card bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700"
          >
            <div class="flex items-center mb-6">
              <div class="icon-circle mr-6">
                <i class="fas fa-shield-alt text-4xl text-blue-300"></i>
              </div>
              <h3 class="text-3xl font-bold">담보물권</h3>
            </div>
            <p class="text-lg mb-6">
              채무자, 제3자의 특정 재산에서 우선적으로 변제를 받을 수 있는
              권리로, 물건의 교환가치를 지배하는 제한물권입니다.
            </p>
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center">
                <div
                  class="bg-blue-700 bg-opacity-40 rounded-full p-4 mx-auto mb-2"
                  style="width: 60px; height: 60px"
                >
                  <i class="fas fa-hand-holding text-2xl text-blue-300"></i>
                </div>
                <div class="font-medium text-2xl">유치권</div>
              </div>
              <div class="text-center">
                <div
                  class="bg-blue-700 bg-opacity-40 rounded-full p-4 mx-auto mb-2"
                  style="width: 60px; height: 60px"
                >
                  <i class="fas fa-gem text-2xl text-blue-300"></i>
                </div>
                <div class="font-medium text-2xl">질권</div>
              </div>
              <div class="text-center">
                <div
                  class="bg-blue-700 bg-opacity-40 rounded-full p-4 mx-auto mb-2"
                  style="width: 60px; height: 60px"
                >
                  <i class="fas fa-landmark text-2xl text-blue-300"></i>
                </div>
                <div class="font-medium text-2xl">저당권</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">32 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>용익물권의 의의</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .comparison-table th,
      .comparison-table td {
        padding: 12px 16px;
        border: 1px solid rgba(79, 129, 189, 0.3);
      }
      .comparison-table th {
        background-color: rgba(66, 153, 225, 0.2);
      }
      .feature-icon {
        font-size: 2.5rem;
        color: #4299e1;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">용익물권의 의의</h1>
        <div class="mt-2 text-blue-300">
          용익물권의 개념과 부동산임차권과의 구별에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-20 left-0 right-0 px-16">
        <div class="grid grid-cols-16 gap-8 h-full">
          <!-- Left column - Concept and Types -->
          <div class="col-span-5 space-y-8">
            <!-- Concept of Usufructuary Rights -->
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="feature-icon mr-4">
                  <i class="fas fa-book"></i>
                </div>
                <h3 class="text-2xl font-bold">용익물권의 개념</h3>
              </div>
              <p class="text-lg">
                타인의 부동산을 사용·수익할 수 있는 물권으로, 소유권의 권능 중
                사용가치를 분리하여 만든 제한물권입니다.
              </p>
            </div>
            <!-- Types of Usufructuary Rights -->
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="feature-icon mr-4">
                  <i class="fas fa-list"></i>
                </div>
                <h3 class="text-2xl font-bold">용익물권의 종류</h3>
              </div>
              <ul class="space-y-3 text-lg">
                <li class="flex items-start">
                  <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                  <div>
                    <span class="font-semibold">민법상 규정: </span> <br />
                    지상권, 지역권, 전세권
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"></i>
                  <div>
                    <span class="font-semibold">기타:</span> <br />
                    분묘기지권, 관습상의 법정지상권
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right column - Comparison -->
          <div class="col-span-11">
            <div
              class="bg-blue-800 bg-opacity-50 rounded-lg p-6 h-full border border-blue-700"
            >
              <div class="flex items-center mb-6">
                <div class="feature-icon mr-4">
                  <i class="fas fa-balance-scale"></i>
                </div>
                <h3 class="text-2xl font-bold">부동산임차권과의 구별</h3>
              </div>
              <table class="comparison-table w-full text-left">
                <!-- <thead>
                  <tr class="text-xl text-center">
                    <th class="w-1/5 text-center">구분</th>
                    <th class="w-2/5 text-center">용익물권</th>
                    <th class="w-2/5 text-center">부동산임차권</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-semibold text-xl text-center">
                      권리의 성격
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-400 mr-3"></i>
                        물권 - 모든 사람에게 주장 가능
                      </div>
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i
                          class="fas fa-exclamation-circle text-yellow-400 mr-3"
                        ></i>
                        계약당사자 사이에서만 효력 주장 가능 (예외: 대항력 있는
                        임차권)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-semibold text-xl text-center">성립요건</td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-file-signature text-blue-300 mr-2"></i>
                        용익물권 설정의 합의(물권행위)와 등기 필요 (예외:
                        법정지상권)
                      </div>
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-handshake text-blue-300 mr-2"></i>
                        당사자의 합의만으로 임차권 발생 (등기 불필요)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-semibold text-xl text-center">
                      현실적 이용
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-history text-blue-300 mr-2"></i>
                        서양의 제도를 계수 - 현실에서 잘 이용되지 않음
                      </div>
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-400 mr-3"></i>
                        현재 대부분 부동산 임대차가 이용됨
                      </div>
                    </td>
                  </tr>
                </tbody> -->

                <thead>
                  <tr class="text-xl text-center">
                    <th class="w-1/5 text-center">구분</th>
                    <th class="w-2/5 text-center">용익물권</th>
                    <th class="w-2/5 text-center">부동산임차권</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-semibold text-xl text-center">
                      권리의 성격
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-400 mr-2"></i>
                        물권 - 모든 사람에게 주장 가능
                      </div>
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i
                          class="fas fa-exclamation-circle text-yellow-400 mr-2"
                        ></i>
                        계약당사자 사이에서만 효력 주장 가능 (예외: 대항력 있는
                        임차권)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-semibold text-xl text-center">성립요건</td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-file-signature text-blue-300 mr-2"></i>
                        용익물권 설정의 합의(물권행위)와 등기 필요 (예외:
                        법정지상권)
                      </div>
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-handshake text-blue-300 mr-2"></i>
                        당사자의 합의만으로 임차권 발생 (등기 불필요)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-semibold text-xl text-center">
                      현실적 이용
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-history text-blue-300 mr-2"></i>
                        서양의 제도를 계수 - 현실에서 잘 이용되지 않음
                      </div>
                    </td>
                    <td class="text-lg">
                      <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-400 mr-2"></i>
                        현재 대부분 부동산 임대차가 이용됨
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with lecture info and slide number -->
      <div
        class="absolute bottom-4 left-8 right-8 flex justify-between items-center"
      >
        <div class="text-sm text-blue-300">
          제3강 제한물권(용익물권ㆍ담보물권)
        </div>
        <div class="text-sm text-blue-300">33 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>지상권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .section-card {
        transition: all 0.3s ease;
        height: 100%;
      }
      .section-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">지상권</h1>
            <div class="mt-2 text-blue-300">
              지상권의 의의, 존속기간, 지료에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-20 left-0 right-0 px-16">
        <div class="flex h-full gap-6">
          <!-- Left column - Definition -->
          <div
            class="section-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700 w-1/3"
          >
            <div class="flex items-center mb-4">
              <div class="text-blue-300 text-3xl mr-3">
                <i class="fas fa-scroll"></i>
              </div>
              <h3 class="text-2xl font-bold">지상권의 의의</h3>
            </div>
            <div class="text-lg">
              <p>
                건물 기타 공작물이나 수목을 소유하기 위하여 타인의 토지를 사용할
                수 있는 용익물권
              </p>
              <p class="mt-5 text-blue-200 text-sm">1984년 구분지상권 도입</p>
            </div>
            <div class="flex items-center mt-7">
              <div class="text-blue-300 text-3xl mr-3">
                <i class="fas fa-file-signature"></i>
              </div>
              <h3 class="text-2xl font-bold">성립요건</h3>
            </div>
            <div class="text-lg">
              <div class="mt-4">
                <p>
                  토지소유자(지상권설정자)와 토지를 이용하려는 자(지상권자)
                  사이에 지상권설정계약을 체결하고 지상권설정의 등기를 함으로써
                  성립
                </p>
                <p class="text-sm mt-6 text-blue-300">
                  ※ 법정지상권 및 관습상의 법정지상권은 예외
                </p>
              </div>
            </div>
          </div>
          <!-- Middle column - Visualization and Duration -->
          <div
            class="section-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700 w-1/3"
          >
            <div class="flex items-center mb-4">
              <div class="text-blue-300 text-3xl mr-3">
                <i class="fas fa-hourglass-half"></i>
              </div>
              <h3 class="text-2xl font-bold">존속기간</h3>
            </div>
            <!-- Simple visualization of duration periods -->
            <div class="h-36" id="duration-chart"></div>
            <div class="space-y-4 text-lg">
              <p>지상물의 종류에 따라 민법상 최단기간이 정해져 있음:</p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <i class="fas fa-building mt-1 mr-2 text-blue-300"></i>
                  <span
                    >견고한 건물, 수목 :
                    <span class="font-bold text-blue-200">30년</span></span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-tree mt-1 mr-2 text-blue-300"></i>
                  <span
                    >목재 건물 :
                    <span class="font-bold text-blue-200">15년</span></span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-seedling mt-1 mr-2 text-blue-300"></i>
                  <span
                    >기타 목적:
                    <span class="font-bold text-blue-200">5년</span></span
                  >
                </li>
              </ul>
              <p class="text-sm mt-2 text-blue-300">
                ※ 존속기간의 약정이 없는 경우에도 적용됨
              </p>
            </div>
          </div>
          <!-- Right column - Ground Rent -->
          <div
            class="section-card bg-blue-800 bg-opacity-50 rounded-lg p-8 flex flex-col border border-blue-700 w-1/3"
          >
            <div class="flex items-center mb-4">
              <div class="text-blue-300 text-3xl mr-3">
                <i class="fas fa-coins"></i>
              </div>
              <h3 class="text-2xl font-bold">지료</h3>
            </div>
            <div class="space-y-6 text-lg flex-grow">
              <div>
                <h4 class="text-xl font-semibold mb-2 text-blue-200">
                  설정 방식
                </h4>
                <p>지료와 관계없이 설정 가능</p>
                <div class="flex items-center mt-4 space-x-2">
                  <div
                    class="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center"
                  >
                    <i class="fas fa-check text-blue-900 text-xs"></i>
                  </div>
                  <p>무상 설정 가능</p>
                </div>
                <div class="flex items-center mt-2 space-x-2">
                  <div
                    class="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center"
                  >
                    <i class="fas fa-check text-blue-900 text-xs"></i>
                  </div>
                  <p>유상 설정 가능</p>
                </div>
              </div>
              <div class="border-t border-blue-700 pt-6">
                <h4 class="text-xl font-semibold mb-2 text-blue-200">
                  지료 불이행의 효과
                </h4>
                <div
                  class="px-4 py-3 bg-blue-300 bg-opacity-10 rounded-lg border border-blue-800"
                >
                  <p>
                    지료의 약정이 있는 경우,
                    <span class="font-bold"
                      >지상권자가 2년 이상의 지료를 지급하지 않으면</span
                    >
                    지상권설정자는 지상권소멸청구 가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">34 / 50</div>
      </div>
    </div>
    <script>
      // D3.js visualization for duration periods
      document.addEventListener("DOMContentLoaded", function () {
        // Data for duration periods
        const data = [
          { type: "빌딩 나무 -", years: 30, color: "#93c5fd" },
          { type: "목재 건물 -", years: 15, color: "#60a5fa" },
          { type: "기타 목적 -", years: 5, color: "#3b82f6" },
        ];

        // Create SVG container
        const svg = d3
          .select("#duration-chart")
          .append("svg")
          .attr("width", "100%")
          .attr("height", "100%")
          .attr("viewBox", "0 0 400 150");

        // Create horizontal bars
        const barHeight = 30;
        const barPadding = 15;
        const maxYears = 30;

        svg
          .selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", 100)
          .attr("y", (d, i) => i * (barHeight + barPadding) + 10)
          .attr("width", (d) => (d.years / maxYears) * 250)
          .attr("height", barHeight)
          .attr("rx", 4)
          .attr("fill", (d) => d.color);

        // Add labels
        svg
          .selectAll(".type-label")
          .data(data)
          .enter()
          .append("text")
          .attr("class", "type-label")
          .attr("x", 95)
          .attr(
            "y",
            (d, i) => i * (barHeight + barPadding) + 10 + barHeight / 2 + 5
          )
          .attr("text-anchor", "end")
          .attr("fill", "white")
          .attr("font-size", "19px")
          .text((d) => d.type);

        // Add year values
        svg
          .selectAll(".year-label")
          .data(data)
          .enter()
          .append("text")
          .attr("class", "year-label")
          .attr("x", (d) => 100 + (d.years / maxYears) * 250 + 10)
          .attr(
            "y",
            (d, i) => i * (barHeight + barPadding) + 10 + barHeight / 2 + 5
          )
          .attr("fill", "white")
          .attr("font-size", "14px")
          .text((d) => d.years + "년");
      });
    <\/script>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>법정지상권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .feature-item {
        transition: all 0.3s ease;
      }
      .feature-item:hover {
        transform: translateX(5px);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">법정지상권</h1>
        <div class="mt-2 text-blue-300">
          법정지상권의 의의와 유형에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-37 bottom-16 left-0 right-0 px-16">
        <!-- Definition and concept section -->
        <div class="mb-8">
          <div class="flex items-start">
            <div class="text-blue-300 text-4xl mr-4">
              <i class="fas fa-landmark"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-2">의의</h3>
              <p class="text-lg">
                건물과 토지가 한 사람에게 속하다가 건물 또는 토지에 대한
                담보물권의 실행에 의하여 건물과 토지의 소유자가 달라지게 된 경우
                토지소유자가 건물소유자에 대하여 지상권을 설정해 준 것으로 보는
                제도
              </p>
            </div>
          </div>
        </div>
        <!-- Purpose and characteristics -->
        <div class="grid grid-cols-2 gap-8 mb-8">
          <div
            class="bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="flex items-center mb-3">
              <div class="text-blue-300 text-2xl mr-3">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3 class="text-xl font-bold">목적</h3>
            </div>
            <p class="text-lg">
              토지소유자가 건물소유자에게 토지의 이용권 없음을 이유로 건물의
              철거를 청구하는 것을 방지하기 위함
            </p>
          </div>
          <div
            class="bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="flex items-center mb-3">
              <div class="text-blue-300 text-2xl mr-3">
                <i class="fas fa-fingerprint"></i>
              </div>
              <h3 class="text-xl font-bold">특징</h3>
            </div>
            <ul class="space-y-2">
              <li class="flex items-start">
                <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                <span>법률의 규정에 따라 성립</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                <span>등기를 요하지 않음 (단, 처분시는 필요)</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                <span>지료는 지급</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Types of legal superficies -->
        <div>
          <div class="flex items-center mb-4">
            <div class="text-blue-300 text-3xl mr-3">
              <i class="fas fa-sitemap"></i>
            </div>
            <h3 class="text-2xl font-bold">유형</h3>
          </div>
          <div class="grid grid-cols-2 gap-x-8 gap-y-4">
            <!-- Type 1 -->
            <div class="feature-item flex items-start">
              <div class="text-blue-300 text-xl mr-3 mt-1">
                <i class="fas fa-building"></i>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-1">
                  전세건물의 보호를 위한 경우
                </h4>
                <p class="text-base">
                  전세권이 설정된 건물의 토지와 건물 소유자가 달라진 경우
                </p>
              </div>
            </div>
            <!-- Type 2 -->
            <div class="feature-item flex items-start">
              <div class="text-blue-300 text-xl mr-3 mt-1">
                <i class="fas fa-gavel"></i>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-1">
                  저당부동산의 경매의 경우
                </h4>
                <p class="text-base">
                  저당권 실행으로 토지와 건물의 소유자가 달라진 경우
                </p>
              </div>
            </div>
            <!-- Type 3 -->
            <div class="feature-item flex items-start">
              <div class="text-blue-300 text-xl mr-3 mt-1">
                <i class="fas fa-tree"></i>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-1">
                  입목법ㆍ가등기담보법상 법정지상권
                </h4>
                <p class="text-base">특별법에 의해 인정되는 법정지상권</p>
              </div>
            </div>
            <!-- Type 4 -->
            <div class="feature-item flex items-start">
              <div class="text-blue-300 text-xl mr-3 mt-1">
                <i class="fas fa-scroll"></i>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-1">관습상의 법정지상권</h4>
                <p class="text-base">
                  동일인의 소유이었던 토지와 건물이 매매ㆍ강제경매 등에 의하여
                  소유자가 달라지게 된 경우, 관습법에 의해 인정되는 법정지상권
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">35 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>지상권의 갱신청구권과 지상물매수청구권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .feature-card {
        transition: transform 0.3s ease;
      }
      .feature-card:hover {
        transform: translateY(-5px);
      }
      .process-arrow {
        position: relative;
      }
      .process-arrow::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -20px;
        width: 20px;
        height: 2px;
        background-color: rgba(147, 197, 253, 0.5);
        transform: translateY(-50%);
      }
      .process-arrow::before {
        content: "";
        position: absolute;
        top: 50%;
        right: -20px;
        width: 10px;
        height: 10px;
        border-top: 2px solid rgba(147, 197, 253, 0.5);
        border-right: 2px solid rgba(147, 197, 253, 0.5);
        transform: translateY(-50%) rotate(45deg);
      }
      .process-node:last-child .process-arrow::after,
      .process-node:last-child .process-arrow::before {
        display: none;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">
              지상권의 갱신청구권과 지상물매수청구권
            </h1>
            <div class="mt-2 text-blue-300">
              지상권 종료 시 인정되는 권리에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-20 left-0 right-0 px-16">
        <!-- Process flow diagram -->
        <div class="flex justify-center mb-10">
          <div class="flex items-center">
            <div class="grid grid-cols-4 gap-5">
              <div class="grid-cols-1 process-node flex items-center">
                <div
                  class="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center border-2 border-blue-300"
                >
                  <i class="fas fa-hourglass-end text-2xl text-blue-300"></i>
                </div>
                <div class="ml-3 text-lg">
                  <div class="font-semibold">지상권 존속기간 만료</div>
                  <div class="text-blue-300 text-sm">지상물 현존</div>
                </div>
              </div>
              <div class="grid-cols-1 process-node flex items-center">
                <div
                  class="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center border-2 border-blue-300"
                >
                  <i class="fas fa-sync-alt text-2xl text-blue-300"></i>
                </div>
                <div class="ml-3 text-lg">
                  <div class="font-semibold">갱신청구권 행사</div>
                  <div class="text-blue-300 text-sm">
                    지상권설정자에게 계약갱신 <br />
                    청구
                  </div>
                </div>
              </div>
              <div class="grid-cols-1 process-node flex items-center">
                <div
                  class="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center border-2 border-blue-300"
                >
                  <i class="fas fa-times text-2xl text-blue-300"></i>
                </div>
                <div class="ml-3 text-lg">
                  <div class="font-semibold">갱신청구 거절</div>
                  <div class="text-blue-300 text-sm">
                    지상권설정자가 갱신을 거절한 <br />
                    경우
                  </div>
                </div>
              </div>
              <div class="grid-cols-1 process-node flex items-center">
                <div
                  class="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center border-2 border-blue-300"
                >
                  <i class="fas fa-shopping-cart text-2xl text-blue-300"></i>
                </div>
                <div class="ml-3 text-lg">
                  <div class="font-semibold">지상물매수청구권 행사</div>
                  <div class="text-blue-300 text-sm">
                    지상권자가 지상물매수청구권<br />
                    행사
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Two columns for comparison -->
        <div class="grid grid-cols-2 gap-10">
          <!-- 갱신청구권 -->
          <div
            class="feature-card bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 shadow-lg"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center mr-4"
              >
                <i class="fas fa-sync text-3xl text-blue-300"></i>
              </div>
              <h3 class="text-2xl font-bold">지상권자의 갱신청구권</h3>
            </div>
            <ul class="space-y-4 text-xl">
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5"
                >
                  <i class="fas fa-check text-sm text-blue-300"></i>
                </div>
                <div>
                  <span class="font-semibold">의의 :</span> 존속기간이 만료한 후
                  지상물이 존재하는 때에는 지상권설정자에게 계약갱신 청구가능
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5"
                >
                  <i class="fas fa-check text-sm text-blue-300"></i>
                </div>
                <div><span class="font-semibold">법적 성격 :</span> 청구권</div>
              </li>
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5"
                >
                  <i class="fas fa-check text-sm text-blue-300"></i>
                </div>
                <div>
                  <span class="font-semibold">요건 :</span> 지상권 존속기간 만료
                  + 지상물의 현존
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5"
                >
                  <i class="fas fa-check text-sm text-blue-300"></i>
                </div>
                <div>
                  <span class="font-semibold">효과 :</span> 지상권설정자는
                  갱신청구에 응해야 할 의무가 있음 (단, 정당한 이유가 있으면
                  거절 가능)
                </div>
              </li>
            </ul>
          </div>
          <!-- 지상물매수청구권 -->
          <div
            class="feature-card bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 shadow-lg"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center mr-4"
              >
                <i class="fas fa-shopping-cart text-3xl text-blue-300"></i>
              </div>
              <h3 class="text-2xl font-bold">지상권자의 지상물매수청구권</h3>
            </div>
            <ul class="space-y-4 text-xl">
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5"
                >
                  <i class="fas fa-check text-sm text-blue-300"></i>
                </div>
                <div>
                  <span class="font-semibold">의의 :</span> 지상권설정자가
                  갱신청구를 거절한 경우 지상권자는 지상물매수청구권을 행사할 수
                  있음
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5"
                >
                  <i class="fas fa-check text-sm text-blue-300"></i>
                </div>
                <div><span class="font-semibold">법적 성격 :</span> 형성권</div>
              </li>
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5"
                >
                  <i class="fas fa-check text-sm text-blue-300"></i>
                </div>
                <div>
                  <span class="font-semibold">요건 :</span> 갱신청구의 거절
                  (지상권설정자가 갱신을 거절한 경우)
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center mr-3 mt-0.5"
                >
                  <i class="fas fa-check text-sm text-blue-300"></i>
                </div>
                <div>
                  <span class="font-semibold">효과 :</span> 청구에 의해
                  지상권설정자는 지상물을 매수할 의무가 발생함 (적정한 가격으로
                  매수)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">36 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>지역권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .concept-box {
        transition: all 0.3s ease;
      }
      .concept-box:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex">
          <h1 class="text-4xl font-bold">지역권</h1>
          <div class="w-3"></div>
          <div class="mt-2 text-blue-300">
            지역권의 의의, 성립요건, 종류에 대한 설명
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-24 bottom-16 left-0 right-0 px-12 py-4">
        <div class="grid grid-cols-2 gap-6 h-full">
          <!-- Left column: Definition and establishment -->
          <div class="col-span-1">
            <!-- Definition -->
            <div
              class="concept-box bg-blue-800 bg-opacity-50 rounded-lg p-5 mb-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-map-signs"></i>
                </div>
                <h3 class="text-2xl font-bold">지역권의 의의</h3>
              </div>
              <p class="text-lg">
                설정행위에서 정한 일정한 목적을 위하여 타인의 토지(승역지)를
                자기 토지(요역지)의 편익에 이용할 수 있는 용익물권
              </p>
              <div class="mt-4 bg-blue-900 bg-opacity-50 p-5 rounded-lg">
                <ul
                  class="list-disc list-inside space-y-4 text-blue-100 text-lg"
                >
                  <li>
                    요역지와 지역권을 분리하여 지역권만을 양도하거나 다른 권리의
                    목적이 될 수 없음
                  </li>
                  <li>
                    요역지에 대한 소유권이전등기가 있으면 지역권에 대한 별도의
                    이전등기가 없어도 지역권은 이전됨
                  </li>
                </ul>
              </div>
            </div>
            <!-- Establishment -->
            <div
              class="concept-box bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-file-signature"></i>
                </div>
                <h3 class="text-2xl font-bold">성립요건</h3>
              </div>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="text-blue-300 text-lg mr-3 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <p class="text-lg">지역권설정자와 지역권자 사이의 설정행위</p>
                </div>
                <div class="flex items-start">
                  <div class="text-blue-300 text-lg mr-3 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <p class="text-lg">지역권설정등기</p>
                </div>
                <div class="flex items-start">
                  <div class="text-blue-300 text-lg mr-3 mt-1">
                    <i class="fas fa-info-circle"></i>
                  </div>
                  <p class="text-lg">
                    취득시효에 의한 취득 가능 (계속, 표현되는 지역권만)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Right column: Types of easements and visualization -->
          <div class="col-span-1">
            <div
              class="concept-box bg-blue-800 bg-opacity-50 rounded-lg p-2 h-full border border-blue-700"
            >
              <div class="flex items-center mb-5">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-layer-group"></i>
                </div>
                <h3 class="text-2xl font-bold">지역권의 종류</h3>
              </div>
              <div class="grid grid-cols-1 gap-2">
                <!-- Type 1 -->
                <div class="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
                  <h4
                    class="text-xl font-semibold mb-3 text-blue-200 flex items-center"
                  >
                    <i class="fas fa-toggle-on mr-2"></i>
                    작위지역권 · 부작위지역권
                  </h4>
                  <div class="grid grid-cols-2 gap-3 text-lg">
                    <div class="bg-blue-800 bg-opacity-50 p-3 rounded">
                      <div class="font-medium text-blue-200 mb-1">
                        작위지역권
                      </div>
                      <p>통행지역권, 인수지역권</p>
                    </div>
                    <div class="bg-blue-800 bg-opacity-50 p-3 rounded">
                      <div class="font-medium text-blue-200 mb-1">
                        부작위지역권
                      </div>
                      <p>전망지역권</p>
                    </div>
                  </div>
                </div>
                <!-- Type 2 -->
                <div class="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
                  <h4
                    class="text-xl font-semibold mb-3 text-blue-200 flex items-center"
                  >
                    <i class="fas fa-sync-alt mr-2"></i>
                    계속지역권 · 불계속지역권
                  </h4>
                  <div class="grid grid-cols-2 gap-3 text-lg">
                    <div class="bg-blue-800 bg-opacity-50 p-3 rounded">
                      <div class="font-medium text-blue-200 mb-1">
                        계속지역권
                      </div>
                      <p>시설이 설치된 인수지역권</p>
                    </div>
                    <div class="bg-blue-800 bg-opacity-50 p-3 rounded">
                      <div class="font-medium text-blue-200 mb-1">
                        불계속지역권
                      </div>
                      <p>시설이 설치되지 않은 통행지역권</p>
                    </div>
                  </div>
                </div>
                <!-- Type 3 -->
                <div class="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
                  <h4
                    class="text-xl font-semibold mb-3 text-blue-200 flex items-center"
                  >
                    <i class="fas fa-eye mr-2"></i>
                    표현지역권 · 불표현지역권
                  </h4>
                  <div class="grid grid-cols-2 gap-3 text-lg">
                    <div class="bg-blue-800 bg-opacity-50 p-3 rounded">
                      <div class="font-medium text-blue-200 mb-1">
                        표현지역권
                      </div>
                      <p>외부에서 인식 가능한 지역권</p>
                    </div>
                    <div class="bg-blue-800 bg-opacity-50 p-3 rounded">
                      <div class="font-medium text-blue-200 mb-1">
                        불표현지역권
                      </div>
                      <p>조망지역권</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Visualization of dominant and servient lands -->
      <div class="absolute bottom-20 left-12 w-80 h-48" id="land-visualization">
        <!-- <script>
          // Create a simple visualization of dominant and servient lands
          const svg = d3
            .select("#land-visualization")
            .append("svg")
            .attr("width", 320)
            .attr("height", 192)
            .attr("viewBox", "0 0 320 192");

          // Dominant land
          svg
            .append("rect")
            .attr("x", 20)
            .attr("y", 70)
            .attr("width", 100)
            .attr("height", 80)
            .attr("fill", "#4299e1")
            .attr("stroke", "#fff")
            .attr("stroke-width", 2)
            .attr("rx", 4);

          // Servient land
          svg
            .append("rect")
            .attr("x", 200)
            .attr("y", 70)
            .attr("width", 100)
            .attr("height", 80)
            .attr("fill", "#90cdf4")
            .attr("stroke", "#fff")
            .attr("stroke-width", 2)
            .attr("rx", 4);

          // Path between lands (representing the easement)
          svg
            .append("path")
            .attr("d", "M 120 110 L 200 110")
            .attr("stroke", "#fff")
            .attr("stroke-width", 3)
            .attr("stroke-dasharray", "5,5")
            .attr("marker-end", "url(#arrowhead)");

          // Add arrow marker
          svg
            .append("defs")
            .append("marker")
            .attr("id", "arrowhead")
            .attr("markerWidth", 10)
            .attr("markerHeight", 7)
            .attr("refX", 9)
            .attr("refY", 3.5)
            .attr("orient", "auto")
            .append("polygon")
            .attr("points", "0 0, 10 3.5, 0 7")
            .attr("fill", "#fff");

          // Labels
          svg
            .append("text")
            .attr("x", 70)
            .attr("y", 110)
            .attr("text-anchor", "middle")
            .attr("fill", "#fff")
            .attr("font-size", 14)
            .text("요역지");

          svg
            .append("text")
            .attr("x", 250)
            .attr("y", 110)
            .attr("text-anchor", "middle")
            .attr("fill", "#fff")
            .attr("font-size", 14)
            .text("승역지");

          svg
            .append("text")
            .attr("x", 160)
            .attr("y", 95)
            .attr("text-anchor", "middle")
            .attr("fill", "#fff")
            .attr("font-size", 12)
            .text("지역권");

          // Title
          svg
            .append("text")
            .attr("x", 160)
            .attr("y", 30)
            .attr("text-anchor", "middle")
            .attr("fill", "#90cdf4")
            .attr("font-size", 16)
            .attr("font-weight", "bold")
            .text("지역권 관계도");
        <\/script> -->
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">37 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>전세권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .section-card {
        transition: all 0.3s ease;
        background: rgba(26, 54, 93, 0.4);
        border: 1px solid rgba(66, 153, 225, 0.3);
      }
      .section-card:hover {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-color: rgba(66, 153, 225, 0.6);
      }
      .icon-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(66, 153, 225, 0.2);
        border: 2px solid rgba(66, 153, 225, 0.5);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h1 class="text-4xl font-bold">전세권</h1>
            <div class="w-3"></div>
            <div class="mt-2 text-blue-300">
              전세권의 의의, 존속기간, 효력에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-24 bottom-16 left-0 right-0 px-12 py-4">
        <!-- Section 1: 전세권의 의의 -->
        <div class="section-card rounded-lg p-2 mb-2">
          <div class="flex items-start">
            <div class="icon-circle mr-6 flex-shrink-0">
              <i class="fas fa-home text-blue-300 text-2xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-3 text-blue-300">
                전세권의 의의
              </h2>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span
                    >전세금을 지급하고 타인의 부동산을 점유하여 그 부동산의
                    용도에 좇아 사용·수익하고, 전세권이 소멸하면 그 부동산의
                    전부에 대하여 후순위권리자 기타 채권자보다 우선하여 전세금을
                    반환받을 수 있는 용익물권</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span>토지, 건물 모두 목적이 될 수 있음</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span>용익물권성과 담보물권성을 모두 가짐</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span
                    >전세권설정자와 전세권자 사이의 전세권설정의 합의와 전세금의
                    지급 및 등기를 통하여 성립됨</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Section 2: 존속기간 -->
        <div class="section-card rounded-lg p-2 mb-2">
          <div class="flex items-start">
            <div class="icon-circle mr-6 flex-shrink-0">
              <i class="fas fa-clock text-blue-300 text-2xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-3 text-blue-300">존속기간</h2>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span>10년을 넘지 못함</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span
                    >건물전세권의 경우 1년 미만으로 약정할 수 없으며, 법정갱신이
                    인정됨</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span
                    >존속기간을 정하지 않은 경우: 전세권설정자와 전세권자는
                    언제든지 상대방에게 전세권의 소멸을 통고할 수 있고 통고를
                    받은 날부터 6개월이 지나면 전세권은 소멸함</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Section 3: 효력 -->
        <div class="section-card rounded-lg p-2">
          <div class="flex items-start">
            <div class="icon-circle mr-6 flex-shrink-0">
              <i class="fas fa-gavel text-blue-300 text-2xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-3 text-blue-300">효력</h2>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span>전세목적물을 그 용도에 따라서 사용·수익할 수 있음</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span
                    >전세목적물의 전전세, 임대가능 - 단, 설정행위에서 금지할 수
                    있음</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle mt-1 mr-2 text-blue-300"></i>
                  <span
                    >전세권 소멸 후 전세금을 변제받기 위하여 전세목적물을 경매할
                    수 있으며, 그로부터 우선변제를 받을 수 있음
                    (담보물권성)</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with lecture info and slide number -->
      <div
        class="absolute bottom-4 left-8 right-8 flex justify-between items-center"
      >
        <div class="text-sm text-blue-300">
          제3강 제한물권(용익물권ㆍ담보물권)
        </div>
        <div class="text-sm text-blue-300">38 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>담보물권 – 유치권·질권·저당권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .security-card {
        transition: all 0.3s ease;
      }
      .security-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h1 class="text-4xl font-bold">
              담보물권 - 유치권 · 질권 · 저당권
            </h1>
            <div class="w-3"></div>
            <div class="mt-2 text-blue-300">
              담보물권의 의의와 종류에 대한 소개
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-27 bottom-16 left-0 right-0 px-16">
        <!-- Introduction to Security Rights -->
        <div class="mb-4">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-shield-alt text-blue-300 mr-3"></i>
            담보의 의의
          </h2>
          <p class="text-lg pl-8">
            채무자가 채무를 이행하지 않거나 이행할 수 없게 되는 경우를 대비해
            채무자의 변제를 미리 확보하여 채권자의 위험을 줄임으로써 채권자가
            채권의 만족을 얻을 가능성을 높이는 수단
          </p>
        </div>
        <!-- Types of Security -->
        <div class="grid grid-cols-2 gap-8 mb-5">
          <!-- Personal Security -->
          <div
            class="security-card bg-blue-800 bg-opacity-50 rounded-lg px-5 py-2 border border-blue-700"
          >
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <i class="fas fa-user-shield text-blue-300 mr-3 text-2xl"></i>
              인적 담보
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>보증채무ㆍ연대채무</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>제3자의 일반재산까지 책임재산으로 함</span>
              </li>
              <li class="flex items-start">
                <i
                  class="fas fa-exclamation-circle text-yellow-300 mt-1 mr-2"
                ></i>
                <span>담보하는 자의 재산상태에 따라 담보의 효력이 좌우됨</span>
              </li>
            </ul>
          </div>
          <!-- Real Security -->
          <div
            class="security-card bg-blue-800 bg-opacity-50 rounded-lg px-5 py-2 border border-blue-700"
          >
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <i class="fas fa-home text-blue-300 mr-3 text-2xl"></i>
              물적 담보
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span
                  >채무자 또는 제3자(물상보증인)의 특정한 물건으로부터
                  변제</span
                >
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span>다른 일반채권자보다 우선하여 변제받을 수 있음</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-plus-circle text-green-300 mt-1 mr-2"></i>
                <span>물건의 객관적 가치에 따라 담보가 가능함</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Types of Security Rights -->
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-list-ul text-blue-300 mr-3"></i>
            담보물권의 종류
          </h2>
          <div class="grid grid-cols-3 gap-6">
            <!-- Right of Retention -->
            <div
              class="security-card bg-blue-800 bg-opacity-30 rounded-lg p-2 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="bg-blue-700 rounded-full p-3 mr-3">
                  <i class="fas fa-hand-holding text-2xl"></i>
                </div>
                <h4 class="text-xl font-bold">유치권</h4>
              </div>
              <p>
                타인의 물건 또는 유가증권을 점유한 자가 그와 관련하여 발생한
                채권을 변제받을 때까지 물건을 유치할 수 있는 법정담보물권
              </p>
            </div>
            <!-- Pledge -->
            <div
              class="security-card bg-blue-800 bg-opacity-30 rounded-lg p-2 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="bg-blue-700 rounded-full p-3 mr-3">
                  <i class="fas fa-box-open text-2xl"></i>
                </div>
                <h4 class="text-xl font-bold">질권</h4>
              </div>
              <p>
                채권자가 채권의 담보를 위해 인도받은 동산이나 재산권을 유치하고
                변제가 없을 경우 우선변제를 받는 담보물권
              </p>
            </div>
            <!-- Mortgage -->
            <div
              class="security-card bg-blue-800 bg-opacity-30 rounded-lg p-2 border border-blue-700"
            >
              <div class="flex items-center mb-3">
                <div class="bg-blue-700 rounded-full p-3 mr-3">
                  <i class="fas fa-building text-2xl"></i>
                </div>
                <h4 class="text-xl font-bold">저당권</h4>
              </div>
              <p>
                채무자 또는 제3자가 점유 이전 없이 담보로 제공한 부동산에 대하여
                변제가 없을 때 우선변제를 받는 담보물권
              </p>
            </div>
          </div>
        </div>
        <!-- Non-typical Security Rights -->
        <div>
          <h2 class="text-2xl font-semibold mb-2 flex items-center">
            <i class="fas fa-lightbulb text-yellow-300 mr-3"></i>
            비전형담보
          </h2>
          <p class="text-lg pl-8">
            가등기담보권, 양도담보권 등도 인정됨 (가등기담보법)
          </p>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">39 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>담보물권의 통유성</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .feature-card {
        transition: all 0.3s ease;
      }
      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .icon-container {
        width: 80px;
        height: 80px;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">담보물권의 통유성</h1>
        <div class="mt-2 text-blue-300">담보물권의 공통적 특성에 대한 설명</div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-20 left-0 right-0 px-16">
        <!-- Introduction text -->
        <div class="mb-8 text-center">
          <p class="text-xl">
            유치권·질권·저당권 등 담보물권은 다음과 같은 공통적인 특성을
            가집니다.
          </p>
        </div>
        <!-- Feature cards -->
        <div class="grid grid-cols-2 gap-8">
          <!-- Card 1: 부종성 -->
          <div
            class="feature-card bg-blue-800 bg-opacity-50 rounded-lg p-6 flex border border-blue-700"
          >
            <div
              class="icon-container flex items-center justify-center bg-blue-700 rounded-full mr-6"
            >
              <i class="fas fa-link text-4xl text-blue-300"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3">부종성</h3>
              <p class="text-lg">
                담보물권은 그 피담보채권에 종속하여 피담보채권이 성립해야
                담보물권도 성립하고, 피담보채권이 소멸하면 담보물권도
                소멸합니다. 담보물권은 피담보채권 없이 독립하여 존재할 수
                없습니다.
              </p>
            </div>
          </div>
          <!-- Card 2: 수반성 -->
          <div
            class="feature-card bg-blue-800 bg-opacity-50 rounded-lg p-6 flex border border-blue-700"
          >
            <div
              class="icon-container flex items-center justify-center bg-blue-700 rounded-full mr-6"
            >
              <i class="fas fa-exchange-alt text-4xl text-blue-300"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3">수반성</h3>
              <p class="text-lg">
                피담보채권이 이전되면 담보물권도 함께 이전됩니다. 채권양도 시
                담보물권도 자동으로 양수인에게 이전되며, 이는 담보물권이 채권에
                수반하여 이전되는 성질을 의미합니다.
              </p>
            </div>
          </div>
          <!-- Card 3: 물상대위성 -->
          <div
            class="feature-card bg-blue-800 bg-opacity-50 rounded-lg p-6 flex border border-blue-700"
          >
            <div
              class="icon-container flex items-center justify-center bg-blue-700 rounded-full mr-6"
            >
              <i class="fas fa-random text-4xl text-blue-300"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3">물상대위성</h3>
              <p class="text-lg">
                담보물권의 목적물이 멸실, 훼손, 수용 등으로 인해 목적물의
                소유자가 제3자에 대하여 금전 기타 물건으로 배상청구권을 취득하는
                경우, 담보물권자는 그 배상금에 대해서도 담보물권을 행사할 수
                있습니다.
              </p>
            </div>
          </div>
          <!-- Card 4: 불가분성 -->
          <div
            class="feature-card bg-blue-800 bg-opacity-50 rounded-lg p-6 flex border border-blue-700"
          >
            <div
              class="icon-container flex items-center justify-center bg-blue-700 rounded-full mr-6"
            >
              <i class="fas fa-object-ungroup text-4xl text-blue-300"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3">불가분성</h3>
              <p class="text-lg">
                담보물권은 피담보채권의 전액을 담보하기 위하여 목적물 전체에
                효력이 미칩니다. 채권의 일부가 변제되더라도 담보물권은 나머지
                채권 전액에 대하여 목적물 전체에 효력이 계속 미치게 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">40 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html><html lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>유치권</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script><style>
        body {width: 1280px; min-height: 720px; margin: 0;
            padding: 0;}
        .slide-container {
            width: 1280px;
            min-height: 720px;
            position: relative;
            
        }
        .bg-pattern {
            opacity: 0.05;
            background-image: linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .requirement-item {
            transition: all 0.3s ease;
        }
        .requirement-item:hover {
            transform: translateX(5px);
        }
    </style>
</head>
<body>
<div class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
<!-- Background pattern -->
<div class="bg-pattern absolute inset-0"></div>
<!-- Header with title -->
<div class="absolute top-0 left-0 right-0 px-12 py-8">
<div class="flex justify-between items-center">
<div>
<h1 class="text-4xl font-bold">유치권</h1>
<div class="mt-2 text-blue-300">유치권의 의의와 성립요건에 대한 설명</div>
</div>
<div class="text-right">
<div class="text-blue-300">제3강 제한물권</div>
<div class="text-xl">담보물권</div>
</div>
</div>
<div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
</div>
<!-- Main content -->
<div class="absolute top-40 bottom-20 left-0 right-0 px-16">
<div class="grid grid-cols-2 gap-10 h-full">
<!-- Left column: Definition -->
<div class="bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 flex flex-col">
<div class="flex items-center mb-6">
<div class="text-blue-300 text-4xl mr-4">
<i class="fas fa-hand-holding"></i>
</div>
<h2 class="text-2xl font-bold">유치권의 의의</h2>
</div>
<div class="text-lg space-y-6 flex-grow">
<p>
                            타인의 물건 또는 유가증권을 점유한 자가 그와 관련하여 발생한 채권을 가지는 경우 채권을 변제받을 때까지 물건이나 유가증권을 유치할 수 있는 법정담보물권
                        </p>
<div class="flex items-center mt-4">
<div class="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-blue-900 mr-4">
<i class="fas fa-balance-scale"></i>
</div>
<div>
<div class="font-semibold">공평의 원칙에 따라 인정</div>
</div>
</div>
<div class="mt-6 border-t border-blue-700 pt-6">
<div class="font-semibold mb-2">동시이행의 항변권과의 구별</div>
<ul class="list-disc pl-5 space-y-2">
<li>동시이행의 항변권은 <span class="text-blue-300">항변권</span>으로, 동시이행 관계에 있는 자들 사이에서만 주장 가능</li>
<li>유치권은 <span class="text-blue-300">물권</span>으로, 누구에게나 행사 가능</li>
<li>두 권리는 병존 가능함</li>
</ul>
</div>
</div>
</div>
<!-- Right column: Requirements -->
<div class="bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700">
<div class="flex items-center mb-6">
<div class="text-blue-300 text-4xl mr-4">
<i class="fas fa-list-check"></i>
</div>
<h2 class="text-2xl font-bold">유치권의 성립요건</h2>
</div>
<div class="text-lg">
<p class="mb-4">요건이 달성되면 당연히 성립 - 법정담보물권</p>
<ul class="space-y-5 mt-6">
<li class="requirement-item flex items-start">
<div class="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-900 mr-4 flex-shrink-0">
<span>1</span>
</div>
<div>
<div class="font-semibold">목적물과 피담보채권의 견련관계</div>
<p class="text-blue-200 text-base">물건과 채권 사이에 법적 관련성이 존재해야 함</p>
</div>
</li>
<li class="requirement-item flex items-start">
<div class="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-900 mr-4 flex-shrink-0">
<span>2</span>
</div>
<div>
<div class="font-semibold">채권의 변제기 도래</div>
<p class="text-blue-200 text-base">채권의 이행기가 도래한 상태여야 함</p>
</div>
</li>
<li class="requirement-item flex items-start">
<div class="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-900 mr-4 flex-shrink-0">
<span>3</span>
</div>
<div>
<div class="font-semibold">타인의 물건ㆍ유가증권에 대한 점유</div>
<p class="text-blue-200 text-base">점유를 상실하면 유치권도 소멸함</p>
</div>
</li>
<li class="requirement-item flex items-start">
<div class="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-900 mr-4 flex-shrink-0">
<span>4</span>
</div>
<div>
<div class="font-semibold">불법행위로 취득한 점유가 아닐 것</div>
<p class="text-blue-200 text-base">불법적인 방법으로 취득한 점유에는 유치권 인정 안됨</p>
</div>
</li>
<li class="requirement-item flex items-start">
<div class="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-900 mr-4 flex-shrink-0">
<span>5</span>
</div>
<div>
<div class="font-semibold">유치권배제특약의 부존재</div>
<p class="text-blue-200 text-base">유치권을 배제하는 특별한 약정이 없어야 함</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
<!-- Footer with slide number -->
<div class="absolute bottom-4 right-8">
<div class="text-sm text-blue-300">41 / 50</div>
</div>
</div>

</body></html>`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>유치권 (계속)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .effect-card {
        transition: all 0.3s ease;
      }
      .effect-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">유치권 (계속)</h1>
            <div class="mt-2 text-blue-300">유치권의 효력에 대한 설명</div>
          </div>
          <div class="text-right">
            <div class="text-blue-300">제3강</div>
            <div class="text-xl">제한물권(용익물권ㆍ담보물권)</div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-20 left-0 right-0 px-16">
        <div class="flex flex-col h-full">
          <h2 class="text-2xl font-semibold mb-6 text-blue-200">
            유치권의 효력
          </h2>
          <div class="grid grid-cols-3 gap-6 mb-8">
            <!-- Effect 1: Retention right -->
            <div
              class="effect-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-hand-holding"></i>
                </div>
                <h3 class="text-xl font-bold">목적물을 유치할 권리</h3>
              </div>
              <p class="text-base text-lg">
                유치권자는 채무자가 채무를 변제할 때까지 목적물을 점유하고
                반환을 거절할 수 있는 권리를 가집니다.
              </p>
            </div>
            <!-- Effect 2: Fruit collection -->
            <div
              class="effect-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-apple-alt"></i>
                </div>
                <h3 class="text-xl font-bold">과실수취권</h3>
              </div>
              <p class="text-base text-lg">
                유치권자는 유치물로부터 발생하는 과실을 수취할 수 있으며, 이를
                채권의 변제에 충당할 수 있습니다.
              </p>
            </div>
            <!-- Effect 3: Expense reimbursement -->
            <div
              class="effect-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-receipt"></i>
                </div>
                <h3 class="text-xl font-bold">비용상환청구권</h3>
              </div>
              <p class="text-base text-lg">
                유치권자는 유치물에 지출한 필요비와 유익비에 대한 상환을 청구할
                수 있습니다.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <!-- Effect 4: Auction request -->
            <div
              class="effect-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-gavel"></i>
                </div>
                <h3 class="text-xl font-bold">경매청구권</h3>
              </div>
              <p class="text-base mb-4 text-lg">
                유치권자는 채무자가 채무를 이행하지 않는 경우, 법원에 유치물의
                경매를 청구할 수 있습니다.
              </p>
              <div class="flex items-start">
                <i class="fas fa-info-circle text-blue-300 mt-1 mr-2"></i>
                <p class="text-sm text-blue-200 text-lg">
                  경매청구권은 유치권자가 유치물을 환가하여 채권의 만족을 얻을
                  수 있는 수단으로 작용합니다.
                </p>
              </div>
            </div>
            <!-- Effect 5: No priority for reimbursement -->
            <div
              class="effect-card bg-blue-800 bg-opacity-50 rounded-lg p-6 border border-blue-700"
            >
              <div class="flex items-center mb-4">
                <div class="text-blue-300 text-3xl mr-4">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3 class="text-xl font-bold">우선변제권의 불인정</h3>
              </div>
              <p class="text-base mb-4 text-lg">
                유치권자는 원칙적으로 다른 채권자보다 우선하여 변제를 받을 수
                있는 권리(우선변제권)가 인정되지 않습니다.
              </p>
              <div class="flex items-start">
                <i class="fas fa-lightbulb text-blue-300 mt-1 mr-2"></i>
                <p class="text-sm text-blue-200 text-lg">
                  다만, 경매에서의 매수인에게 유치권으로 대항 가능하여 사실상
                  우선변제권이 인정되는 것과 유사한 효과를 가집니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">42 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>질권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .feature-card {
        transition: all 0.3s ease;
      }
      .feature-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">질권</h1>
            <div class="mt-2 text-blue-300">
              질권의 의의와 동산질권에 대한 설명
            </div>
          </div>
          <div class="text-right text-4xl text-blue-300">
            <i class="fas fa-lock"></i>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-16">
        <!-- Definition Section -->
        <div class="mb-7">
          <h2 class="text-2xl font-bold mb-4 flex items-center">
            <i class="fas fa-info-circle text-blue-300 mr-3"></i>질권의 의의
          </h2>
          <div class="ml-8 text-lg leading-relaxed">
            <p>
              채권자가 채권의 담보를 목적으로 채무자 또는
              제3자(물상보증인)으로부터 인도받은 동산이나 재산권을 채무의 변제가
              있을 때까지 유치함으로써 채무의 변제를 간접적으로 강제하고 채무의
              변제가 이루어지지 않는 경우에는 그 동산이나 재산권으로부터
              우선변제를 받을 수 있는 담보물권
            </p>
          </div>
        </div>
        <!-- Movable Property Pledge Section -->
        <div class="grid grid-cols-2 gap-8">
          <!-- Left Column: Requirements -->
          <div
            class="feature-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-4 border border-blue-700"
          >
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <i class="fas fa-clipboard-list text-blue-300 mr-2"></i>동산질권의
              성립요건
            </h3>
            <ul class="space-y-3 ml-2 text-lg">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span
                  ><strong>피담보채권</strong> - 질권으로 담보되는 채권</span
                >
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span
                  ><strong>질권설정계약</strong> - 질권설정자와 질권자 간의
                  합의</span
                >
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span><strong>동산의 인도</strong> - 점유개정은 불가</span>
              </li>
            </ul>
          </div>
          <!-- Right Column: Effects -->
          <div
            class="feature-card bg-blue-800 bg-opacity-50 rounded-lg px-6 py-4 border border-blue-700"
          >
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <i class="fas fa-bolt text-blue-300 mr-2"></i>동산질권의 효력
            </h3>
            <ul class="space-y-3 ml-2 text-lg">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span
                  ><strong>유치적 효력</strong> - 변제 시까지 목적물을 점유할 수
                  있는 권리</span
                >
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span
                  ><strong>경매청구권</strong> - 목적물을 경매할 수 있는
                  권리</span
                >
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                <span
                  ><strong>우선변제권</strong> - 목적물의 경매대가에서 다른
                  채권자에 우선하여 변제받을 권리</span
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- Additional Information: Jeongjilgwon -->
        <div
          class="mt-8 bg-blue-800 bg-opacity-30 rounded-lg px-6 py-4 border border-blue-700"
        >
          <h3 class="text-xl font-bold mb-3 flex items-center">
            <i class="fas fa-exchange-alt text-blue-300 mr-2"></i>전질권
          </h3>
          <p class="text-lg leading-relaxed">
            질권자는 질권의 범위 내에서 질권설정자의 승낙 없이 자기 책임으로
            전질이 가능함(책임전질, 채권ㆍ질권공동입질). 또한 질권설정자의
            승낙을 얻어 전질할 수도 있음(승낙전질).
          </p>
        </div>
      </div>
      <!-- Visual representation of pledge -->
      <!-- <div class="absolute bottom-28 right-16" id="pledge-diagram"></div> -->
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">43 / 50</div>
      </div>
    </div>
    <script>
      // Simple diagram to illustrate the pledge concept
      const svg = d3
        .select("#pledge-diagram")
        .append("svg")
        .attr("width", 200)
        .attr("height", 120);

      // Creditor
      svg
        .append("circle")
        .attr("cx", 40)
        .attr("cy", 40)
        .attr("r", 30)
        .attr("fill", "rgba(59, 130, 246, 0.5)")
        .attr("stroke", "#93c5fd")
        .attr("stroke-width", 2);

      svg
        .append("text")
        .attr("x", 40)
        .attr("y", 45)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text("채권자");

      // Debtor
      svg
        .append("circle")
        .attr("cx", 160)
        .attr("cy", 40)
        .attr("r", 30)
        .attr("fill", "rgba(59, 130, 246, 0.3)")
        .attr("stroke", "#93c5fd")
        .attr("stroke-width", 2);

      svg
        .append("text")
        .attr("x", 160)
        .attr("y", 45)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text("채무자");

      // Property
      svg
        .append("rect")
        .attr("x", 85)
        .attr("y", 80)
        .attr("width", 30)
        .attr("height", 30)
        .attr("fill", "rgba(59, 130, 246, 0.7)")
        .attr("stroke", "#93c5fd")
        .attr("stroke-width", 2);

      svg
        .append("text")
        .attr("x", 100)
        .attr("y", 98)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text("동산");

      // Arrows
      svg
        .append("line")
        .attr("x1", 70)
        .attr("y1", 40)
        .attr("x2", 130)
        .attr("y2", 40)
        .attr("stroke", "#93c5fd")
        .attr("stroke-width", 2)
        .attr("marker-end", "url(#arrow)");

      svg
        .append("line")
        .attr("x1", 160)
        .attr("y1", 70)
        .attr("x2", 115)
        .attr("y2", 80)
        .attr("stroke", "#93c5fd")
        .attr("stroke-width", 2)
        .attr("marker-end", "url(#arrow)");

      svg
        .append("line")
        .attr("x1", 85)
        .attr("y1", 80)
        .attr("x2", 40)
        .attr("y2", 70)
        .attr("stroke", "#93c5fd")
        .attr("stroke-width", 2)
        .attr("marker-end", "url(#arrow)");

      // Arrow marker
      svg
        .append("defs")
        .append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 8)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "#93c5fd");
    <\/script>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>권리질권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .feature-box {
        transition: all 0.3s ease;
      }
      .feature-box:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">권리질권</h1>
        <div class="mt-2 text-blue-300">
          권리질권의 성립요건과 효력에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-16">
        <!-- Definition Section -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="text-3xl text-blue-300 mr-4">
              <i class="fas fa-file-contract"></i>
            </div>
            <h2 class="text-2xl font-semibold">권리질권의 의의</h2>
          </div>
          <div class="ml-12 text-lg">
            <p>
              권리를 목적으로 하는 질권 -
              <span class="text-blue-300 font-medium">채권질권이 일반적임</span>
            </p>
          </div>
        </div>
        <!-- Main content in two columns -->
        <div class="flex gap-12">
          <!-- Left column: Establishment Requirements -->
          <div class="w-1/2">
            <div
              class="feature-box bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 h-full"
            >
              <div class="flex items-center mb-6">
                <div class="text-3xl text-blue-300 mr-4">
                  <i class="fas fa-clipboard-list"></i>
                </div>
                <h2 class="text-2xl font-semibold">성립요건</h2>
              </div>
              <ul class="space-y-4 text-xl">
                <li class="flex">
                  <div class="text-blue-300 mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <span class="font-medium">피담보채권</span>
                  </div>
                </li>
                <li class="flex">
                  <div class="text-blue-300 mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <span class="font-medium">질권설정계약</span>
                  </div>
                </li>
                <li class="flex">
                  <div class="text-blue-300 mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <span class="font-medium">질권의 목적이 되는 권리</span>
                    <div class="text-lg text-blue-100 mt-1">
                      (부동산 사용ㆍ수익권 불가)
                    </div>
                  </div>
                </li>
                <li class="flex">
                  <div class="text-blue-300 mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <span class="font-medium"
                      >채권의 이전방식에 따라 설정됨</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right column: Effects -->
          <div class="w-1/2">
            <div
              class="feature-box bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700 h-full"
            >
              <div class="flex items-center mb-6">
                <div class="text-3xl text-blue-300 mr-4">
                  <i class="fas fa-bolt"></i>
                </div>
                <h2 class="text-2xl font-semibold">효력</h2>
              </div>
              <ul class="space-y-6 text-xl">
                <li>
                  <div class="flex items-center mb-2">
                    <div class="text-blue-300 mr-3">
                      <i class="fas fa-hand-holding"></i>
                    </div>
                    <span class="font-medium text-xl">유치적 효력</span>
                  </div>
                  <div class="ml-9 text-blue-100">동산에 비하여 약함</div>
                </li>
                <li>
                  <div class="flex items-center mb-2">
                    <div class="text-blue-300 mr-3">
                      <i class="fas fa-file-invoice-dollar"></i>
                    </div>
                    <span class="font-medium text-xl"
                      >권리(채권)의 직접청구</span
                    >
                  </div>
                  <div class="ml-9 text-blue-100">
                    질권자는 채권의 내용에 따라 직접 청구 가능
                  </div>
                </li>
                <li>
                  <div class="flex items-center mb-2">
                    <div class="text-blue-300 mr-3">
                      <i class="fas fa-gavel"></i>
                    </div>
                    <span class="font-medium text-xl"
                      >민사집행법에 따른 집행</span
                    >
                  </div>
                  <div class="ml-9 text-blue-100">
                    민사집행법에 따라 권리에 대한 집행 절차 진행
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footnotes -->
        <div class="mt-8 text-sm text-blue-200">
          <div class="flex items-start">
            <div class="mr-2 mt-0.5">※</div>
            <div>
              권리질권은 동산질권과 달리 권리의 특성에 따라 설정방법과 효력이
              다르게 적용됩니다.
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">44 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>저당권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .content-box {
        background-color: rgba(30, 58, 138, 0.4);
        border: 1px solid rgba(96, 165, 250, 0.3);
        transition: all 0.3s ease;
      }
      .content-box:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        border-color: rgba(96, 165, 250, 0.5);
      }
      .req-item {
        transition: all 0.2s ease;
      }
      .req-item:hover {
        transform: translateX(5px);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">저당권</h1>
        <div class="mt-2 text-blue-300">
          저당권의 의의와 성립요건에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-32 bottom-16 left-0 right-0 px-16">
        <div class="grid grid-cols-5 gap-8 h-full">
          <!-- Definition section (2 columns) -->
          <div class="col-span-2 content-box rounded-lg p-8 flex flex-col">
            <div class="flex items-center mb-6">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-landmark"></i>
              </div>
              <h2 class="text-2xl font-bold">저당권의 의의</h2>
            </div>
            <p class="text-lg mb-6">
              채무자 또는 제3자가 점유의 이전 없이 채무의 담보로 제공한 부동산에
              대하여 채무의 변제가 없을 때 그 부동산으로부터 우선변제를 받을 수
              있는 담보물권
            </p>
            <div class="bg-blue-800 bg-opacity-50 rounded p-4 mb-4">
              <div class="flex items-center">
                <i class="fas fa-check-circle text-blue-300 mr-3"></i>
                <span class="font-medium">유치적 효력이 인정되지 않음</span>
              </div>
            </div>
            <div class="bg-blue-800 bg-opacity-50 rounded p-4">
              <div class="flex items-center">
                <i class="fas fa-check-circle text-blue-300 mr-3"></i>
                <span class="font-medium">가치권의 전형</span>
              </div>
            </div>
          </div>
          <!-- Requirements section (3 columns) -->
          <div class="col-span-3 content-box rounded-lg p-8 flex flex-col">
            <div class="flex items-center mb-6">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-clipboard-list"></i>
              </div>
              <h2 class="text-2xl font-bold">저당권의 성립요건</h2>
            </div>
            <div class="space-y-6">
              <!-- Requirement 1 -->
              <div class="req-item flex">
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-4"
                >
                  <span class="font-bold">1</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-blue-300">
                    피담보채권
                  </h3>
                  <ul class="mt-2 space-y-1 text-lg">
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"
                      ></i>
                      <span>보통 금전채권이지만 금전채권이 아닌 것도 가능</span>
                    </li>
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"
                      ></i>
                      <span
                        >수 개의 채권ㆍ채권의 일부ㆍ장래 발생할 채권도
                        가능</span
                      >
                    </li>
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"
                      ></i>
                      <span
                        >장래의 증감변동하는 불특정 다수의 채권을 피담보채권으로
                        하는 근저당도 인정 (부종성 완화)</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Requirement 2 -->
              <div class="req-item flex">
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-4"
                >
                  <span class="font-bold">2</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-blue-300">
                    저당권의 목적물
                  </h3>
                  <ul class="mt-2 space-y-1 text-lg">
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"
                      ></i>
                      <span
                        >법률상 공시가 가능한 것 - 부동산과 지상권ㆍ전세권
                        (민법)</span
                      >
                    </li>
                    <li class="flex items-start">
                      <i
                        class="fas fa-angle-right mt-1.5 mr-2 text-blue-300"
                      ></i>
                      <span
                        >입목등기가 된
                        입목ㆍ어업권ㆍ광업권ㆍ소형선박ㆍ자동차ㆍ항공기ㆍ건설기계
                        등도 가능(특별법)</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Requirements 3 &amp; 4 -->
              <div class="grid grid-cols-2 gap-4">
                <div class="req-item flex">
                  <div
                    class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-4"
                  >
                    <span class="font-bold">3</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-blue-300">
                      저당권설정계약
                    </h3>
                    <p class="mt-2 text-lg">
                      저당권설정자(채무자 또는 물상보증인)과 저당권자 사이의
                      계약
                    </p>
                  </div>
                </div>
                <div class="req-item flex">
                  <div
                    class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-4"
                  >
                    <span class="font-bold">4</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-blue-300">
                      저당권설정등기
                    </h3>
                    <p class="mt-2 text-lg">
                      저당권설정계약에 상응하는 등기 필요
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">45 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>저당권의 효력</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .content-card {
        transition: all 0.3s ease;
        background-color: rgba(26, 54, 93, 0.7);
        border: 1px solid rgba(66, 153, 225, 0.3);
      }
      .list-item {
        position: relative;
        padding-left: 1.75rem;
      }
      .list-item:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.75rem;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: #4299e1;
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">저당권의 효력</h1>
            <div class="mt-2 text-blue-300">
              저당권의 피담보채권 범위와 목적물에 대한 효력
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-16 left-0 right-0 px-12">
        <div class="grid grid-cols-2 gap-8 h-full">
          <!-- Left column: 피담보채권의 범위 -->
          <div class="content-card rounded-lg p-8">
            <div class="flex items-center mt-2 mb-6">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-file-invoice-dollar"></i>
              </div>
              <h3 class="text-2xl font-bold">피담보채권의 범위</h3>
            </div>
            <ul class="space-y-4 text-xl">
              <li class="list-item">원본, 이자, 위약금, 저당권 실행비용</li>
              <li class="list-item">채무불이행으로 인한 손해배상</li>
            </ul>
            <div
              class="mt-6 px-4 py-2 bg-blue-800 bg-opacity-50 rounded-lg border border-blue-700"
            >
              <div class="flex items-start">
                <div class="text-yellow-300 text-xl mr-3">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div>
                  <p class="text-xl font-medium text-yellow-100">
                    지연배상의 경우
                  </p>
                  <p class="ml-2 mt-1 text-lg">
                    원본의 이행기일 경과 후
                    <span class="font-bold text-yellow-100">1년분</span>에
                    한하여 우선변제를 받을 수 있음
                  </p>
                </div>
              </div>
            </div>

            <div class="flex items-center mt-10 mb-6">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-home"></i>
              </div>
              <h3 class="text-2xl font-bold">목적물에 대한 효력 범위</h3>
            </div>

            <ul class="space-y-4 text-lg mb-6">
              <li class="list-item">부합물, 종물에 효력이 미침</li>
              <li class="list-item">
                토지에 대한 저당권의 효력은 건물에 미치지 않음
              </li>
            </ul>
          </div>
          <!-- Right column: 목적물에 대한 효력 범위 -->
          <div class="content-card rounded-lg p-8">
            <div
              class="p-4 bg-blue-800 bg-opacity-50 rounded-lg border border-blue-700"
            >
              <div class="flex items-center">
                <div class="text-green-300 text-xl mr-3">
                  <i class="fas fa-arrow-down"></i>
                </div>
                <div>
                  <p class="mb-2 text-xl">건물 건축 전 토지저당권 설정</p>
                  <p class="ml-2 mt-1 text-lg">
                    토지저당권이 실행되면 건물은 철거될 수 있음 <br />
                    저당권자의 일괄경매청구권 인정
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mt-6 p-4 bg-blue-800 bg-opacity-50 rounded-lg border border-blue-700"
            >
              <div class="flex items-center">
                <div class="text-green-300 text-xl mr-3">
                  <i class="fas fa-arrow-up"></i>
                </div>
                <div>
                  <p class="mb-2 text-xl">건물 건축 후 토지저당권 설정</p>
                  <p class="ml-2 mt-1 text-lg">
                    토지저당권이 실행되면 건물소유자에게 법정지상권 인정
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mt-6 p-4 bg-blue-800 bg-opacity-50 rounded-lg border border-blue-700"
            >
              <div class="flex items-center">
                <div class="text-green-300 text-xl mr-3">
                  <i class="fas fa-gavel"></i>
                </div>
                <div>
                  <p class="mb-2 text-xl">우선변제적 효력</p>
                  <p class="ml-2 mt-1 text-lg">
                    저당권자는 채무자가 변제기에 변제하지 않으면 저당목적물을
                    현금화하여 그 대금에서 다른 채권자보다 우선하여 변제를 받을
                    수 있음
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">46 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>저당권의 실행절차</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .process-step {
        transition: all 0.3s ease;
      }
      .process-step:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .arrow {
        position: relative;
        height: 2px;
        background-color: rgba(144, 205, 244, 0.6);
        margin-top: 75px;
      }
      .arrow:after {
        content: "";
        position: absolute;
        right: -10px;
        top: -9px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid rgba(144, 205, 244, 0.6);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">저당권의 실행절차</h1>
            <div class="mt-2 text-blue-300">
              민사집행법에 따른 저당권 실행절차에 대한 설명
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-40 bottom-10 left-0 right-0 px-12">
        <!-- Process flow -->
        <div class="flex justify-between items-start">
          <!-- Step 1 -->
          <div
            class="process-step bg-blue-800 bg-opacity-50 rounded-lg p-6 w-52 border border-blue-700 text-center flex flex-col items-center"
          >
            <div class="text-blue-300 text-3xl mb-4">
              <i class="fas fa-file-signature"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Step 1</h3>
            <p class="text-lg">저당권자의 경매 신청</p>
          </div>
          <!-- Arrow 1 -->
          <div class="arrow w-20"></div>
          <!-- Step 2 -->
          <div
            class="process-step bg-blue-800 bg-opacity-50 rounded-lg p-6 w-52 border border-blue-700 text-center flex flex-col items-center"
          >
            <div class="text-blue-300 text-3xl mb-4">
              <i class="fas fa-gavel"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Step 2</h3>
            <p class="text-lg">집행법원의 경매개시결정 및 현황조사</p>
          </div>
          <!-- Arrow 2 -->
          <div class="arrow w-20"></div>
          <!-- Step 3 -->
          <div
            class="process-step bg-blue-800 bg-opacity-50 rounded-lg p-6 w-52 border border-blue-700 text-center flex flex-col items-center"
          >
            <div class="text-blue-300 text-3xl mb-4">
              <i class="fas fa-coins"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Step 3</h3>
            <p class="text-lg">현금화 준비<br />(최저매각가격 정함)</p>
          </div>
          <!-- Arrow 3 -->
          <div class="arrow w-20"></div>
          <!-- Step 4 -->
          <div
            class="process-step bg-blue-800 bg-opacity-50 rounded-lg p-6 w-52 border border-blue-700 text-center flex flex-col items-center"
          >
            <div class="text-blue-300 text-3xl mb-4">
              <i class="fas fa-handshake"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Step 4</h3>
            <p class="text-lg">매각허가결정<br />(최고가매수신청인이 결정시)</p>
          </div>
          <!-- Arrow 4 -->
          <div class="arrow w-20"></div>
          <!-- Step 5 -->
          <div
            class="process-step bg-blue-800 bg-opacity-50 rounded-lg p-6 w-52 border border-blue-700 text-center flex flex-col items-center"
          >
            <div class="text-blue-300 text-3xl mb-4">
              <i class="fas fa-money-bill-wave"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Step 5</h3>
            <p class="text-lg">매각대금의 배당</p>
          </div>
        </div>
        <!-- Additional information -->
        <div class="mt-9 grid grid-cols-2 gap-8">
          <div
            class="bg-blue-800 bg-opacity-30 rounded-lg p-6 border border-blue-700"
          >
            <div class="flex items-start">
              <div class="text-blue-300 text-2xl mr-4">
                <i class="fas fa-key"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">매수인의 소유권 취득</h3>
                <p class="text-lg">
                  매수인은 매각대금 완납시 부동산의 소유권을 취득합니다.
                </p>
              </div>
            </div>
          </div>
          <div
            class="bg-blue-800 bg-opacity-30 rounded-lg p-6 border border-blue-700"
          >
            <div class="flex items-start">
              <div class="text-blue-300 text-2xl mr-4">
                <i class="fas fa-file-contract"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">담보물권의 소멸</h3>
                <p class="text-lg">
                  경매대상 부동산에 존재하는 모든 담보물권은 소멸합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Notes -->
        <div
          class="mt-8 bg-blue-700 bg-opacity-20 rounded-lg p-4 border border-blue-600"
        >
          <div class="flex items-start">
            <div class="text-yellow-300 text-xl mr-3 mt-1">
              <i class="fas fa-lightbulb"></i>
            </div>
            <div>
              <p class="text-lg">
                저당권 실행절차는 민사집행법에 따라 진행되며, 채무자가 변제기에
                변제하지 않으면 저당목적물을 현금화하여 그 대금에서 다른
                채권자보다 우선하여 변제를 받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">47 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>제3취득자의 보호</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .protection-method {
        transition: all 0.3s ease;
      }
      .protection-method:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <h1 class="text-4xl font-bold">제3취득자의 보호</h1>
        <div class="mt-2 text-blue-300">
          저당권이 설정된 부동산의 제3취득자 보호방법에 대한 설명
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Definition section -->
      <div class="absolute top-36 px-12">
        <div class="flex items-start">
          <div class="bg-blue-700 rounded-full p-3 mr-4">
            <i class="fas fa-user-shield text-xl"></i>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-2">제3취득자의 의의</h3>
            <p class="text-lg">
              저당권이 이미 설정된 토지 또는 건물에 대하여 소유권을 취득하거나
              지상권ㆍ전세권 등의 용익물권을 설정받은 자
            </p>
          </div>
        </div>
      </div>
      <!-- Protection methods -->
      <div class="absolute top-58 left-0 right-0 px-12">
        <h3 class="text-2xl font-semibold mb-4 flex items-center">
          <i class="fas fa-shield-alt text-blue-300 mr-3"></i>
          보호방법
        </h3>
        <div class="grid grid-cols-3 gap-6 mt-6">
          <!-- Method 1 -->
          <div
            class="protection-method bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="text-blue-300 text-3xl mb-3 flex justify-center">
              <i class="fas fa-gavel"></i>
            </div>
            <h4 class="text-2xl font-medium text-center mb-3">
              매수인이 될 자격인정
            </h4>
            <p class="text-base text-lg">
              제3취득자는 저당권 실행을 위한 경매절차에서 매수인이 될 수 있는
              자격이 인정됨
            </p>
          </div>
          <!-- Method 2 -->
          <div
            class="protection-method bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="text-blue-300 text-3xl mb-3 flex justify-center">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <h4 class="text-2xl font-medium text-center mb-3">
              제3취득자의 변제
            </h4>
            <p class="text-base text-lg">
              피담보채권의 범위 내에서 변제가 가능하며, 변제기 후에만 변제할 수
              있음
            </p>
          </div>
          <!-- Method 3 -->
          <div
            class="protection-method bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="text-blue-300 text-3xl mb-3 flex justify-center">
              <i class="fas fa-exchange-alt"></i>
            </div>
            <h4 class="text-2xl font-medium text-center mb-3">
              구상권 및 변제자대위
            </h4>
            <p class="text-base text-lg">
              채무자에 대한 구상권을 가지며, 변제자대위에 의해 채권자의 권리를
              당연히 이전받음
            </p>
          </div>
          <!-- Method 4 -->
          <div
            class="protection-method bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="text-blue-300 text-3xl mb-3 flex justify-center">
              <i class="fas fa-tools"></i>
            </div>
            <h4 class="text-2xl font-medium text-center mb-3">
              비용상환청구권
            </h4>
            <p class="text-base text-lg">
              제3취득자가 부동산에 지출한 필요비와 유익비에 대한 상환청구권을
              가짐
            </p>
          </div>
          <!-- Method 5 -->
          <div
            class="protection-method bg-blue-800 bg-opacity-50 rounded-lg px-6 py-3 border border-blue-700"
          >
            <div class="text-blue-300 text-3xl mb-3 flex justify-center">
              <i class="fas fa-file-contract"></i>
            </div>
            <h4 class="text-2xl font-medium text-center mb-3">
              매도인의 담보책임
            </h4>
            <p class="text-base text-lg">
              매도인이 저당권의 존재를 알리지 않은 경우, 매도인의 담보책임이
              발생함
            </p>
          </div>
          <!-- Note -->
          <div
            class="bg-blue-700 bg-opacity-30 rounded-lg px-6 py-3 border border-blue-600 flex items-center"
          >
            <div class="text-blue-300 text-3xl mr-4">
              <i class="fas fa-info-circle"></i>
            </div>
            <p class="text-base text-lg">
              이러한 보호방법들은 저당권이 설정된 부동산을 취득한 제3취득자의
              권익을 보호하기 위한 법적 장치임
            </p>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">48 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>특수한 저당권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide-container {
        width: 1280px;
        min-height: 720px;
        position: relative;
      }
      .bg-pattern {
        opacity: 0.05;
        background-image: linear-gradient(
            to right,
            #ffffff 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
      }
      .mortgage-card {
        transition: all 0.3s ease;
        height: 100%;
      }
      .mortgage-card:hover {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
        transform: translateY(-2px);
      }
    </style>
  </head>
  <body>
    <div
      class="slide-container bg-gradient-to-br from-blue-900 to-blue-800 text-white relative"
    >
      <!-- Background pattern -->
      <div class="bg-pattern absolute inset-0"></div>
      <!-- Header with title -->
      <div class="absolute top-0 left-0 right-0 px-12 py-8">
        <div>
          <h1 class="text-4xl font-bold">특수한 저당권</h1>
          <div class="mt-2 text-blue-300">공동저당과 근저당에 대한 설명</div>
        </div>
        <div class="w-full h-px bg-blue-300 bg-opacity-50 mt-6"></div>
      </div>
      <!-- Main content -->
      <div class="absolute top-36 bottom-10 left-0 right-0 px-12">
        <div class="flex h-full space-x-8">
          <!-- 공동저당 (Joint Mortgage) -->
          <div
            class="w-1/2 mortgage-card bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700"
          >
            <div class="flex items-center mb-6">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-building-columns"></i>
              </div>
              <h3 class="text-2xl font-bold">공동저당</h3>
            </div>
            <div class="text-xl mb-4">
              동일한 채권의 담보를 위하여 여러 개의 부동산 위에 저당권을
              설정하는 것
            </div>
            <div class="space-y-6 mt-6">
              <div>
                <h4 class="text-xl font-semibold mb-3 text-blue-200">
                  <i class="fas fa-balance-scale-right mr-2"></i>동시배당의 경우
                </h4>
                <p class="pl-6 border-l-2 border-blue-300 text-xl">
                  공동저당권자는
                  <span class="text-yellow-300">부동산의 가액에 비례하여</span>
                  각 부동산으로부터 배당받음
                </p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-3 text-blue-200">
                  <i class="fas fa-balance-scale-left mr-2"></i>이시배당의 경우
                </h4>
                <p class="pl-6 border-l-2 border-blue-300 text-xl">
                  공동저당권자는
                  <span class="text-yellow-300"
                    >먼저 이루어지는 배당에서 채권전액</span
                  >을 배당받을 수 있음
                </p>
                <p class="pl-6 border-l-2 border-blue-300 text-xl mt-2">
                  먼저 배당이 이루어지는 부동산의 후순위권리자는 동시배당의
                  경우에 받을 수 있는 범위만큼 다른 부동산에 관한 배당에서
                  <span class="text-yellow-300">공동저당권자를 대위하여</span>
                  변제받을 수 있음
                </p>
              </div>
            </div>
          </div>
          <!-- 근저당 (Floating Mortgage) -->
          <div
            class="w-1/2 mortgage-card bg-blue-800 bg-opacity-50 rounded-lg p-8 border border-blue-700"
          >
            <div class="flex items-center mb-6">
              <div class="text-blue-300 text-3xl mr-4">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3 class="text-2xl font-bold">근저당</h3>
            </div>
            <div class="text-xl mb-6">
              계속적 계약관계에서 발생하는 다수의 불특정채권을 일정한 한도까지
              담보하기 위하여 설정하는 저당권
            </div>
            <div class="space-y-4 mt-4 text-xl">
              <div class="flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-file-contract"></i>
                </div>
                <p>
                  <span class="text-blue-200 font-medium">적용 사례 :</span>
                  당좌대월계약, 어음할인계약, 계속적 <br />
                  물품공급계약 등
                </p>
              </div>
              <div class="flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-unlock"></i>
                </div>
                <p>
                  <span class="text-blue-200 font-medium">실행 조건 :</span>
                  피담보채권이 확정되고 그 이행기가 <br />
                  도래한 경우
                </p>
              </div>
              <div class="flex items-start">
                <div class="text-blue-300 mr-3 mt-1">
                  <i class="fas fa-hand-holding-dollar"></i>
                </div>
                <p>
                  <span class="text-blue-200 font-medium">변제 범위 :</span>
                  채권최고액의 범위 내에서 우선변제 <br />
                  가능
                </p>
              </div>
            </div>
            <div
              class="mt-4 p-3 bg-blue-900 bg-opacity-50 rounded-lg border border-blue-600"
            >
              <div class="text-center text-xl font-medium mb-3 text-blue-200">
                <i class="fas fa-lightbulb mr-2"></i>특징
              </div>
              <p class="text-center text-xl">
                부종성이 완화되어 장래의 증감변동하는<br />불특정 다수의 채권을
                피담보채권으로 할 수 있음
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with slide number -->
      <div class="absolute bottom-4 right-8">
        <div class="text-sm text-blue-300">49 / 50</div>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>민법: 채권과 계약</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .icon-circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 15px;
      }
    </style>
  </head>
  <body>
    <div
      class="slide bg-gradient flex flex-col items-center justify-center relative"
    >
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Main content -->
      <div class="h-25"></div>
      <div class="z-10 text-center px-16 mb-8">
        <h1
          class="text-5xl font-bold text-white mb-6 title-shadow tracking-wide"
        >
          민법 : 채권과 계약
        </h1>
        <p class="text-3xl text-blue-100 mb-20">채무불이행, 계약, 불법행위</p>
        <!-- Icon row -->
        <div class="flex justify-center items-center my-10">
          <div class="icon-circle bg-blue-700 bg-opacity-50">
            <i class="fas fa-handshake text-4xl text-white"></i>
          </div>
          <div class="icon-circle bg-blue-600 bg-opacity-50">
            <i class="fas fa-file-contract text-4xl text-white"></i>
          </div>
          <div class="icon-circle bg-blue-500 bg-opacity-50">
            <i class="fas fa-balance-scale text-4xl text-white"></i>
          </div>
        </div>
        <!-- Author info -->
        <div class="mt-20">
          <p class="text-3xl mb-5 text-blue-100">장 민</p>
          <p class="text-xl text-blue-100">창원대 법학과 교수</p>
          <p class="text-lg text-blue-200 mt-2">Report Date: 2026-02-05</p>
        </div>
      </div>
      <!-- Bottom decorative bar -->
      <div class="absolute bottom-0 w-full h-6 bg-blue-800"></div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>채권법의 개요</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .feature-box {
        transition: all 0.3s ease;
      }
      .feature-box:hover {
        transform: translateY(-5px);
      }
      .feature-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 left-0 w-48 h-48 bg-blue-400 opacity-10 rounded-br-full"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tl-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          채권법의 개요
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-12 py-10 flex flex-col">
        <!-- Concept section -->
        <div class="mb-10">
          <div class="flex items-center mb-6">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-book-open text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              채권법의 개념과 위치
            </h2>
          </div>
          <div class="content-box rounded-md text-xl p-6 ml-10">
            <p class="text-white mb-5">
              • 채권법 : 당사자 사이의 채권ㆍ채무관계를 규율하는 법규
            </p>
            <p class="text-white mb-5">
              • 위치 : 제3편 채권(제373조~제776조) 및 주택임대차보호법 등의
              민사특별법
            </p>
            <p class="text-white">• 물권법과 함께 재산법에 속함</p>
          </div>
        </div>
        <!-- Characteristics section -->
        <div>
          <div class="flex items-center mb-7">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-fingerprint text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">채권법의 특질</h2>
          </div>
          <div class="grid grid-cols-3 gap-6 ml-10">
            <!-- Feature 1 -->
            <div
              class="feature-box content-box rounded-md p-6 flex flex-col items-center"
            >
              <div class="feature-icon mb-3">
                <i class="fas fa-gavel text-xl text-white"></i>
              </div>
              <h3 class="text-2xl font-medium text-blue-200 mb-2">
                임의규정성
              </h3>
              <p class="text-white text-xl text-center">
                사적자치의 영역이 넓음
              </p>
            </div>
            <!-- Feature 2 -->
            <div
              class="feature-box content-box rounded-md p-6 flex flex-col items-center"
            >
              <div class="feature-icon mb-3">
                <i class="fas fa-globe text-xl text-white"></i>
              </div>
              <h3 class="text-2xl font-medium text-blue-200 mb-2">
                국제적보편성
              </h3>
              <p class="text-white text-xl text-center">
                국제적으로 보편적인 원칙 적용
              </p>
            </div>
            <!-- Feature 3 -->
            <div
              class="feature-box content-box rounded-md p-6 flex flex-col items-center"
            >
              <div class="feature-icon mb-3">
                <i class="fas fa-balance-scale text-xl text-white"></i>
              </div>
              <h3 class="text-2xl font-medium text-blue-200 mb-2">
                신의칙의 지배
              </h3>
              <p class="text-white text-xl text-center">
                신의성실의 원칙이 강하게 적용
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">2 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>채권의 의의와 종류</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .type-card {
        transition: all 0.3s ease;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        border-bottom: 3px solid #60a5fa;
      }
      .type-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      }
      .type-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-10 rounded-tr-full"
      ></div>
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-bl-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          채권의 의의와 종류
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-10 flex flex-col">
        <!-- Definition section -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-lightbulb text-xl text-white"></i>
              <!-- <i class="fas fa-file-contract text-xl text-white"></i> -->
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">채권의 의의</h2>
          </div>
          <div class="content-box rounded-md p-5 ml-10">
            <p class="text-white mb-3">
              • 채권은
              <span class="text-blue-200 font-semibold">특정인(채권자)</span>이
              <span class="text-blue-200 font-semibold"
                >다른 특정인(채무자)</span
              >에 대하여
              <span class="text-blue-200 font-semibold">특정한 행위(급부)</span
              >를 청구할 수 있는 권리
            </p>
            <p class="text-white mb-3">
              • 채권의 특성: <span class="text-blue-200">상대권, 청구권</span> -
              채무자의 책임재산을 지키기 위한 채권자대위권, 채권자취소권도 인정
            </p>
            <p class="text-white">
              • 채무는 채권자에 대하여 채권의 내용에 좇은 급부를 이행하여야 하는
              채무자의 의무
            </p>
          </div>
        </div>
        <!-- Types section -->
        <div>
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-file-contract text-xl text-white"></i>
              <!-- <i class="fas fa-file-signature text-xl text-white"></i> -->
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">채권의 종류</h2>
          </div>
          <div class="grid grid-cols-5 gap-4 ml-10">
            <!-- Type 1: 특정물채권 -->
            <div class="type-card px-4 py-4 flex flex-col items-center">
              <div class="type-icon bg-blue-700 bg-opacity-50 mb-3">
                <i class="fas fa-box text-white"></i>
              </div>
              <h3 class="text-xl font-medium text-blue-200 mb-2">특정물채권</h3>
              <p class="text-white text-center">
                특정물의 인도를 목적으로 하는 채권
              </p>
            </div>
            <!-- Type 2: 종류채권 -->
            <div class="type-card px-4 py-4 flex flex-col items-center">
              <div class="type-icon bg-blue-600 bg-opacity-50 mb-3">
                <i class="fas fa-boxes text-white"></i>
              </div>
              <h3 class="text-xl font-medium text-blue-200 mb-2">종류채권</h3>
              <p class="text-white text-center">
                일정한 종류ㆍ수량의 물건을 인도할 것을 목적으로 하는 채권
              </p>
            </div>
            <!-- Type 3: 금전채권 -->
            <div class="type-card px-4 py-4 flex flex-col items-center">
              <div class="type-icon bg-blue-500 bg-opacity-50 mb-3">
                <i class="fas fa-coins text-white"></i>
              </div>
              <h3 class="text-xl font-medium text-blue-200 mb-2">금전채권</h3>
              <p class="text-white text-center">
                일정액의 금전의 지급을 목적으로 하는 채권
              </p>
            </div>
            <!-- Type 4: 이자채권 -->
            <div class="type-card px-4 py-4 flex flex-col items-center">
              <div class="type-icon bg-blue-600 bg-opacity-50 mb-3">
                <i class="fas fa-percentage text-white"></i>
              </div>
              <h3 class="text-xl font-medium text-blue-200 mb-2">이자채권</h3>
              <p class="text-white text-center">
                이자의 지급을 목적으로 하는 채권
              </p>
            </div>
            <!-- Type 5: 선택채권 -->
            <div class="type-card px-4 py-4 flex flex-col items-center">
              <div class="type-icon bg-blue-700 bg-opacity-50 mb-3">
                <i class="fas fa-random text-white"></i>
              </div>
              <h3 class="text-xl font-medium text-blue-200 mb-2">선택채권</h3>
              <p class="text-white text-center">
                수개의 급부 중 하나를 선택함으로써 급부의 목적이 확정되는 채권
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">3 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>특정물채권과 종류채권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        transition: all 0.3s ease;
      }
      .content-box:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .vs-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(96, 165, 250, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 18px;
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
      }
      .feature-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          특정물채권과 종류채권
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-10 py-4 flex flex-col">
        <!-- Comparison section -->

        <div class="grid grid-cols-9">
          <!-- Left side: 특정물채권 -->
          <div class="col-span-4 content-box p-6 border-l-4 border-blue-400">
            <div class="flex items-center mb-10">
              <div class="feature-icon bg-blue-600 bg-opacity-50">
                <i class="fas fa-cubes text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">특정물채권</h2>
            </div>
            <div class="pl-4 mt-6">
              <div class="flex items-start mb-10 text-xl">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                <p class="text-white">특정물의 인도를 목적으로 하는 채권</p>
              </div>
              <div class="flex items-start mb-10 text-xl">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                <p class="text-white">
                  채무자는 물건의 인도 시까지
                  <span class="text-blue-200 font-semibold">선관주의의무</span
                  >를 부담
                </p>
              </div>
              <div class="flex items-start text-xl">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                <p class="text-white">
                  거래상 일반적 평균인에게 요구되는 정도의 주의를 다하여야 함
                </p>
              </div>
            </div>
            <div class="mt-8 bg-blue-800 bg-opacity-30 p-4 rounded-md">
              <div class="flex items-center">
                <i class="fas fa-lightbulb text-yellow-300 mr-3"></i>
                <p class="text-blue-100 text-xl font-medium">
                  예 : 특정 미술품, 특정 중고차, 특정 부동산
                </p>
              </div>
            </div>
          </div>
          <!-- Center VS circle -->
          <div class="col-span-1 flex items-center justify-center">
            <div class="vs-circle">VS</div>
          </div>
          <!-- Right side: 종류채권 -->
          <div class="col-span-4 content-box p-6 border-l-4 border-blue-300">
            <div class="flex items-center mb-10">
              <div class="feature-icon bg-blue-500 bg-opacity-50">
                <i class="fas fa-boxes text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">종류채권</h2>
            </div>
            <div class="pl-4 mt-6">
              <div class="flex items-start mb-10 text-xl">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                <p class="text-white">
                  일정한 종류ㆍ수량의 물건을 인도할 것을 목적으로 하는 채권
                </p>
              </div>
              <div class="flex items-start mb-10 text-xl">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                <p class="text-white">
                  인도할 목적물이
                  <span class="text-blue-200 font-semibold">종류와 수량</span
                  >으로 정해짐
                </p>
              </div>
              <div class="flex items-start text-xl">
                <i class="fas fa-check-circle text-blue-300 mt-1 mr-3"></i>
                <p class="text-white">
                  특정한 물건이 아닌 동종ㆍ동질의 물건으로 이행 가능
                </p>
              </div>
            </div>
            <div class="mt-8 bg-blue-800 bg-opacity-30 p-4 rounded-md">
              <div class="flex items-center">
                <i class="fas fa-lightbulb text-yellow-300 mr-3"></i>
                <p class="text-blue-100 text-xl font-medium">
                  예 : 쌀 10kg, 휘발유 1000리터, 운동복 10벌
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Key difference -->
        <div class="mt-6 content-box p-4 bg-blue-700 bg-opacity-30">
          <div class="flex items-center text-xl">
            <i class="fas fa-balance-scale text-blue-200 mr-3"></i>
            <p class="text-white font-medium">핵심 차이점 :</p>
            <div class="text-white font-medium ml-3">
              <p class="mb-1">
                특정물채권은 특정된 물건만으로 채무이행이 가능한 반면,
                종류채권은 동종ㆍ동질의 다른 물건으로도
              </p>
              <p>채무이행이 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">4 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>금전채권과 이자채권</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .feature-box {
        transition: all 0.3s ease;
      }
      .feature-box:hover {
        transform: translateY(-5px);
      }
      .feature-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
      }
      .bar-chart .bar {
        fill: #60a5fa;
        transition: all 0.3s ease;
      }
      .bar-chart .bar:hover {
        fill: #93c5fd;
      }
      .bar-chart text {
        fill: white;
        font-size: 12px;
      }
      .bar-label {
        font-size: 12px;
        fill: #e0f2fe;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-56 h-56 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          금전채권과 이자채권
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-5 flex">
        <!-- 금전채권 Section -->

        <div class="flex-1 pr-6">
          <div class="flex items-center mb-6">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-coins text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">금전채권</h2>
          </div>
          <div class="mt-2">
            <h3 class="text-xl font-medium text-blue-200 mb-3 ml-2">
              금전채권의 의의
            </h3>

            <div class="grid grid-cols-1 gap-2 text-white text-xl">
              <div
                class="feature-box content-box rounded-md p-3 flex items-center"
              >
                <div class="feature-icon mr-4 flex-shrink-0">
                  <i class="fas fa-percentage"></i>
                </div>
                <p>일정액의 금전의 지급을 목적으로 하는 채권</p>
              </div>
              <div
                class="feature-box content-box rounded-md p-3 flex items-center"
              >
                <div class="feature-icon mr-4 flex-shrink-0">
                  <i class="fas fa-file-invoice-dollar"></i>
                </div>
                <p>가치채권인 동시에 금액채권</p>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-xl font-medium text-blue-200 mb-3 ml-2">
              금전채권의 특성
            </h3>
            <div class="grid grid-cols-1 gap-2 text-white text-xl">
              <div
                class="feature-box content-box rounded-md p-3 flex items-center"
              >
                <div class="feature-icon mr-4 flex-shrink-0">
                  <i class="fas fa-ban"></i>
                </div>
                <p>이행불능 발생불가</p>
              </div>
              <div
                class="feature-box content-box rounded-md p-3 flex items-center"
              >
                <div class="feature-icon mr-4 flex-shrink-0">
                  <i class="fas fa-file-invoice-dollar"></i>
                </div>
                <p>손해의 발생 및 손해액의 증명 불필요</p>
              </div>
              <div
                class="feature-box content-box rounded-md p-3 flex items-center"
              >
                <div class="feature-icon mr-4 flex-shrink-0">
                  <i class="fas fa-percentage"></i>
                </div>
                <p>손해배상액은 약정이율이 없으면 법정이율에 따라 결정</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 이자채권 Section -->
        <div class="flex-1 pl-6 border-l border-blue-400 border-opacity-30">
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-chart-line text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">이자채권</h2>
          </div>
          <div class="content-box rounded-md p-5 mb-6 text-white text-xl">
            <p class="mb-4">• 이자의 지급을 목적으로 하는 채권</p>
            <p>• 원본채권이 존재하여야 함</p>
          </div>
          <div class="mt-2">
            <h3 class="text-xl font-medium text-blue-200 mb-3 ml-2">
              법정이율 및 이자제한
            </h3>
            <!-- Interest Rate Visualization -->
            <div class="ml-10 mt-3 mb-8">
              <svg height="140" id="interestChart" width="450"></svg>
            </div>
            <div class="content-box rounded-md p-4 text-white text-xl">
              <p class="mb-4">• 법정이율 : 민사 연 5%, 상사 연 6%</p>
              <p class="mb-4">• 소송촉진 특례법 : 연 12%</p>
              <p>• 이자제한 : 이자제한법, 대부업법 연 20%</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">5 / 32</p>
      </div>
    </div>
    <script>
      // D3.js chart for interest rates
      document.addEventListener("DOMContentLoaded", function () {
        const data = [
          { type: "민사 법정이율", rate: 5 },
          { type: "상사 법정이율", rate: 6 },
          { type: "소송촉진 특례법", rate: 12 },
          { type: "이자제한법", rate: 20 },
        ];

        const margin = { top: 10, right: 30, bottom: 30, left: 40 };
        const width = 450 - margin.left - margin.right;
        const height = 140 - margin.top - margin.bottom;

        const svg = d3
          .select("#interestChart")
          .append("g")
          .attr("transform", AAAAtranslate(BBBBmargin.left},BBBBmargin.top})AAAA);

        // X scale
        const x = d3
          .scaleBand()
          .domain(data.map((d) => d.type))
          .range([0, width])
          .padding(0.3);

        // Y scale
        const y = d3.scaleLinear().domain([0, 25]).range([height, 0]);

        // Add bars with white color
        svg
          .selectAll(".bar")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("x", (d) => x(d.type))
          .attr("y", (d) => y(d.rate))
          .attr("width", x.bandwidth())
          .attr("height", (d) => height - y(d.rate))
          .attr("rx", 3)
          .attr("ry", 3)
          .attr("fill", "white") // 바 색상 설정
          .attr("stroke", "#ccc")
          .attr("stroke-width", 1);

        // Add labels
        svg
          .selectAll(".bar-label")
          .data(data)
          .enter()
          .append("text")
          .attr("class", "bar-label")
          .attr("x", (d) => x(d.type) + x.bandwidth() / 2)
          .attr("y", (d) => y(d.rate) - 10)
          .attr("text-anchor", "middle")
          .style("font-size", "18px")
          .text((d) => d.rate + "%"); // << 글자 크기 설정;

        // X axis label (shortened names for better fit)
        svg
          .selectAll(".x-label")
          .data(data)
          .enter()
          .append("text")
          .attr("class", "bar-label")
          .attr("x", (d) => x(d.type) + x.bandwidth() / 2)
          .attr("y", height + 25)
          .attr("text-anchor", "middle")
          .style("font-size", "18px")
          .text((d) => {
            if (d.type === "민사 법정이율") return "민사";
            if (d.type === "상사 법정이율") return "상사";
            if (d.type === "소송촉진 특례법") return "소송촉진";
            if (d.type === "이자제한법") return "이자제한";
            return d.type;
          });
      });
    <\/script>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>채무불이행의 의의</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .section-card {
        transition: all 0.3s ease;
        background-color: rgba(30, 58, 138, 0.5);
        border: 1px solid rgba(96, 165, 250, 0.3);
      }
      .section-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          채무불이행의 의의
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-10 flex flex-col">
        <!-- Main concept section -->
        <div class="mb-8">
          <div class="flex items-center mb-3">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-exclamation-circle text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              채무불이행의 개념
            </h2>
          </div>
          <div class="content-box rounded-md py-4 px-10 text-white text-xl">
            <p class="mb-4">
              • 채무자가 그의
              <span class="text-yellow-300 font-semibold">귀책사유</span>로
              인하여 채무를 이행하지 못하는 상태
            </p>
            <p class="mb-4">
              • 이행불능, 이행지체, 불완전이행 세 가지의 유형이 인정됨
            </p>
            <p class="">
              • 채무불이행이 인정되면 채무자는 그 유형에 따라
              <span class="text-yellow-300 font-semibold"
                >손해배상 등의 책임</span
              >을 짐
            </p>
          </div>
        </div>
        <!-- Two columns for the remaining sections -->
        <div class="grid grid-cols-2 gap-8">
          <!-- Debtor's Attribution -->
          <div class="section-card rounded-lg p-5">
            <div class="flex items-center mb-4">
              <div class="mr-3 bg-blue-500 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-user-shield text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">
                채무자의 귀책사유
              </h2>
            </div>
            <ul class="ml-4 space-y-3 text-xl">
              <li class="flex items-start">
                <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                <p class="text-white">고의ㆍ과실 (추상적 경과실)</p>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                <p class="text-white">
                  법정대리인과 이행보조자의 고의ㆍ과실도 포함
                </p>
              </li>
            </ul>
          </div>
          <!-- Not Breach of Obligation -->
          <div class="section-card rounded-lg p-5">
            <div class="flex items-center mb-4">
              <div class="mr-3 bg-blue-500 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-ban text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">
                채무불이행이 아닌 경우 (급부장애)
              </h2>
            </div>
            <ul class="ml-4 space-y-3 text-xl">
              <li class="flex items-start">
                <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                <p class="text-white">
                  채무자의 귀책사유 없이 채무가 이행되지 않는 경우
                </p>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
                <div>
                  <p class="text-white mb-2">
                    예 : 원시적 불능, 채무자의 귀책사유 없는 후발적 불능,
                  </p>
                  <p class="text-white pl-10">채권자지체 등</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- Breach types preview -->
        <div
          class="mt-6 content-box rounded-md p-3 flex justify-center items-center"
        >
          <div class="flex items-center text-2xl">
            <div class="px-3 py-1 bg-blue-700 bg-opacity-50 rounded-md mx-2">
              <p class="text-white font-medium">이행불능</p>
            </div>
            <i class="fas fa-random text-blue-300 mx-2"></i>
            <div class="px-3 py-1 bg-blue-700 bg-opacity-50 rounded-md mx-2">
              <p class="text-white font-medium">이행지체</p>
            </div>
            <i class="fas fa-random text-blue-300 mx-2"></i>
            <div class="px-3 py-1 bg-blue-700 bg-opacity-50 rounded-md mx-2">
              <p class="text-white font-medium">불완전이행</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">6 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>채무불이행의 유형 - 이행불능</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .effect-box {
        transition: all 0.3s ease;
        background-color: rgba(37, 99, 235, 0.2);
        border-radius: 8px;
      }
      .effect-box:hover {
        background-color: rgba(37, 99, 235, 0.3);
      }
      .icon-circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.4);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          채무불이행의 유형 - 이행불능
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-6 flex flex-col">
        <div class="grid grid-cols-2 mb-5 gap-2">
          <!-- Definition section -->
          <div class="cols-span-1 mb-2">
            <div class="flex items-center mb-3">
              <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-info-circle text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">의의</h2>
            </div>
            <div class="content-box rounded-md p-3 ml-10 text-xl text-white">
              <p class="mt-1 mb-1">
                • 채권성립 후 채무자의 귀책사유로 급부가 이행할 수
              </p>
              <p class="pl-4 mb-3">없게 된 경우</p>
              <p class="mb-1">
                • 급부의 불능이 채무자의 귀책사유 없이 발생한 경우는
              </p>
              <p class="pl-4">이행불능이 아니며 위험부담의 문제로 처리</p>
            </div>
          </div>
          <!-- Requirements section -->
          <div class="cols-span-1 mb-2">
            <div class="flex items-center mb-3">
              <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-list-check text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">요건</h2>
            </div>
            <div class="content-box rounded-md p-3 ml-10 text-xl">
              <div class="flex items-center mb-2">
                <div class="icon-circle mr-3">
                  <span class="text-white font-bold">1</span>
                </div>
                <p class="text-white">유효한 채권관계의 존재</p>
              </div>
              <div class="flex items-center mb-2">
                <div class="icon-circle mr-3">
                  <span class="text-white font-bold">2</span>
                </div>
                <p class="text-white">이행의 후발적 불능</p>
              </div>
              <div class="flex items-center">
                <div class="icon-circle mr-3">
                  <span class="text-white font-bold">3</span>
                </div>
                <p class="text-white">채무자의 귀책사유</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Effects section -->
        <div>
          <div class="flex items-center mb-5">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-arrow-right-arrow-left text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">효과</h2>
          </div>
          <div class="grid grid-cols-3 gap-4 ml-10 text-xl">
            <!-- Effect 1 -->
            <div class="effect-box p-4">
              <div class="flex items-center mb-3">
                <div class="icon-circle mr-2">
                  <i class="fas fa-coins text-white"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">
                  전보배상청구권
                </h3>
              </div>
              <ul class="list-disc list-inside text-white space-y-4 ml-2">
                <li class="mt-5">
                  본래 급부에 갈음하는 손해<br />
                  <div class="mt-2 pl-7">배상청구권</div>
                </li>

                <li>본래의 급부와 동일성 유지</li>
                <li>채권자도 반대급부를 하여야 함</li>
              </ul>
            </div>
            <!-- Effect 2 -->
            <div class="effect-box p-4">
              <div class="flex items-center mb-3">
                <div class="icon-circle mr-2">
                  <i class="fas fa-file-contract text-white"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">계약해제권</h3>
              </div>
              <ul class="list-disc list-inside text-white space-y-4 ml-2">
                <li class="mt-5">최고 없이 이행기 이전에도 가능</li>
                <li>손해배상청구권 병존</li>
                <li>반대급부 없이 손해배상 가능</li>
              </ul>
            </div>
            <!-- Effect 3 -->
            <div class="effect-box p-4">
              <div class="flex items-center mb-3">
                <div class="icon-circle mr-2">
                  <i class="fas fa-exchange-alt text-white"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">대상청구권</h3>
              </div>
              <ul class="list-disc list-inside text-white space-y-4 ml-2">
                <li class="mt-5">
                  급부불능 이유로 수취한 물건
                  <div class="mt-2 pl-7">또는 권리에 대한 이전 청구</div>
                </li>
                <li>본래 급부에 갈음하여 청구</li>
                <li>대상이익 청구 가능(학설, 판례)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">7 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>채무불이행의 유형 - 이행지체</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .effect-box {
        transition: all 0.3s ease;
        background-color: rgba(255, 255, 255, 0.08);
        border-radius: 8px;
      }
      .effect-box:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }
      .icon-circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-5 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          채무불이행의 유형 - 이행지체
        </h1>
        <p class="text-xl text-blue-200 mt-2">
          채무자가 이행기에 이행이 가능함에도 귀책사유로 이행하지 않는 상태
        </p>
      </div>
      <!-- Content -->
      <div class="flex-1 px-10 py-4 flex flex-col">
        <!-- Requirements section -->
        <div class="mb-5">
          <div class="flex items-center mb-2">
            <div class="icon-circle bg-blue-600 mr-3">
              <i class="fas fa-clipboard-list text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              이행지체의 요건
            </h2>
          </div>
          <div class="content-box rounded-md p-4 ml-12 text-xl">
            <ul
              class="text-white grid grid-cols-2 gap-x-6 gap-y-2 list-disc ml-6"
            >
              <li>유효한 채권관계의 존재</li>
              <li>이행기의 도래</li>
              <li>이행기에 채무이행이 가능할 것</li>
              <li>채무자의 귀책사유</li>
            </ul>
          </div>
        </div>
        <!-- Effects section -->
        <div class="mb-5">
          <div class="flex items-center mb-3">
            <div class="icon-circle bg-blue-600 mr-3">
              <i class="fas fa-exclamation-circle text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              이행지체의 효과
            </h2>
          </div>
          <div class="grid grid-cols-3 gap-4 ml-12 text-xl">
            <!-- Effect 1: 이행의 강제 -->
            <div class="effect-box p-4">
              <div class="flex items-center mb-3">
                <div
                  class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2"
                >
                  <i class="fas fa-gavel text-white"></i>
                </div>
                <h3 class="text-xl font-medium text-blue-200">이행의 강제</h3>
              </div>
              <ul class="text-white list-disc ml-5 space-y-1">
                <li class="text-white">채무이행의 청구 가능</li>
                <li class="text-white">강제이행을 통하여 급부를 실현가능</li>
              </ul>
            </div>
            <!-- Effect 2: 손해배상청구권 -->
            <div class="effect-box p-4">
              <div class="flex items-center mb-3">
                <div
                  class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2"
                >
                  <i class="fas fa-hand-holding-usd text-sm text-white"></i>
                </div>
                <h3 class="text-xl font-medium text-blue-200">
                  손해배상청구권
                </h3>
              </div>
              <ul class="text-white list-disc ml-5 space-y-1">
                <li>지연배상청구권: 이행 전제</li>
                <li>전보배상청구권: 최고 후 미이행</li>
                <li>책임의 가중: 귀책사유 없어도 배상</li>
              </ul>
            </div>
            <!-- Effect 3: 계약해제권 -->
            <div class="effect-box p-4">
              <div class="flex items-center mb-3">
                <div
                  class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2"
                >
                  <i class="fas fa-file-contract text-white"></i>
                </div>
                <h3 class="text-xl font-medium text-blue-200">계약해제권</h3>
              </div>
              <ul class="text-white list-disc ml-5 space-y-1">
                <li>상당한 기간을 정하여 이행 최고</li>
                <li>기간 내 이행 X -> 계약해제 가능</li>
                <li>손해배상도 병존적으로 가능</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Termination section -->
        <div>
          <div class="flex items-center mb-2">
            <div class="icon-circle bg-blue-600 mr-3">
              <i class="fas fa-stop-circle text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              이행지체의 종료
            </h2>
          </div>
          <div class="content-box rounded-md p-3 ml-12 text-xl">
            <div class="grid grid-cols-2 gap-3">
              <div class="flex items-center">
                <i class="fas fa-check-circle text-blue-300 mr-2"></i>
                <p class="text-white">채권의 소멸</p>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-blue-300 mr-2"></i>
                <p class="text-white">채권자의 지체면제</p>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-blue-300 mr-2"></i>
                <p class="text-white">
                  지연배상과 함께 채무의 내용에 좇은 이행의 제공
                </p>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-blue-300 mr-2"></i>
                <p class="text-white">지체 중 이행불능의 발생</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">8 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>채무불이행의 유형 - 불완전이행</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .section-title {
        display: inline-flex;
        align-items: center;
        padding: 6px 12px;
        background-color: rgba(37, 99, 235, 0.3);
        border-radius: 20px;
      }
      .effect-box {
        transition: all 0.3s ease;
        border-radius: 8px;
        border: 1px solid rgba(96, 165, 250, 0.3);
      }
      .effect-box:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          채무불이행의 유형 - 불완전이행
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-6 flex flex-col">
        <!-- Definition section -->
        <div class="mt-1 grid grid-cols-2 gap-2">
          <div class="col-span-1 mb-6">
            <div class="section-title mb-3">
              <i class="fas fa-info-circle text-blue-200 mr-2"></i>
              <h2 class="text-2xl font-semibold text-blue-100">의의</h2>
            </div>
            <div
              class="mt-3 content-box rounded-md p-4 ml-3 text-white text-xl"
            >
              <p class="mb-1">
                • 채무자가 채무를 이행하였지만 그 내용이 채무의 내용에
              </p>
              <p class="pl-3 mb-3">좇은 이행이 아닌 경우</p>
              <p class="">• 이를 적극적 채권침해라고도 함</p>
            </div>
          </div>
          <!-- Requirements section -->
          <div class="col-span-1 mb-6">
            <div class="section-title mb-3">
              <i class="fas fa-list-check text-blue-200 mr-2"></i>
              <h2 class="text-2xl font-semibold text-blue-100">요건</h2>
            </div>
            <div
              class="mt-3 content-box rounded-md p-4 ml-3 grid grid-cols-2 gap-3 text-xl"
            >
              <div class="flex items-start">
                <p class="text-white">① 유효한 채권관계의 존재</p>
              </div>
              <div class="flex items-start">
                <p class="text-white">② 채무자의 이행행위</p>
              </div>
              <div class="flex items-start">
                <p class="text-white leading-[1.45]">
                  ③ 채무의 내용에 좇은 이행이<br />
                  <span class="pl-6"></span> 아닐 것
                </p>
              </div>
              <div class="flex items-start">
                <p class="text-white">④ 채무자의 귀책사유</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Effects section -->
        <div class="mt-3">
          <div class="section-title mb-3">
            <i class="fas fa-bolt text-blue-200 mr-2"></i>
            <h2 class="text-2xl font-semibold text-blue-100">효과</h2>
          </div>
          <div class="mt-3 grid grid-cols-3 gap-4 ml-3 text-xl">
            <!-- Effect 1 -->
            <div class="effect-box bg-opacity-20 bg-blue-900 p-4">
              <div class="flex items-center mb-2">
                <div
                  class="w-10 h-10 rounded-full bg-blue-600 bg-opacity-50 flex items-center justify-center mr-3"
                >
                  <i class="fas fa-check-circle text-white"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">
                  완전이행청구권
                </h3>
              </div>
              <p class="text-white leading-loose">
                채무자의 완전이행이 가능한 때에는 채권자는 채무자에 대하여
                완전이행 또는 추완을 청구할 수 있음
              </p>
            </div>
            <!-- Effect 2 -->
            <div class="effect-box bg-opacity-20 bg-blue-900 p-4">
              <div class="flex items-center mb-2">
                <div
                  class="w-10 h-10 rounded-full bg-blue-600 bg-opacity-50 flex items-center justify-center mr-3"
                >
                  <i class="fas fa-coins text-white"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">
                  손해배상청구권
                </h3>
              </div>
              <p class="text-white leading-loose">
                채권자에게 손해가 발생하면 손해배상청구 가능, 완전이행청구권
                내지 추완청구권을 행사하는 경우에도 청구 가능
              </p>
            </div>
            <!-- Effect 3 -->
            <div class="effect-box bg-opacity-20 bg-blue-900 p-4">
              <div class="flex items-center mb-2">
                <div
                  class="w-10 h-10 rounded-full bg-blue-600 bg-opacity-50 flex items-center justify-center mr-3"
                >
                  <i class="fas fa-ban text-white"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">계약해제권</h3>
              </div>
              <p class="text-white leading-loose">
                불완전이행의 경우 계약해제 가능, 단, 완전이행 및 추완청구가
                가능한 경우 상당한 기간을 정하여 최고하고 그 기간 내 이행이
                없으면 해제가능
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">9 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>채무불이행의 효과 - 강제이행</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .enforcement-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
        transition: all 0.2s ease;
      }
      .enforcement-box:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
      .icon-circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-tr-full"
      ></div>
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-300 opacity-10 rounded-bl-full"
      ></div>

      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          채무불이행의 효과 - 강제이행
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-10 pt-4 pb-11 flex flex-col text-xl">
        <!-- Introduction -->
        <div class="enforcement-box rounded-md px-4 py-2 mb-4">
          <div class="flex items-center">
            <div class="icon-circle bg-blue-600 mr-3">
              <i class="fas fa-angle-right text-white text-xl"></i>
            </div>
            <h3 class="text-2xl font-semibold text-blue-100">
              강제이행의 의의
            </h3>
          </div>
          <div
            class="content-box bg-blue-800 bg-opacity-30 rounded-md px-4 pt-2 pb-1"
          >
            <p class="text-white text-xl leading-loose">
              <i class="fas fa-info-circle mr-2 text-blue-300"></i>
              채무자가 채무의 이행이 가능함에도 임의로 이행하지 않는 경우,
              채권자가 국가권력에 의하여 강제로 채권의 내용을
            </p>
            <p class="pl-9 text-white">
              실현하는 것<span class="text-blue-200 mt-2 ml-6"
                >※ 이행불능의 경우에는 불가하며, 강제이행 청구는 손해배상 청구에
                영향을 미치지 않음</span
              >
            </p>
          </div>
        </div>

        <!-- Types of enforcement -->
        <div class="flex-1 grid grid-cols-2 gap-4">
          <!-- Direct Enforcement -->
          <div class="enforcement-box rounded-md px-4 py-2">
            <div class="flex items-center mb-3">
              <div class="icon-circle bg-blue-600 mr-3">
                <i class="fas fa-gavel text-white text-xl"></i>
              </div>
              <h3 class="text-2xl font-semibold text-blue-100">직접강제</h3>
            </div>
            <ul class="text-white space-y-2 ml-4">
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i> 국가기관이
                채무자의 의사와 관계없이 채권의 내용을 <br />
                <span class="pl-6">그대로 실현</span>
              </li>
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i>
                <span class="text-blue-200 font-medium">주는 채무</span>의
                경우에만 허용
              </li>
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i> 직접강제가
                인정되면 대체집행 또는 간접강제 불허
              </li>
            </ul>
          </div>
          <!-- Substitute Performance -->
          <div class="enforcement-box rounded-md px-4 py-2">
            <div class="flex items-center mb-3">
              <div class="icon-circle bg-blue-500 mr-3">
                <i class="fas fa-people-carry text-white text-xl"></i>
              </div>
              <h3 class="text-2xl font-semibold text-blue-100">대체집행</h3>
            </div>
            <ul class="text-white space-y-2 ml-4">
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i> 채권자
                또는 제3자가 채무자 대신 채권 내용 실현, 비용은 <br />
                <span class="pl-6">채무자 부담</span>
              </li>
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i>
                <span class="text-blue-200 font-medium">대체적 작위</span>를
                목적으로 하는 채무에 적용
              </li>
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i>
                부작위의무위반으로 발생된 결과 제거 필요시에도 적용
              </li>
            </ul>
          </div>
          <!-- Indirect Enforcement -->
          <div class="enforcement-box rounded-md px-4 py-2">
            <div class="flex items-center mb-3">
              <div class="icon-circle bg-blue-400 mr-3">
                <i class="fas fa-hand-holding-usd text-white text-xl"></i>
              </div>
              <h3 class="text-2xl font-semibold text-blue-100">간접강제</h3>
            </div>
            <ul class="text-white space-y-2 ml-4">
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i> 손해배상
                지급명령, 벌금부과, 구금 등으로 심리적 압박
              </li>
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i>
                <span class="text-blue-200 font-medium">부대체적 작위</span>
                채무에 한하여 허용
              </li>
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i> 채무자의
                자유의사 또는 인격존중에 반하는 경우 불허
              </li>
            </ul>
          </div>
          <!-- Enforcement of Obligation to Express Intention -->
          <div class="enforcement-box rounded-md px-4 py-2">
            <div class="flex items-center mb-3">
              <div class="icon-circle bg-blue-300 mr-3">
                <i class="fas fa-comment-dots text-white text-xl"></i>
              </div>
              <h3 class="text-2xl font-semibold text-blue-100">
                의사표시 의무의 집행
              </h3>
            </div>
            <ul class="text-white space-y-2 ml-4">
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i> 채무자가
                의사표시 의무를 이행하지 않는 경우 적용
              </li>
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i> 채권자는
                채무자의 의사표시에 갈음하는 재판 청구 가능
              </li>
              <li>
                <i class="fas fa-angle-right text-blue-300 mr-2"></i> 의사표시
                외에 준법률행위의 경우에도 인정
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">10 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>채무불이행의 효과 - 손해배상</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .section-card {
        background-color: rgba(30, 58, 138, 0.5);
        border-radius: 8px;
        transition: all 0.3s ease;
      }
      .section-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-tr-full"
      ></div>
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-300 opacity-10 rounded-bl-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          채무불이행의 효과 - 손해배상
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-7 pt-1 pb-6 grid grid-cols-2 gap-6 text-xl">
        <!-- 손해배상의 의의 -->
        <div class="section-card p-5">
          <div class="flex items-center mb-3">
            <div class="mr-3 bg-blue-600 bg-opacity-60 rounded-full p-2">
              <i class="fas fa-gavel text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              손해배상의 의의
            </h2>
          </div>
          <div class="content-box rounded-md p-4 mt-2">
            <p class="text-white mb-2">
              • 위법한 원인으로 발생한 손해를 전보하는 것
            </p>
            <p class="text-white mb-2">• 손해의 발생이 전의 상태로 회복</p>
            <p class="text-white">
              • <span class="text-blue-200 font-medium">차액설(판례)</span> :
              채무불이행이 없었더라면 존재하였을 <br />
              <span class="pl-4">이익상태와 현재 이익상태의 차액</span>
            </p>
          </div>
        </div>
        <!-- 손해의 종류 -->
        <div class="section-card p-5">
          <div class="flex items-center mb-3">
            <div class="mr-3 bg-blue-600 bg-opacity-60 rounded-full p-2">
              <i class="fas fa-th-list text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">손해의 종류</h2>
          </div>
          <div class="content-box rounded-md p-6 mt-2">
            <div class="flex justify-between mb-3">
              <div class="flex items-center">
                <i class="fas fa-coins text-blue-300 mr-2"></i>
                <p class="text-white">재산적 손해</p>
              </div>
              <div class="flex items-center">
                <i class="fas fa-brain text-blue-300 mr-2"></i>
                <p class="text-white">비재산적 손해 (정신적)</p>
              </div>
            </div>
            <div class="flex justify-between mb-3">
              <div class="flex items-center">
                <i class="fas fa-minus-circle text-blue-300 mr-2"></i>
                <p class="text-white">적극적 손해</p>
              </div>
              <div class="flex items-center">
                <i class="fas fa-chart-line text-blue-300 mr-2"></i>
                <p class="text-white">소극적 손해 (일실이득)</p>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <i class="fas fa-handshake text-blue-300 mr-2"></i>
                <p class="text-white">이행이익의 손해</p>
              </div>
              <div class="flex items-center">
                <i class="fas fa-shield-alt text-blue-300 mr-2"></i>
                <p class="text-white">신뢰이익의 손해</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 손해의 발생과 인과관계 -->
        <div class="section-card p-5">
          <div class="flex items-center mb-3">
            <div class="mr-3 bg-blue-600 bg-opacity-60 rounded-full p-2">
              <i class="fas fa-link text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              손해의 발생과 인과관계
            </h2>
          </div>
          <div class="content-box rounded-md p-4 mt-2">
            <p class="text-white mb-3">
              • <span class="text-blue-200 font-medium">상당인과관계설</span>:
              채무불이행과 상당인과관계에 있는 <br />
              <span class="pl-4"> 손해를 배상</span>
            </p>
            <div class="mb-2 pl-4 border-l-2 border-blue-400">
              <p class="text-white mb-1">
                <i class="fas fa-circle-check text-green-300 mr-2"></i
                ><span class="text-blue-200">통상손해</span> : 일반적으로
                발생하는 손해 <br />
                <span class="pl-32">(예견가능성 무관) </span>
              </p>
            </div>
            <div class="pl-4 border-l-2 border-blue-400">
              <p class="text-white">
                <i class="fas fa-circle-exclamation text-yellow-300 mr-2"></i
                ><span class="text-blue-200">특별손해</span> : 특별한 사정에
                따른 손해<br />
                <span class="pl-32"> (예견가능성 필요) </span>
              </p>
            </div>
          </div>
        </div>
        <!-- 과실상계 -->
        <div class="section-card p-5">
          <div class="flex items-center mb-3">
            <div class="mr-3 bg-blue-600 bg-opacity-60 rounded-full p-2">
              <i class="fas fa-balance-scale text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">과실상계</h2>
          </div>
          <div class="content-box rounded-md p-4 mt-2 relative">
            <div class="flex items-center">
              <div class="w-1/2 mt-1">
                <p class="text-white">
                  • 채무불이행에 의한 손해 <br />
                  <span class="pl-3">발생에 채권자의 과실이 </span> <br />
                  <span class="pl-3">있는 경우</span>
                </p>
                <p class="text-white mt-3">
                  • 채권자 과실의 정도에 따라 <br />
                  <span class="pl-3">채무자의 손해배상액이 </span> <br />
                  <span class="pl-3">경감됨 </span>
                </p>
              </div>
              <div class="w-1/2 flex justify-center">
                <div class="flex flex-col items-center">
                  <i
                    class="fas fa-scale-balanced text-5xl text-blue-300 mb-2"
                  ></i>
                  <div
                    class="w-full bg-blue-800 bg-opacity-50 h-1 mt-3 mb-4"
                  ></div>
                  <div class="flex justify-between w-full space-x-4">
                    <div class="text-center">
                      <i class="fas fa-user text-5xl text-yellow-200"></i>
                      <p class="text-white text-lg">채권자 과실</p>
                    </div>
                    <div class="text-center">
                      <i class="fas fa-user text-5xl text-red-200"></i>
                      <p class="text-white text-lg">채무자 책임</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">11 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>계약의 의의</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .freedom-item {
        transition: all 0.3s ease;
        border-left: 3px solid transparent;
      }
      .freedom-item:hover {
        border-left: 3px solid #60a5fa;
        background-color: rgba(255, 255, 255, 0.05);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">계약의 의의</h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-10 pt-6 pb-12 flex flex-col">
        <!-- Main content area - two columns -->
        <div class="flex flex-1">
          <!-- Left column - Definition and social function -->
          <div class="w-1/2 pr-3">
            <div class="flex items-center mb-4">
              <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-handshake text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">
                계약의 정의와 사회적 작용
              </h2>
            </div>
            <div class="content-box rounded-md px-4 pt-4 pb-6 mb-6">
              <h3 class="text-xl font-medium text-blue-200 mb-4">
                계약의 정의
              </h3>
              <p class="text-white text-xl pl-3 mb-4">
                계약당사자들 사이에 서로 대립하는 의사표시의 합치로
              </p>
              <p class="text-white text-xl pl-3">성립하는 법률행위</p>
            </div>
            <div class="content-box rounded-md px-4 pt-4 pb-6">
              <h3 class="text-xl font-medium text-blue-200 mb-4">
                사회적 작용
              </h3>
              <ul class="text-white text-xl space-y-4">
                <li>
                  <i class="fas fa-check text-blue-300 mr-2"></i>사적자치의
                  원칙의 실현위한 기본적인 수단
                </li>
                <li>
                  <i class="fas fa-check text-blue-300 mr-2"></i>계약에 의해
                  발생된 법률관계를 국가가 보호
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/2 pl-3">
            <div class="flex items-center mb-4">
              <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-handshake text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">
                계약의 자유와 제한
              </h2>
            </div>
            <div class="content-box rounded-md p-4 mb-6">
              <h3 class="text-xl font-medium text-blue-200 mb-2">
                계약자유의 내용
              </h3>

              <ul class="text-xl grid grid-cols-2">
                <li class="freedom-item text-white p-2 rounded">
                  <i class="fas fa-check text-blue-300 mr-2"></i>계약체결의 자유
                </li>
                <li class="freedom-item text-white p-2 rounded">
                  <i class="fas fa-check text-blue-300 mr-2"></i>계약상대방
                  선택의 자유
                </li>
                <li class="freedom-item text-white p-2 rounded">
                  <i class="fas fa-check text-blue-300 mr-2"></i>계약내용 결정의
                  자유
                </li>
                <li class="freedom-item text-white p-2 rounded">
                  <i class="fas fa-check text-blue-300 mr-2"></i>계약체결 방식의
                  자유
                </li>
              </ul>
            </div>
            <div class="content-box rounded-md p-4">
              <h3 class="text-xl font-medium text-blue-200 mb-2">
                계약자유의 제한
              </h3>

              <ul class="text-xl grid grid-cols-2">
                <li class="freedom-item text-white p-2 rounded">
                  <i class="fas fa-ban text-red-300 mr-2"></i>공법상ㆍ사법상
                  체약강제
                </li>
                <li class="freedom-item text-white p-2 rounded">
                  <i class="fas fa-ban text-red-300 mr-2"></i>내용결정의 자유의
                  제한
                </li>
                <li class="freedom-item text-white p-2 rounded">
                  <i class="fas fa-ban text-red-300 mr-2"></i>계약방식의 제한
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Bottom section - Standard terms and conditions -->
        <div>
          <div class="flex items-center mb-3">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-file-contract text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">보통거래약관</h2>
          </div>
          <div
            class="content-box rounded-md px-4 py-6 flex items-center text-xl"
          >
            <div class="flex-1 border-r border-blue-400 border-opacity-30 pr-4">
              <p class="text-white">일방당사자가 계약내용을 정함</p>
            </div>
            <div class="flex-1 border-r border-blue-400 border-opacity-30 px-4">
              <p class="text-white">약관규제법에 의해 내용이 통제됨</p>
            </div>
            <div class="flex-1 pl-4">
              <p class="text-white">부당한 약관조항을 무효로 함</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">12 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>계약의 종류와 성립</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .contract-type {
        transition: all 0.3s ease;
      }
      .contract-type:hover {
        transform: translateY(-3px);
        background-color: rgba(255, 255, 255, 0.15);
      }
      .process-step {
        position: relative;
      }
      .process-step:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -15px;
        width: 30px;
        height: 2px;
        background-color: #60a5fa;
      }
      .feature-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          계약의 종류와 성립
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-7 py-5 flex flex-col">
        <!-- Contract Types Section -->
        <div class="mb-6">
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-sitemap text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">계약의 종류</h2>
          </div>
          <div class="grid grid-cols-3 gap-4 ml-10">
            <div
              class="contract-type content-box rounded-md p-3 flex items-center"
            >
              <div class="feature-icon mr-3">
                <i class="fas fa-list text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200">
                  전형계약 vs 비전형계약
                </h3>
                <p class="text-white text-lg">
                  전형계약(15), 비전형계약(숙박계약)
                </p>
              </div>
            </div>
            <div
              class="contract-type content-box rounded-md p-3 flex items-center"
            >
              <div class="feature-icon mr-3">
                <i class="fas fa-exchange-alt text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200">
                  쌍무계약 vs 편무계약
                </h3>
                <p class="text-white text-lg">양측 의무 vs 일방 의무</p>
              </div>
            </div>
            <div
              class="contract-type content-box rounded-md p-3 flex items-center"
            >
              <div class="feature-icon mr-3">
                <i class="fas fa-coins text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200">
                  유상계약 vs 무상계약
                </h3>
                <p class="text-white text-lg">대가 있음 vs 대가 없음</p>
              </div>
            </div>
            <div
              class="contract-type content-box rounded-md p-3 flex items-center"
            >
              <div class="feature-icon mr-3">
                <i class="fas fa-file-signature text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200">
                  낙성계약 vs 요물계약
                </h3>
                <p class="text-white text-lg">합의만으로 vs 물건인도 필요</p>
              </div>
            </div>
            <div
              class="contract-type content-box rounded-md p-3 flex items-center"
            >
              <div class="feature-icon mr-3">
                <i class="fas fa-calendar-alt text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200">
                  계속적 계약 vs 일시적 계약
                </h3>
                <p class="text-white text-lg">지속적 vs 일회성</p>
              </div>
            </div>
            <div
              class="contract-type content-box rounded-md p-3 flex items-center"
            >
              <div class="feature-icon mr-3">
                <i class="fas fa-handshake text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200">
                  예약 vs 본계약
                </h3>
                <p class="text-white text-lg">계약 체결 약속 vs 실제 계약</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Contract Formation Section -->
        <div class="mb-6">
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-file-contract text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">계약의 성립</h2>
          </div>
          <div class="ml-10 content-box rounded-md p-4">
            <div class="flex justify-center items-center">
              <div class="flex flex-col items-center mx-16">
                <div class="bg-blue-500 rounded-full p-3 mb-2">
                  <i class="fas fa-paper-plane text-white text-xl"></i>
                </div>
                <p class="text-white font-medium">청약</p>
              </div>
              <!-- <i class="fas fa- text-white text-xl"></i> -->

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="5.5"
                stroke="white"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <div class="flex flex-col items-center mx-16">
                <div class="bg-blue-500 rounded-full p-3 mb-2">
                  <i class="fas fa-check-circle text-white text-xl"></i>
                </div>
                <p class="text-white font-medium">승낙</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="5.5"
                stroke="white"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <div class="flex flex-col items-center mx-16">
                <div class="bg-blue-500 rounded-full p-3 mb-2">
                  <i class="fas fa-handshake text-white text-xl"></i>
                </div>
                <p class="text-white font-medium">합치</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="5.5"
                stroke="white"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <div class="flex flex-col items-center mx-3 mx-14">
                <div class="bg-blue-500 rounded-full p-3 mb-2">
                  <i class="fas fa-gavel text-white text-xl"></i>
                </div>
                <p class="text-white font-medium">계약성립</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Culpa in Contrahendo Section -->
        <div>
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-exclamation-triangle text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              계약체결상의 과실책임
            </h2>
          </div>
          <div class="ml-10 content-box rounded-md p-4">
            <p class="text-white text-xl">
              계약체결 과정 중 일방 당사자의 과실에 의하여 손해가 발생된 경우,
              과실있는 당사자의 상대방에 대한 손해배상책임
            </p>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">13 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>계약의 효력</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .effect-card {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        transition: all 0.3s ease;
      }
      .effect-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
      .icon-container {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.4);
        margin-bottom: 1rem;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-56 h-56 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">계약의 효력</h1>
      </div>
      <!-- Introduction -->
      <div class="px-12 pt-8">
        <div class="content-box rounded-md p-4 mb-8">
          <p class="text-white text-xl">
            <span class="font-semibold text-blue-200">계약의 효력</span>이란
            계약이 유효하게 성립함에 따라서 계약당사자들에게 발생하는 법적
            효과로, 당사자들이 합의한 계약의 내용에 따라 결정됩니다. 민법은
            쌍무계약에 공통적으로 인정될 수 있는 효력을 규정하고 있습니다.
          </p>
        </div>
      </div>
      <!-- Main Content: Three Effects -->
      <div class="flex-1 px-12 pb-8">
        <div class="text-2xl font-semibold text-blue-100 mb-6">
          <i class="fas fa-star text-yellow-300 mr-2"></i> 쌍무계약에서 인정되는
          공통적인 효력
        </div>
        <div class="grid grid-cols-3 gap-6">
          <!-- Effect 1: 동시이행의 항변권 -->
          <div class="effect-card p-5 flex flex-col items-center">
            <div class="icon-container">
              <i class="fas fa-exchange-alt text-2xl text-white"></i>
            </div>
            <h3 class="text-2xl font-semibold text-blue-200 mb-3">
              동시이행의 항변권
            </h3>
            <p class="text-white text-center text-xl">
              스스로 이행ㆍ이행의 제공을 하지 <br />
              않으면서 이행을 청구하는 상대방에 대하여 그가 이행의 제공을 할
              때까지 자기 채무의 이행을 거절할 수 있는 항변권
            </p>
            <p class="text-blue-200 text-xl mt-2">쌍무계약의 이행상의 견련성</p>
          </div>
          <!-- Effect 2: 위험부담 -->
          <div class="effect-card p-5 flex flex-col items-center">
            <div class="icon-container">
              <i class="fas fa-shield-alt text-2xl text-white"></i>
            </div>
            <h3 class="text-2xl font-semibold text-blue-200 mb-3">위험부담</h3>
            <p class="text-white text-center text-xl">
              채무가 책임 없는 사유로 인하여 <br />
              소멸한 경우, 그로 인하여 채무를 면한 채무자는 원칙적으로
              상대방에게 이행을 청구할 수 없음 <br />
              (채무자위험부담주의)
            </p>
            <p class="text-blue-200 text-xl mt-2 text-center">
              예외: 채권자의 책임있는 사유, <br />
              채권자의 수령지체
            </p>
          </div>
          <!-- Effect 3: 해제·해지 -->
          <div class="effect-card p-5 flex flex-col items-center">
            <div class="icon-container">
              <i class="fas fa-times-circle text-2xl text-white"></i>
            </div>
            <h3 class="text-2xl font-semibold text-blue-200 mb-3">해제·해지</h3>
            <p class="text-white text-center text-xl">
              계약당사자가 일방적인 의사표시로 유효하게 성립되었던 계약을
              <br />
              원래부터 계약이 존재하지 않던 <br />
              상태로 되돌려 놓는 것 <br />
              (해제권)
            </p>
            <p class="text-blue-200 text-xl mt-2">약정해제권, 법정해제권</p>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">14 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>동시이행의 항변권과 위험부담</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://d3js.org/d3.v7.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .concept-box {
        transition: all 0.3s ease;
        background-color: rgba(255, 255, 255, 0.08);
      }
      .concept-box:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
      .concept-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-tr-full"
      ></div>
      <div
        class="absolute top-20 right-20 w-48 h-48 bg-blue-300 opacity-10 rounded-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          동시이행의 항변권과 위험부담
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-10 py-5 flex flex-col text-xl">
        <!-- Two column layout -->
        <div class="flex flex-row space-x-6 h-full">
          <!-- Left column: 동시이행의 항변권 -->
          <div class="w-1/2 concept-box rounded-lg p-6 flex flex-col">
            <div class="flex items-center mb-4">
              <div class="concept-icon bg-blue-600 bg-opacity-50 mr-4">
                <i class="fas fa-balance-scale text-3xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">
                동시이행의 항변권
              </h2>
            </div>
            <div class="content-box rounded-md p-4 mb-4">
              <p class="text-white mb-3 mt-3 leading-loose">
                • <span class="font-semibold text-blue-200">의의 :</span> 스스로
                이행ㆍ이행의 제공을 하지 않으면서 이 <br />
                <span class="pl-4"></span>
                행을 청구하는 상대방에 대해 그가 이행의 제공을 할<br />
                <span class="pl-4"
                  >때까지 자기 채무의 이행을 거절할 수 있는 항변권</span
                >
              </p>
            </div>
            <div class="flex justify-center my-9">
              <div class="flex items-center">
                <div
                  class="bg-blue-500 bg-opacity-30 rounded-full p-3 flex items-center justify-center"
                >
                  <i class="fas fa-user text-white text-8xl"></i>
                </div>
                <div class="mx-30">
                  <i class="fas fa-exchange-alt text-white text-2xl"></i>
                </div>
                <div
                  class="bg-blue-500 bg-opacity-30 rounded-full p-3 flex items-center justify-center"
                >
                  <i class="fas fa-user text-white text-8xl"></i>
                </div>
              </div>
            </div>
            <div class="content-box rounded-md p-4">
              <p class="text-white">
                •
                <span class="font-semibold text-blue-200">근거 :</span>
                쌍무계약의 이행상의 견련성에 기초
              </p>
            </div>
          </div>
          <!-- Right column: 위험부담 -->
          <div class="w-1/2 concept-box rounded-lg p-6 flex flex-col">
            <div class="flex items-center mb-4">
              <div class="concept-icon bg-blue-600 bg-opacity-50 mr-4">
                <i class="fas fa-exclamation-triangle text-3xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">위험부담</h2>
            </div>
            <div class="content-box rounded-md p-4 mb-4">
              <p class="text-white mb-3 mt-3 leading-loose">
                • <span class="font-semibold text-blue-200">의의 :</span> 채무가
                책임 없는 사유로 인하여 소멸한 경우,<br />
                <span class="pl-4"></span>그로 인하여 채무를 면한 채무자는
                원칙적으로 상대 <br />
                <span class="pl-4"></span> 방에게 이행을 청구할 수 없음
              </p>
            </div>
            <div class="flex flex-col space-y-3 mt-2">
              <div class="content-box rounded-md p-4">
                <p class="text-white mb-3 mt-3">
                  •
                  <span class="font-semibold text-blue-200">원칙 :</span>
                  채무자위험부담주의
                </p>
              </div>
              <div class="content-box rounded-md p-4">
                <p class="text-white mb-3 mt-1">
                  •
                  <span class="font-semibold text-blue-200">예외 :</span>
                  채권자위험부담주의
                </p>

                <ul class="list-disc list-inside text-white ml-4">
                  <li class="mb-1">채권자의 책임있는 사유</li>
                  <li>채권자의 수령지체</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">15 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>계약의 해제</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .process-arrow {
        position: relative;
        height: 2px;
        background-color: #60a5fa;
      }
      .process-arrow:after {
        content: "";
        position: absolute;
        right: -8px;
        top: -4px;
        width: 0;
        height: 0;
        border-left: 8px solid #60a5fa;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
      .process-circle {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #60a5fa;
        color: white;
        font-weight: bold;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-56 h-56 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">계약의 해제</h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-5 py-2 grid grid-cols-2 gap-6">
        <!-- Left Column -->
        <div class="flex flex-col">
          <!-- Definition Section -->
          <div class="mb-4">
            <div class="flex items-center mb-2">
              <div class="mr-3 bg-blue-600 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-file-contract text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">해제의 의의</h2>
            </div>
            <div class="content-box rounded-md px-4 py-2 ml-9">
              <p class="text-white leading-relaxed">
                • 계약당사자가 일방적인 의사표시로 유효하게 성립한 계약
                <span class="pl-3.5"
                  >을 원래부터 계약이 존재하지 않던 상태로 되돌려 놓는 것</span
                >
              </p>
              <p class="text-white">• 해제할 수 있는 권리가 해제권 (형성권)</p>
            </div>
          </div>
          <!-- Types Section -->
          <div class="mb-4">
            <div class="flex items-center mb-2">
              <div class="mr-3 bg-blue-600 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-sitemap text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">해제의 종류</h2>
            </div>
            <div class="flex ml-9 space-x-4">
              <div
                class="content-box rounded-md p-4 py-2 flex-1 flex items-center"
              >
                <div class="bg-blue-600 bg-opacity-30 rounded-full p-2 mr-3">
                  <i class="fas fa-handshake text-white"></i>
                </div>
                <div>
                  <h3 class="text-xl font-medium text-blue-200 mb-1">
                    약정해제권
                  </h3>
                  <p class="text-white">
                    당사자 간의 약정에 <br />
                    의한 해제권
                  </p>
                </div>
              </div>
              <div
                class="content-box rounded-md p-4 py-2 flex-1 flex items-center"
              >
                <div class="bg-blue-600 bg-opacity-30 rounded-full p-2 mr-3">
                  <i class="fas fa-gavel text-white"></i>
                </div>
                <div>
                  <h3 class="text-xl font-medium text-blue-200 mb-1">
                    법정해제권
                  </h3>
                  <p class="text-white">법률에 의해 인정되는 해제권</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Effects Section -->
          <div>
            <div class="flex items-center mb-2">
              <div class="mr-3 bg-blue-600 bg-opacity-50 rounded-full p-2">
                <i class="fas fa-chart-line text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">해제의 효과</h2>
            </div>
            <div class="content-box rounded-md px-4 py-2 ml-9">
              <p class="text-white leading-relaxed">
                • <span class="text-blue-200 font-medium">소급효</span> : 계약
                -> 소급적 소멸, 당사자 -> 원상회복의무<br />
                •
                <span class="text-blue-200 font-medium">직접효과설(판례)</span>
                : 해제에 의해 계약이 소급적으로 소멸하<br />
                <span class="pl-3.5">면 물권행위 효력도 소급적으로 소멸 </span
                ><br />
                • 해제 이전 권리취득자 및 해제 후 말소 등기 전 선의의 제
                <span class="pl-3.5">3자는 보호됨</span>
              </p>
            </div>
          </div>
        </div>
        <!-- Right Column - Requirements -->
        <div>
          <div class="flex items-center mb-2">
            <div class="mr-3 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-clipboard-list text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              해제의 요건 (법정해제권의 경우)
            </h2>
          </div>
          <!-- Process visualization -->
          <div
            class="content-box rounded-md px-5 py-4 ml-9 flex flex-col space-y-5"
          >
            <!-- Step 1 -->
            <div class="flex items-start">
              <div class="process-circle mr-4 flex-shrink-0 mt-1">1</div>
              <div class="flex-1">
                <h3 class="text-xl font-medium text-blue-200 mb-2">
                  해제권의 발생
                </h3>
                <div class="bg-blue-800 bg-opacity-30 rounded-md mt-4.5 p-3">
                  <!-- <p class="text-white  mb-2">
                    • 상대방의 채무불이행 필요
                  </p> -->
                  <ul class="list-disc pl-5 text-white space-y-2">
                    <li>상대방의 채무불이행 필요</li>
                    <li>
                      <span class="text-blue-300">이행지체</span> : 상당한
                      기간을 정한 최고 필요
                    </li>
                    <li>
                      <span class="text-blue-300">이행불능</span> : 최고
                      필요없음
                    </li>
                    <li>
                      <span class="text-blue-300">불완전이행</span> : 완전이행
                      및 추완이 가능한 경우 <br />최고 필요
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Arrow -->
            <div class="flex justify-center">
              <div class="process-arrow w-16"></div>
            </div>
            <!-- Step 2 -->
            <div class="flex items-start">
              <div class="process-circle mr-4 flex-shrink-0 mt-1">2</div>
              <div class="flex-1">
                <h3 class="text-xl font-medium text-blue-200 mb-2">
                  해제권의 행사
                </h3>
                <div class="bg-blue-800 bg-opacity-30 rounded-md mt-4.5 p-3">
                  <ul class="list-disc pl-5 text-white space-y-2">
                    <li>상대방에 대한 의사표시로 행사</li>
                    <li>의사표시가 도달한 때 효력 발생</li>
                    <li>채권자가 행사하지 않으면 해제 효과 발생하지 않음</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">16 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>전형계약 - 증여</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .section-card {
        background-color: rgba(30, 58, 138, 0.5);
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      .section-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }
      .section-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-56 h-56 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          전형계약 - 증여
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-8 grid grid-cols-2 gap-4">
        <!-- Definition Section -->
        <div class="section-card p-5">
          <div class="flex items-center mb-3">
            <div class="section-icon bg-blue-600 bg-opacity-70 mr-3">
              <i class="fas fa-gift text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">증여의 의의</h2>
          </div>
          <div class="content-box rounded-md p-4 mt-2">
            <p class="text-white">
              • 당사자 일방(증여자)이 재산을 상대방(수증자)에게 <br />
              <span class="pl-3.5"></span> 무상으로 수여하는 의사를 표시하고,
              상대방이 승낙함 <br />
              <span class="pl-3.5"></span>으로써 성립
            </p>
            <p class="text-blue-200 mt-2">• 무상계약, 편무계약의 성질을 가짐</p>
          </div>
        </div>
        <!-- Obligations Section -->
        <div class="section-card p-5">
          <div class="flex items-center mb-3">
            <div class="section-icon bg-blue-500 bg-opacity-70 mr-3">
              <i class="fas fa-hands-helping text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">증여자의 의무</h2>
          </div>
          <div class="content-box rounded-md p-4 mt-2">
            <p class="text-white mb-2">• 재산이전의무:</p>
            <ul class="list-disc list-inside text-blue-200 ml-4">
              <li>동산: 인도</li>
              <li>부동산: 등기 및 인도</li>
              <li>채권: 대항요건 구비</li>
            </ul>
          </div>
        </div>
        <!-- Warranty Section -->
        <div class="section-card p-5">
          <div class="flex items-center mb-3">
            <div class="section-icon bg-blue-700 bg-opacity-70 mr-3">
              <i class="fas fa-shield-alt text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              증여자의 담보책임
            </h2>
          </div>
          <div class="content-box rounded-md p-4 mt-2">
            <p class="text-white mb-2">
              • 원칙: 무상계약이므로 담보책임 부담하지 않음
            </p>
            <p class="text-white mb-1">• 예외:</p>
            <ul class="text-blue-200 ml-4">
              <li>- 하자나 흠결을 알고 고지하지 않은 경우</li>
              <li>
                - 상대부담 있는 증여의 경우 그 부담 한도 내 담보책임 <br />
                <span class="pl-3.5"></span> 부담
              </li>
            </ul>
          </div>
        </div>
        <!-- Revocation Section -->
        <div class="section-card p-5">
          <div class="flex items-center mb-3">
            <div class="section-icon bg-blue-800 bg-opacity-70 mr-3">
              <i class="fas fa-undo-alt text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">증여의 해제</h2>
          </div>
          <div class="content-box rounded-md p-4 mt-2">
            <p class="text-white mb-1">• 해제권 발생 원인:</p>
            <ul class="text-blue-200 ml-4 mb-2">
              <li>1. 서면에 의하지 않은 증여</li>
              <li>2. 수증자의 망은행위</li>
              <li>3. 증여자의 재산상태 악화</li>
            </ul>
            <p class="text-white">• 이미 이행된 부분은 해제 효과 미치지 않음</p>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">17 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>전형계약 - 매매</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .feature-circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
        margin: 0 auto 15px auto;
      }
      .contract-flow {
        position: relative;
      }
      .flow-arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #60a5fa;
        font-size: 2rem;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          전형계약 - 매매
        </h1>
      </div>
      <!-- Main content -->
      <div class="flex-1 px-6 py-4 flex flex-col">
        <!-- Definition section -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-file-signature text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">매매의 의의</h2>
          </div>
          <div class="content-box rounded-md p-5 ml-10">
            <p class="text-white mb-5">
              <i class="fas fa-angle-right text-blue-300 mr-2"></i>
              당사자 일방(매도인)이 재산권을 상대방에게 이전할 것을 약정하고
              상대방(매수인)은 그 대금을 지급하기로 하는 계약
            </p>
            <!-- Contract flow visualization -->
            <div class="flex items-center justify-center contract-flow">
              <div
                class="text-center px-6 py-4 bg-blue-800 bg-opacity-30 rounded-lg"
              >
                <i class="fas fa-user text-2xl text-blue-200 mb-2"></i>
                <p class="text-blue-100 font-medium text-2xl">매도인</p>
                <p class="text-lg text-blue-200">재산권 이전</p>
              </div>
              <div class="mx-8 relative">
                <i class="fas fa-exchange-alt text-3xl text-blue-300"></i>
              </div>
              <div
                class="text-center px-6 py-4 bg-blue-800 bg-opacity-30 rounded-lg"
              >
                <i class="fas fa-user-tie text-2xl text-blue-200 mb-2"></i>
                <p class="text-blue-100 font-medium text-2xl">매수인</p>
                <p class="text-lg text-blue-200">대금 지급</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Characteristics section -->
        <div>
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-clipboard-list text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              매매 계약의 특성
            </h2>
          </div>
          <div class="grid grid-cols-3 gap-6 ml-10">
            <!-- Characteristic 1 -->
            <div
              class="content-box rounded-md p-3 flex flex-col items-center text-center"
            >
              <div class="flex items-center">
                <i class="mr-2 fas fa-check-circle text-3xl text-white"></i>
                <h3 class="text-3xl font-medium text-blue-200 mb-2">
                  낙성계약
                </h3>
              </div>
              <p class="text-white">
                당사자의 합의만으로 <br />
                성립하는 계약
              </p>
            </div>
            <!-- Characteristic 2 -->
            <div
              class="content-box rounded-md p-3 flex flex-col items-center text-center"
            >
              <div class="flex items-center">
                <i class="mr-2 fas fa-sync-alt text-3xl text-white"></i>
                <h3 class="text-3xl font-medium text-blue-200 mb-2">
                  쌍무계약
                </h3>
              </div>
              <p class="text-white">
                당사자가 서로 대가적 의무를 <br />
                부담하는 계약
              </p>
            </div>
            <!-- Characteristic 3 -->
            <div
              class="content-box rounded-md p-3 flex flex-col items-center text-center"
            >
              <div class="flex items-center">
                <i class="mr-2 fas fa-coins text-3xl text-white"></i>
                <h3 class="text-3xl font-medium text-blue-200 mb-2">
                  유상계약
                </h3>
              </div>
              <p class="text-white">
                대가를 지급하고 재산권을 <br />
                취득하는 계약
              </p>
            </div>
          </div>
          <!-- Brief intro to warranty responsibility -->
          <div
            class="mt-6 ml-10 content-box rounded-md p-1 bg-blue-700 bg-opacity-20"
          >
            <div class="flex items-center py-3">
              <i class="pl-3 fas fa-info-circle text-xl text-blue-300 mr-3"></i>
              <p class="text-white">
                <span class="font-medium text-blue-200">매도인의 담보책임</span>
                : 매매의 유상성에 기초하여 인정되는 무과실책임으로, 모든
                유상계약에 적용됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">18 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>매도인의 담보책임</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .section-icon {
        background-color: rgba(37, 99, 235, 0.3);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      /* .{
        position: relative;
        padding-left: 20px;
      }
      :before {
        content: "•";
        position: absolute;
        left: 0;
        color: #60a5fa;
      } */
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          매도인의 담보책임
        </h1>
      </div>
      <!-- Main content -->
      <div class="flex-1 px-8 py-5 grid grid-cols-2 gap-6 text-xl">
        <!-- Left column -->
        <div class="flex flex-col gap-6">
          <!-- Section 1 -->
          <div>
            <div class="flex items-center mb-3">
              <div class="section-icon mr-3">
                <i class="fas fa-info-circle text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">
                담보책임의 의의
              </h2>
            </div>
            <div class="content-box rounded-md p-4 ml-10 space-y-4">
              <p class="text-white mb-2">
                ㆍ매매의 유상성에 기초하여 매도인의 고의ㆍ과실과 <br />
                <span class="pl-4.5"></span>관계없이 인정되는 무과실책임
              </p>
              <p class="text-white mb-2">ㆍ본질은 채무불이행(다수설, 판례)</p>
              <p class="text-white">
                ㆍ일반적으로 매수인이 선의의 경우에 한하여 인정됨
              </p>
            </div>
          </div>
          <!-- Section 2 -->
          <div>
            <div class="flex items-center mb-3">
              <div class="section-icon mr-3">
                <i class="fas fa-exclamation-triangle text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">권리의 하자</h2>
            </div>
            <div class="content-box rounded-md p-4 ml-10 space-y-4">
              <p class="text-white mb-2">
                ㆍ권리의 전부가 타인에게 속하는 경우
              </p>
              <p class="text-white mb-2">
                ㆍ권리의 일부가 타인에게 속하는 경우
              </p>
              <p class="text-white mb-2">ㆍ목적물의 수량부족, 일부멸실</p>
              <p class="text-white mb-2">
                ㆍ권리가 타인의 용익적 권리에 의해 제한을 받는 경우
              </p>
              <p class="text-white">
                ㆍ저당권, 전세권의 행사로 소유권을 취득할 수 없거나 <br />
                <span class="pl-4.5"></span> 상실한 경우
              </p>
            </div>
          </div>
        </div>
        <!-- Right column -->
        <div class="flex flex-col gap-6">
          <!-- Section 3 -->
          <div>
            <div class="flex items-center mb-3">
              <div class="section-icon mr-3">
                <i class="fas fa-tools text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">물건의 하자</h2>
            </div>
            <div class="content-box rounded-md p-4 ml-10">
              <!-- <p class="text-white mb-3">
                매매 목적물인 물건에 하자가 있는 경우
              </p> -->

              <p class="text-white mb-3">
                ㆍ물건의 하자 : 거래통념상 기대되는 객관적 성질ㆍ성능 <br />
                <span class="pl-4.5"></span>을 결여하거나, 당사자가 예정 또는
                보증한 성질을 결 <br />
                <span class="pl-4.5"></span>여한 경우
              </p>
              <p class="text-white mb-4">
                ㆍ매매 목적물인 권리에 법률적 흠결이 존재하여 <br />
                <span class="pl-4.5"></span>매수인이 매매계약의 목적을 달성할 수
                없는 경우
              </p>
              <div class="flex gap-4">
                <div class="flex-1 bg-blue-800 bg-opacity-30 p-3 rounded">
                  <p class="text-blue-200 font-medium mb-1">특정물의 하자</p>
                  <p class="text-white">개별적으로 특정된 물건의 하자</p>
                </div>
                <div class="flex-1 bg-blue-800 bg-opacity-30 p-3 rounded">
                  <p class="text-blue-200 font-medium mb-1">종류물의 하자</p>
                  <p class="text-white">종류와 수량으로 정해진 물건의 하자</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Section 4 -->

          <div>
            <div class="flex items-center mb-3">
              <div class="section-icon mr-3">
                <i class="fas fa-clipboard-list text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">
                담보책임의 내용
              </h2>
            </div>
            <div class="content-box rounded-md px-4 py-3 ml-10">
              <div class="flex items-center mb-1">
                <div
                  class="w-8 h-8 bg-blue-600 bg-opacity-40 rounded-full flex items-center justify-center mr-3"
                >
                  <i class="fas fa-times-circle text-white"></i>
                </div>
                <p class="text-white">
                  <span class="text-blue-200 font-medium">계약해제권:</span>
                  계약의 목적달성이 불능인 경우
                </p>
              </div>
              <div class="flex items-center mb-1">
                <div
                  class="w-8 h-8 bg-blue-600 bg-opacity-40 rounded-full flex items-center justify-center mr-3"
                >
                  <i class="fas fa-hand-holding-usd text-white"></i>
                </div>
                <p class="text-white">
                  <span class="text-blue-200 font-medium">손해배상청구권:</span>
                  하자로 인한 손해에 대한 배상
                </p>
              </div>
              <div class="flex items-center">
                <div
                  class="w-8 h-8 bg-blue-600 bg-opacity-40 rounded-full flex items-center justify-center mr-3"
                >
                  <i class="fas fa-percentage text-white"></i>
                </div>
                <p class="text-white">
                  <span class="text-blue-200 font-medium">대금감액청구권:</span>
                  일부 타인의 권리의 경우
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">19 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>전형계약 - 임대차</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .feature-item {
        transition: all 0.3s ease;
        background-color: rgba(255, 255, 255, 0.08);
        border-left: 3px solid #60a5fa;
      }
      .feature-item:hover {
        background-color: rgba(255, 255, 255, 0.15);
        transform: translateX(5px);
      }
      .feature-icon {
        width: 60px;
        height: 60px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.4);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 opacity-10 rounded-tr-full"
      ></div>
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-300 opacity-10 rounded-bl-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          전형계약 - 임대차
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-10 flex">
        <!-- Left column - Definition -->
        <div class="w-1/2 pr-6">
          <div class="flex items-center mb-6">
            <div class="feature-icon mr-4">
              <i class="fas fa-file-signature text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">임대차의 의의</h2>
          </div>
          <div class="content-box rounded-lg p-5 mb-6">
            <p class="text-white mt-4 mb-4 ml-3 leading-[2.8]">
              <i class="fas fa-angle-right text-blue-300 mr-2"></i>
              당사자 일방(임대인)이 상대방(임차인)에게 목적물을 <br />
              <span class="pl-6"></span>사용ㆍ수익하게 할 것을 약정하고,
              상대방이 이에 <br />
              <span class="pl-6"></span>대하여 차임을 지급할 것을 약정함으로써
              성립<br />
              <span class="pl-6"></span>하는 계약
            </p>
          </div>
          <div class="flex justify-center mt-8 text-xl">
            <div
              class="flex items-center bg-blue-800 bg-opacity-40 rounded-lg px-6 py-4"
            >
              <div class="flex flex-col items-center mx-12">
                <i class="fas fa-handshake text-6xl text-blue-200 mb-2"></i>
                <span class="text-white font-medium">낙성계약</span>
              </div>
              <div class="flex flex-col items-center mx-12">
                <i class="fas fa-coins text-6xl text-blue-200 mb-2"></i>
                <span class="text-white font-medium">유상계약</span>
              </div>
              <div class="flex flex-col items-center mx-12">
                <i class="fas fa-exchange-alt text-6xl text-blue-200 mb-2"></i>
                <span class="text-white font-medium">쌍무계약</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Right column - Characteristics -->
        <div class="w-1/2 pl-6">
          <div class="flex items-center mb-6">
            <div class="feature-icon mr-4">
              <i class="fas fa-home text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              부동산임대차의 특징
            </h2>
          </div>
          <div class="space-y-4 leading-[1.7]">
            <!-- Feature 1 -->
            <div class="feature-item rounded-lg p-5 flex items-start">
              <div class="mr-3 mt-1">
                <i class="fas fa-file-alt text-xl text-blue-300"></i>
              </div>
              <div>
                <p class="text-white">
                  임대인에게 임차권의 등기절차에 협력할 것을 청구할 수 있음
                  (반대 특약이 없는 경우)
                </p>
              </div>
            </div>
            <!-- Feature 2 -->
            <div class="feature-item rounded-lg p-5 flex items-start">
              <div class="mr-3 mt-1">
                <i class="fas fa-shield-alt text-xl text-blue-300"></i>
              </div>
              <div>
                <p class="text-white">
                  부동산임대차가 등기된 때에는 제3자에 대하여 효력(대항력)이
                  생김
                </p>
              </div>
            </div>
            <!-- Feature 3 -->
            <div class="feature-item rounded-lg p-5 flex items-start">
              <div class="mr-3 mt-1">
                <i class="fas fa-balance-scale text-xl text-blue-300"></i>
              </div>
              <div>
                <p class="text-white">
                  주택 및 상가건물의 임대차에 대해서는 임차인을 보호하기 위한
                  특별법 적용
                </p>
              </div>
            </div>
          </div>
          <div class="mt-1 bg-blue-700 bg-opacity-30 rounded-lg p-4">
            <div class="flex items-center">
              <i class="fas fa-info-circle text-xl text-blue-200 mr-3"></i>
              <p class="text-blue-100 font-medium">
                다음 슬라이드에서 주택임대차와 상가건물임대차에 대한 특별법
                내용을 살펴봅니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">20 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>주택임대차</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .feature-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-56 h-56 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full px-12 py-6 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">주택임대차</h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-12 py-2 flex flex-col">
        <!-- Introduction section -->
        <div class="mb-7">
          <div class="flex items-center mb-4">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-home text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              주택임대차보호법의 의의
            </h2>
          </div>
          <div class="content-box rounded-md p-5 ml-12">
            <p class="text-white mb-3">• 임차인 보호를 목적으로 하는 특별법</p>
            <p class="text-white mb-3">
              • 주거용 건물 및 임차주택의 일부가 주거 이외의 목적으로 사용되는
              경우에도 적용
            </p>
            <p class="text-white">
              • <span class="text-yellow-200">편면적 강행규정</span>: 임차인에게
              불리한 약정은 효력이 없음
            </p>
          </div>
        </div>
        <!-- Key features section -->
        <div>
          <div class="flex items-center mb-5">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-shield-alt text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              주택임대차의 기본 원칙
            </h2>
          </div>
          <div class="grid grid-cols-2 gap-8 ml-12">
            <!-- Feature 1 -->
            <div class="content-box rounded-md p-5 flex items-start">
              <div
                class="feature-icon bg-blue-700 bg-opacity-40 mr-4 flex-shrink-0"
              >
                <i class="fas fa-file-signature text-2xl text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200 mb-2">
                  주택임대차의 대항력
                </h3>
                <p class="text-white leading-[1.5]">
                  등기가 없어도
                  <span class="text-yellow-200">① 주택의 인도</span>와
                  <span class="text-yellow-200">② 주민등록의 이전</span>이
                  있으면 임대차의 대항력이 인정됨
                </p>
              </div>
            </div>
            <!-- Feature 2 -->
            <div class="content-box rounded-md p-5 flex items-start">
              <div
                class="feature-icon bg-blue-700 bg-opacity-40 mr-4 flex-shrink-0"
              >
                <i class="fas fa-exchange-alt text-2xl text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200 mb-2">
                  임대인 지위의 승계
                </h3>
                <p class="text-white leading-[1.5]">
                  주택을 매수한 자는 임대인의 지위를 승계함 (대항력이 있는
                  임차인 보호)
                </p>
              </div>
            </div>
          </div>
          <!-- Additional note -->
          <div
            class="mt-8 ml-12 bg-blue-800 bg-opacity-30 rounded-md p-4 border border-blue-400 border-opacity-30"
          >
            <div class="flex items-center">
              <i class="fas fa-info-circle text-xl text-blue-300 mr-3"></i>
              <p class="text-blue-100">
                주택임대차보호법은 사회적 약자인 임차인의 주거안정을 보장하기
                위한 법적 장치로, 민법의 일반원칙에 대한 특례를 규정하고
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">21 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>주택임차인 보호 방법</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .protection-card {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
        transition: all 0.3s ease;
      }
      .protection-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .icon-container {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
        margin-right: 16px;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          주택임차인 보호 방법
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-5 flex flex-col">
        <div class="grid grid-cols-1 gap-5.5">
          <!-- Protection Method 1: Opposing Power -->
          <div class="protection-card rounded-md p-5">
            <div class="grid grid-cols-16">
              <div class="icon-container">
                <i class="fas fa-shield-alt text-2xl text-white"></i>
              </div>
              <div class="col-span-15">
                <h2 class="text-2xl font-semibold text-blue-100 mb-3">
                  주택임대차의 대항력
                </h2>
                <div class="ml-2">
                  <p class="text-white mb-2">
                    • 등기가 없어도
                    <span class="text-blue-200 font-semibold">주택의 인도</span
                    >와
                    <span class="text-blue-200 font-semibold"
                      >주민등록의 이전</span
                    >이 있으면 임대차의 대항력이 인정됨
                  </p>
                  <p class="text-white">
                    • 주택을 매수한 자는 임대인의 지위를 승계함
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Protection Method 2: Duration Guarantee -->
          <div class="protection-card rounded-md p-5">
            <div class="grid grid-cols-16">
              <div class="icon-container col-span-1">
                <i class="fas fa-calendar-check text-2xl text-white"></i>
              </div>
              <div class="col-span-15">
                <h2 class="text-2xl font-semibold text-blue-100 mb-3">
                  주택임대차의 존속보장
                </h2>
                <div class="ml-2">
                  <p class="text-white mb-2">
                    •
                    <span class="text-blue-200 font-semibold"
                      >2년의 최단기간</span
                    >
                    및 법정갱신을 인정
                  </p>
                  <p class="text-white mb-2">
                    •
                    <span class="text-blue-200 font-semibold"
                      >1회의 계약갱신요구권(2년)</span
                    >이 인정됨
                  </p>
                  <p class="text-white">
                    • 임대인이 실제 거주 명목으로 계약갱신을 거절한 후 정당한
                    사유 없이 제3자에게 주택을 임대한 경우 손해배상의무 발생
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Protection Method 3: Security Deposit Return -->
          <div class="protection-card rounded-md p-5">
            <div class="grid grid-cols-16">
              <div class="icon-container col-span-1">
                <i class="fas fa-money-check-alt text-2xl text-white"></i>
              </div>
              <div class="col-span-15">
                <h2 class="text-2xl font-semibold text-blue-100 mb-3">
                  보증금반환의 보장
                </h2>
                <div class="ml-2 grid grid-cols-2 gap-10">
                  <div class="col-span-1">
                    <h3 class="text-xl font-medium text-blue-200 mb-2">
                      보증금의 우선변제권
                    </h3>
                    <p class="text-white leading-[1.6]">
                      주택의 임차인이 대항력을 갖추고 임대차계약 증서에
                      확정일자를 받은 경우 물권자와 동등
                    </p>
                  </div>
                  <div class="col-span-1">
                    <h3 class="text-xl font-medium text-blue-200 mb-2">
                      소액임차인의 최우선변제권
                    </h3>
                    <p class="text-white leading-[1.6]">
                      시행령에 규정된 금액 이하의 보증금의 경우, 일정액을 다른
                      담보물권자보다 우선해 변제받을 수 있음
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">22 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>상가건물임대차</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .protection-card {
        transition: all 0.3s ease;
        background-color: rgba(30, 58, 138, 0.6);
        border-left: 4px solid #3b82f6;
      }
      .protection-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .circle-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-56 h-56 bg-blue-300 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          상가건물임대차
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-10 py-8 flex flex-col">
        <!-- Significance section -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <div class="circle-icon bg-blue-600 bg-opacity-50 mr-4">
              <i class="fas fa-store text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              상가건물 임대차보호법의 의의
            </h2>
          </div>
          <div class="content-box rounded-md p-5 ml-12">
            <p class="text-white mb-3">
              <i class="fas fa-check-circle text-blue-300 mr-2"></i>
              사회적ㆍ경제적 약자인 상가건물 임차인을 보호하기 위하여 제정ㆍ시행
            </p>
            <p class="text-white">
              <i class="fas fa-check-circle text-blue-300 mr-2"></i>
              일정액의 보증금액 이하의 임대차에 적용되는 것이 원칙이나, 주요
              임차인 보호 규정은 모든 상가건물 임대차에 적용
            </p>
          </div>
        </div>
        <!-- Protection Methods Overview -->
        <div>
          <div class="flex items-center mb-5">
            <div class="circle-icon bg-blue-600 bg-opacity-50 mr-4">
              <i class="fas fa-shield-alt text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              상가임차인 보호 방법 개요
            </h2>
          </div>
          <div class="grid grid-cols-3 gap-6 ml-12">
            <!-- Protection 1 -->
            <div class="protection-card rounded-md p-5 flex flex-col">
              <div class="flex items-center mb-3">
                <div class="bg-blue-500 bg-opacity-30 rounded-full p-2 mr-3">
                  <i class="fas fa-building text-xl text-blue-200"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">대항력 인정</h3>
              </div>
              <ul class="text-white space-y-4 pl-5 mt-2">
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i>건물의
                  인도
                </li>
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i>사업자
                  등록
                </li>
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i>등기
                  없이도 대항력 인정
                </li>
              </ul>
            </div>
            <!-- Protection 2 -->
            <div class="protection-card rounded-md p-5 flex flex-col">
              <div class="flex items-center mb-3">
                <div class="bg-blue-500 bg-opacity-30 rounded-full p-2 mr-3">
                  <i class="fas fa-calendar-check text-xl text-blue-200"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">존속 보장</h3>
              </div>
              <ul class="text-white space-y-4 pl-5 mt-2">
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i>최단기간
                  1년
                </li>
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i>전체기간
                  10년까지
                </li>
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i
                  >계약갱신요구권 인정
                </li>
              </ul>
            </div>
            <!-- Protection 3 -->
            <div class="protection-card rounded-md p-5 flex flex-col">
              <div class="flex items-center mb-3">
                <div class="bg-blue-500 bg-opacity-30 rounded-full p-2 mr-3">
                  <i class="fas fa-money-bill-wave text-xl text-blue-200"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-200">보증금 보호</h3>
              </div>
              <ul class="text-white space-y-4 pl-5 mt-2">
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i
                  >주택임대차와 동일 방식
                </li>
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i>보증금
                  우선변제권
                </li>
                <li>
                  <i class="fas fa-angle-right text-blue-300 mr-2"></i
                  >소액임차인 최우선변제권
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-6 ml-12">
            <p class="text-blue-200 italic">
              ※ 다음 슬라이드에서 상가임차인 보호 방법에 대해 자세히 다룹니다.
            </p>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">23 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>상가임차인 보호 방법</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .protection-card {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
        transition: all 0.3s ease;
      }
      .protection-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
      .icon-box {
        width: 60px;
        height: 60px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.4);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          상가임차인 보호 방법
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-8 grid grid-cols-2 gap-6">
        <!-- 대항력 -->
        <div class="protection-card rounded-lg p-5">
          <div class="flex items-center mb-4">
            <div class="icon-box mr-4">
              <i class="fas fa-shield-alt text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              상가임대차의 대항력
            </h2>
          </div>
          <ul class="ml-4 space-y-2">
            <li class="flex items-start">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">
                건물의 인도와 사업자 등록으로 대항력 인정
              </p>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">등기가 없어도 대항력이 인정됨</p>
            </li>
          </ul>
        </div>
        <!-- 존속보장 -->
        <div class="protection-card rounded-lg p-5">
          <div class="flex items-center mb-4">
            <div class="icon-box mr-4">
              <i class="fas fa-calendar-check text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              상가임대차의 존속보장
            </h2>
          </div>
          <ul class="ml-4 space-y-2">
            <li class="flex items-start">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">최단기간 1년</p>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">전체기간 10년까지 계약갱신요구권 인정</p>
            </li>
          </ul>
        </div>
        <!-- 보증금반환 보장 -->
        <div class="protection-card rounded-lg p-5">
          <div class="flex items-center mb-4">
            <div class="icon-box mr-4">
              <i class="fas fa-money-bill-wave text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              보증금반환의 보장
            </h2>
          </div>
          <ul class="ml-4">
            <li class="flex items-start">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">주택임대차와 동일한 방식으로 보호</p>
            </li>
            <li class="flex items-start mt-2">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">
                우선변제권 및 소액임차인 최우선변제권 인정
              </p>
            </li>
          </ul>
        </div>
        <!-- 권리금회수기회 보호 -->
        <div class="protection-card rounded-lg p-5">
          <div class="flex items-center mb-3">
            <div class="icon-box mr-4">
              <i class="fas fa-hand-holding-usd text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              권리금회수기회의 보호
            </h2>
          </div>
          <ul class="ml-4 space-y-2">
            <li class="flex items-start">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">임대인은 임차인의 권리금 회수 방해 금지</p>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">
                정당한 이유 없이 신규임차인과의 계약체결 의무
              </p>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-blue-300 mt-1 mr-2"></i>
              <p class="text-white">
                의무 위반 시 임차인에게 손해배상책임 발생
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="px-12 py-6 bg-blue-900 bg-opacity-50">
        <div class="flex items-center">
          <i class="fas fa-info-circle text-blue-300 mr-3 text-xl"></i>
          <p class="text-blue-100 text-base text-xl">
            <span class="font-semibold text-xl">권리금 :</span>
            상가건물의 영업시설ㆍ비품, 영업 노하우, 위치에 따른 영업상 이점 등
            유형ㆍ무형의 재산적 가치의 양도 또는 이용대가
          </p>
        </div>
      </div>
      <!-- Footer with definition -->
      <div class="px-12 py-7 bg-blue-600 bg-opacity-50">
        <div class=""></div>
      </div>
      <!-- Page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">24 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>일반불법행위의 의의</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .concept-card {
        transition: all 0.3s ease;
        background-color: rgba(37, 99, 235, 0.2);
        border: 1px solid rgba(147, 197, 253, 0.3);
      }
      .concept-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
      .icon-container {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-48 h-48 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          일반불법행위의 의의
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-7 p-3 flex flex-col">
        <!-- Concept section -->
        <div class="mb-4">
          <div class="flex items-center mb-3">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-exclamation-triangle text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              불법행위의 개념
            </h2>
          </div>
          <div class="content-box rounded-md px-4 py-2 ml-10 leading-[1.7]">
            <p class="text-white">
              • 고의 또는 과실로 타인에게 손해를 발생시키는 위법행위
            </p>
            <p class="text-white">
              • 가해자는 피해자에게 손해배상을 하도록 규정함
            </p>
          </div>
        </div>
        <!-- Types section -->
        <div class="mb-4">
          <div class="flex items-center mb-3">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-sitemap text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              불법행위의 종류
            </h2>
          </div>
          <div class="content-box rounded-md px-4 py-3 ml-10 leading-[1.7]">
            <div class="flex items-start">
              <div class="w-1/3 pr-4">
                <p class="text-white mb-2 text-xl">• 일반불법행위</p>
                <p class="text-blue-200 text-md ml-2">
                  제750조 고의 또는 과실로 인한 위법행위로 타인에게 손해를 가한
                  자는 그 손해를 배상할 책임이 있다.
                </p>
              </div>
              <div
                class="w-1/3 pr-4 border-l border-blue-400 border-opacity-50 pl-4 leading-[1.7]"
              >
                <p class="text-white text-xl mb-2">• 특수불법행위</p>
                <p class="text-blue-200 text-md ml-4">
                  - 무능력자의 감독자책임
                </p>
                <p class="text-blue-200 text-md ml-4">- 사용자책임</p>
                <p class="text-blue-200 text-md ml-4">- 공동불법행위</p>
              </div>
              <div
                class="w-1/3 pl-4 border-l border-blue-400 border-opacity-50 leading-[1.7]"
              >
                <p class="text-white text-xl mb-2">• 특별법상 불법행위책임</p>
                <p class="text-blue-200 text-md ml-4">- 자동차운행자책임</p>
                <p class="text-blue-200 text-md ml-4">- 제조물책임</p>
                <p class="text-blue-200 text-md ml-4">- 국가배상책임</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Legal obligations section -->
        <div>
          <div class="flex items-center mb-3">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-balance-scale text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              법정채권발생원인
            </h2>
          </div>
          <div class="grid grid-cols-3 gap-4 ml-10">
            <!-- 불법행위 -->
            <div class="concept-card rounded-lg p-4 flex flex-col items-center">
              <div class="flex">
                <i
                  class="fas fa-gavel text-xl text-xl text-red-200 mt-1 mr-2"
                ></i>

                <h3 class="text-xl font-medium text-blue-200 mb-2">불법행위</h3>
              </div>
              <p class="text-white text-center">
                고의 또는 과실로 타인에게 손해를 <br />발생시키는 위법행위
              </p>
            </div>
            <!-- 사무관리 -->
            <div class="concept-card rounded-lg p-4 flex flex-col items-center">
              <div class="flex items-center justify-content">
                <!-- <div
                  class="icon-container bg-green-500 bg-opacity-30 mb-2 mr-2"
                > -->
                <i
                  class="fas fa-hands-helping text-xl text-yellow-200 mb-2 mr-2"
                ></i>
                <!-- </div> -->
                <h3 class="text-xl font-medium text-blue-200 mb-2">사무관리</h3>
              </div>

              <p class="text-white text-center">
                계약상 또는 법률상 의무 없이 타인을 <br />
                위하여 그의 사무를 처리하는 것
              </p>
            </div>
            <!-- 부당이득 -->
            <div
              class="concept-card rounded-lg px-3 py-4 flex flex-col items-center"
            >
              <div class="flex">
                <i
                  class="fas fa-exchange-alt text-xl text-green-200 mt-1 mr-2"
                ></i>

                <h3 class="text-xl font-medium text-blue-200 mb-2">부당이득</h3>
              </div>
              <p class="text-white text-center">
                법률상 원인 없이 타인의 재산, 노무로 인하여 얻은 이익을 반환해야
                하는 의무
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">25 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>일반불법행위의 성립요건 (1)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .requirement-box {
        transition: all 0.3s ease;
        background-color: rgba(37, 99, 235, 0.15);
        border-radius: 8px;
      }
      .requirement-box:hover {
        background-color: rgba(37, 99, 235, 0.25);
        transform: translateY(-3px);
      }
      .icon-container {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .justification-item {
        transition: all 0.2s ease;
      }
      .justification-item:hover {
        transform: translateX(5px);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-48 h-48 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          일반불법행위의 성립요건 (1)
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-9 py-6 flex flex-col text-xl">
        <!-- Section 1: 고의·과실로 인한 가해행위 -->
        <div class="requirement-box p-5 mb-6">
          <div class="flex items-start">
            <div
              class="icon-container bg-red-500 bg-opacity-70 mr-4 flex-shrink-0"
            >
              <i class="fas fa-exclamation-triangle text-xl text-white"></i>
            </div>
            <div>
              <h2 class="text-2xl font-semibold text-blue-100 mb-3">
                고의 · 과실로 인한 가해행위
              </h2>
              <div class="ml-2 text-white">
                <p class="mb-2">
                  <span class="text-yellow-200 font-medium">• 고의 :</span>
                  가해자가 일정한 행위를 하면 피해자에게 손해가 발생할 것을
                  알면서 그 행위를 하는 심리상태
                </p>
                <p class="mb-2">
                  <span class="text-yellow-200 font-medium">• 과실 :</span>
                  행위자가 타인에게 피해를 주지 않기 위하여 요구되는 사회생활상
                  주의의무를 위반하는 것
                </p>
                <p class="mb-2">
                  <span class="text-yellow-200 font-medium"
                    >• 추상적 경과실 :</span
                  >
                  사회평균인으로서의 주의의무를 다하지 못한 것
                </p>
                <p>
                  <span class="text-yellow-200 font-medium">• 증명책임 :</span>
                  원칙적으로 피해자가 증명 (예외: 특수불법행위, 환경오염사고,
                  의료과오 등)
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Section 2: 위법성 -->
        <div class="requirement-box p-5 mb-6">
          <div class="flex items-start">
            <div
              class="icon-container bg-blue-600 bg-opacity-70 mr-4 flex-shrink-0"
            >
              <i class="fas fa-gavel text-xl text-white"></i>
            </div>
            <div>
              <h2 class="text-2xl font-semibold text-blue-100 mb-3">위법성</h2>
              <div class="ml-2 text-white">
                <p class="mb-2">
                  • 불법행위가 성립하기 위해서는 가해행위가 법질서에 따라
                  허용되지 않는 위법한 행위여야 함
                </p>
                <p>• 결과불법론에 따라 판단</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Section 3: 위법성 조각사유 -->
        <div class="requirement-box p-5">
          <div class="flex items-start">
            <div
              class="icon-container bg-green-500 bg-opacity-70 mr-4 flex-shrink-0"
            >
              <i class="fas fa-shield-alt text-xl text-white"></i>
            </div>
            <div class="w-full">
              <h2 class="text-2xl font-semibold text-blue-100 mb-3">
                위법성 조각사유
              </h2>
              <div class="grid grid-cols-5 gap-3 ml-2">
                <div
                  class="justification-item bg-blue-800 bg-opacity-30 rounded p-3 flex flex-col items-center"
                >
                  <i class="fas fa-user-shield text-xl text-blue-200 mb-2"></i>
                  <p class="text-center text-white">정당방위</p>
                </div>
                <div
                  class="justification-item bg-blue-800 bg-opacity-30 rounded p-3 flex flex-col items-center"
                >
                  <i class="fas fa-life-ring text-xl text-blue-200 mb-2"></i>
                  <p class="text-center text-white">긴급피난</p>
                </div>
                <div
                  class="justification-item bg-blue-800 bg-opacity-30 rounded p-3 flex flex-col items-center"
                >
                  <i class="fas fa-fist-raised text-xl text-blue-200 mb-2"></i>
                  <p class="text-center text-white">자력구제</p>
                </div>
                <div
                  class="justification-item bg-blue-800 bg-opacity-30 rounded p-3 flex flex-col items-center"
                >
                  <i class="fas fa-handshake text-xl text-blue-200 mb-2"></i>
                  <p class="text-center text-white">피해자의 승낙</p>
                </div>
                <div
                  class="justification-item bg-blue-800 bg-opacity-30 rounded p-3 flex flex-col items-center"
                >
                  <i
                    class="fas fa-balance-scale text-xl text-blue-200 mb-2"
                  ></i>
                  <p class="text-center text-white">정당행위</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">26 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>일반불법행위의 성립요건 (2)</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
        height: 100%;
      }
      .icon-container {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
        margin-right: 16px;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          일반불법행위의 성립요건 (2)
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-3 pb-12 grid grid-cols-2 gap-4">
        <!-- Section 1: 가해자의 책임능력 -->

        <div class="flex flex-col">
          <div class="flex items-center mb-1">
            <div class="icon-container">
              <i class="fas fa-gavel text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              가해자의 책임능력
            </h2>
          </div>
          <div class="content-box rounded-md p-3 flex-grow">
            <div class="text-white">
              <p class="mt-2 mb-4">
                <span class="text-blue-200 font-medium">책임능력 :</span>
                행위자가 자기 행위의 책임을 인식할 수 있는 능력
              </p>
              <div
                class="bg-blue-800 bg-opacity-30 p-3 rounded-md mt-1 border border-blue-400 border-opacity-30"
              >
                <p class="text-blue-100 font-medium">책임무능력자</p>
                <p class="mt-2">
                  - 책임을 변식할 지능이 없는 미성년자(만 14세 전후)
                </p>
                <p class="mt-1">- 심신상실자(가해행위 당시 기준)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: 가해행위와 손해의 인과관계 -->

        <div class="flex flex-col">
          <div class="flex items-center mb-1">
            <div class="icon-container">
              <i class="fas fa-gavel text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">인과관계</h2>
          </div>
          <div class="content-box rounded-md p-3 flex-grow">
            <div class="text-white">
              <p class="mt-2 mb-4">
                <span class="text-blue-200 font-medium">상당인과관계 :</span>
                가해행위와 손해 사이에 상당인과관계 필요
              </p>
              <div
                class="bg-blue-800 bg-opacity-30 p-3 rounded-md mt-1 border border-blue-400 border-opacity-30"
              >
                <p class="text-blue-100 font-medium">증명책임</p>
                <p class="mt-2">- 원칙 : 피해자가 증명</p>
                <p class="mt-1">- 예외 : 증명책임의 완화 및 전환</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: 손해의 발생 -->
        <div class="flex flex-col">
          <div class="flex items-center mb-1">
            <div class="icon-container">
              <i class="fas fa-gavel text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">손해의 발생</h2>
          </div>
          <div class="content-box rounded-md p-3 flex-grow">
            <div class="text-white">
              <!-- <p class="mt-2 mb-4">
                <span class="text-blue-200 font-medium">손해의 개념 :</span>
                가해행위가 없었더라면 있어야 할 이익상태와 가해가 이미 발생한
                현재의 이익상태의 차액 (차액설)
              </p> -->

              <div class="flex items-center justify-content mt-2 mb-4">
                <div class="text-blue-200 font-medium mr-3">손해의 개념 :</div>
                <div>
                  가해행위가 없었더라면 있어야 할 이익상태와 가<br />
                  해가 이미 발생한 현재의 이익상태의 차액 (차액설)
                </div>
              </div>

              <div
                class="bg-blue-800 bg-opacity-30 p-3 rounded-md mt-1 border border-blue-400 border-opacity-30"
              >
                <p class="text-blue-100 font-medium">손해의 종류</p>
                <p class="mt-1">- 통상손해 · 특별손해</p>
                <p class="mt-1">- 과실상계 - 채무불이행의 경우와 동일</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Section 4: 불법행위의 효과 -->
        <div class="flex flex-col">
          <div class="flex items-center mb-1">
            <div class="icon-container">
              <i class="fas fa-gavel text-2xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              불법행위의 효과
            </h2>
          </div>
          <div class="content-box rounded-md p-3 flex-grow">
            <div class="text-white">
              <div class="flex items-center justify-content mt-2 mb-4">
                <div class="text-blue-200 font-medium mr-3">
                  손해배상청구권 :
                </div>
                <div>
                  <p>
                    불법행위가 인정되면 피해자는 가해자에 대하<br />
                    여 손해배상청구권을 가지게 됨
                  </p>
                </div>
              </div>
              <div
                class="bg-blue-800 bg-opacity-30 p-3 rounded-md mt-1 border border-blue-400 border-opacity-30"
              >
                <p class="text-blue-100 font-medium">손해배상의 범위</p>
                <p class="mt-1">
                  - 발생한 모든 손해 중 상당인과관계가 있는 손해
                </p>
                <p class="mt-1">- 통상손해와 예견가능한 특별손해</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">27 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>민법상 특수불법행위 - 책임무능력자의 감독자책임</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .section-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
      }
      .requirement-item {
        position: relative;
        padding-left: 25px;
      }
      .requirement-item:before {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #60a5fa;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          민법상 특수불법행위 - 책임무능력자의 감독자책임
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-10 py-7 grid grid-cols-2 gap-6">
        <!-- Left Column -->
        <div class="flex flex-col gap-6">
          <!-- Definition Section -->
          <div>
            <div class="flex items-center mb-3">
              <div class="section-icon mr-3">
                <i class="fas fa-info-circle text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">의의</h2>
            </div>
            <div class="content-box rounded-md p-4 ml-10 leading-loose">
              <p class="text-white mb-2">
                • 책임무능력자의 가해행위로 손해가 발생한 경우 법정감 <br />
                <span class="pl-3.5"></span> 독의무자(친권자) 또는
                대리감독자(교사)가 지는 책임
              </p>
              <p class="text-white mb-2">
                • 감독자는 스스로 감독의무를 게을리하지 않았음을 증명 <br />
                <span class="pl-3.5"></span>하면 책임 면제 (증명책임 전환)
              </p>
              <p class="text-white">
                • 법정감독의무자(친권자)의 경우 증명이 사실상 불가능 <br />
                <span class="pl-3.5"></span> 하여 무과실책임과 유사
              </p>
            </div>
          </div>
          <!-- Requirements Section -->
          <div>
            <div class="flex items-center mb-3">
              <div class="section-icon mr-3">
                <i class="fas fa-list-check text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">성립요건</h2>
            </div>
            <div class="content-box rounded-md p-4 ml-10">
              <p class="text-white mb-3">
                • 책임무능력자의 가해행위로 인한 손해발생
              </p>
              <p class="text-white mb-3">
                • 책임무능력자에 대한 보호ㆍ감독의무
              </p>
              <p class="text-white">• 보호ㆍ감독의무의 위반</p>
            </div>
          </div>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col gap-6">
          <!-- Effects Section -->
          <div>
            <div class="flex items-center mb-3">
              <div class="section-icon mr-3">
                <i class="fas fa-gavel text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">효과</h2>
            </div>
            <div class="content-box rounded-md p-4 ml-10 flex items-center">
              <div class="bg-blue-600 bg-opacity-30 rounded-full p-3 mr-4">
                <i class="fas fa-exchange-alt text-2xl text-white"></i>
              </div>
              <p class="text-white">
                책임무능력자가 아니라
                <span class="font-bold text-yellow-200">감독자</span>가 <br />
                손해배상책임을 짐
              </p>
            </div>
          </div>
          <!-- Minors with Capacity Section -->
          <div>
            <div class="flex items-center mb-3">
              <div class="section-icon mr-3">
                <i class="fas fa-user-graduate text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">
                책임능력 있는 미성년자의 불법행위
              </h2>
            </div>
            <div class="content-box rounded-md p-4 ml-10">
              <p class="text-white mb-3">
                • 감독자책임이 문제되지 않고 일반불법행위책임에 따름
              </p>
              <div class="bg-blue-800 bg-opacity-30 rounded-md p-3 mt-2">
                <div class="flex items-start">
                  <i
                    class="fas fa-exclamation-circle text-yellow-300 mt-1 mr-3"
                  ></i>
                  <p class="text-blue-100 leading-[1.55]">
                    예시 : 부모의 방치행위에 대한 고의ㆍ과실 및 가해행위와 손해
                    사이의 인과관계를 피해자가 모두 증명하면 일반불법행위가
                    인정될 수 있음
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Visual Element -->
          <div class="content-box rounded-md p-4 ml-10 mt-1">
            <div class="flex justify-center items-center">
              <div
                class="bg-red-500 bg-opacity-20 rounded-md p-3 flex items-center justify-center"
              >
                <div class="flex flex-col items-center">
                  <i class="fas fa-child text-2xl text-white"></i>
                  <p class="text-white mt-3 text-lg">책임무능력자</p>
                </div>
              </div>
              <i class="fas fa-arrow-right text-blue-300 mx-4"></i>
              <div
                class="bg-yellow-500 bg-opacity-20 rounded-md p-3 flex items-center justify-center"
              >
                <div class="flex flex-col items-center">
                  <i class="fas fa-user-shield text-2xl text-white"></i>
                  <p class="text-white mt-3 text-lg">감독자</p>
                </div>
              </div>
              <i class="fas fa-arrow-right text-blue-300 mx-4"></i>
              <div
                class="bg-green-500 bg-opacity-20 rounded-md p-3 flex items-center justify-center"
              >
                <div class="flex flex-col items-center">
                  <i class="fas fa-hand-holding-dollar text-2xl text-white"></i>
                  <p class="text-white mt-3 text-lg">손해배상</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">28 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>민법상 특수불법행위 - 사용자책임</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .icon-box {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
      }
      .section-title {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          민법상 특수불법행위 - 사용자책임
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 py-10 px-20 grid grid-cols-2 gap-20">
        <!-- Left Column -->
        <div class="flex flex-col space-y-4">
          <!-- Definition section -->
          <div>
            <div class="section-title">
              <div class="icon-box mr-3">
                <i class="fas fa-info-circle text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">의의</h2>
            </div>
            <div class="content-box rounded-md p-4 leading-[1.8]">
              <p class="text-white">
                • 사용자가 피용자의 사무집행 관련 행위로 제3자에게 <br />
                <span class="pl-3.5"></span> 발생한 손해를 배상하는 책임
              </p>
              <p class="text-white">
                • 증명책임이 전환됨 (사용자가 자신의 면책사유를 <br />
                <span class="pl-3.5"></span>증명해야 함)
              </p>
            </div>
          </div>
          <!-- Requirements section -->
          <div>
            <div class="section-title">
              <div class="icon-box mr-3">
                <i class="fas fa-list-check text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">성립요건</h2>
            </div>
            <div class="content-box rounded-md p-4">
              <ul class="text-white space-y-2">
                <li>① 타인의 사용 (실질적인 사용관계)</li>
                <li>② 피용자의 사무집행 (외형이론)</li>
                <li>③ 피용자의 불법행위</li>
                <li>④ 사용자 면책사유의 부존재</li>
                <li class="text-blue-200 pl-4">
                  ※ 판례는 면책사유를 인정한 경우가 없음
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col space-y-4">
          <!-- Effects section -->
          <div>
            <div class="section-title">
              <div class="icon-box mr-3">
                <i class="fas fa-gavel text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">효과</h2>
            </div>
            <div class="content-box rounded-md p-4 leading-[1.8]">
              <p class="text-white">
                • 피해자는 피용자뿐만 아니라 사용자에게도 손해배상 <br />
                <span class="pl-3.5"></span>을 청구 가능
              </p>
              <p class="text-white">
                • 사용자가 손해배상을 한 경우 피용자에게 구상권 행 <br />
                <span class="pl-3.5"></span>사 가능
              </p>
            </div>
          </div>
          <!-- Government Compensation Act section -->
          <div>
            <div class="section-title">
              <div class="icon-box mr-3">
                <i class="fas fa-landmark text-xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">국가배상법</h2>
            </div>
            <div class="content-box rounded-md p-4">
              <ul class="text-white space-y-2">
                <li>• 공무원의 직무상 불법행위 (민법 적용배제)</li>
                <li>• 국가ㆍ지방자치단체의 책임 인정</li>
                <li>• 무과실책임 (고의ㆍ과실 관계없이 인정)</li>
                <li>• 공무원 경과실 : 공무원은 책임 없음, 국가만 책임</li>
                <li>• 공무원 고의ㆍ중과실: 국가의 구상권 행사 가능</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">29 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>민법상 특수불법행위 - 공작물 책임과 공동불법행위</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .section-box {
        transition: all 0.3s ease;
      }
      .section-box:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
      .icon-container {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          민법상 특수불법행위 - 공작물 책임과 공동불법행위
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 px-8 py-6 flex flex-col space-y-6">
        <!-- Two columns layout -->
        <div class="flex flex-row space-x-6 h-full">
          <!-- Left column: 공작물 책임 -->
          <div class="w-1/2 section-box content-box rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="icon-container mr-4">
                <i class="fas fa-building text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">공작물 책임</h2>
            </div>
            <div class="ml-2 space-y-12">
              <div>
                <h3 class="text-xl font-medium text-blue-200 mb-2">의의</h3>
                <p class="text-white leading-[1.7]">
                  - 공작물의 설치 또는 보존의 하자로 인하여 타인이 손해 <br />
                  <span class="pl-4"></span> 를 입은 경우, 공작물의 점유자는
                  손해배상 책임이 있음
                </p>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200 mb-2">성립요건</h3>
                <ul class="text-white space-y-2 pl-4">
                  <li class="flex">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                    <span>공작물 등의 설치ㆍ보존의 하자</span>
                  </li>
                  <li class="flex">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                    <span>공작물 등의 하자로 인한 손해의 발생</span>
                  </li>
                  <li class="flex">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                    <span>면책사유의 부존재</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200 mb-2">효과</h3>
                <p class="text-white leading-[1.7]">
                  - 일차적으로 점유자가 책임을 지고, 점유자가 면책되는 <br />
                  <span class="pl-4"></span>경우 소유자가 손해배상책임을 짐
                </p>
              </div>
            </div>
          </div>
          <!-- Right column: 공동불법행위 -->
          <div class="w-1/2 section-box content-box rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="icon-container mr-4">
                <i class="fas fa-users text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">공동불법행위</h2>
            </div>
            <div class="ml-2 space-y-4">
              <div>
                <h3 class="text-xl font-medium text-blue-200 mb-2">의의</h3>
                <p class="text-white">
                  수인이 공동의 불법행위로 타인에게 손해를 가하는 것
                </p>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200 mb-2">성립요건</h3>
                <ul class="text-white space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                    <div>
                      <span class="font-medium">협의의 공동불법행위</span> :
                      여러 명이 공동으로 하나의 위법행위를 행하는 경우
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                    <div>
                      <span class="font-medium"
                        >가해자 불명의 공동불법행위</span
                      >
                      : 누구의 행위가 손해를 발생시켰는지 알 수 없는 경우
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-blue-300 mt-1 mr-2"></i>
                    <div>
                      <span class="font-medium"
                        >교사ㆍ방조에 의한 공동불법행위</span
                      >
                      : 타인의 불법행위를 교사하거나 방조한 경우
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-medium text-blue-200 mb-2">효과</h3>
                <p class="text-white">
                  공동불법행위자들은 피해자에게 연대하여 손해를 배상하여야 함
                  (부진정연대채무)
                </p>
                <p class="text-white mt-1">과실비율에 따른 구상권 인정</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">30 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>특별법상 불법행위 - 자동차운행자책임</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .section-icon {
        width: 60px;
        height: 60px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 99, 235, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .requirement-item {
        position: relative;
        padding-left: 20px;
      }
      .requirement-item:before {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        width: 8px;
        height: 8px;
        background-color: #60a5fa;
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-10 rounded-tr-full"
      ></div>
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-bl-full"
      ></div>
      <!-- Header -->
      <div
        class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30 flex items-center"
      >
        <!-- <i class="fas fa-car-crash text-3xl text-blue-200 mr-4"></i> -->
        <h1 class="text-4xl font-bold text-white title-shadow">
          특별법상 불법행위 - 자동차운행자책임
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-10 grid grid-cols-2 gap-8">
        <!-- Left column -->
        <div class="flex flex-col">
          <!-- 의의 Section -->
          <div class="mb-8">
            <div class="flex items-center mb-4">
              <div class="section-icon mr-4">
                <i class="fas fa-file-alt text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">의의</h2>
            </div>
            <div class="content-box rounded-md p-4 ml-6 leading-[1.9]">
              <p class="text-white">
                • 자동차손해배상 보장법에 따라 자기를 위하여 자동차를 <br />
                <span class="pl-3.5"></span> 운행하는 자는 그 운행으로 인한
                타인의 인적 손해에 <br />
                <span class="pl-3.5"></span> 대해 손해배상책임을 짐
              </p>
              <p class="text-white">
                • 자동차운행자의 책임 또는 운행자책임이라고 함
              </p>
            </div>
          </div>
          <!-- 효과 Section -->
          <div>
            <div class="flex items-center mb-4">
              <div class="section-icon mr-4">
                <i class="fas fa-gavel text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">효과</h2>
            </div>
            <div class="content-box rounded-md p-4 ml-6">
              <p class="text-white leading-[1.9]">
                • 운행자는 자동차의 운행으로 인하여 발생한
                <span class="text-blue-200 font-semibold">인적 손해</span>에
                <br />
                <span class="pl-3.5"></span> 대하여 배상할 책임을 짐
              </p>
              <p class="text-white">
                • <span class="text-blue-200 font-semibold">물적 손해</span>에
                대해서는 민법이 적용됨
              </p>
            </div>
          </div>
        </div>
        <!-- Right column -->
        <div>
          <!-- 성립요건 Section -->
          <div>
            <div class="flex items-center mb-4">
              <div class="section-icon mr-4">
                <i class="fas fa-list-check text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-semibold text-blue-100">성립요건</h2>
            </div>
            <div class="content-box rounded-md p-5 ml-6">
              <div class="mb-4">
                <div class="flex items-center mb-3">
                  <i class="fas fa-circle-check text-blue-300 mr-2"></i>
                  <p class="text-white font-medium">운행자성의 인정</p>
                </div>
                <p class="text-white ml-6">-> 운행이익ㆍ운행지배 기준</p>
              </div>
              <div class="mb-4">
                <div class="flex items-center">
                  <i class="fas fa-circle-check text-blue-300 mr-2"></i>
                  <p class="text-white font-medium">
                    타인에 대한 인적 손해의 발생
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <div class="flex items-center">
                  <i class="fas fa-circle-check text-blue-300 mr-2"></i>
                  <p class="text-white font-medium">
                    자동차의 운행으로 인한 손해의 발생
                  </p>
                </div>
              </div>
              <div>
                <div class="flex items-center mb-2">
                  <i class="fas fa-circle-check text-blue-300 mr-2"></i>
                  <p class="text-white font-medium">면책사유의 부존재</p>
                </div>
                <p class="text-white ml-6 leading-[1.75]">
                  -> 면책사유가 매우 엄격하여
                  <span class="text-yellow-200">무과실책임</span>과 유사하게
                  <br />
                  <span class="pl-7"></span>운용됨
                </p>
              </div>
            </div>
          </div>
          <!-- Visual element -->
          <div class="flex justify-center mt-6.5">
            <div class="w-3/4 h-1 bg-blue-400 opacity-30 rounded-full"></div>
          </div>
          <div class="flex justify-center mt-6.5">
            <div class="content-box rounded-md p-3 bg-blue-800 bg-opacity-30">
              <p class="text-blue-200 text-center font-medium">
                특별법 적용으로 피해자 보호 강화
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">31 / 32</p>
      </div>
    </div>
  </body>
</html>
`,`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>특별법상 불법행위 - 제조물책임</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style>
      body {
        width: 1280px;
        min-height: 720px;
        margin: 0;
        padding: 0;
      }
      .slide {
        width: 1280px;
        min-height: 720px;
      }
      .bg-gradient {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #1e40af 50%,
          #2563eb 100%
        );
      }
      .title-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .content-box {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #60a5fa;
      }
      .step-box {
        position: relative;
        transition: all 0.3s ease;
      }
      .step-box:hover {
        transform: translateY(-3px);
      }
      .step-connector {
        position: absolute;
        right: -16px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        color: #60a5fa;
      }
      .final-slide-mark {
        position: absolute;
        bottom: 16px;
        left: 16px;
        padding: 6px 12px;
        background-color: rgba(37, 99, 235, 0.2);
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <div class="slide bg-gradient flex flex-col relative text-xl">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-blue-400 opacity-10 rounded-bl-full"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-10 rounded-tr-full"
      ></div>
      <!-- Header -->
      <div class="w-full py-6 px-12 border-b border-blue-400 border-opacity-30">
        <h1 class="text-4xl font-bold text-white title-shadow">
          특별법상 불법행위 - 제조물책임
        </h1>
      </div>
      <!-- Content -->
      <div class="flex-1 p-5 flex flex-col">
        <!-- Definition section -->
        <div class="mb-6">
          <div class="flex items-center mb-3">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-info-circle text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">
              제조물책임의 의의
            </h2>
          </div>
          <div class="content-box rounded-md p-4 ml-10 leading-[1.7]">
            <p class="text-white">
              • 제조물에 통상적으로 기대되는 안전성이 결여되어 소비자 또는
              이용자에게 인적ㆍ재산적 손해가 발생한 경우 제조업자가
              <br />
              <span class="pl-3.5"></span> 배상하도록 규정
            </p>
            <p class="text-white">
              • <span class="text-yellow-200 font-semibold">무과실책임</span> :
              제조업자의 고의ㆍ과실은 요건이 아님
            </p>
            <p class="text-white">
              • 피해자는 제조물의 결함, 손해의 발생, 인과관계를 증명해야 함
            </p>
          </div>
        </div>
        <!-- Requirements section -->
        <div class="mb-6">
          <div class="flex items-center mb-3">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-clipboard-check text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">성립요건</h2>
          </div>
          <div class="grid grid-cols-4 gap-4 ml-10">
            <!-- Requirement 1 -->
            <div
              class="step-box content-box rounded-md p-3 flex flex-col items-center"
            >
              <div
                class="flex mt-2 bg-blue-500 bg-opacity-30 rounded-md py-2 mb-2 px-4"
              >
                <i class="fas fa-industry text-xl mt-1 mr-2 text-white"></i>
                <h3 class="font-medium text-blue-200">제조업자</h3>
              </div>

              <p class="text-white text-center">수입업자 포함</p>
              <div class="step-connector">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
            <!-- Requirement 2 -->
            <div
              class="step-box content-box rounded-md p-3 flex flex-col items-center"
            >
              <div
                class="flex mt-2 bg-blue-500 bg-opacity-30 rounded-md px-4 py-2 mb-2"
              >
                <i
                  class="fas fa-exclamation-triangle mt-1 mr-2 text-xl text-white"
                ></i>
                <h3 class="font-medium text-blue-200">제조물의 결함</h3>
              </div>

              <p class="text-white text-center">안전성 결여</p>
              <div class="step-connector">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
            <!-- Requirement 3 -->
            <div
              class="step-box content-box rounded-md p-3 flex flex-col items-center"
            >
              <div
                class="flex mt-2 bg-blue-500 bg-opacity-30 rounded-md px-4 py-2 mb-2"
              >
                <i class="fas fa-heartbeat mt-1 mr-2 text-xl text-white"></i>
                <h3 class="font-medium text-blue-200">손해의 발생</h3>
              </div>

              <p class="text-white text-center">신체ㆍ재산의 확대손해</p>
              <div class="step-connector">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
            <!-- Requirement 4 -->
            <div
              class="step-box content-box rounded-md p-3 flex flex-col items-center"
            >
              <div
                class="flex mt-2 bg-blue-500 bg-opacity-30 rounded-full px-4 py-2 mb-2"
              >
                <i class="fas fa-shield-alt mt-1 mr-2 text-xl text-white"></i>
                <h3 class="font-medium text-blue-200">면책사유 부존재</h3>
              </div>

              <p class="text-white text-center">면책사유가 없을 것</p>
            </div>
          </div>
        </div>
        <!-- Effects section -->
        <div>
          <div class="flex items-center mb-3">
            <div class="mr-4 bg-blue-600 bg-opacity-50 rounded-full p-2">
              <i class="fas fa-gavel text-xl text-white"></i>
            </div>
            <h2 class="text-2xl font-semibold text-blue-100">효과</h2>
          </div>
          <div
            class="content-box rounded-md p-3 ml-10 flex items-center justify-center"
          >
            <!-- <div class="bg-blue-600 bg-opacity-30 rounded-full p-4 mr-6">
              <i class="fas fa-hand-holding-usd text-3xl text-white"></i>
            </div> -->
            <div>
              <p class="text-white text-center">
                제조업자는 제조물의 결함으로 인하여 생명ㆍ신체 또는 재산에
                확대손해가 발생한 경우 <br />
                <span class="text-yellow-200 font-semibold"
                  >피해자에 대하여 손해배상을 할 의무</span
                >를 부담함
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer with page number -->
      <div class="absolute bottom-4 right-8">
        <p class="text-blue-200 text-lg">32 / 32</p>
      </div>
    </div>
  </body>
</html>
`],lt=()=>{};var z={};const X=function(e){const t=[];let s=0;for(let i=0;i<e.length;i++){let l=e.charCodeAt(i);l<128?t[s++]=l:l<2048?(t[s++]=l>>6|192,t[s++]=l&63|128):(l&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(l=65536+((l&1023)<<10)+(e.charCodeAt(++i)&1023),t[s++]=l>>18|240,t[s++]=l>>12&63|128,t[s++]=l>>6&63|128,t[s++]=l&63|128):(t[s++]=l>>12|224,t[s++]=l>>6&63|128,t[s++]=l&63|128)}return t},at=function(e){const t=[];let s=0,i=0;for(;s<e.length;){const l=e[s++];if(l<128)t[i++]=String.fromCharCode(l);else if(l>191&&l<224){const a=e[s++];t[i++]=String.fromCharCode((l&31)<<6|a&63)}else if(l>239&&l<365){const a=e[s++],d=e[s++],n=e[s++],c=((l&7)<<18|(a&63)<<12|(d&63)<<6|n&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const a=e[s++],d=e[s++];t[i++]=String.fromCharCode((l&15)<<12|(a&63)<<6|d&63)}}return t.join("")},G={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let l=0;l<e.length;l+=3){const a=e[l],d=l+1<e.length,n=d?e[l+1]:0,c=l+2<e.length,o=c?e[l+2]:0,_=a>>2,m=(a&3)<<4|n>>4;let g=(n&15)<<2|o>>6,w=o&63;c||(w=64,d||(g=64)),i.push(s[_],s[m],s[g],s[w])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(X(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):at(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const s=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let l=0;l<e.length;){const a=s[e.charAt(l++)],n=l<e.length?s[e.charAt(l)]:0;++l;const o=l<e.length?s[e.charAt(l)]:64;++l;const m=l<e.length?s[e.charAt(l)]:64;if(++l,a==null||n==null||o==null||m==null)throw new dt;const g=a<<2|n>>4;if(i.push(g),o!==64){const w=n<<4&240|o>>2;if(i.push(w),m!==64){const it=o<<6&192|m;i.push(it)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class dt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rt=function(e){const t=X(e);return G.encodeByteArray(t,!0)},K=function(e){return rt(e).replace(/\./g,"")},ct=function(e){try{return G.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function nt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const ot=()=>nt().__FIREBASE_DEFAULTS__,xt=()=>{if(typeof process>"u"||typeof z>"u")return;const e=z.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ct(e[1]);return t&&JSON.parse(t)},pt=()=>{try{return lt()||ot()||xt()||bt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ft=()=>pt()?.config;class mt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,s)=>{this.resolve=t,this.reject=s})}wrapCallback(t){return(s,i)=>{s?this.reject(s):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(s):t(s,i))}}}function vt(){try{return typeof indexedDB=="object"}catch{return!1}}function ht(){return new Promise((e,t)=>{try{let s=!0;const i="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(i);l.onsuccess=()=>{l.result.close(),s||self.indexedDB.deleteDatabase(i),e(!0)},l.onupgradeneeded=()=>{s=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(s){t(s)}})}const ut="FirebaseError";class u extends Error{constructor(t,s,i){super(s),this.code=t,this.customData=i,this.name=ut,Object.setPrototypeOf(this,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J.prototype.create)}}class J{constructor(t,s,i){this.service=t,this.serviceName=s,this.errors=i}create(t,...s){const i=s[0]||{},l=`${this.service}/${t}`,a=this.errors[t],d=a?gt(a,i):"Error",n=`${this.serviceName}: ${d} (${l}).`;return new u(l,n,i)}}function gt(e,t){return e.replace(wt,(s,i)=>{const l=t[i];return l!=null?String(l):`<${i}?>`})}const wt=/\{\$([^}]+)}/g;function S(e,t){if(e===t)return!0;const s=Object.keys(e),i=Object.keys(t);for(const l of s){if(!i.includes(l))return!1;const a=e[l],d=t[l];if(F(a)&&F(d)){if(!S(a,d))return!1}else if(a!==d)return!1}for(const l of i)if(!s.includes(l))return!1;return!0}function F(e){return e!==null&&typeof e=="object"}class k{constructor(t,s,i){this.name=t,this.instanceFactory=s,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}const p="[DEFAULT]";class yt{constructor(t,s){this.name=t,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const s=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(s)){const i=new mt;if(this.instancesDeferred.set(s,i),this.isInitialized(s)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:s});l&&i.resolve(l)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(t){const s=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(i)return null;throw l}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jt(t))try{this.getOrInitializeService({instanceIdentifier:p})}catch{}for(const[s,i]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);try{const a=this.getOrInitializeService({instanceIdentifier:l});i.resolve(a)}catch{}}}}clearInstance(t=p){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...t.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=p){return this.instances.has(t)}getOptions(t=p){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:s={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:i,options:s});for(const[a,d]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(a);i===n&&d.resolve(l)}return l}onInit(t,s){const i=this.normalizeInstanceIdentifier(s),l=this.onInitCallbacks.get(i)??new Set;l.add(t),this.onInitCallbacks.set(i,l);const a=this.instances.get(i);return a&&t(a,i),()=>{l.delete(t)}}invokeOnInitCallbacks(t,s){const i=this.onInitCallbacks.get(s);if(i)for(const l of i)try{l(t,s)}catch{}}getOrInitializeService({instanceIdentifier:t,options:s={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kt(t),options:s}),this.instances.set(t,i),this.instancesOptions.set(t,s),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=p){return this.component?this.component.multipleInstances?t:p:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kt(e){return e===p?void 0:e}function jt(e){return e.instantiationMode==="EAGER"}class Dt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const s=this.getProvider(t.name);if(s.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);s.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const s=new yt(t,this);return this.providers.set(t,s),s}getProviders(){return Array.from(this.providers.values())}}var r;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(r||(r={}));const Et={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},Ct=r.INFO,St={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},Tt=(e,t,...s)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),l=St[t];if(l)console[l](`[${i}]  ${e.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bt{constructor(t){this.name=t,this._logLevel=Ct,this._logHandler=Tt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Et[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}const Pt=(e,t)=>t.some(s=>e instanceof s);let H,Y;function At(){return H||(H=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function It(){return Y||(Y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q=new WeakMap,T=new WeakMap,Z=new WeakMap,j=new WeakMap,M=new WeakMap;function Ot(e){const t=new Promise((s,i)=>{const l=()=>{e.removeEventListener("success",a),e.removeEventListener("error",d)},a=()=>{s(b(e.result)),l()},d=()=>{i(e.error),l()};e.addEventListener("success",a),e.addEventListener("error",d)});return t.then(s=>{s instanceof IDBCursor&&Q.set(s,e)}).catch(()=>{}),M.set(t,e),t}function Mt(e){if(T.has(e))return;const t=new Promise((s,i)=>{const l=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",d),e.removeEventListener("abort",d)},a=()=>{s(),l()},d=()=>{i(e.error||new DOMException("AbortError","AbortError")),l()};e.addEventListener("complete",a),e.addEventListener("error",d),e.addEventListener("abort",d)});T.set(e,t)}let B={get(e,t,s){if(e instanceof IDBTransaction){if(t==="done")return T.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Z.get(e);if(t==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return b(e[t])},set(e,t,s){return e[t]=s,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _t(e){B=e(B)}function zt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...s){const i=e.call(D(this),t,...s);return Z.set(i,t.sort?t.sort():[t]),b(i)}:It().includes(e)?function(...t){return e.apply(D(this),t),b(Q.get(this))}:function(...t){return b(e.apply(D(this),t))}}function Ft(e){return typeof e=="function"?zt(e):(e instanceof IDBTransaction&&Mt(e),Pt(e,At())?new Proxy(e,B):e)}function b(e){if(e instanceof IDBRequest)return Ot(e);if(j.has(e))return j.get(e);const t=Ft(e);return t!==e&&(j.set(e,t),M.set(t,e)),t}const D=e=>M.get(e);function Ht(e,t,{blocked:s,upgrade:i,blocking:l,terminated:a}={}){const d=indexedDB.open(e,t),n=b(d);return i&&d.addEventListener("upgradeneeded",c=>{i(b(d.result),c.oldVersion,c.newVersion,b(d.transaction),c)}),s&&d.addEventListener("blocked",c=>s(c.oldVersion,c.newVersion,c)),n.then(c=>{a&&c.addEventListener("close",()=>a()),l&&c.addEventListener("versionchange",o=>l(o.oldVersion,o.newVersion,o))}).catch(()=>{}),n}const Yt=["get","getKey","getAll","getAllKeys","count"],Rt=["put","add","delete","clear"],E=new Map;function R(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(E.get(t))return E.get(t);const s=t.replace(/FromIndex$/,""),i=t!==s,l=Rt.includes(s);if(!(s in(i?IDBIndex:IDBObjectStore).prototype)||!(l||Yt.includes(s)))return;const a=async function(d,...n){const c=this.transaction(d,l?"readwrite":"readonly");let o=c.store;return i&&(o=o.index(n.shift())),(await Promise.all([o[s](...n),l&&c.done]))[0]};return E.set(t,a),a}_t(e=>({...e,get:(t,s,i)=>R(t,s)||e.get(t,s,i),has:(t,s)=>!!R(t,s)||e.has(t,s)}));class Lt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(Nt(s)){const i=s.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(s=>s).join(" ")}}function Nt(e){return e.getComponent()?.type==="VERSION"}const P="@firebase/app",L="0.14.6";const x=new Bt("@firebase/app"),$t="@firebase/app-compat",qt="@firebase/analytics-compat",Ut="@firebase/analytics",Vt="@firebase/app-check-compat",Wt="@firebase/app-check",Xt="@firebase/auth",Gt="@firebase/auth-compat",Kt="@firebase/database",Jt="@firebase/data-connect",Qt="@firebase/database-compat",Zt="@firebase/functions",te="@firebase/functions-compat",ee="@firebase/installations",se="@firebase/installations-compat",ie="@firebase/messaging",le="@firebase/messaging-compat",ae="@firebase/performance",de="@firebase/performance-compat",re="@firebase/remote-config",ce="@firebase/remote-config-compat",ne="@firebase/storage",oe="@firebase/storage-compat",xe="@firebase/firestore",be="@firebase/ai",pe="@firebase/firestore-compat",fe="firebase";const me="[DEFAULT]",ve={[P]:"fire-core",[$t]:"fire-core-compat",[Ut]:"fire-analytics",[qt]:"fire-analytics-compat",[Wt]:"fire-app-check",[Vt]:"fire-app-check-compat",[Xt]:"fire-auth",[Gt]:"fire-auth-compat",[Kt]:"fire-rtdb",[Jt]:"fire-data-connect",[Qt]:"fire-rtdb-compat",[Zt]:"fire-fn",[te]:"fire-fn-compat",[ee]:"fire-iid",[se]:"fire-iid-compat",[ie]:"fire-fcm",[le]:"fire-fcm-compat",[ae]:"fire-perf",[de]:"fire-perf-compat",[re]:"fire-rc",[ce]:"fire-rc-compat",[ne]:"fire-gcs",[oe]:"fire-gcs-compat",[xe]:"fire-fst",[pe]:"fire-fst-compat",[be]:"fire-vertex","fire-js":"fire-js",[fe]:"fire-js-all"};const A=new Map,he=new Map,I=new Map;function N(e,t){try{e.container.addComponent(t)}catch(s){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,s)}}function O(e){const t=e.name;if(I.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;I.set(t,e);for(const s of A.values())N(s,e);for(const s of he.values())N(s,e);return!0}const ue={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},f=new J("app","Firebase",ue);class ge{constructor(t,s,i){this._isDeleted=!1,this._options={...t},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new k("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw f.create("app-deleted",{appName:this._name})}}function we(e,t={}){let s=e;typeof t!="object"&&(t={name:t});const i={name:me,automaticDataCollectionEnabled:!0,...t},l=i.name;if(typeof l!="string"||!l)throw f.create("bad-app-name",{appName:String(l)});if(s||(s=ft()),!s)throw f.create("no-options");const a=A.get(l);if(a){if(S(s,a.options)&&S(i,a.config))return a;throw f.create("duplicate-app",{appName:l})}const d=new Dt(l);for(const c of I.values())d.addComponent(c);const n=new ge(s,i,d);return A.set(l,n),n}function y(e,t,s){let i=ve[e]??e;s&&(i+=`-${s}`);const l=i.match(/\s|\//),a=t.match(/\s|\//);if(l||a){const d=[`Unable to register library "${i}" with version "${t}":`];l&&d.push(`library name "${i}" contains illegal characters (whitespace or "/")`),l&&a&&d.push("and"),a&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),x.warn(d.join(" "));return}O(new k(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const ye="firebase-heartbeat-database",ke=1,v="firebase-heartbeat-store";let C=null;function tt(){return C||(C=Ht(ye,ke,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(v)}catch(s){console.warn(s)}}}}).catch(e=>{throw f.create("idb-open",{originalErrorMessage:e.message})})),C}async function je(e){try{const s=(await tt()).transaction(v),i=await s.objectStore(v).get(et(e));return await s.done,i}catch(t){if(t instanceof u)x.warn(t.message);else{const s=f.create("idb-get",{originalErrorMessage:t?.message});x.warn(s.message)}}}async function $(e,t){try{const i=(await tt()).transaction(v,"readwrite");await i.objectStore(v).put(t,et(e)),await i.done}catch(s){if(s instanceof u)x.warn(s.message);else{const i=f.create("idb-set",{originalErrorMessage:s?.message});x.warn(i.message)}}}function et(e){return`${e.name}!${e.options.appId}`}const De=1024,Ee=30;class Ce{constructor(t){this.container=t,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new Te(s),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=q();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(l=>l.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ee){const l=Be(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){x.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=q(),{heartbeatsToSend:s,unsentEntries:i}=Se(this._heartbeatsCache.heartbeats),l=K(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return x.warn(t),""}}}function q(){return new Date().toISOString().substring(0,10)}function Se(e,t=De){const s=[];let i=e.slice();for(const l of e){const a=s.find(d=>d.agent===l.agent);if(a){if(a.dates.push(l.date),U(s)>t){a.dates.pop();break}}else if(s.push({agent:l.agent,dates:[l.date]}),U(s)>t){s.pop();break}i=i.slice(1)}return{heartbeatsToSend:s,unsentEntries:i}}class Te{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vt()?ht().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await je(this.app);return s?.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return $(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return $(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function U(e){return K(JSON.stringify({version:2,heartbeats:e})).length}function Be(e){if(e.length===0)return-1;let t=0,s=e[0].date;for(let i=1;i<e.length;i++)e[i].date<s&&(s=e[i].date,t=i);return t}function Pe(e){O(new k("platform-logger",t=>new Lt(t),"PRIVATE")),O(new k("heartbeat",t=>new Ce(t),"PRIVATE")),y(P,L,e),y(P,L,"esm2020"),y("fire-js","")}Pe("");var Ae="firebase",Ie="12.6.0";y(Ae,Ie,"app");const Oe=`<style>/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-white: #fff;
    --spacing: 0.25rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --radius-lg: 0.5rem;
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji');
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type='button'], [type='reset'], [type='submit']), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden='until-found'])) {
    display: none !important;
  }
}
@layer utilities {
  .absolute {
    position: absolute;
  }
  .relative {
    position: relative;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-36 {
    top: calc(var(--spacing) * 36);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-8 {
    right: calc(var(--spacing) * 8);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .bottom-20 {
    bottom: calc(var(--spacing) * 20);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-7 {
    margin-top: calc(var(--spacing) * 7);
  }
  .mt-9 {
    margin-top: calc(var(--spacing) * 9);
  }
  .mt-11 {
    margin-top: calc(var(--spacing) * 11);
  }
  .mr-3 {
    margin-right: calc(var(--spacing) * 3);
  }
  .mr-4 {
    margin-right: calc(var(--spacing) * 4);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .h-full {
    height: 100%;
  }
  .h-px {
    height: 1px;
  }
  .w-full {
    width: 100%;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-13 {
    grid-template-columns: repeat(13, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-5 {
    gap: calc(var(--spacing) * 5);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-8 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-blue-400 {
    border-color: var(--color-blue-400);
  }
  .border-blue-500 {
    border-color: var(--color-blue-500);
  }
  .border-blue-700 {
    border-color: var(--color-blue-700);
  }
  .bg-blue-300 {
    background-color: var(--color-blue-300);
  }
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-blue-700 {
    background-color: var(--color-blue-700);
  }
  .bg-blue-800 {
    background-color: var(--color-blue-800);
  }
  .bg-gradient-to-br {
    --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-blue-900 {
    --tw-gradient-from: var(--color-blue-900);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-blue-800 {
    --tw-gradient-to: var(--color-blue-800);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-12 {
    padding-inline: calc(var(--spacing) * 12);
  }
  .px-16 {
    padding-inline: calc(var(--spacing) * 16);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .text-center {
    text-align: center;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .text-blue-200 {
    color: var(--color-blue-200);
  }
  .text-blue-300 {
    color: var(--color-blue-300);
  }
  .text-white {
    color: var(--color-white);
  }
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-font-weight: initial;
    }
  }
}
</style>`;console.log("main.ts 실행됨");function Me(e){const t=e.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);return t?t[1]:""}function _e(e){const t=e.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);return t?t[1]:""}function ze(e){function t(s){(s.code==="PageDown"||s.key==="PageDown"||s.keyCode===34)&&e(s)}return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}function Fe(e){function t(s){(s.code==="PageUp"||s.key==="PageUp"||s.keyCode===33)&&e(s)}return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}const V=W.length-1;let h=0;function st(e=0){e>V?e=0:e<0&&(e=V),h=e;let t=W[e];t=t.replace(/AAAA/g,"`"),t=t.replace(/BBBB/g,"${"),t=t.replace('<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>',Oe),document.head.innerHTML=Me(t),document.body.innerHTML=_e(t)}Fe(e=>{e.preventDefault(),h--,st(h)});ze(e=>{e.preventDefault(),h++,st(h)});const He={apiKey:"AIzaSyDwQBfBU1ktxAYT8t2Ee4h-skM9M8jvGGI",authDomain:"civil-act-slides.firebaseapp.com",projectId:"civil-act-slides",storageBucket:"civil-act-slides.firebasestorage.app",messagingSenderId:"224199581514",appId:"1:224199581514:web:579053596871a9d3b9ebb3"};we(He);
