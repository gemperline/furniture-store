import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';
// If you have a User entity, import it:
// import { User } from '../users/user.entity';

@Entity('product_reviews')
export class ProductReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'text', nullable: true })
  title?: string;

  @Column({ name: 'review_text', type: 'text', nullable: true })
  reviewText?: string;

  @Column({ name: 'is_verified', default: false })
  isVerified: boolean;

  @Column({ name: 'is_visible', default: true })
  isVisible: boolean;

  @CreateDateColumn({ name: 'created_utc', type: 'timestamptz' })
  createdUTC: Date;

  @UpdateDateColumn({ name: 'updated_utc', type: 'timestamptz' })
  updatedUTC: Date;

  @ManyToOne(() => Product, (product) => product.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  // Uncomment below if User entity exists
  // @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  // @JoinColumn({ name: 'user_id' })
  // user: User;
}
