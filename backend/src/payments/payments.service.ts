// src/payments/payments.service.ts
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-08-27.basil',
  });

  async createCheckoutSession(
    items: { price: string; quantity: number }[],
    successUrl: string,
    cancelUrl: string,
    customerEmail?: string,
  ) {
    return await this.stripe.checkout.sessions.create(
      {
        ui_mode: 'embedded',
        line_items: items.map(item => ({
          price: 'price_1S6dcVRtq17kfqGhOKfm7JKX', // TODO: replace with dynamic price IDs
          quantity: item.quantity,
        })),
        mode: 'payment',
        automatic_tax: { enabled: true },
        customer_email: customerEmail,
        // success_url: (successUrl ?? `${process.env.PUBLIC_URL}/order/success`) + '?session_id={CHECKOUT_SESSION_ID}',
        // cancel_url: cancelUrl ?? `${process.env.PUBLIC_URL}/cart`,
        return_url: `${process.env.PUBLIC_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
        // shipping_address_collection: { allowed_countries: ['US','CA'] },
        // shipping_options: [{ shipping_rate: 'shr_***' }],
        // allow_promotion_codes: true,
      },
      { idempotencyKey: `checkout_${crypto.randomUUID()}` },
    );
  }
}
