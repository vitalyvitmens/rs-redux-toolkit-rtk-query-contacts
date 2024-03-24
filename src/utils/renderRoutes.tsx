import { Route, RouteObject } from 'react-router-dom'

// Функция для рекурсивного создания маршрутов
export const renderRoutes = (routes: RouteObject[], basePath = '') => {
  return routes.map((route, index) => {
    const path = `${basePath}${route?.path}`
    const key = path || index

    if (route.children) {
      return (
        <Route key={key} path={route?.path} element={route?.element}>
          {renderRoutes(route?.children, path)}
        </Route>
      )
    } else {
      return <Route key={key} path={route?.path} element={route?.element} />
    }
  })
}
