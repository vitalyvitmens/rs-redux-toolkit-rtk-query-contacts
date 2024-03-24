import { RouteObject } from 'react-router-dom'
import Layout from './layout/Layout.lazy'
import ContactListPage from './pages/ContactListPage/ContactListPage.lazy'
import ContactPage from './pages/ContactPage/ContactPage.lazy'
import GroupListPage from './pages/GroupListPage/GroupListPage.lazy'
import GroupPage from './pages/GroupPage/GroupPage.lazy'
import FavoritListPage from './pages/FavoritListPage/FavoritListPage.lazy'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <ContactListPage /> },
      {
        path: '/contact',
        children: [
          { path: '/contact', element: <ContactListPage /> },
          { path: ':contactId', element: <ContactPage /> },
        ],
      },
      {
        path: '/groups',
        children: [
          { path: '/groups', element: <GroupListPage /> },
          { path: ':groupId', element: <GroupPage /> },
        ],
      },
      { path: '/favorit', element: <FavoritListPage /> },
    ],
  },
  // { path: '/login', element: <LoginPage /> },
  // { path: '/register', element: <RegisterPage /> },
  // { path: '/offline', element: <Offline /> },
]
