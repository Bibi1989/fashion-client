import { FETCH, MEN, WOMEN, SINGLE, FETCH_ORDER, ADD_ORDER } from "./type";
import { ProductInterface } from "./interfaces";

export const menAction = (products: ProductInterface) => ({
  type: MEN,
  payload: products,
});
export const womenAction = (products: ProductInterface) => ({
  type: WOMEN,
  payload: products,
});
export const fetchAction = (products: ProductInterface) => ({
  type: FETCH,
  payload: products,
});
// export const priceAction = (products: ProductInterface) => ({
//   type: PRICE,
//   payload: products,
// });
export const getSingleProductAction = (products: ProductInterface) => ({
  type: SINGLE,
  payload: products,
});
export const ordersAction = (orders: any) => ({
  type: FETCH_ORDER,
  payload: orders,
});
export const addOrdersAction = (order: any) => ({
  type: ADD_ORDER,
  payload: order,
});
