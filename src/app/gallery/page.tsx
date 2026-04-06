const COLORS = [
  "bg-rose-400",
  "bg-amber-400",
  "bg-emerald-400",
  "bg-sky-400",
  "bg-violet-400",
  "bg-pink-400",
  "bg-teal-400",
  "bg-orange-400",
  "bg-indigo-400",
];

export default function Gallery() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <div className="flex size-20 items-center justify-center rounded-2xl bg-foreground text-4xl text-background">
        🎨
      </div>
      <h1 className="text-4xl font-bold tracking-tight">Gallery</h1>
      <p className="text-lg text-foreground/60">
        페이드 트랜지션과 함께 전환되는 갤러리 페이지
      </p>
      <div className="grid grid-cols-3 gap-3">
        {COLORS.map((color, i) => (
          <div
            key={i}
            className={`size-24 rounded-xl ${color} transition-transform hover:scale-105`}
          />
        ))}
      </div>
    </main>
  );
}
