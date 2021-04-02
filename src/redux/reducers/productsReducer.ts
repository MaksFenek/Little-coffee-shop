import Constants from 'redux/constants'
import {
  IProductsReducerState,
  ReducerOptions,
  ProductsActionPayloads,
} from 'redux/types'

const initialState: IProductsReducerState[] = []

export default (
  state = initialState,
  {type, payload}: ReducerOptions<ProductsActionPayloads>,
): IProductsReducerState[] => {
  switch (type) {
    case Constants.GET_ALL_PRODUCTS:
      console.log(payload)

      return {...state, ...payload}
    default:
      return state
  }
}
