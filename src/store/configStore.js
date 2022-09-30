import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cards from './sliceCards';

const reducer = combineReducers({ cards });
const store = configureStore({ reducer });

export default store;
