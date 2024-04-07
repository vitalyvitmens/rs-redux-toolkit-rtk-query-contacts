import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from 'src/types/common'

const NotFoundPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  }))
)

export default NotFoundPage
