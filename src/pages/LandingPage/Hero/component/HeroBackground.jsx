export function HeroBackground() {
  return (
    <>
      {/* Gradient mesh */}
      <div
        aria-hidden="true"
        className="hero-bg-mesh absolute inset-0 z-0 pointer-events-none"
      />

      {/* Large soft blob */}
      <div
        aria-hidden="true"
        className="hero-blob-lg animate-float absolute z-0 rounded-full pointer-events-none w-[400px] h-[400px] top-[10%] right-[5%]"
      />

      {/* Small soft blob */}
      <div
        aria-hidden="true"
        className="hero-blob-sm animate-float-delayed absolute z-0 rounded-full pointer-events-none w-[200px] h-[200px] bottom-[20%] right-[25%]"
      />
    </>
  );
}