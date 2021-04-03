import Constants from 'redux/constants'
import {
  IProductsReducerState,
  ReducerOptions,
  ProductsActionPayloads,
} from 'redux/types'

const initialState: IProductsReducerState = {
  products: undefined,
  error: '',
}

export default (
  state = initialState,
  {type, payload}: ReducerOptions<ProductsActionPayloads>,
): IProductsReducerState => {
  switch (type) {
    case Constants.GET_ALL_PRODUCTS:
      return {...state, products: payload.data}

    case Constants.SET_PRODUCT_ERROR:
      return {...state, error: payload.error}

    default:
      return state
  }
}
