import { Dispatch, SetStateAction } from 'react'

export type State<TState> = [TState, Dispatch<SetStateAction<TState>>]

export type NoProps = Record<string, never>
