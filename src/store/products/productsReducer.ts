import { FETCH_PRODUCTS } from "./productsActions";
import { products } from "mocks";

const initialState = {
  loading: true,
  payload: products,
};
const productsReducer = (state: any = initialState, actions: any) => {
  switch (actions.type) {
    case FETCH_PRODUCTS:
      return { loading: false, payload: actions.payload };
    default:
      return state;
  }
};

export default productsReducer;
