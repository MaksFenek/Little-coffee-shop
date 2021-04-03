import {ActionObject, SetUserPayload} from 'redux/types'
import {put, takeEvery} from 'redux-saga/effects'
import Constants from 'redux/constants'

export function* workerSetUserAsync(action: ActionObject<SetUserPayload>) {
  yield put({type: Constants.SET_USER, payload: action.payload})
}

export function* watchSetUserAsync() {
  yield takeEvery(Constants.SET_USER_ASYNC, workerSetUserAsync)
}
