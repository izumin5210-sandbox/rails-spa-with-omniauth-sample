/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux' // eslint-disable-line

import Authenticator from './Authenticator'

type QueryParams = {
  token?: string
}

type RequiredProps = {
  location: {
    query?: QueryParams
  }
}

type InjectedProps = {
  user: Object,
}

type Props = RequiredProps & InjectedProps

const connector: Connector<RequiredProps, Props> = connect(
  (store: any) => ({
    user: store.user,
  }),
)

function App ({ location, user }: Props) {
  return (
    <main className='App' >
      <Authenticator {...{ location }} />
      { user.token == null &&
        <ul>
          <li><a href='/auth/github'>{'Sign in as GitHub user'}</a></li>
        </ul>
      }
      { user.token != null &&
        <p>{'Signed in'}</p>
      }
    </main>
  )
}

export default connector(App)
