import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cards from './sliceCards';
import filters from './sliceFilter';

const reducer = combineReducers({ cards, filters });
const store = configureStore({ reducer });

export default store;
