export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
}   