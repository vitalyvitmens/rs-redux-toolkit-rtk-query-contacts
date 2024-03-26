import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Col, Row } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contactsReducer'
import { useGetGroupsContactsQuery } from 'src/redux/groupContactsReducer'

export const GroupPage = () => {
  const [contacts, setContacts] = useState<ContactDto[]>([])

  const { data } = useGetContactsQuery()
  const { groupId } = useParams<{ groupId: string }>()
  // const [allContacts, setAllcontacts] = useState<ContactDto[]>([])

  const { data: groups } = useGetGroupsContactsQuery()

  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()

  useEffect(() => {
    const findGroup = groups?.find(({ id }) => id === groupId)
    setGroupContacts(findGroup)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId])

  useEffect(() => {
    data && setContacts(data)
  }, [data])

  if (!contacts) {
    return <div>Loading...</div>
  }

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts?.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
}
