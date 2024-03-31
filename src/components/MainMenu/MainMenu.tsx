import { Link } from 'react-router-dom'
import { RoutePaths } from 'src/routes/RoutePaths'
import { Colors } from 'src/constants/colors'
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap'

export const MainMenu = () => {
  return (
    <Navbar bg={Colors.bisque} expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            to={RoutePaths.Home}
            style={{
              color: Colors.blue,
              fontWeight: '700',
              textShadow: `-2px 1px 1px ${Colors.pureWhite}`,
              textDecoration: 'none',
            }}
          >
            <h1>Книга контактов</h1>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavItem>
            <Link
              to={RoutePaths.Groups}
              style={{
                color: Colors.red,
                fontWeight: '700',
                textShadow: `1px 1px 1px ${Colors.black}`,
                textDecoration: 'none',
              }}
            >
              Группы
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to={RoutePaths.Favorit}
              style={{
                color: Colors.red,
                fontWeight: '700',
                textShadow: `1px 1px 1px ${Colors.black}`,
                textDecoration: 'none',
              }}
            >
              Избранное
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}
