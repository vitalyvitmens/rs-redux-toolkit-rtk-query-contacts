import { Link } from 'react-router-dom'
import { RoutePaths } from '../../routes/RoutePaths'
import { Colors } from 'src/constants/colors'
import { Container, Alert, Button, Row, Col } from 'react-bootstrap'

export const Offline = () => {
  return (
    <Container
      className="mt-5 mx-auto text-center"
      style={{ maxWidth: '340px' }}
    >
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 style={{ color: Colors.bootstrapBlue }}>OFFLINE</h1>
          <Alert variant="danger" className="mt-3">
            No internet connection
          </Alert>
          <p
            className="mb-3"
            style={{ fontSize: '16px', fontWeight: '600', color: Colors.red }}
          >
            Sorry this page isn't available offline
          </p>
          <Button variant="primary" className="mb-3">
            <Link
              to={RoutePaths.Home}
              style={{ color: Colors.white, textDecoration: 'none' }}
            >
              Back To Home Page
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
