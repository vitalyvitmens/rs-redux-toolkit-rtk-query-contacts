import { initialState, FAVORITE_CONTACTS } from './initialState'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactDto } from 'src/types/dto/ContactDto'

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addToContacts: (state, action: PayloadAction<ContactDto>) => {
      state.favorites.push(action.payload)
      localStorage.setItem(FAVORITE_CONTACTS, JSON.stringify(state.favorites))
    },
    removeFromContacts: (state, action: PayloadAction<ContactDto['id']>) => {
      state.favorites = state.favorites.filter(
        (contact) => contact.id !== action.payload
      )
      localStorage.setItem(
        FAVORITE_CONTACTS,
        JSON.stringify(
          state.favorites.filter((contact) => contact.id !== action.payload)
        )
      )
    },
  },
})

export const { addToContacts, removeFromContacts } = contactsSlice.actions
