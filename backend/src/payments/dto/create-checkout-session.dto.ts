// src/payments/dto/create-checkout-session.dto.ts
import { ApiProperty } from '@nestjs/swagger';

class LineItemDto {
  @ApiProperty({ example: 'price_1234', description: 'The Stripe Price ID' })
  price: string;

  @ApiProperty({ example: 1, description: 'Quantity of this item' })
  quantity: number;
}

export class CreateCheckoutSessionDto {
  @ApiProperty({
    type: [LineItemDto],
    description: 'Array of line items to purchase',
  })
  items: LineItemDto[];

  @ApiProperty({
    example: 'http://localhost:3000/order/success',
    description: 'URL to redirect after successful payment',
  })
  successUrl: string;

  @ApiProperty({
    example: 'http://localhost:3000/cart',
    description: 'URL to redirect if user cancels checkout',
  })
  cancelUrl: string;

  @ApiProperty({
    example: 'user@example.com',
    required: false,
    description: 'Customer email (optional)',
  })
  customerEmail?: string;
}
