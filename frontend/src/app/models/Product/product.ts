// should match the product found in the MOCK_PRODUCTS.ts file
export interface IProduct {
  id: number;
  name: string;
  description: string;
  departmentId: number;
  images: IProductImage[];
  altText?: string;
  sku: string;
  averageRating?: number;
  reviewCount?: number;
  price: number;
  salePrice?: number;
  varieties?: any[];
  reviews?: IProductReview[];
}

export interface IProductImage {
  id: number;
  productId: number;
  imageUrl: string;
  altText?: string;
  isPrimary: boolean;
  sortOrder?: number;
  createdUTC?: Date;
  updatedUTC?: Date;
}

export interface IProductReview {
  id: number;
  productId: number;
  title: string;
  rating: number;
  reviewText: string;
  createdUTC: Date;
  updatedUTC?: Date;
  userId?: number;
  userName?: string;
  isVerified?: boolean;
}

export enum ColumnAmount {
  LESS = 'less',
  MORE = 'more',
}

export enum ProductTileVariant {
  REGULAR = 'regular',
  CENTERED = 'centered',
}
