import { IProduct } from 'app/models/Product/product';

export interface ICartItem extends IProduct {
  quantity?: number;
}

export interface CartState {
  items: ICartItem[];
}