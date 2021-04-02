import Constants from './constants'

//===== General Types =====
export interface IUserData {
  readonly email: string
  readonly password: string
  readonly name: string
}

//===== Action Types =====

export interface Action<T = string | number | undefined> {
  (payload: T): ActionObject<Constants, T>
}

export interface ActionObject<Type = string, Payload = unknown> {
  type: Type
  payload: Payload
}

export type UserActionPayloads = SetUserAsyncPayload | SetUserPayload

export interface SetUserAsyncPayload extends IUserData {}
export interface SetUserPayload extends IUserData {
  readonly uid: string
}

export type Payloads = UserActionPayloads
//===== Reducer Types =====

export interface ReducerOptions<T = Payloads> {
  readonly type: Constants
  readonly payload?: T
}

export interface RootReducerInterface {
  readonly user: IUserReducerState
}

export interface IUserReducerState extends IUserData {
  readonly uid: string
}
