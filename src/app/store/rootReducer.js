import { accountApi } from "./api/accountApi";
import dataSlice from "./reducer/dataSlice";
import globalSlice from "./reducer/globalSlice";
import modalSlice from "./reducer/modalSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  global: globalSlice,
  modal: modalSlice,
  apiStateData: dataSlice,
  [accountApi.reducerPath]: accountApi.reducer,
});
export default rootReducer;