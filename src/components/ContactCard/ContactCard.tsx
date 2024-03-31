import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RoutePaths } from 'src/routes/RoutePaths'
import { AddToFavorites } from '../AddToFavorites/AddToFavorites'
import { RemoveFromFavorites } from '../RemoveFromFavorites/RemoveFromFavorites'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Colors } from 'src/constants/colors'
import { Card, ListGroup } from 'react-bootstrap'
import '../components.css'

interface ContactCardProps {
  contact: ContactDto
  withLink?: boolean
}

export const ContactCard = memo<ContactCardProps>(({ contact, withLink }) => {
  const { photo, id, name, phone, birthday, address } = contact
  const location = useLocation()

  return (
    <Card
      key={id}
      style={{
        textShadow: `1px 1px 1px ${Colors.black}`,
        border: `1px solid Colors.bisque`,
        boxShadow: `0 -2px 5px ${Colors.black}`,
      }}
    >
      <Card.Img variant="top" src={photo} />
      <Card.Body style={{ borderRadius: '5px', background: Colors.bisque }}>
        <Card.Body
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Card.Title
            style={{
              color: Colors.blue,
            }}
          >
            {withLink ? (
              <Link
                style={{
                  fontWeight: '700',
                  textShadow: `1px 1px 1px ${Colors.black}`,
                }}
                to={`${RoutePaths.Contacts}/${id}`}
              >
                <div className="text-truncate">{name}</div>
              </Link>
            ) : (
              name
            )}
          </Card.Title>
          {location.pathname === RoutePaths.Favorit ? (
            <RemoveFromFavorites id={contact.id} />
          ) : (
            <AddToFavorites contact={contact} />
          )}
        </Card.Body>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item
              style={{
                background: Colors.bisque,
                boxShadow: `0 -2px 5px ${Colors.black}`,
              }}
            >
              <Link to={`tel:${phone}`} target="_blank">
                {phone}
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                color: Colors.green,
                fontWeight: '600',
                background: Colors.bisque,
                boxShadow: `0 -2px 5px ${Colors.black}`,
              }}
            >
              {birthday}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                color: Colors.red,
                textShadow: `-1px 1px 1px ${Colors.black}`,
                background: Colors.bisque,
                boxShadow: `0 -2px 5px ${Colors.black}`,
              }}
            >
              {address}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card.Body>
    </Card>
  )
})
