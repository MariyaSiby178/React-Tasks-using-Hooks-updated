import { combineReducers } from "redux";
import calciReducer from "./CalculationReducer/calciReducer";

const calculateReducer = combineReducers({ calciReducer });
export default calculateReducer;
