import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard/ContactCard'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useGetContactsQuery } from 'src/redux/contacts'

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const { data: contacts, isLoading } = useGetContactsQuery()
  const contact = contacts?.find(({ id }) => id === contactId)

  if (isLoading) return <Spinner animation="border" />
  if (!contact) return null

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        <ContactCard contact={contact} />
      </Col>
    </Row>
  )
}
