export default function About() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <div className="flex size-20 items-center justify-center rounded-2xl bg-foreground text-4xl text-background">
        📖
      </div>
      <h1 className="text-4xl font-bold tracking-tight">About</h1>
      <p className="max-w-md text-center text-lg leading-relaxed text-foreground/60">
        이 프로젝트는 Jono Alderson의 글에서 소개된
        <br />
        CSS View Transitions API를 Next.js에서 구현한 예제입니다.
      </p>
      <ul className="flex flex-col gap-3 text-sm text-foreground/50">
        <li>✓ 브라우저 네이티브 트랜지션 — JS 라우팅 불필요</li>
        <li>✓ CSS 키프레임으로 애니메이션 제어</li>
        <li>✓ prefers-reduced-motion 접근성 지원</li>
      </ul>
    </main>
  );
}
