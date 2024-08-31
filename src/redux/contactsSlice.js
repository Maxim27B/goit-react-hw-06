import { createSlice } from "@reduxjs/toolkit";
import initialStates from "./constants";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialStates.contacts,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    }
})

export const { contactsReducer } = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;