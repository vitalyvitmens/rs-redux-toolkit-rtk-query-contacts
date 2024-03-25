import { Suspense, useState } from 'react'
import { useAppSelector } from 'src/redux/hooks'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { Col, Row } from 'react-bootstrap'

export const ContactListPage = () => {
  const contactsData: ContactDto[] = useAppSelector((state) => state.contacts.favorites)
  const groupsData: GroupContactsDto[] = useAppSelector((state) => state.groups)
  const [contacts, setContacts] = useState<ContactDto[]>(contactsData)
  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = contacts

    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      )
    }

    if (fv.groupId) {
      const groupContacts = groupsData.find(({ id }) => id === fv.groupId)

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        )
      }
    }

    setContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <Suspense>
          <FilterForm
            groupContactsList={groupsData}
            initialValues={{}}
            onSubmit={onSubmit}
          />
        </Suspense>
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <Suspense>
                <ContactCard contact={contact} withLink />
              </Suspense>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
