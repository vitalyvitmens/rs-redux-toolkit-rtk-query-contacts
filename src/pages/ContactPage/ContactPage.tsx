import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Col, Row } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contactsReducer'

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const [contact, setContact] = useState<ContactDto>()

  const { data: contacts } = useGetContactsQuery()

  useEffect(() => {
    setContact(() => contacts?.find(({ id }) => id === contactId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactId])

  if (!contacts) {
    return <div>Loading...</div>
  }

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
}
