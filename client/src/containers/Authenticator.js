/* @flow */
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux' // eslint-disable-line

import { setToken, loadToken } from '../actions/user'

type QueryParams = {
  token?: string
}

type RequiredProps = {
  location: {
    query?: QueryParams
  },
}

type InjectedProps = {
  user: Object,
  loadToken: () => void,
  setToken: string => void,
}

type Props = InjectedProps & RequiredProps

const connector: Connector<RequiredProps, Props> = connect(
  ({ user }: any) => ({
    user,
  }),
  (dispatch: (action: any) => any) => ({
    loadToken: () => dispatch(loadToken()),
    setToken: token => dispatch(setToken(token)),
  })
)

class Authenticator extends Component<void, Props, void> {
  componentDidMount () {
    this.props.loadToken()
  }

  shouldComponentUpdate () {
    // FIXME
    return true
  }

  render () {
    const { location, user, setToken } = this.props
    const { query } = location

    if (user.token == null && query != null && query.token != null) {
      setToken(query.token)
      return (
        <Redirect to='/' />
      )
    }

    return null
  }
}

export default connector(Authenticator)
