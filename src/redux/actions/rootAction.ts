import {Action, SetUserPayload} from 'redux/types'
import Constants from '../constants'
export const setUserAction: Action<SetUserPayload> = payload => ({
  type: Constants.SET_USER_ASYNC,
  payload,
})
