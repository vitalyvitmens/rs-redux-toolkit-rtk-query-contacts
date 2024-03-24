import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types/common'

const ContactListPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./ContactListPage').then((module) => ({
    default: module.ContactListPage,
  }))
)

export default ContactListPage
