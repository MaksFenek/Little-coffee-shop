import {Action, SetUserPayload, SetUserAsyncPayload} from 'redux/types'
import Constants from '../constants'

export const setUserAsyncAction: Action<SetUserAsyncPayload> = payload => ({
  type: Constants.SET_USER_ASYNC,
  payload,
})

export const setUserAction: Action<SetUserPayload> = payload => ({
  type: Constants.SET_USER,
  payload,
})
