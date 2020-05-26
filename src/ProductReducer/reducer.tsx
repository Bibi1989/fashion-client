import {
  FETCH,
  LOADING,
  MEN,
  WOMEN,
  MEN_LOADING,
  WOMEN_LOADING,
  SINGLE,
  FETCH_ORDER,
  ORDER_LOADING,
  ADD_ORDER,
  PRICE_LOW,
  PRICE_HIGH,
  PRICE_LOW_WOMEN,
  PRICE_HIGH_WOMEN,
  FILTER_DATE,
} from "./type";
import { fetchProducts } from "./store";

const initialState = {
  products: [],
  product: [],
  addedProduct: null,
  men: [],
  women: [],
  orders: [],
  order_loading: false,
  add_order: null,
  loading: false,
  men_loading: false,
  women_loading: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case MEN_LOADING:
      return {
        ...state,
        men_loading: action.payload,
      };
    case WOMEN_LOADING:
      return {
        ...state,
        women_loading: action.payload,
      };
    case FETCH:
      return {
        ...state,
        products: [...action.payload],
      };
    case SINGLE:
      return {
        ...state,
        product: action.payload,
      };
    case MEN:
      return {
        ...state,
        men: action.payload,
      };
    case WOMEN:
      return {
        ...state,
        women: action.payload,
      };
    case PRICE_LOW:
      let low = state.products.filter(
        (product: any) => product.category.toLowerCase() == "men"
      );
      return {
        ...state,
        men: low.sort((a: any, b: any) => a.price - b.price),
      };
    case PRICE_HIGH:
      let high = state.products.filter(
        (product: any) => product.category.toLowerCase() == "men"
      );
      return {
        ...state,
        men: high.sort((a: any, b: any) => b.price - a.price),
      };
    case PRICE_LOW_WOMEN:
      let low_women = state.products.filter(
        (product: any) => product.category.toLowerCase() == "women"
      );
      return {
        ...state,
        women: low_women.sort((a: any, b: any) => a.price - b.price),
      };
    case PRICE_HIGH_WOMEN:
      let high_women = state.products.filter(
        (product: any) => product.category.toLowerCase() == "women"
      );
      return {
        ...state,
        women: high_women.sort((a: any, b: any) => b.price - a.price),
      };
    case FILTER_DATE:
      let date = state.products.filter(
        (product: any) => product.category.toLowerCase() == "men"
      );
      return {
        ...state,
        men: date.sort((a: any, b: any) => b.createdAt - a.createdAt),
      };
    case FETCH_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case ADD_ORDER:
      return {
        ...state,
        add_order: action.payload,
      };
    case ORDER_LOADING:
      return {
        ...state,
        order_loading: action.payload,
      };
    default:
      return state;
  }
};
