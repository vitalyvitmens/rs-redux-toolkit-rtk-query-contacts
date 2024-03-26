import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsApiSlice } from './contactsReducer'
import { groupContactsApiSlice } from './groupContactsReducer'
import { favoritesSlice } from './favoritesReducer'
import { logActionMiddleware } from './logActionMiddleware'
import { composeWithDevTools } from '@redux-devtools/extension'
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      contactsApiSlice.middleware,
      groupContactsApiSlice.middleware,
      // thunkMiddleware,
      // logActionMiddleware,
    ]),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
