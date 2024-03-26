import { Suspense, useEffect, useState } from 'react'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { Col, Row } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contactsReducer'
import { useGetGroupsContactsQuery } from 'src/redux/groupContactsReducer'

export const ContactListPage = () => {
  const [contacts, setContacts] = useState<ContactDto[]>([])
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto[]>([])
  const { data: dataContacts } = useGetContactsQuery()
  const { data: dataGroupContacts } = useGetGroupsContactsQuery()

  useEffect(() => {
    dataContacts && setContacts(dataContacts)
  }, [dataContacts])

  useEffect(() => {
    dataGroupContacts && setGroupContacts(dataGroupContacts)
  }, [dataGroupContacts])

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = contacts.filter((c) => {
      if (fv.name && !c.name.toLowerCase().includes(fv.name.toLowerCase())) {
        return false
      }

      if (fv.groupId) {
        const groupContacts = dataGroupContacts?.find(
          (gc) => gc.id === fv.groupId
        )
        if (groupContacts && !groupContacts.contactIds.includes(c.id)) {
          return false
        }
      }

      return true
    })

    setContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <Suspense>
          <FilterForm
            groupContactsList={groupContacts}
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
