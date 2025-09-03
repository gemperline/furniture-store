import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('product_images')
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id' })
  productId: number;

  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' }) // this tells TypeORM the FK column name
  product: Product;

  @Column({ name: 'image_url', type: 'text' })
  imageUrl: string;

  @Column({ name: 'alt_text', type: 'text', nullable: true })
  altText: string;

  @Column({ name: 'is_primary', default: false })
  isPrimary: boolean;

  @Column({ name: 'sort_order', nullable: true })
  sortOrder: number;

  @Column({
    name: 'created_utc',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdUTC: Date;

  @Column({
    name: 'updated_utc',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedUTC: Date;
}
