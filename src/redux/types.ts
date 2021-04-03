import {ProductsCollection} from 'GeneralTypes'
import Constants from './constants'

//===== General Types =====
export interface IUserData {
  readonly email: string
  readonly password: string
  readonly name: string
}

//===== Action Types =====

export interface Action<T = string | number | undefined> {
  (payload?: T): ActionObject<Constants, T>
}

export interface ActionObject<Type = string, Payload = unknown> {
  readonly type: Type
  readonly payload?: Payload
}

export type UserActionPayloads = Readonly<SetUserAsyncPayload | SetUserPayload>
export type ProductsActionPayloads = Readonly<{
  data: ProductsCollection[]
  error: string
}>

export interface SetUserAsyncPayload extends IUserData {}
export interface SetUserPayload extends IUserData {
  readonly uid: string
}

export type Payloads = Readonly<UserActionPayloads | ProductsActionPayloads>

//===== Reducer Types =====
export interface ReducerOptions<T = Payloads> {
  readonly type: Constants
  readonly payload: T
}

export interface RootReducerInterface {
  readonly user: IUserReducerState
  readonly products: IProductsReducerState
}

export interface IUserReducerState extends IUserData {
  readonly uid: string
}

export interface IProductsReducerState {
  products: ProductsCollection[] | []
  error: string
}
