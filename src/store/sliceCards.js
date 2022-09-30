import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const slice = createSlice({
  name: 'cards',
  initialState: {
    loading: false,
    allCards: [],
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.allCards = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.allCards = [];
      state.error = action.payload;
    },
  },
});

export const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchCards = () => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const { data } = await axios.get(
      'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    );

    return dispatch(fetchSuccess(data.data));
  } catch (error) {
    return dispatch(fetchError(error.message));
  }
};

export default slice.reducer;
