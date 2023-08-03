import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cartSlice'

export const store = configureStore({
  reducer: {
    cartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
