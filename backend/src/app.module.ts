import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { SeedService } from './seed/seed.service'; // ✅ Import the seed service
import { Product } from './products/product.entity'; // ✅ Import the entity for injection
import { Department } from './departments/department.entity';
import { DepartmentsModule } from './departments/departments.module';
import { ProductImage } from './productImages/product-image.entity'; // Import ProductImage entity if needed
import { ProductImagesModule } from './productImages/product-image.module'; // Import ProductImagesModule if needed
import { ProductReviewsModule } from './productReviews/product-reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <-- must come first
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false, // WARNING: set to false in production
      ssl: true, // IMPORTANT: this should be set to TRUE before prod
      entities: [Product, ProductImage, Department], // Register entities here
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    ProductsModule,
    ProductImagesModule,
    ProductReviewsModule,
    DepartmentsModule,
    TypeOrmModule.forFeature([Product]), // Needed so the SeedService can use ProductRepo
  ],
  providers: [SeedService], // Register the seeder
})
export class AppModule {}
