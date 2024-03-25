import { createSlice } from '@reduxjs/toolkit'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { groupContacts } from 'src/__data__'

export const groupContactsSlice = createSlice({
  name: 'groupContacts',
  initialState: groupContacts as GroupContactsDto[],
  reducers: {},
})
