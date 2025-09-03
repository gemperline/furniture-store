import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column({ name: 'image_url', nullable: true })
  imageUrl?: string;

  @OneToMany(() => Product, (product) => product.department)
  products: Product[];
}
