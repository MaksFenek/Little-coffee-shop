import {
  IRootReducerState,
  ReducerOptions,
  RootActionPayloads,
} from 'redux/types'
import Constants from '../constants'

const initialState: IRootReducerState = {
  user: 'user',
}

export default (
  state = initialState,
  {type, payload}: ReducerOptions<RootActionPayloads>,
): IRootReducerState => {
  switch (type) {
    case Constants.GET_USER:
      return {...state, user: 'hello'}
    default:
      return state
  }
}
