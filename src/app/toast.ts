import { Middleware, isFulfilled, isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkToastMiddleware: Middleware = () => (next) => (action) => {
  // Narrow types for success actions
  if (isFulfilled(action)) {
    const message =
      (action.payload as { message?: string })?.message || 'Action Successful';
    toast.success(message);
  }

  // Narrow types for error actions (e.g., from RTK Query or createAsyncThunk)
  if (isRejectedWithValue(action)) {
    // Customize based on your API's error response structure
    const errorMessage =
      (action.payload as any)?.data?.message || 'An unexpected error occurred';
    toast.error(errorMessage);
  }

  return next(action);
};
