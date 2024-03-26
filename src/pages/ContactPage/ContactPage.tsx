import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contactsReducer'

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const { data: contacts } = useGetContactsQuery()
  const contact = contacts?.find(({ id }) => id === contactId)

  if (!contact) {
    return <Spinner animation="border" />
  }

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        <ContactCard contact={contact} />
      </Col>
    </Row>
  )
}
