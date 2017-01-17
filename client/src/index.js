/* @flow */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'

import './index.css'

import routes from './routes'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import rootSaga from './sagas'

const initialState = {}
const store = configureStore(initialState)
// $FlowFixMe
store.runSaga(rootSaga)

const rootEl = document.getElementById('container')

const router = (
  <BrowserRouter>
    <div className="Router">
      { routes }
    </div>
  </BrowserRouter>
)

render(
  <Root
    {...{ router, store }}
  />,
  rootEl,
)
