export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-bangers text-5xl text-twb-yellow tracking-widest mb-8">TERMS OF SERVICE</h1>
      <div className="comic-panel p-8 space-y-6 font-comic text-twb-white/70 text-sm leading-relaxed">
        <p>
          <strong className="text-twb-white">Digital downloads:</strong> All purchases are digital goods.
          Downloads are for personal use only and may not be redistributed, resold, or used commercially
          without written permission.
        </p>
        <p>
          <strong className="text-twb-white">Subscriptions:</strong> Subscriptions are billed monthly and
          can be cancelled at any time. Cancellations take effect at the end of the current billing period.
          No refunds are provided for partial months.
        </p>
        <p>
          <strong className="text-twb-white">Content:</strong> All comic strips are original works and
          remain the intellectual property of The Weird Book. Unauthorized reproduction is prohibited.
        </p>
        <p>
          <strong className="text-twb-white">Changes:</strong> We may update these terms at any time.
          Continued use of the site constitutes acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
}
