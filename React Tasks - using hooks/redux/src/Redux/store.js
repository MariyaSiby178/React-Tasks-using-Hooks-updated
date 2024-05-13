import { legacy_createStore as createStore } from "redux";
import calculateReducer from "./Reducer";

export const store = createStore(calculateReducer);
