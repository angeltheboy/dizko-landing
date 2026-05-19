export function WaveformBg() {
  const bars = 48;

  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden opacity-20"
      aria-hidden
    >
      <svg
        className="h-full w-full max-w-5xl"
        viewBox={`0 0 ${bars * 12} 120`}
        preserveAspectRatio="none"
      >
        {Array.from({ length: bars }).map((_, i) => (
          <rect
            key={i}
            x={i * 12 + 2}
            y={20}
            width={8}
            height={80}
            rx={2}
            className="wave-bar fill-violet-500/60"
            style={{
              animationDelay: `${(i % 12) * 0.08}s`,
              animationDuration: `${1 + (i % 5) * 0.15}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
