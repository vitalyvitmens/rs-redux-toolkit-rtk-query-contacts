import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { groupContacts } from 'src/__data__'

export function groupContactsReducer(
  state: GroupContactsDto[] = groupContacts
) {
  return state
}
