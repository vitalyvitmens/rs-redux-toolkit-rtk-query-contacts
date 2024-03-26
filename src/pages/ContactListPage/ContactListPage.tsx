import { Suspense, useEffect, useState } from 'react'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contactsReducer'
import { useGetGroupContactsQuery } from 'src/redux/groupContactsReducer'

export const ContactListPage = () => {
  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>([])
  const [groups, setGroups] = useState<GroupContactsDto[]>()
  const { data: contacts, isLoading } = useGetContactsQuery()
  const { data: groupsData, isLoading: isLoadingGroups } =
    useGetGroupContactsQuery()

  useEffect(() => {
    if (contacts && groupsData) {
      setFilteredContacts(contacts)
      setGroups(groupsData)
    }
  }, [contacts, groupsData])

  const onFilter = (fv: Partial<FilterFormValues>) => {
    let filtered = filteredContacts.filter((c) => {
      if (fv.name && !c.name.toLowerCase().includes(fv.name.toLowerCase())) {
        return false
      }

      if (
        fv.groupId &&
        !groups?.find((g) => g.id === fv.groupId)?.contactIds.includes(c.id)
      ) {
        return false
      }

      return true
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
