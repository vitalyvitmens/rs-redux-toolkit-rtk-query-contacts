import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { groupContacts } from 'src/__data__'
import { createSlice } from '@reduxjs/toolkit'

export const groupContactsSlice = createSlice({
  name: 'groupContacts',
  initialState: groupContacts as GroupContactsDto[],
  reducers: {
    // return initialState
  },
})
