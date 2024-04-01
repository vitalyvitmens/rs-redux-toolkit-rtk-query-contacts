import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  LOCAL_STORAGE_KEY,
  PERSIST_STORAGE_KEY,
} from 'src/constants/storageKeys'
import { ContactDto } from 'src/types/dto/ContactDto'

const initialState = {
  favorites: JSON.parse(
    localStorage.getItem(PERSIST_STORAGE_KEY + LOCAL_STORAGE_KEY) ?? '[]'
  ) as ContactDto[],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ContactDto>) => {
      state.favorites.push(action.payload)
      localStorage.setItem(
        PERSIST_STORAGE_KEY + LOCAL_STORAGE_KEY,
        JSON.stringify(state.favorites)
      )
    },
    removeFromFavorites: (state, action: PayloadAction<ContactDto['id']>) => {
      state.favorites = state.favorites.filter(
        (contact) => contact.id !== action.payload
      )
      localStorage.setItem(
        PERSIST_STORAGE_KEY + LOCAL_STORAGE_KEY,
        JSON.stringify(
          state.favorites.filter((contact) => contact.id !== action.payload)
        )
      )
    },
  },
})
