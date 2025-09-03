import { IProduct } from 'app/models/Product/product';

export interface CatalogState {
  products: IProduct[];
  productDetails: IProduct | null;
  activeDepartment: string;
  visitedDepartments: string[];
}
