import { Dispatch } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { ProjectActions } from './actions'

export const useAppDispatch = useDispatch<Dispatch<ProjectActions>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
