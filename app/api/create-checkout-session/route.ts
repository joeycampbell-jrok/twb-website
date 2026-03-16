import { NextRequest, NextResponse } from "next/server";
import { stripe, tierPriceMap } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { tierId } = await req.json();

    if (!tierId || !tierPriceMap[tierId]) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const priceId = tierPriceMap[tierId];

    if (!priceId) {
      return NextResponse.json(
        { error: `Price not configured for tier: ${tierId}` },
        { status: 500 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/subscribe`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
