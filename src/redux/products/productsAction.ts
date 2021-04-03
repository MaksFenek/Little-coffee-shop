import {ProductsCollection} from 'GeneralTypes'
import Constants from 'redux/constants'
import {Action} from 'redux/types'

export const getAllProductsAsyncAction: Action = () => ({
  type: Constants.GET_ALL_PRODUCTS_ASYNC,
})

export const getAllProductsAction: Action<{
  data: ProductsCollection[]
}> = payload => ({
  type: Constants.GET_ALL_PRODUCTS,
  payload,
})

export const setProductErrorAction: Action<{error: string}> = payload => ({
  type: Constants.SET_PRODUCT_ERROR,
  payload,
})
