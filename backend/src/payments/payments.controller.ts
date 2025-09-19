// src/payments/payments.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('checkout-session')
  @ApiBody({ type: CreateCheckoutSessionDto })
  async createCheckoutSession(@Body() body: CreateCheckoutSessionDto) {
    const session = await this.paymentsService.createCheckoutSession(
      body.items,
      body.successUrl,
      body.cancelUrl,
      body.customerEmail,
    );

    return {
      id: session.id,
      clientSecret: session.client_secret,
    };
  }
}
