import Constants from './constants'

export type RootActionPayloads = {}

export type Payloads = RootActionPayloads

export interface IRootReducerState {
  user: string
}

export interface Action<T = string | number | undefined> {
  (payload?: T): {type: Constants; payload?: T}
}

export interface ReducerOptions<T = Payloads | undefined> {
  type: Constants
  payload?: T
}

export interface IRootReducerState {
  user: string
}
