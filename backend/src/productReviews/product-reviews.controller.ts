import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductReviewsService } from './product-reviews.service';
import { ProductReview } from './product-review.entity';
import { CreateProductReviewDto } from './dto/create-product-review.dto';

@Controller('reviews')
export class ProductReviewsController {
  constructor(private readonly reviewsService: ProductReviewsService) {}

  @Get('product/:productId')
  getByProduct(@Param('productId') productId: number) {
    return this.reviewsService.findByProduct(Number(productId));
  }

  @Post()
  createReview(@Body() body: CreateProductReviewDto) {
    return this.reviewsService.create(body);
  }

  @Patch(':id/visibility')
  updateVisibility(
    @Param('id') id: number,
    @Body('isVisible') isVisible: boolean,
  ) {
    return this.reviewsService.moderate(id, isVisible);
  }

  @Delete(':id')
  deleteReview(@Param('id') id: number) {
    return this.reviewsService.delete(id);
  }
}
