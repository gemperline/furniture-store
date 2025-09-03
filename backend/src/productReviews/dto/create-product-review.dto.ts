import { IsInt, IsString, Min, Max, IsOptional } from 'class-validator';

export class CreateProductReviewDto {
  @IsInt()
  productId: number;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  comment?: string;
}
