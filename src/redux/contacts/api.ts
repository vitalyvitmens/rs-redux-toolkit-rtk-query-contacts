import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactDto } from 'src/types/dto/ContactDto'

const initialState: Record<ContactDto['id'], string> = {}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
})

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/',
  }),
  endpoints(builder) {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () => '190/h/560e0501fa0e19aed9ef169df6095f00.json',
      }),
    }
  },
})
