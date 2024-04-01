import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  API_BASE_URL,
  GROUP_CONTACTS_API_PATH,
  GROUPS_URL,
} from 'src/constants/config'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const groupContactsApiSlice = createApi({
  reducerPath: GROUP_CONTACTS_API_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints(builder) {
    return {
      getGroupContacts: builder.query<GroupContactsDto[], void>({
        query: () => GROUPS_URL,
      }),
    }
  },
})
