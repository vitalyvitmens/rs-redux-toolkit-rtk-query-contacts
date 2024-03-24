import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../types/common'

const Layout: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./Layout').then((module) => ({
    default: module.Layout,
  }))
)

export default Layout
