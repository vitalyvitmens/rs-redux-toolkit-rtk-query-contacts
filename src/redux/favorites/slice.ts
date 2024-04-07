import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  LOCAL_STORAGE_KEY,
  PERSIST_STORAGE_KEY,
} from 'src/constants/storageKeys'
import { ContactDto } from 'src/types/dto/ContactDto'

type FavoritesState = {
  favorites: ContactDto[]
}

const initialState: FavoritesState = {
  favorites: JSON.parse(
    localStorage.getItem(PERSIST_STORAGE_KEY + LOCAL_STORAGE_KEY) ?? '[]'
  ),
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ContactDto>) => {
      state.favorites.push(action.payload)
    },
    removeFromFavorites: (state, action: PayloadAction<ContactDto['id']>) => {
      state.favorites = state.favorites.filter(
        (contact) => contact.id !== action.payload
      )
    },
  },
})
