import { createSlice } from '@reduxjs/toolkit'
import { ContactDto } from 'src/types/dto/ContactDto'
import { contacts } from 'src/__data__'

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts as ContactDto[],
  reducers: {},
})
