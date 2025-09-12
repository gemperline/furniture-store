// payments.module.ts: import ConfigModule; provide Stripe via factory if you prefer DI
import { Body, Controller, Post } from '@nestjs/common';
import Stripe from 'stripe';
import crypto from 'crypto';

type LineItem = { price: string; quantity: number };

@Controller('payments')
export class PaymentsController {
  private stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-08-27.basil'});

  @Post('checkout-session')
  async createCheckoutSession(
    @Body() body: { items: LineItem[]; successUrl?: string; cancelUrl?: string; customerEmail?: string }
  ) {
    // 1) Re-price server-side (don’t trust client). Ideally, fetch your product catalog and map to price IDs.
    // 2) Optionally create a pending order row here.

    const session = await this.stripe.checkout.sessions.create(
      {
        ui_mode: 'embedded',
        line_items: body.items.map(item => ({
          price: 'price_1S6dcVRtq17kfqGhOKfm7JKX', // TODO: replace with dynamic price IDs
          quantity: item.quantity,
        })),
        mode: 'payment',
        automatic_tax: { enabled: true },
        customer_email: body.customerEmail,
        success_url: (body.successUrl ?? `${process.env.PUBLIC_URL}/order/success`) + '?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: body.cancelUrl ?? `${process.env.PUBLIC_URL}/cart`,
        return_url: `${process.env.PUBLIC_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
        // shipping_address_collection: { allowed_countries: ['US','CA'] },
        // shipping_options: [{ shipping_rate: 'shr_***' }],
        // allow_promotion_codes: true,
      },
      { idempotencyKey: `checkout_${crypto.randomUUID()}` }
    );

    // Persist a pending order tied to session.id (optional but recommended).
    return { id: session.id };
  }
}
