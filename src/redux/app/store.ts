import { configureStore } from '@reduxjs/toolkit';
import { tvSeriesReducer } from '../features/tvSeries/tvSeriesSlice';

export const store = configureStore({
  reducer: {
    tvSeriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
