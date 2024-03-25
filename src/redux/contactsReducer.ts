import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ContactDto } from 'src/types/dto/ContactDto'
import { contacts } from 'src/__data__'

const createContacts = createAsyncThunk('createContacts', async () => {
  const res = await fetch(
    'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json'
  )
  const data: ContactDto = await res.json()

  if (!data.id) {
    throw new Error('Something goes wrong')
  }
})

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts as ContactDto[],
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addMatcher(createContacts.pending.match, () => {
  //     return {
  //       loading: true,
  //       confirmed: false,
  //     }
  //   })

  //   builder.addMatcher(createContacts.fulfilled.match, () => {
  //     return {
  //       loading: false,
  //       confirmed: true,
  //     }
  //   })

  //   builder.addMatcher(createContacts.rejected.match, () => {
  //     return {
  //       loading: false,
  //       confirmed: false,
  //     }
  //   })
  // },
})
