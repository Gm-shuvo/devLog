import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import userSlice from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    posts: postSlice,
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});