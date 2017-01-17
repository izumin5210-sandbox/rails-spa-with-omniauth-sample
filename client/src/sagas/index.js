/* @flow */
import { fork } from 'redux-saga/effects'
import type { IOEffect } from 'redux-saga/effects'

import userSaga from './user'

export default function* (): Generator<IOEffect, *, *> {
  yield fork(userSaga)
}
