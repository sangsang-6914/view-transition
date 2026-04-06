export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <div className="flex size-20 items-center justify-center rounded-2xl bg-foreground text-4xl text-background">
        🏠
      </div>
      <h1 className="text-4xl font-bold tracking-tight">Home</h1>
      <p className="max-w-md text-center text-lg leading-relaxed text-foreground/60">
        CSS View Transitions API를 활용한 페이드 트랜지션 데모입니다.
        <br />
        상단 버튼을 클릭해 페이지를 이동해 보세요.
      </p>
    </main>
  );
}
