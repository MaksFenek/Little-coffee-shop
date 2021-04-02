import Constants from './constants'

export type UserActionPayloads = {}

export type Payloads = UserActionPayloads

export interface RootReducerInterface {
  user: IUserReducerState
}

export interface IUserReducerState {
  user: string
}

export interface Action<T = string | number | undefined> {
  (payload?: T): {type: Constants; payload?: T}
}

export interface ReducerOptions<T = Payloads | undefined> {
  type: Constants
  payload?: T
}
