import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Department } from '../departments/department.entity';
import { ProductImage } from '../productImages/product-image.entity';
import { ProductReview } from '../productReviews/product-review.entity';
import { Param } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  description: string;

  @Column({ name: 'department_id' })
  departmentId: number;

  @Column({
    name: 'average_rating',
    type: 'decimal',
    precision: 3,
    scale: 2,
    default: 0,
  })
  averageRating: number;

  @Column({ name: 'review_count', type: 'int', default: 0 })
  reviewCount: number;

  @ManyToOne(() => Department, (department) => department.products, {
    onDelete: 'SET NULL',
  })
  @OneToMany(() => ProductImage, (image) => image.product, { eager: true })
  images: ProductImage[];

  @OneToMany(() => ProductReview, (review) => review.product)
  reviews: ProductReview[];

  @JoinColumn({ name: 'department_id' }) // Link the FK field explicitly
  department: Department;
}
