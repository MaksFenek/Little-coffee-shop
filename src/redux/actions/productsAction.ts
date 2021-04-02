import Constants from 'redux/constants'
import {Action, IProductsReducerState} from 'redux/types'

export const getAllProductsAsyncAction: Action = () => ({
  type: Constants.GET_ALL_PRODUCTS_ASYNC,
})

export const getAllProductsAction: Action<IProductsReducerState> = payload => ({
  type: Constants.GET_ALL_PRODUCTS,
  payload,
})
