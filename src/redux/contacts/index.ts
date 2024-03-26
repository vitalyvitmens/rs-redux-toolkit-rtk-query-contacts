import { contactsApiSlice } from './api'

const contactsReducer = contactsApiSlice.reducer

export default contactsReducer

export const { useGetContactsQuery } = contactsApiSlice

export const contactsMiddleware = contactsApiSlice.middleware

export const contactsReducerPath = contactsApiSlice.reducerPath
