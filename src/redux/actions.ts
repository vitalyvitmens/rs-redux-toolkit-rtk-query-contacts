import { ContactDto } from 'src/types/dto/ContactDto'

export const ADD_NEW_CONTACT_ACTION = 'ADD_NEW_CONTACT'
export const REMOVE_CONTACT_ACTION = 'REMOVE_CONTACT'

interface AddNewContactAction {
  type: typeof ADD_NEW_CONTACT_ACTION
  payload: {
    contact: ContactDto
  }
}

interface RemoveContactAction {
  type: typeof REMOVE_CONTACT_ACTION
  payload: {
    id: ContactDto['id']
  }
}

export function addNewContactActionCreator(
  contact: ContactDto
): AddNewContactAction {
  return { type: ADD_NEW_CONTACT_ACTION, payload: { contact } }
}

export function RemoveContactActionCreator(
  id: ContactDto['id']
): RemoveContactAction {
  return { type: REMOVE_CONTACT_ACTION, payload: { id } }
}

export type ProjectActions = AddNewContactAction | RemoveContactAction
