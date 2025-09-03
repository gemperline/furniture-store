import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), SharedModule],
  exports: [TypeOrmModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
