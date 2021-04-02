import {applyMiddleware, combineReducers} from 'redux'
import {createStore} from 'redux'

import createSagaMiddleware from 'redux-saga'
import userReducer from 'redux/reducers/userReducer'
import {helloSaga} from 'redux/sagas/userSaga'
import {RootReducerInterface} from 'redux/types'

const rootReducer = combineReducers<RootReducerInterface>({
  user: userReducer,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(helloSaga)

export default store
