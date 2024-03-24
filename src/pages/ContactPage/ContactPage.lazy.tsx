
import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types/common'

const ContactPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./ContactPage').then((module) => ({
    default: module.ContactPage,
  }))
)

export default ContactPage
