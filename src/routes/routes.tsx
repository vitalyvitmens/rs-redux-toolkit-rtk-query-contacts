import { RouteObject } from 'react-router-dom'
import { RoutePaths } from './RoutePaths'
import Layout from '../layout/Layout.lazy'
import ContactListPage from '../pages/ContactListPage/ContactListPage.lazy'
import ContactPage from '../pages/ContactPage/ContactPage.lazy'
import GroupListPage from '../pages/GroupListPage/GroupListPage.lazy'
import GroupPage from '../pages/GroupPage/GroupPage.lazy'
import FavoritListPage from '../pages/FavoritListPage/FavoritListPage.lazy'
import Offline from 'src/pages/Offline/Offline.lazy'
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage.lazy'

export const routes: RouteObject[] = [
  {
    path: RoutePaths.Home,
    element: <Layout />,
    children: [
      { path: RoutePaths.Home, element: <ContactListPage /> },
      {
        path: RoutePaths.Contacts,
        children: [
          { path: RoutePaths.Contacts, element: <ContactListPage /> },
          { path: RoutePaths.Contact, element: <ContactPage /> },
        ],
      },
      {
        path: RoutePaths.Groups,
        children: [
          { path: RoutePaths.Groups, element: <GroupListPage /> },
          { path: RoutePaths.Group, element: <GroupPage /> },
        ],
      },
      { path: RoutePaths.Favorit, element: <FavoritListPage /> },
    ],
  },
  { path: RoutePaths.Offline, element: <Offline /> },
  { path: RoutePaths.NotFound, element: <NotFoundPage /> },
]
