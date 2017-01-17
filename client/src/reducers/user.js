/* @flow */
import { handleActions } from 'redux-actions'

import {
  TOKEN_SET,
} from '../actions/user'

import type {
  SetTokenAction,
} from '../actions/user'

type State = {
  token: State;
}

const initialState = {}

export default handleActions({
  [TOKEN_SET]: (state: State, action: SetTokenAction) => ({
    ...state,
    token: action.payload.token,
  }),
}, initialState)
