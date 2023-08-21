import { configureStore } from '@reduxjs/toolkit';
import user_reducer from '../Redux/Reducers/user_reducer'

export const store = configureStore({
  reducer: {
     user_reducerReducer:user_reducer
    },
})