import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { HousesApi } from './RTK_Query/houses.service';
import { PaginationPageReducer } from './Slices/paginationPage.slice';

export const store = configureStore({
  reducer: {
    paginationPage: PaginationPageReducer,

    [HousesApi.reducerPath]: HousesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat([
        HousesApi.middleware,
      ])
  )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
