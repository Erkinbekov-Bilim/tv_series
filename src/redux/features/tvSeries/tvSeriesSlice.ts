import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosAPI from '../../../api/axiosAPI';
import type { RootState } from '../../app/store';
import type IShowApi from '../../../types/tsShow/showAPI';
import type IShow from '../../../types/tsShow/show';

interface ITVSeriesState {
  shows: IShowApi[];
  show: IShow | null;
  isError: boolean;
  isLoading: boolean;
}

const initialState: ITVSeriesState = {
  shows: [],
  show: null,
  isError: false,
  isLoading: false,
};

export const tvSeriesSlice = createSlice({
  name: 'tvSeries',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSearchTVShows.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getSearchTVShows.fulfilled, (state, { payload: shows }) => {
      state.isError = false;
      state.shows = shows;
      state.isLoading = false;
    });
    builder.addCase(getSearchTVShows.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });

    builder.addCase(getTVShowByQ.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getTVShowByQ.fulfilled, (state, { payload: show }) => {
      state.isError = false;
      state.show = show;
      state.isLoading = false;
    });
    builder.addCase(getTVShowByQ.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const getSearchTVShows = createAsyncThunk<IShowApi[], string>(
  'tvShows/getSearchTVShows',
  async (showName) => {
    if (showName && showName.trim().length > 0) {
      const response = await axiosAPI.get<IShowApi[]>(
        `search/shows?q=${showName}`,
      );
      const shows: IShowApi[] = response.data;

      return shows;
    }

    return [];
  },
);

export const getTVShowByQ = createAsyncThunk<IShow | null, string>(
  'tvShows/getTVShowByQ',
  async (showID) => {
    if (showID) {
      const response = await axiosAPI.get<IShow>(`shows/${showID}`);
      const show: IShow = response.data;

      return show;
    }

    return null;
  },
);

export const selectShows = (state: RootState) => state.tvSeriesReducer.shows;
export const selectShow = (state: RootState) => state.tvSeriesReducer.show;
export const selectError = (state: RootState) => state.tvSeriesReducer.isError;
export const selectLoading = (state: RootState) => state.tvSeriesReducer.isLoading;

export const tvSeriesReducer = tvSeriesSlice.reducer;
