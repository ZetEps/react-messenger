import { configureStore } from '@reduxjs/toolkit';
import ConfigSlice from "../features/configSlice";
import NotificationSlice from "../features/notificationSlice";
import userSlice from "../features/userSlice";
export const store = configureStore({
  reducer: {
    config:ConfigSlice,
    notifications:NotificationSlice,
    user:userSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
