import { favoritesSlice } from './slice'

const favoritesReducer = favoritesSlice.reducer

export default favoritesReducer

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
