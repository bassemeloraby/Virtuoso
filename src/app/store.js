import { configureStore } from "@reduxjs/toolkit";

import drugReducer from "../features/medicineReducer/TradeNameSlice";

export const store = configureStore({
  reducer: {
    drugs: drugReducer
  }
});
