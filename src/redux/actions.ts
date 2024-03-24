import { ContactDto } from 'src/types/dto/ContactDto'

export const ADD_NEW_CONTACT_ACTION = 'ADD_NEW_CONTACT'
export const REMOVE_CONTACT_ACTION = 'REMOVE_CONTACT'

export const ADD_TO_FAVORITES_ACTION = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES_ACTION = 'REMOVE_FROM_FAVORITES'

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

interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES_ACTION
  payload: {
    contact: ContactDto
  }
}

interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES_ACTION
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

export function addToFavoritesActionCreator(
  contact: ContactDto
): AddToFavoritesAction {
  return { type: ADD_TO_FAVORITES_ACTION, payload: { contact } }
}

export function removeFromFavoritesActionCreator(
  id: ContactDto['id']
): RemoveFromFavoritesAction {
  return { type: REMOVE_FROM_FAVORITES_ACTION, payload: { id } }
}

export type ProjectActions =
  | AddNewContactAction
  | RemoveContactAction
  | AddToFavoritesAction
  | RemoveFromFavoritesAction
