const cards = [
  { label: "vocal_take_03.wav", top: "15%", left: "8%", delay: "0s" },
  { label: "guitar_stem.wav", top: "25%", right: "10%", delay: "2s" },
  { label: "mix_v7.bounce", top: "55%", left: "5%", delay: "4s" },
  { label: "drums_loop.wav", top: "60%", right: "8%", delay: "1s" },
  { label: "Track_02_rev", top: "40%", left: "15%", delay: "3s" },
  { label: "master_final.wav", top: "70%", right: "15%", delay: "5s" },
];

export function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
      {cards.map((card) => (
        <div
          key={card.label}
          className="float-card absolute rounded-lg border border-white/10 bg-[#141414]/80 px-3 py-2 text-xs text-white/50 backdrop-blur-sm"
          style={{
            top: card.top,
            left: card.left,
            right: card.right,
            animationDelay: card.delay,
          }}
        >
          <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-violet-500/60" />
          {card.label}
        </div>
      ))}
    </div>
  );
}
