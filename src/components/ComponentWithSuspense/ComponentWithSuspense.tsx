import { Suspense, ComponentType, ReactNode } from 'react'
import { NoProps } from '../../types/common'

interface ComponentProps {
  component: ComponentType<NoProps>
  fallback?: ReactNode
  [key: string]: unknown
}

export function ComponentWithSuspense({
  component: Component,
  fallback = <div>Loading...</div>,
  ...otherProps
}: ComponentProps) {
  return (
    <Suspense fallback={fallback}>
      <Component {...otherProps} />
    </Suspense>
  )
}
