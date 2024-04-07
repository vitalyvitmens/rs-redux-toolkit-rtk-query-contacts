import { AnyAction } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from './store'

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, AnyAction>
>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
