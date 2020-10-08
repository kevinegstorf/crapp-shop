import { combineReducers } from "redux";
import productsReducer from "store/products/productsReducer";

export default combineReducers({
  products: productsReducer,
});
