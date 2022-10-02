import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    type: '',
    race: '',
    level: '',
    attribute: '',
    openFilter: false,
  },
  reducers: {
    filterName(state, action) {
      state.name = action.payload;
    },
    filterType(state, action) {
      state.type = action.payload;
    },
    filterRace(state, action) {
      state.race = action.payload;
    },
    filterAttribute(state, action) {
      state.attribute = action.payload;
    },
    filterLevel(state, action) {
      state.level = action.payload;
    },
    handleFilter(state, action) {
      state.openFilter = action.payload;
    },
  },
});

export const {
  filterName,
  filterType,
  filterRace,
  filterAttribute,
  filterLevel,
  handleFilter,
} = slice.actions;

export default slice.reducer;
