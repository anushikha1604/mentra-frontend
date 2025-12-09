import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../pages/counter/counterSlice';
import { loginSliceAPI } from '../pages/login/loginSliceAPI';
import { userSlice } from '../pages/login/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [loginSliceAPI.reducerPath]: loginSliceAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loginSliceAPI.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
