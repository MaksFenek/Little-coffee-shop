import {call, put, takeEvery, SagaReturnType} from 'redux-saga/effects'
import Constants from 'redux/constants'
import {getAllProducts} from 'api/firebase'
import {
  getAllProductsAction,
  setProductErrorAction,
} from 'redux/actions/productsAction'

type getAllProductsType = SagaReturnType<typeof getAllProducts>

export function* workerGetAllProductsAsync() {
  try {
    const {data, error}: getAllProductsType = yield call(getAllProducts)
    if (error) {
      throw new Error(error)
    }
    yield put(getAllProductsAction({data: data!}))
  } catch (error) {
    console.error(error)
    yield put(setProductErrorAction({error}))
  }
}

export function* watchGetAllProductsAsync() {
  yield takeEvery(Constants.GET_ALL_PRODUCTS_ASYNC, workerGetAllProductsAsync)
}
