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
import { logActionMiddleware } from './logActionMiddleware'
import { configureStore } from '@reduxjs/toolkit'
import contactsReducer, {
  contactsMiddleware,
  contactsReducerPath,
} from './contacts'
import groupsReducer, { groupsMiddleware, groupsReducerPath } from './groups'
import favoritesReducer from './favorites'

const rootReducer = persistReducer(
  { key: 'rs-redux-toolkit-rtk-query-contacts', storage: storage },
  combineReducers({
    [contactsReducerPath]: contactsReducer,
    [groupsReducerPath]: groupsReducer,
    favorites: favoritesReducer,
  })
)

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([contactsMiddleware, groupsMiddleware, logActionMiddleware])
  },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
