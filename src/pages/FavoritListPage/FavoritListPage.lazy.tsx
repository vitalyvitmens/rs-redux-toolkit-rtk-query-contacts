import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types/common'

const FavoritListPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./FavoritListPage').then((module) => ({
    default: module.FavoritListPage,
  }))
)

export default FavoritListPage
