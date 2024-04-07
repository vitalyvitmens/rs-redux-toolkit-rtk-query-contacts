import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard/ContactCard'
import { GroupContactsCard } from 'src/components/GroupContactsCard/GroupContactsCard'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contacts'
import { useGetGroupContactsQuery } from 'src/redux/groups'

export const GroupPage = () => {
  const { groupId } = useParams<{ groupId: string }>()
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()
  const { contacts, isLoading } = useGetContactsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      contacts: data?.contacts,
      isLoading: data?.isLoading,
    }),
  })
  const { groups, isLoadingGroups } = useGetGroupContactsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      groups: data?.groups,
      isLoadingGroups: data?.isLoadingGroups,
    }),
  })

  useEffect(() => {
    const currentGroupContacts = groups?.find(({ id }) => id === groupId)

    setGroupContacts(currentGroupContacts)
  }, [groupId, groups])

  if (isLoading || isLoadingGroups) return <Spinner animation="border" />
  if (!groupContacts || !contacts) return null

  return (
    <Row className="g-4">
      <Col xxl={12}>
        <Row xxl={3}>
          <Col className="mx-auto">
            <GroupContactsCard groupContacts={groupContacts} />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
