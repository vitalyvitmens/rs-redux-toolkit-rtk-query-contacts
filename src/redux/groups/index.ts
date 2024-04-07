import { groupContactsApiSlice } from './api'

const groupsReducer = groupContactsApiSlice.reducer

export default groupsReducer

export const { useGetGroupContactsQuery } = groupContactsApiSlice

export const groupsMiddleware = groupContactsApiSlice.middleware

export const groupsReducerPath = groupContactsApiSlice.reducerPath
