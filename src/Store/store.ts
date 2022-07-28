import { configureStore,combineReducers } from '@reduxjs/toolkit';
import mainReducer from './Reducers/AppSlice'

const rootReducer = combineReducers({
  mainReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'] ;
export type RootState = ReturnType<typeof rootReducer>;

