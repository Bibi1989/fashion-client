import axios from "axios";
import {
  fetchAction,
  menAction,
  womenAction,
  getSingleProductAction,
  ordersAction,
} from "./action";
import {
  LOADING,
  MEN_LOADING,
  WOMEN_LOADING,
  FETCH_ORDER,
  ORDER_LOADING,
  ADD_ORDER,
  DELETE_ORDER,
  PRICE_LOW,
  PRICE_HIGH,
  PRICE_LOW_WOMEN,
  PRICE_HIGH_WOMEN,
} from "./type";
import { ProductInterface } from "./interfaces";

const PRODUCT_URL: string = "https://ere-place-api.herokuapp.com";

const fashion_product: any = localStorage.getItem("fashions");
const wishlist: any = localStorage.getItem("wishlist");
let fashion_products = JSON.parse(fashion_product) || [];
let wishlists = JSON.parse(wishlist) || [];

// filters products
export const filterProducts = async (dispatch: any, category: string) => {
  dispatch({ type: LOADING, payload: true });
  const response = await axios.get(`${PRODUCT_URL}/api/products`, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  const filter = response.data.products.filter(
    (product: any) => product.category.toLowerCase() === category
  );
  dispatch({ type: LOADING, payload: false });
  dispatch(fetchAction(filter));
};

export const menProducts = async (dispatch: any) => {
  dispatch({ type: MEN_LOADING, payload: true });
  const response = await axios.get(`${PRODUCT_URL}/api/products`, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  const filter = response.data.products.filter(
    (product: any) => product.category.toLowerCase() === "men"
  );
  dispatch({ type: MEN_LOADING, payload: false });
  dispatch(menAction(filter));
};

export const womenProducts = async (dispatch: any) => {
  dispatch({ type: WOMEN_LOADING, payload: true });
  const response = await axios.get(`${PRODUCT_URL}/api/products`, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  const filter = response.data.products.filter(
    (product: any) => product.category.toLowerCase() === "women"
  );
  dispatch({ type: WOMEN_LOADING, payload: false });
  dispatch(womenAction(filter));
};

// filter by price
export const filterByPriceLow = (dispatch: any) => {
  dispatch({ type: PRICE_LOW });
};
export const filterByPriceHigh = (dispatch: any) => {
  dispatch({ type: PRICE_HIGH });
};
export const filterByPriceLowWomen = (dispatch: any) => {
  dispatch({ type: PRICE_LOW_WOMEN });
};
export const filterByPriceHighWomen = (dispatch: any) => {
  dispatch({ type: PRICE_HIGH_WOMEN });
};

export const fetchProducts = async (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  const response = await axios.get(`${PRODUCT_URL}/api/products`, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  dispatch({ type: LOADING, payload: false });
  //   console.log(response);
  dispatch(fetchAction(response.data.products));
};

export const getSingleProduct = async (dispatch: any, id: string) => {
  dispatch({ type: LOADING, payload: true });
  const product = await axios.get(`${PRODUCT_URL}/api/product/${id}`);
  dispatch({ type: LOADING, payload: false });
  dispatch(getSingleProductAction(product.data.product[0]));
};

// orders
export const getOrders = async (dispatch: any) => {
  dispatch({ type: ORDER_LOADING, payload: true });
  const getProduct: any = localStorage.getItem("fashions");
  const count: number =
    JSON.parse(getProduct) !== null ? JSON.parse(getProduct).length : 0;
  const response = await axios.get(`${PRODUCT_URL}/api/orders`);
  dispatch({ type: ORDER_LOADING, payload: false });
  dispatch(ordersAction(response.data));
};

export const addOrder = async (
  dispatch: any,
  orders: any,
  quantity: string
) => {
  if (parseInt(quantity) < 0) {
    alert("Not available");
  }
  let check = fashion_products.filter((order: any) => order.id === orders.id);
  // alert(check);
  console.log(check);
  if (check.length > 0) {
    return fashion_products.map((order: any | any) => {
      if (order.id === orders.id && order.stock >= "0") {
        order.quantity = parseInt(quantity) + parseInt(order.quantity);
        order.stock = parseInt(order.stock) - parseInt(quantity);
        localStorage.setItem("fashions", JSON.stringify(fashion_products));
      }
      return order;
    });
  }
  fashion_products.push({
    ...orders,
    quantity: `${quantity === undefined ? "1" : quantity}`,
    product_id: orders.id,
  });
  localStorage.setItem("fashions", JSON.stringify(fashion_products));
  dispatch({ type: ADD_ORDER, payload: fashion_products.length });
};

export const deleteOrder = async (dispatch: any, id: string, count: number) => {
  fashion_products = fashion_products.filter((order: any) => order.id !== id);
  localStorage.setItem("fashion", JSON.stringify(fashion_products));
  dispatch({ type: ORDER_LOADING, payload: true });
  const response: any = await axios.delete(`${PRODUCT_URL}/api/orders/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6ImE0MzRhNTkyLWNmZTgtNDczZC1hOGZlLTU5ZGE2N2FlOTU2ZCIsImZpcnN0X25hbWUiOiJCaWJpIiwibGFzdF9uYW1lIjoiQnJvIiwicGhvbmUiOiIxMjM0NTY3ODkwMSIsImVtYWlsIjoiYmliaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR5UDVkWTcwT2YvLmkuZUx4eGhmZjN1N3d6WURZV1dtaU9tQkZldnBqUzlFSmlYZUtkNGZNbSIsInVzZXJfaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9iaWJpMTk4OTE2L2ltYWdlL3VwbG9hZC92MTU2NjI4NDc4Ny9zYW1wbGUuanBnIiwiaXNfc2VsbGVyIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMC0wMy0wMlQyMTo1Njo1NC41MzNaIn1dLCJpYXQiOjE1ODMxODYyMTR9.Xh2SCMuLa1nX1dCvu0M6yhncfq4_SauQdnYT4VPXSf0`,
    },
  });
  dispatch({ type: ORDER_LOADING, payload: false });
  dispatch({ type: DELETE_ORDER, payload: count });
};
