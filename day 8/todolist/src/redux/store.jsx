/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// reducer merupakan state
// isi dari state ditentukan dari action type
// kumpulkan seluruh reducer yg dibuat ke dalam rootReducer dengan combine reducer
