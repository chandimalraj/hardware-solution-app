import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: rootReducer,
});
