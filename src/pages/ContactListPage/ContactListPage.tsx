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
  const { contacts, isLoading } = useGetContactsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      contacts: data?.contacts,
      isLoading: data?.isLoading,
    }),
  })
  const { groups, isLoadingGroups } = useGetGroupContactsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      groups: data?.groups,
      isLoadingGroups: data?.isLoading,
    }),
  })

  useEffect(() => {
    if (contacts) {
      setFilteredContacts(contacts)
    }
  }, [contacts, groups])

  const handleFilter = (filterValues: Partial<FilterFormValues>) => {
    if (!contacts || !groups) {
      return
    }

    const filtered = contacts.filter((contact) => {
      const nameMatch =
        !filterValues.name ||
        contact.name.toLowerCase().includes(filterValues.name.toLowerCase())
      const groupMatch =
        !filterValues.groupId ||
        groups.some(
          (group) =>
            group.id === filterValues.groupId &&
            group.contactIds.includes(contact.id)
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
            onSubmit={handleFilter}
            initialValues={{}}
          />
        </Suspense>
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts?.map((contact) => (
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
