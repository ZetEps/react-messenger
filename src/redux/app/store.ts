import { configureStore } from '@reduxjs/toolkit';
import ConfigSlice from "../features/configSlice";
import NotificationSlice from "../features/notificationSlice";
export const store = configureStore({
  reducer: {
    config:ConfigSlice,
    notifications:NotificationSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
