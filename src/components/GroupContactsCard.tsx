import { memo } from 'react'
import { Link } from 'react-router-dom'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
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
          border: '1px solid bisque',
          background: 'bisque',
          boxShadow: '-4px 3px 8px black',
        }}
      >
        <Card.Header
          style={{
            fontWeight: '700',
            boxShadow: '0 1px 5px black',
            textShadow: '1px 1px 1px black',
          }}
        >
          {withLink ? <Link to={`/groups/${id}`}>{name}</Link> : name}
        </Card.Header>
        <Card.Body style={{ color: 'green', fontWeight: '600' }}>
          <div className="row-truncate">{description}</div>
        </Card.Body>
        <Card.Img
          style={{ boxShadow: '0 -2px 5px black' }}
          variant="top"
          src={photo}
        />
        <Card.Footer style={{ color: 'red', textShadow: '-1px 1px 1px black' }}>
          Contacts: {contactIds.length}
        </Card.Footer>
      </Card>
    )
  }
)
