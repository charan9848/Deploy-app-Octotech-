// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import UsersReducer from './redux/usersSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    userlist: UsersReducer,
    
  }
});
