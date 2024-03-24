import { Container, Nav, Navbar } from 'react-bootstrap'

export const MainMenu = () => {
  return (
    <Navbar bg="bisque" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h1
            style={{
              color: '#0000FF',
              fontWeight: '700',
              textShadow: '-2px 1px 1px #fff',
            }}
          >
            Книга контактов
          </h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            style={{
              color: '#FF0000',
              fontWeight: '700',
              textShadow: '1px 1px 1px black',
            }}
            href="/groups"
          >
            Группы
          </Nav.Link>
          <Nav.Link
            style={{
              color: '#FF0000',
              fontWeight: '700',
              textShadow: '1px 1px 1px black',
            }}
            href="/favorit"
          >
            Избранное
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
