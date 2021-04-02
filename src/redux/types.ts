import Constants from './constants'

export type UserActionPayloads = {}

export interface SetUserPayload extends IUserReducerState {}

export type Payloads = UserActionPayloads

export interface RootReducerInterface {
  readonly user: IUserReducerState
}

export interface IUserReducerState {
  readonly email: string
  readonly password: string
  readonly name: string
  readonly username: string
}

export interface Action<T = string | number | undefined> {
  (payload?: T): ActionObject<Constants, T>
}

export interface ActionObject<Type = string, Payload = unknown> {
  type: Type
  payload?: Payload
}

export interface ReducerOptions<T = Payloads> {
  readonly type: Constants
  readonly payload?: T
}
