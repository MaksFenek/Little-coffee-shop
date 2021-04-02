import {IProductsReducerState} from 'redux/types'
import {call, put, takeEvery} from 'redux-saga/effects'
import Constants from 'redux/constants'
import {getAllProducts} from 'api/firebase'
import {getAllProductsAction} from 'redux/actions/productsAction'

export function* workerGetAllProductsAsync() {
  try {
    const data: IProductsReducerState = yield call(getAllProducts)
    yield put(getAllProductsAction(data))
  } catch (error) {
    console.error(error)
  }
}

export function* watchGetAllProductsAsync() {
  yield takeEvery(Constants.GET_ALL_PRODUCTS_ASYNC, workerGetAllProductsAsync)
}
