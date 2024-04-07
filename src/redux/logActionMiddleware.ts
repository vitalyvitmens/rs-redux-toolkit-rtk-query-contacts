import { Middleware } from '@reduxjs/toolkit'
import { RootState } from './store'
import { logAction } from '../metrics/logAction'

export const logActionMiddleware: Middleware<{}, RootState> =
  (storeAPI) =>
  (next) =>
  (action): ReturnType<typeof next> => {
    if (typeof action === 'object' && action !== null && 'type' in action) {
      logAction(action)
    }
    return next(action)
  }
