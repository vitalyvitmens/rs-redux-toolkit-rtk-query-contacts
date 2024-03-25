import { AnyAction, Middleware } from 'redux'
import { RootState } from './store'
import { logAction } from '../metrics/logAction'

export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action: AnyAction) {
      logAction(action)
      next(action)
    }
  }
}
