import { combineReducers } from 'redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsApiSlice } from './contactsReducer'
import { groupContactsApiSlice } from './groupContactsReducer'
import { favoritesSlice } from './favoritesReducer'
import { logActionMiddleware } from './logActionMiddleware'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = persistReducer(
  { key: 'rs-redux-toolkit-rtk-query-contacts', storage: storage },
  combineReducers({
    [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
    [groupContactsApiSlice.reducerPath]: groupContactsApiSlice.reducer,
    favorites: favoritesSlice.reducer,
  })
)

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      contactsApiSlice.middleware,
      groupContactsApiSlice.middleware,
      logActionMiddleware,
    ])
  },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
