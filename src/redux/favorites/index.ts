import { favoritesSlice } from './slice'

const favoritesSliceReducer = favoritesSlice.reducer

export default favoritesSliceReducer

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
