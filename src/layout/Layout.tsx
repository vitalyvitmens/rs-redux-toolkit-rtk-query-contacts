import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Breadcrumbs } from 'src/components/Breadcrumbs/Breadcrumbs'
import { MainMenu } from 'src/components/MainMenu/MainMenu'
import { ComponentWithSuspense } from 'src/components/ComponentWithSuspense/ComponentWithSuspense'
import { Col, Container, Row } from 'react-bootstrap'

export const Layout = () => {
  const location = useLocation()
  const pathNames = location.pathname.split('/').filter((x) => x)

  return (
    <Container>
      <Row>
        <Col xxl={12}>
          <ComponentWithSuspense component={MainMenu} />
        </Col>
        <Col xxl={12}>
          <Suspense>
            <Breadcrumbs pathNames={pathNames} />
          </Suspense>
        </Col>
        <Col xxl={12}>
          <ComponentWithSuspense component={Outlet} />
        </Col>
        <Col xxl={12}>
          <footer></footer>
        </Col>
      </Row>
    </Container>
  )
}
