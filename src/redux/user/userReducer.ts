import Constants from 'redux/constants'
import {
  IUserReducerState,
  ReducerOptions,
  UserActionPayloads,
} from 'redux/types'

const initialState: IUserReducerState = {
  email: '',
  password: '',
  name: '',
  uid: '',
}

export default (
  state = initialState,
  {type, payload}: ReducerOptions<UserActionPayloads>,
): IUserReducerState => {
  switch (type) {
    case Constants.SET_USER:
      return {...state, ...payload}
    default:
      return state
  }
}
