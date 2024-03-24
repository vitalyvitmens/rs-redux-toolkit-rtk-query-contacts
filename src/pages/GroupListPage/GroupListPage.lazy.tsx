import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types/common'

const GroupListPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./GroupListPage').then((module) => ({
    default: module.GroupListPage,
  }))
)

export default GroupListPage
