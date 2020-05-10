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
} from "./type";

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
        products: action.payload,
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
