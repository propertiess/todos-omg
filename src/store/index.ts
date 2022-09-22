import {configureStore} from "@reduxjs/toolkit";
import CounterSlice from "./reducers/CounterSlice";


const store = configureStore({
  reducer: {
    counter: CounterSlice,
  }
})

export type RootState = typeof store.getState
export type AppDispatch = typeof store.dispatch

export default store
