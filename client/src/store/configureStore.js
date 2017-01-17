/* @flow */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

import reducer from '../reducers'

const isProduction = process.env.NODE_ENV === 'production'

export default function configureStore (initialState: any) {
  const sagaMiddleware = createSagaMiddleware()

  let storeEnhancer

  if (isProduction) {
    storeEnhancer = applyMiddleware(sagaMiddleware)
  } else {
    const createLogger = require('redux-logger')
    const DevTools = require('../containers/DevTools').default
    storeEnhancer = compose(
      applyMiddleware(
        sagaMiddleware,
        createLogger(),
      ),
      DevTools.instrument(),
    )
  }

  const store = createStore(
    reducer,
    initialState,
    storeEnhancer,
  )

  // $FlowFixMe
  store.runSaga = sagaMiddleware.run
  // $FlowFixMe
  store.close = () => store.dispatch(END)

  return store
}
