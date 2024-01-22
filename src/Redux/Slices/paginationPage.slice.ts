import { createSlice } from '@reduxjs/toolkit'

export interface PaginationPageState {
  value: number
}

const initialState: PaginationPageState = {
  value: 1,
}

export const PaginationPageSlice = createSlice({
  name: 'PaginationPage',
  initialState,
  reducers: {
    setPaginationPage: (state, action) => {
      state.value = action.payload
    },
    resetPaginationPage: (state) => {
      state.value = 1
    },
  },
})

export const { setPaginationPage, resetPaginationPage } = PaginationPageSlice.actions;
export const PaginationPageReducer = PaginationPageSlice.reducer;
