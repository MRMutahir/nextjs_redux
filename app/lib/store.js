import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/Card/Card.js";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

// export default store;
