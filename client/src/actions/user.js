/* @flow */
import { createAction } from 'redux-actions'

export const TOKEN_LOAD = 'user:loadToken'
export const TOKEN_SET = 'user:setToken'

type SetTokenPayload = { token: string }
export type SetTokenAction = {
  type: string,
  payload: SetTokenPayload,
}

export const setToken = createAction(TOKEN_SET, token => ({ token }))
export const loadToken = createAction(TOKEN_LOAD)
