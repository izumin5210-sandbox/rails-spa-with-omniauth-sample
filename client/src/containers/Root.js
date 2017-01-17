/* @flow */
import React from 'react'
import { Provider } from 'react-redux'

const isProduction = process.env.NODE_ENV === 'production'
let DevTools = null
if (!isProduction) {
  DevTools = require('./DevTools').default
}

type Props = {
  router: ReactClass<*>,
  store: Object,
}

export default function Root ({ router, store }: Props) {
  return (
    <Provider store={store}>
      <div className="Root">
        { router }
        { DevTools != null && <DevTools /> }
      </div>
    </Provider>
  )
}
