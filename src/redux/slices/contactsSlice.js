import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { contacts: [] },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
    },
    setContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { setContacts, deleteContact, setContact } = contactsSlice.actions;

export default contactsSlice.reducer;
