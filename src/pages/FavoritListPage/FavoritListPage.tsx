import { useAppSelector } from 'src/redux/hooks'
import { ContactCard } from 'src/components/ContactCard'
import { Col, Row } from 'react-bootstrap'

export const FavoritListPage = () => {
  const contacts = useAppSelector((state) => state.favorites)

  return (
    <Row xxl={4} className="g-4">
      {contacts.favorites.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
}
