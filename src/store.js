import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  addProductToCartReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  shoppingCart: addProductToCartReducer,
});

//  Retrive Cart Items from Local Storage
const localStorageCart = localStorage.getItem("items_in_cart")
  ? JSON.parse(localStorage.getItem("items_in_cart"))
  : [];

const initialState = {
  shoppingCart: { items_in_cart: localStorageCart },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
