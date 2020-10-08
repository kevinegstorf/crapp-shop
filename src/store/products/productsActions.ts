import { products } from "mocks";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

type FetchProducts = {
  type: typeof FETCH_PRODUCTS;
  payload: any;
};

export const fetchProducts = (type = FETCH_PRODUCTS) => {
  return { type, payload: products };
};
