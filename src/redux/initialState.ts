import { ContactDto } from 'src/types/dto/ContactDto'

export const PERSIST_LOCAL_STORAGE =
  'persist:rs-redux-toolkit-rtk-query-contacts'

export const initialState = {
  favorites: JSON.parse(
    localStorage.getItem(PERSIST_LOCAL_STORAGE) ?? '[]'
  ) as ContactDto[],
}
