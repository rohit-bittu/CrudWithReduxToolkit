import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../Slice/postsSlice';


export const store = configureStore({
  reducer: {
    posts:postsSlice
  },
});
