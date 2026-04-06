# Only CSS Animation with AI

CSS View Transitions API만으로 SPA처럼 부드러운 페이지 전환을 구현하는 프로젝트입니다.  
별도의 애니메이션 라이브러리(Framer Motion, GSAP 등) 없이 **브라우저 네이티브 API + CSS 키프레임**만 사용합니다.

> 참고: [It's time for modern CSS to kill the SPA — Jono Alderson](https://www.jonoalderson.com/conjecture/its-time-for-modern-css-to-kill-the-spa)

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

## 기술 스택

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- View Transitions API (`document.startViewTransition`)

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
