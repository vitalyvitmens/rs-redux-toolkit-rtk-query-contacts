import { ContactDto } from 'src/types/dto/ContactDto'

export const FAVORITE_CONTACTS = 'rs-redux-toolkit-rtk-query-contacts'

export const initialState = {
  favorites: JSON.parse(
    localStorage.getItem(FAVORITE_CONTACTS) ?? '[]'
  ) as ContactDto[],
}
