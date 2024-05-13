import { combineReducers } from "redux";
import productReducer from "./ProductReducer/productReducer"
import reducerSaga from "./ProductReducer/reducerSaga"

const rootReducer = combineReducers({productReducer, reducerSaga})


export default rootReducer;