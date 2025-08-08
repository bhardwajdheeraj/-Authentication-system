import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // ✅ correct import

export const store = configureStore({
  reducer: {
    user: userReducer, // ✅ use the actual reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
