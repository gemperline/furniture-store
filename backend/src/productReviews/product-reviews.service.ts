import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductReview } from './product-review.entity';
import { Product } from '../products/product.entity';

@Injectable()
export class ProductReviewsService {
  constructor(
    @InjectRepository(ProductReview)
    private readonly reviewRepo: Repository<ProductReview>,

    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async findByProduct(productId: number): Promise<{
    averageRating: number;
    reviewCount: number;
    reviews: ProductReview[];
  }> {
    // Get all visible reviews for the product
    const reviews = await this.reviewRepo.find({
      where: { productId, isVisible: true },
      order: { createdUTC: 'DESC' },
    });

    const reviewCount = reviews.length;

    const averageRating =
      reviewCount === 0
        ? 0
        : parseFloat(
            (
              reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
            ).toFixed(2),
          );

    return {
      averageRating,
      reviewCount,
      reviews,
    };
  }

  async create(data: Partial<ProductReview>): Promise<ProductReview> {
    const review = this.reviewRepo.create(data);
    const saved = await this.reviewRepo.save(review);

    // Recalculate rating summary
    const { productId } = saved;

    const [count, sum] = await this.reviewRepo
      .createQueryBuilder('r')
      .select('COUNT(*)', 'count')
      .addSelect('SUM(r.rating)', 'sum')
      .where('r.product_id = :productId', { productId })
      .andWhere('r.is_visible = TRUE')
      .getRawOne();

    const reviewCount = parseInt(count, 10);
    const average = reviewCount > 0 ? parseFloat(sum) / reviewCount : 0;

    await this.productRepo.update(productId, {
      reviewCount,
      averageRating: Number(average.toFixed(2)),
    });

    return saved;
  }

  async moderate(reviewId: number, isVisible: boolean): Promise<void> {
    await this.reviewRepo.update(reviewId, { isVisible });
  }

  async delete(reviewId: number): Promise<void> {
    await this.reviewRepo.delete(reviewId);
  }
}
