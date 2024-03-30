import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from 'src/types/common'

const Offline: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./Offline').then((module) => ({
    default: module.Offline,
  }))
)

export default Offline
