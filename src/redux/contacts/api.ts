import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  API_BASE_URL,
  CONTACTS_API_PATH,
  CONTACTS_URL,
} from 'src/constants/config'
import { ContactDto } from 'src/types/dto/ContactDto'

export const contactsApiSlice = createApi({
  reducerPath: CONTACTS_API_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints(builder) {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () => CONTACTS_URL,
      }),
    }
  },
})
