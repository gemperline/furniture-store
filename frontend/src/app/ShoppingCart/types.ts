import { IProduct } from 'app/models/Product/product';

export interface ICartItem extends IProduct {}

export interface CartState {
  items: IProduct[];
}