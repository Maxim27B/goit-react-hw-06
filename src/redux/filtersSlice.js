import { createSlice } from "@reduxjs/toolkit"
import initialStates from "./constants"

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialStates.filters,
    reducers: {
        // changeFilter(state, action) {
            
        // },
        // selectNameFilter(state, action) {
            
        // }
    }
})

export const { changeFilter, selectNameFilter } = filtersSlice.actions;
export const { filtersReducer } = filtersSlice.reducer;