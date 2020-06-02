import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dailyUsageReducer from "./dailyUsageReducer";
import invoiceDetailsReducer from "./invoiceDetailsReducer";

export default combineReducers({
  auth: authReducer,
  dailyUsage: dailyUsageReducer,
  invoiceDetails: invoiceDetailsReducer,
});
