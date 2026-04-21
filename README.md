# Only CSS Animation with AI

CSS View Transitions API만으로 SPA처럼 부드러운 페이지 전환을 구현하는 프로젝트입니다.  
별도의 애니메이션 라이브러리(Framer Motion, GSAP 등) 없이 **브라우저 네이티브 API + CSS 키프레임**만 사용합니다.

> 참고: [It's time for modern CSS to kill the SPA — Jono Alderson](https://www.jonoalderson.com/conjecture/its-time-for-modern-css-to-kill-the-spa)

## 왜 만들었는가

페이지 전환을 부드럽게 하려면 흔히 **JS 애니메이션 라이브러리**에 의존합니다. 대안으로 브라우저가 제공하는 **View Transitions**는 전환의 “캡처·보간”을 엔진에 맡기고, 개발자는 **CSS로만** 느낌을 조절할 수 있습니다. 이 프로젝트는 **의존성과 번들을 늘리지 않고** 전환 품질을 실험하고, 여러 패턴을 **CSS만 바꿔** 비교하기 위한 샌드박스입니다.

## 어떤 문제를 해결하려고 했는가

| 문제 | 이 프로젝트에서의 방향 |
|------|------------------------|
| 애니메이션마다 라이브러리 API를 새로 익혀야 함 | **`document.startViewTransition` + CSS**로 패턴을 통일 |
| 전환 구현이 프로젝트마다 제각각 | `globals.css`에서 **패턴 주석 해제**로 빠르게 교체·비교 |
| 일부 브라우저는 API 미지원 | 지원하지 않으면 **즉시 전환**으로 graceful fallback |

즉, “**네이티브 전환 파이프라인** 안에서 어디까지 품질을 낼 수 있는지**”를 검증하는 데 초점을 맞췄습니다.

## 기술 스택과 선정 이유

**전환이 주제**이므로, 런타임 애니메이션 의존성을 의도적으로 배제했습니다.

### [Next.js](https://nextjs.org/) 16 (App Router)

- 여러 라우트 간 이동을 **실제 앱처럼** 재현하기에 App Router가 적합합니다.
- 전환 훅을 붙일 위치(레이아웃·링크 등)를 **파일 구조**로 나누기 쉽습니다.

### [Tailwind CSS](https://tailwindcss.com/) v4

- 페이지 본문 레이아웃·타이포는 유틸리티로 빠르게 잡고, **전환·의사 요소**는 `globals.css`에서 다루는 식으로 역할을 분리하기 좋습니다.

### [TypeScript](https://www.typescriptlang.org/)

- 라우팅·헬퍼가 늘어날 때 **타입**으로 실수를 줄이고, 실험 코드도 읽기 쉽게 유지합니다.

### View Transitions API (`document.startViewTransition`)

- **브라우저 최적화**된 스냅샷 기반 전환으로, JS로 직접 레이어를 조작하는 것보다 선언적입니다.
- `::view-transition-old(root)` / `::view-transition-new(root)`에 **CSS만** 얹어 다양한 연출을 시도할 수 있습니다.

**한 줄 요약:** Next로 **멀티 페이지 전환 시나리오**를, View Transitions로 **네이티브 전환 파이프라인**을, Tailwind·TS로 **최소 뼈대**를 유지하는 구성입니다.

## 기술 스택 (요약)

- **Next.js 16** (App Router)
- **Tailwind CSS** v4
- **TypeScript**
- View Transitions API (`document.startViewTransition`)

## 핵심 원리

1. `document.startViewTransition()`으로 페이지 전환을 감싸면
2. 브라우저가 현재/다음 상태의 스냅샷을 캡처하고
3. `::view-transition-old(root)` / `::view-transition-new(root)` 의사 요소에 CSS 애니메이션을 적용합니다

## 제공하는 트랜지션 패턴

| 패턴 | 효과 |
|---|---|
| **Slide + Fade** | 좌로 밀려나고 우에서 들어옴 |
| **Zoom + Fade** | 축소되며 사라지고 확대되며 등장 |
| **Flip** | Y축 카드 뒤집기 |
| **Blur + Fade** | 블러 처리되며 전환 |

`src/app/globals.css`에서 원하는 패턴의 주석을 해제하여 전환할 수 있습니다.

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 브라우저 지원

- Chrome 111+
- Edge 111+
- Safari 18+
- Firefox — 미지원 브라우저에서는 애니메이션 없이 즉시 전환됩니다 (graceful fallback)
