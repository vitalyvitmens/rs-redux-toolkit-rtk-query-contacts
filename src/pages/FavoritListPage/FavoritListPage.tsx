import { useAppSelector } from 'src/redux/hooks'
import { ContactCard } from 'src/components/ContactCard'
import { Col, Row } from 'react-bootstrap'

export const FavoritListPage = () => {
  const favorites = useAppSelector((state) => state.favorites?.favorites)

  if (!favorites) {
    return null
  }

  return (
    <Row xxl={4} className="g-4">
      {favorites.map((favorit) => (
        <Col key={favorit.id}>
          <ContactCard contact={favorit} withLink />
        </Col>
      ))}
    </Row>
  )
}
