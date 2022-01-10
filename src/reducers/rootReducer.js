import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { deadlineReducer } from "./deadlineReducer";
import { productReducer } from "./productsReducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  deadlines: deadlineReducer,
});
