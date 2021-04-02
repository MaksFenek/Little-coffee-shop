import {
  IUserReducerState,
  ReducerOptions,
  UserActionPayloads,
} from 'redux/types'

const initialState: IUserReducerState = {
  user: '',
}

export default (
  state = initialState,
  {type, payload}: ReducerOptions<UserActionPayloads>,
): IUserReducerState => {
  switch (type) {
    default:
      return state
  }
}
