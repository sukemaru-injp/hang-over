import { configureStore } from '@reduxjs/toolkit'

export const reduxStore = configureStore({
  reducer: {},
})

export type AppDispatch = typeof reduxStore.dispatch;
