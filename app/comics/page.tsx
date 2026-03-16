import { tiers } from "@/lib/tiers";

// Comic strip catalog — replace with real data / CMS later
const comics = [
  { id: 1, title: "The Void Stares Back", issue: "#001", tierRequired: "noob", description: "A man stares into a void. The void has opinions." },
  { id: 2, title: "Tuesday in Dimension X", issue: "#002", tierRequired: "noob", description: "Tuesdays are bad enough already." },
  { id: 3, title: "My Cat Is a Government Agent", issue: "#003", tierRequired: "pro", description: "The evidence is overwhelming." },
  { id: 4, title: "The Last Waffle", issue: "#004", tierRequired: "noob", description: "An epic battle for breakfast." },
  { id: 5, title: "Wi-Fi Password: Unknown", issue: "#005", tierRequired: "expert", description: "Tragedy in four panels." },
  { id: 6, title: "Time Traveller's Regrets", issue: "#006", tierRequired: "pro", description: "He went back to fix one thing. It got weird." },
  { id: 7, title: "The Chair That Knew Too Much", issue: "#007", tierRequired: "hacker", description: "Furniture has feelings. This one has secrets." },
  { id: 8, title: "Quantum Sock Mystery", issue: "#008", tierRequired: "noob", description: "Where do they GO?" },
  { id: 9, title: "Elevator Small Talk", issue: "#009", tierRequired: "meister", description: "29 floors. No escape." },
];

const tierColors: Record<string, string> = {
  noob: "#2A2A2A",
  pro: "#1A3A5C",
  expert: "#1A3A1A",
  hacker: "#2A1A3A",
  meister: "#3A2A00",
  diamond: "#001A2A",
};

const tierTextColors: Record<string, string> = {
  noob: "#F8F9FA",
  pro: "#7EC8E3",
  expert: "#7ED87E",
  hacker: "#C87ED8",
  meister: "#FFE000",
  diamond: "#A8D8FF",
};

export default function ComicsPage() {
  return (
    <div className="halftone-bg min-h-screen">
      {/* Header */}
      <div className="bg-twb-panel border-b-4 border-twb-yellow py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-twb-red text-twb-white font-bangers text-sm tracking-widest px-3 py-1 mb-3 border-2 border-black shadow-comic">
            STRIP ARCHIVE
          </div>
          <h1 className="font-bangers text-6xl text-twb-yellow tracking-widest mb-2">THE COMICS</h1>
          <p className="font-comic text-twb-white/60 max-w-xl">
            Every strip, every issue. Free strips are open to all — unlock more with a subscription.
          </p>
        </div>
      </div>

      {/* Tier legend */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-bangers text-sm tracking-widest text-twb-white/40 mr-1">ACCESS LEVEL:</span>
          {tiers.map((tier) => (
            <span
              key={tier.id}
              className="font-bangers text-xs tracking-widest px-2 py-1 border"
              style={{
                backgroundColor: tierColors[tier.id],
                borderColor: tierTextColors[tier.id] + "80",
                color: tierTextColors[tier.id],
              }}
            >
              {tier.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Comics grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comics.map((comic) => {
            const isLocked = comic.tierRequired !== "noob";
            return (
              <div
                key={comic.id}
                className={`comic-panel group transition-all ${
                  isLocked
                    ? "opacity-70"
                    : "hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_#FFE000] cursor-pointer"
                }`}
              >
                {/* Panel image area */}
                <div className="aspect-[4/3] bg-twb-gray flex items-center justify-center border-b-2 border-twb-yellow relative overflow-hidden">
                  {isLocked && (
                    <div className="absolute inset-0 bg-twb-black/80 flex flex-col items-center justify-center z-10 gap-2">
                      <span className="font-bangers text-3xl text-twb-white/30">🔒</span>
                      <span className="font-bangers text-sm tracking-widest text-twb-white/50">
                        REQUIRES{" "}
                        <span style={{ color: tierTextColors[comic.tierRequired] }}>
                          {comic.tierRequired.toUpperCase()}
                        </span>
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 speed-lines opacity-20" />
                  <div className="text-center z-0">
                    <div className="font-bangers text-6xl text-twb-yellow/10">{comic.issue}</div>
                    <div className="font-bangers text-sm text-twb-white/20 tracking-widest">[STRIP]</div>
                  </div>

                  {/* Tier badge */}
                  <div
                    className="absolute top-2 right-2 font-bangers text-xs tracking-widest px-2 py-0.5 border z-20"
                    style={{
                      backgroundColor: tierColors[comic.tierRequired],
                      borderColor: tierTextColors[comic.tierRequired] + "80",
                      color: tierTextColors[comic.tierRequired],
                    }}
                  >
                    {comic.tierRequired.toUpperCase()}
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-comic text-xs text-twb-yellow/50 mb-1">{comic.issue}</p>
                  <h3 className="font-bangers text-xl tracking-widest text-twb-white group-hover:text-twb-yellow transition-colors mb-1">
                    {comic.title}
                  </h3>
                  <p className="font-comic text-sm text-twb-white/50">{comic.description}</p>

                  {!isLocked && (
                    <button className="mt-3 font-bangers text-sm tracking-widest text-twb-yellow border border-twb-yellow px-3 py-1 hover:bg-twb-yellow hover:text-twb-black transition-all">
                      DOWNLOAD ↓
                    </button>
                  )}

                  {isLocked && (
                    <a
                      href={`/subscribe?tier=${comic.tierRequired}`}
                      className="mt-3 inline-block font-bangers text-sm tracking-widest px-3 py-1 border transition-all"
                      style={{
                        color: tierTextColors[comic.tierRequired],
                        borderColor: tierTextColors[comic.tierRequired] + "60",
                      }}
                    >
                      UNLOCK WITH {comic.tierRequired.toUpperCase()} →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
