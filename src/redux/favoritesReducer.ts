import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactDto } from 'src/types/dto/ContactDto'

const FAVORITE_CONTACTS = 'rs-redux-toolkit-rtk-query-contacts'

const initialState = {
  favorites: JSON.parse(
    localStorage.getItem(FAVORITE_CONTACTS) ?? '[]'
  ) as ContactDto[],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ContactDto>) => {
      state.favorites.push(action.payload)
      localStorage.setItem(FAVORITE_CONTACTS, JSON.stringify(state.favorites))
    },
    removeFromFavorites: (state, action: PayloadAction<ContactDto['id']>) => {
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

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
