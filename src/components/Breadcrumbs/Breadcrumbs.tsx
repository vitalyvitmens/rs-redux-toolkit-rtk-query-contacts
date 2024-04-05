import { memo } from 'react'
import { Link } from 'react-router-dom'
import { RoutePaths } from 'src/routes/RoutePaths'
import { Colors } from 'src/constants/colors'
import { generateBreadcrumbItems } from 'src/utils/breadcrumbs'
import { Col, ListGroup, Row } from 'react-bootstrap'

interface BreadcrumbsProps {
  pathNames: string[]
}

export const Breadcrumbs = memo<BreadcrumbsProps>(({ pathNames }) => {
  const breadcrumbItems = generateBreadcrumbItems(pathNames).map(
    ({ name, routeTo, isLast }) => (
      <ListGroup.Item
        key={routeTo}
        style={{
          boxShadow: `0 2px 5px ${Colors.black}`,
          background: Colors.bisque,
          color: isLast ? Colors.black : Colors.green,
          fontWeight: '600',
          textShadow: `1px 1px 1px ${Colors.black}`,
        }}
      >
        {isLast ? (
          <span className="active">{name}</span>
        ) : (
          <Link to={routeTo} className="link active">
            {name}
          </Link>
        )}
      </ListGroup.Item>
    )
  )

  return (
    <Row>
      <Col className="mb-4">
        <ListGroup horizontal>
          <ListGroup.Item
            style={{
              boxShadow: `0 2px 5px ${Colors.black}`,
              background: Colors.bisque,
              fontWeight: '700',
              textShadow: `1px 1px 1px ${Colors.black}`,
            }}
          >
            <Link to={RoutePaths.Home}>Home</Link>
          </ListGroup.Item>
          {breadcrumbItems}
        </ListGroup>
      </Col>
    </Row>
  )
})
