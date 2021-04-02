import {Action} from 'redux/types'
import Constants from '../constants'

export const getUserAction: Action = () => ({
  type: Constants.GET_USER,
})
