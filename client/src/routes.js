/* @flow */
import React from 'react'
import { Match } from 'react-router'

import App from './containers/App'

export default [
  <Match
    component={App}
    key="App"
    pattern='/'
    exactly
  />,
]
