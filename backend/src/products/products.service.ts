import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { BlobService } from 'src/shared/azure/blob.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    private readonly blobService: BlobService,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async findOne(id: number): Promise<Product | null> {
    const product = await this.productRepo.findOne({
      where: { id },
    });

    if (!product) return null;

    const { avg, count } = await this.productRepo
      .createQueryBuilder('product')
      .leftJoin('product.reviews', 'review')
      .select('AVG(review.rating)', 'avg')
      .addSelect('COUNT(review.id)', 'count')
      .where('product.id = :id', { id })
      .getRawOne();

    return {
      ...product,
      averageRating: parseFloat(avg) || 0,
      reviewCount: parseInt(count) || 0,
    };
  }

  create(data: CreateProductDto): Promise<Product> {
    const product = this.productRepo.create(data);
    return this.productRepo.save(product);
  }

  async update(id: number, data: CreateProductDto): Promise<Product | null> {
    await this.productRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productRepo.delete(id);
  }

  async findByDepartmentId(departmentId: number): Promise<any[]> {
    const products = await this.productRepo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.images', 'image', 'image.isPrimary = true')
      .leftJoin('product.reviews', 'review')
      .addSelect('AVG(review.rating)', 'averageRating')
      .addSelect('COUNT(review.id)', 'reviewCount')
      .where('product.departmentId = :departmentId', { departmentId })
      .groupBy('product.id')
      .addGroupBy('image.id')
      .getRawAndEntities();

    const { entities, raw } = products;

    // Merge raw aggregate values into each product
    return entities.map((product, index) => ({
      ...product,
      averageRating: parseFloat(raw[index].averageRating) || 0,
      reviewCount: parseInt(raw[index].reviewCount) || 0,
    }));
  }

  async uploadProductImage(file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new Error('No file uploaded');
    }

    const imageUrl = this.blobService.uploadFile(
      file.buffer,
      file.originalname,
      file.mimetype,
    );
    return imageUrl;
  }
}
