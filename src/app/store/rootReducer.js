import { accountApi } from "./api/accountApi";
import { newsApi } from "./api/newsApi";
import dataSlice from "./reducer/dataSlice";
import globalSlice from "./reducer/globalSlice";
import modalSlice from "./reducer/modalSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  global: globalSlice,
  modal: modalSlice,
  apiStateData: dataSlice,
  [accountApi.reducerPath]: accountApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
});
export default rootReducer;
