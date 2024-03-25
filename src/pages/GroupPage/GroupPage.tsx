import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'src/redux/hooks'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Col, Row } from 'react-bootstrap'

export const GroupPage = () => {
  const { groupId } = useParams<{ groupId: string }>()
  const [allcontacts, setAllcontacts] = useState<ContactDto[]>([])

  const { groups, contacts } = useAppSelector((state) => state)

  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()

  useEffect(() => {
    const findGroup = groups.find(({ id }) => id === groupId)
    setGroupContacts(findGroup)
    setAllcontacts(() => {
      if (findGroup) {
        return contacts.favorites.filter(({ id }) => findGroup.contactIds.includes(id))
      }
      return []
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId])

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
              {allcontacts.map((contact) => (
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
