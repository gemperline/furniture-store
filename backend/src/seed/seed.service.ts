import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/product.entity';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async onModuleInit() {
    const seedProducts = [
      {
        name: 'Mid-Century Modern Sofa',
        price: 1499.99,
        description: 'Walnut legs, tufted back, premium fabric.',
        imageUrl: 'https://example.com/images/sofa.jpg',
        departmentId: 1,
      },
      {
        name: 'Marble Coffee Table',
        price: 799.0,
        description: 'Solid marble top with brushed brass base.',
        imageUrl: 'https://example.com/images/table.jpg',
        departmentId: 1,
      },
      {
        name: 'Leather Lounge Chair',
        price: 1299.0,
        description: 'Top-grain leather with ergonomic design.',
        imageUrl: 'https://example.com/images/chair.jpg',
        departmentId: 4,
      },
      {
        name: 'Industrial Bookshelf',
        price: 599.0,
        description: 'Reclaimed wood and metal frame.',
        imageUrl: 'https://example.com/images/bookshelf.jpg',
        departmentId: 5,
      },
      {
        name: 'Abstract Wall Art',
        price: 299.0,
        description: 'Large canvas print, vibrant colors.',
        imageUrl: 'https://example.com/images/art.jpg',
        departmentId: 5,
      },
      {
        name: 'Modern Dining Set',
        price: 1999.0,
        description: 'Solid wood table with upholstered chairs.',
        imageUrl: 'https://example.com/images/dining-set.jpg',
        departmentId: 2,
      },
      {
        name: 'Smart LED Floor Lamp',
        price: 199.0,
        description: 'Adjustable brightness, smart home compatible.',
        imageUrl: 'https://example.com/images/floor-lamp.jpg',
        departmentId: 3,
      },
      {
        name: 'Vintage Area Rug',
        price: 399.0,
        description: 'Handwoven, soft wool, intricate patterns.',
        imageUrl: 'https://example.com/images/rug.jpg',
        departmentId: 1,
      },
      {
        name: 'Outdoor Patio Set',
        price: 1599.0,
        description: 'Weather-resistant materials, includes cushions.',
        imageUrl: 'https://example.com/images/patio-set.jpg',
        departmentId: 4,
      },
      {
        name: 'Ergonomic Office Chair',
        price: 349.0,
        description: 'Adjustable height, lumbar support, breathable mesh.',
        imageUrl: 'https://example.com/images/office-chair.jpg',
        departmentId: 5,
      },
    ];

    const totalDBProducts = await this.productRepo.count({});

    if (totalDBProducts >= seedProducts.length) {
      console.log(
        `${totalDBProducts} ${totalDBProducts === 1 ? 'product' : 'products'} already ${totalDBProducts === 1 ? 'exists' : 'exist'}, skipping...`,
      );
      return;
    }

    await this.productRepo.save(seedProducts);
    console.log('✅ Seeded sample products');
  }
}
