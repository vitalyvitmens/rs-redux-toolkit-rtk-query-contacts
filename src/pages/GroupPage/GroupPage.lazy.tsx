import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types/common'

const GroupPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./GroupPage').then((module) => ({
    default: module.GroupPage,
  }))
)

export default GroupPage
