import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateProductDto) {
    return this.productsService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateProductDto,
  ) {
    return this.productsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }

  @Get('department/:departmentId')
  findByDepartmentId(
    @Param('departmentId', ParseIntPipe) departmentId: number,
  ) {
    return this.productsService.findByDepartmentId(departmentId);
  }

  // @Post('upload-image')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadImage(@UploadedFile() file: Express.Multer.File) {
  //   return this.productsService.uploadProductImage(file);
  // }
}
