import { memo } from 'react'
import { Link } from 'react-router-dom'
import { RoutePaths } from 'src/routes/RoutePaths'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { Colors } from 'src/constants/colors'
import { Card } from 'react-bootstrap'
import './components.css'

interface GroupContactsCardProps {
  groupContacts: GroupContactsDto
  withLink?: boolean
}

export const GroupContactsCard = memo<GroupContactsCardProps>(
  ({
    groupContacts: { id, name, description, photo, contactIds },
    withLink,
  }) => {
    return (
      <Card
        key={id}
        style={{
          marginBottom: '1.5rem',
          border: `1px solid Colors.bisque`,
          background: Colors.bisque,
          boxShadow: `-4px 3px 8px ${Colors.black}`,
        }}
      >
        <Card.Header
          style={{
            fontWeight: '700',
            boxShadow: `0 1px 5px ${Colors.black}`,
            textShadow: `1px 1px 1px ${Colors.black}`,
          }}
        >
          {withLink ? (
            <Link to={`${RoutePaths.Groups}/${id}`}>{name}</Link>
          ) : (
            name
          )}
        </Card.Header>
        <Card.Body style={{ color: Colors.green, fontWeight: '600' }}>
          <div className="row-truncate">{description}</div>
        </Card.Body>
        <Card.Img
          style={{ boxShadow: `0 -2px 5px ${Colors.black}` }}
          variant="top"
          src={photo}
        />
        <Card.Footer
          style={{
            color: Colors.red,
            textShadow: `-1px 1px 1px ${Colors.black}`,
          }}
        >
          Contacts: {contactIds.length}
        </Card.Footer>
      </Card>
    )
  }
)
