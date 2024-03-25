import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactDto } from 'src/types/dto/ContactDto'
import { initialState, PERSIST_LOCAL_STORAGE } from './initialState'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ContactDto>) => {
      state.favorites.push(action.payload)
      localStorage.setItem(
        PERSIST_LOCAL_STORAGE,
        JSON.stringify(state.favorites)
      )
    },
    removeFromFavorites: (state, action: PayloadAction<ContactDto['id']>) => {
      state.favorites = state.favorites.filter(
        (contact) => contact.id !== action.payload
      )
      localStorage.setItem(
        PERSIST_LOCAL_STORAGE,
        JSON.stringify(
          state.favorites.filter((contact) => contact.id !== action.payload)
        )
      )
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
