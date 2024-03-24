import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Col, ListGroup, Row } from 'react-bootstrap'

interface BreadcrumbsProps {
  pathNames: string[]
}

export const Breadcrumbs = memo<BreadcrumbsProps>(({ pathNames }) => {
  return (
    <Row>
      <Col className={'mb-4'}>
        <ListGroup horizontal>
          <ListGroup.Item
            style={{
              boxShadow: '0 2px 5px black',
              background: 'bisque',
              fontWeight: '700',
              textShadow: '1px 1px 1px black',
            }}
          >
            <Link to={'/'}>Home</Link>{' '}
          </ListGroup.Item>
          {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`

            // Определяем, является ли текущий элемент последним в списке
            const isLast = index === pathNames.length - 1

            return (
              <ListGroup.Item
                key={routeTo}
                style={{
                  boxShadow: '0 2px 5px black',
                  background: 'bisque',
                  color: 'green',
                  fontWeight: '600',
                  textShadow: '1px 1px 1px black',
                }}
              >
                {isLast ? (
                  <span className={'active'}>{name}</span>
                ) : (
                  <Link to={routeTo} className={'link active'}>
                    {name}
                  </Link>
                )}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Col>
    </Row>
  )
})
