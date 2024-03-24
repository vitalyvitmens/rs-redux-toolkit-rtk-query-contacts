import {
  ADD_TO_FAVORITES_ACTION,
  ProjectActions,
  REMOVE_FROM_FAVORITES_ACTION,
} from './actions'
import { ContactDto } from 'src/types/dto/ContactDto'

export function favoritesReducer(
  state: ContactDto[] | undefined = [],
  action: ProjectActions
) {
  switch (action.type) {
    case ADD_TO_FAVORITES_ACTION:
      return [...state, action.payload.contact]
    case REMOVE_FROM_FAVORITES_ACTION:
      return [...state.filter((contact) => contact.id !== action.payload.id)]
    default:
      return state
  }
}
