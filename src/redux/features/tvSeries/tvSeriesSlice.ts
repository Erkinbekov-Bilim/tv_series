import { createSlice } from '@reduxjs/toolkit';

interface ITVSeriesState {}

const initialState: ITVSeriesState = {};

export const tvSeriesSlice = createSlice({
  name: 'tvSeries',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    
  },
});

export const tvSeriesReducer = tvSeriesSlice.reducer;
export const {} = tvSeriesSlice.actions;
