import {
  ADD_NEW_CONTACT_ACTION,
  ProjectActions,
  REMOVE_CONTACT_ACTION,
} from './actions'
import { contacts } from 'src/__data__'

export function contactsReducer(state = contacts, action: ProjectActions) {
  switch (action.type) {
    case ADD_NEW_CONTACT_ACTION:
      return [...state, action.payload.contact]
    case REMOVE_CONTACT_ACTION:
      return state.filter((contact) => contact.id !== action.payload.id)
    default:
      return state
  }
}
