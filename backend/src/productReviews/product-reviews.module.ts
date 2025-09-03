import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductReview } from './product-review.entity';
import { ProductReviewsService } from './product-reviews.service';
import { ProductReviewsController } from './product-reviews.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductReview]), ProductsModule],
  controllers: [ProductReviewsController],
  providers: [ProductReviewsService],
})
export class ProductReviewsModule {}
