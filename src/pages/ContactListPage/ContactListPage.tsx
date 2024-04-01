import { Suspense, useEffect, useState } from 'react'
import { ContactCard } from 'src/components/ContactCard/ContactCard'
import {
  FilterForm,
  FilterFormValues,
} from 'src/components/FilterForm/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contacts'
import { useGetGroupContactsQuery } from 'src/redux/groups'

export const ContactListPage = () => {
  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>([])
  const { data: contacts, isLoading } = useGetContactsQuery()
  const { data: groups, isLoading: isLoadingGroups } =
    useGetGroupContactsQuery()

  useEffect(() => {
    if (contacts) {
      setFilteredContacts(contacts)
    }
  }, [contacts, groups])

  const onFilter = (fv: Partial<FilterFormValues>) => {
    if (!contacts || !groups) {
      return
    }

    const filtered = contacts.filter((contact) => {
      const nameMatch =
        !fv.name || contact.name.toLowerCase().includes(fv.name.toLowerCase())
      const groupMatch =
        !fv.groupId ||
        groups.some(
          (group) =>
            group.id === fv.groupId && group.contactIds.includes(contact.id)
        )
      return nameMatch && groupMatch
    })

    setFilteredContacts(filtered)
  }

  if (isLoading || isLoadingGroups) return <Spinner animation="border" />
  if (!groups || !filteredContacts) return null

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <Suspense fallback={<Spinner animation="border" />}>
          <FilterForm
            groupContactsList={groups}
            onSubmit={onFilter}
            initialValues={{}}
          />
        </Suspense>
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <Suspense fallback={<Spinner animation="border" />}>
                <ContactCard contact={contact} withLink />
              </Suspense>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
