export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-bangers text-5xl text-twb-yellow tracking-widest mb-8">PRIVACY POLICY</h1>
      <div className="comic-panel p-8 space-y-6 font-comic text-twb-white/70 text-sm leading-relaxed">
        <p>
          <strong className="text-twb-white">What we collect:</strong> When you subscribe, Stripe collects
          your payment information. We receive only your email address and subscription status — never
          your card details.
        </p>
        <p>
          <strong className="text-twb-white">How we use it:</strong> Your email is used to manage your
          subscription and send you updates about new strips. We do not sell your data or share it
          with third parties beyond Stripe for payment processing.
        </p>
        <p>
          <strong className="text-twb-white">Cookies:</strong> This site uses minimal cookies required
          for functionality. We do not use advertising or tracking cookies.
        </p>
        <p>
          <strong className="text-twb-white">Contact:</strong> For any privacy questions, reach out via
          the About page.
        </p>
      </div>
    </div>
  );
}
