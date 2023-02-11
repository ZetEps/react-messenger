import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ConfigSlice from "../features/configSlice";
export const store = configureStore({
  reducer: {
    config:ConfigSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
