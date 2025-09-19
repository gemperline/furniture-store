// src/payments/payments.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  imports: [ConfigModule], // gives access to env vars via ConfigService if preferred
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsService], // export if other modules need to call payment logic
})
export class PaymentsModule {}
