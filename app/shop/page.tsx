import Link from "next/link";

// Digital download products — replace with Stripe Products or CMS data later
const products = [
  {
    id: "vol1",
    title: "Volume 1: The Beginning of Weird",
    description: "Issues #001–#010. The comic strips that started it all, compiled in one HD digital bundle.",
    price: 4.99,
    includes: "10 strips · HD PNG files · Immediate download",
    badge: "BUNDLE",
    badgeColor: "#FFE000",
  },
  {
    id: "vol2",
    title: "Volume 2: Even Weirder",
    description: "Issues #011–#020. Things escalated. Nobody is apologizing.",
    price: 4.99,
    includes: "10 strips · HD PNG files · Immediate download",
    badge: "BUNDLE",
    badgeColor: "#FFE000",
  },
  {
    id: "wallpack1",
    title: "Wallpaper Pack #1",
    description: "5 desktop + mobile wallpapers featuring panels from The Weird Book. Sized for all screens.",
    price: 2.99,
    includes: "5 wallpapers · Multiple resolutions · ZIP download",
    badge: "EXTRAS",
    badgeColor: "#C87ED8",
  },
  {
    id: "starter",
    title: "Starter Pack",
    description: "New to TWB? Get the first 5 strips, a wallpaper, and a behind-the-scenes sketch PDF.",
    price: 1.99,
    includes: "5 strips + 1 wallpaper + bonus sketch · Immediate download",
    badge: "BEST FOR NEW READERS",
    badgeColor: "#7ED87E",
  },
];

export default function ShopPage() {
  return (
    <div className="halftone-bg min-h-screen">
      {/* Header */}
      <div className="bg-twb-panel border-b-4 border-twb-yellow py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-twb-red text-twb-white font-bangers text-sm tracking-widest px-3 py-1 mb-3 border-2 border-black shadow-comic">
            DIGITAL DOWNLOADS
          </div>
          <h1 className="font-bangers text-6xl text-twb-yellow tracking-widest mb-2">THE SHOP</h1>
          <p className="font-comic text-twb-white/60 max-w-xl">
            One-time purchases. Pay once, download forever. No subscription needed — though you should subscribe anyway.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="comic-panel flex flex-col hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_#FFE000] transition-all"
            >
              {/* Mock cover art area */}
              <div className="aspect-video bg-twb-gray flex items-center justify-center relative border-b-2 border-twb-yellow overflow-hidden">
                <div className="absolute inset-0 speed-lines opacity-20" />
                <div className="text-center z-10">
                  <div className="font-bangers text-4xl text-twb-yellow/20 mb-1">{product.title.split(":")[0]}</div>
                  <div className="font-bangers text-sm text-twb-white/20 tracking-widest">[COVER ART]</div>
                </div>
                <div
                  className="absolute top-3 left-3 font-bangers text-xs tracking-widest px-2 py-1 border-2 border-black"
                  style={{ backgroundColor: product.badgeColor, color: "#0D0D0D" }}
                >
                  {product.badge}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bangers text-2xl text-twb-white tracking-widest mb-2">{product.title}</h3>
                <p className="font-comic text-sm text-twb-white/60 mb-3 flex-1">{product.description}</p>
                <p className="font-comic text-xs text-twb-white/40 mb-4">{product.includes}</p>

                <div className="flex items-center justify-between gap-4">
                  <span className="font-bangers text-3xl text-twb-yellow">${product.price.toFixed(2)}</span>
                  <button className="font-bangers text-lg tracking-widest px-6 py-2 bg-twb-yellow text-twb-black border-2 border-black shadow-comic hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-comic-lg transition-all">
                    BUY NOW →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription upsell */}
        <div className="mt-12 bg-twb-panel border-2 border-twb-yellow p-8 shadow-comic-lg text-center">
          <h3 className="font-bangers text-3xl text-twb-yellow tracking-widest mb-2">
            SUBSCRIBE AND SAVE
          </h3>
          <p className="font-comic text-twb-white/60 mb-6 max-w-lg mx-auto">
            A Diamond subscription at $10/month gives you everything in the shop — plus exclusive content, signed digital prints, and more. Better value. More weird.
          </p>
          <Link
            href="/subscribe"
            className="inline-block font-bangers text-xl tracking-widest px-8 py-4 bg-twb-yellow text-twb-black border-2 border-black shadow-comic hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            SEE SUBSCRIPTION PLANS →
          </Link>
        </div>
      </div>
    </div>
  );
}
