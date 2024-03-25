import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { groupContacts } from 'src/__data__'

const createGroupContacts = createAsyncThunk(
  'createGroupContacts',
  async () => {
    const res = await fetch(
      'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json'
    )
    const data: GroupContactsDto = await res.json()

    if (!data.id) {
      throw new Error('Something goes wrong')
    }
  }
)

export const groupContactsSlice = createSlice({
  name: 'groupContacts',
  initialState: groupContacts as GroupContactsDto[],
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addMatcher(createGroupContacts.pending.match, () => {
  //     return {
  //       loading: true,
  //       confirmed: false,
  //     }
  //   })

  //   builder.addMatcher(createGroupContacts.fulfilled.match, () => {
  //     return {
  //       loading: false,
  //       confirmed: true,
  //     }
  //   })

  //   builder.addMatcher(createGroupContacts.rejected.match, () => {
  //     return {
  //       loading: false,
  //       confirmed: false,
  //     }
  //   })
  // },
})
