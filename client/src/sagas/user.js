/* @flow */
import { fork, put, takeEvery } from 'redux-saga/effects'
import type { IOEffect, PutEffect } from 'redux-saga/effects'

import assert from 'power-assert'

import * as Actions from '../actions/user'
import type { SetTokenAction } from '../actions/user'

const KEY_USER_TOKEN = 'user:token'

function* loadToken (): Generator<PutEffect, *, *> {
  const token = localStorage.getItem(KEY_USER_TOKEN)
  if (token != null) {
    yield put(Actions.setToken(token))
  }
}

function* setToken ({ payload }: SetTokenAction): Generator<IOEffect, *, *> {
  const { token } = payload
  assert(token != null)
  localStorage.setItem(KEY_USER_TOKEN, token)
}

function* watchLoadToken (): Generator<IOEffect, *, *> {
  yield takeEvery(Actions.TOKEN_LOAD, loadToken)
}

function* watchSetToken (): Generator<IOEffect, *, *> {
  yield takeEvery(Actions.TOKEN_SET, setToken)
}

export default function* (): Generator<IOEffect, *, *> {
  yield [
    fork(watchLoadToken),
    fork(watchSetToken),
  ]
}
