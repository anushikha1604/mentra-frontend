import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { loginSliceAPI } from '../features/login/loginSliceAPI';
import { userSlice } from '../features/login/userSlice';
import { instituteSlice } from '../features/signup/instituteSlice';
import { rtkToastMiddleware } from './toast';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [loginSliceAPI.reducerPath]: loginSliceAPI.reducer,
    [instituteSlice.reducerPath]: instituteSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      loginSliceAPI.middleware,
      instituteSlice.middleware,
      rtkToastMiddleware
    );
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
