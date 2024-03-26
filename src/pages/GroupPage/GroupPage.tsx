import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'src/redux/hooks'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Col, Row } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contactsReducer'

export const GroupPage = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const [allContacts, setAllContacts] = useState<ContactDto>()

  const { data: contacts } = useGetContactsQuery()
  const { groupId } = useParams<{ groupId: string }>()
  // const [allContacts, setAllcontacts] = useState<ContactDto[]>([])

  const { groups } = useAppSelector((state) => state)

  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()

  useEffect(() => {
    const findGroup = groups.find(({ id }) => id === groupId)
    setGroupContacts(findGroup)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId])

  useEffect(() => {
    setAllContacts(() => contacts?.find(({ id }) => id === contactId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactId])

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
              {contacts?.map((c) => (
                <Col key={c.id}>
                  <ContactCard contact={c} withLink />
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
