import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/auth';
import favReducer from './cars/favoriteCras';

const store = configureStore({
  reducer: {
    auth: authReducer,
    favoriteCars: favReducer,
  },
});

export default store;
