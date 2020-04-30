// REACT 
import React from 'react'
import {Route, Redirect, withRouter } from 'react-router'
// REDUX
import { connect } from 'react-redux'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

const PrivateRoute = ({ component: Component, redux_token, ...rest }) => {
    // Return 
    return (
        <Route
            {...rest}
            render={props => 
                redux_token ? <Component {...props} /> : <Redirect to='/login' />
            }
        />
    )
}
// MAP STATE TO PROPS
const mstp = state => {
return {
    redux_token: state.r_auth.token
}
}
// CONNECT
export default withRouter(
    connect(
        mstp,
        {}
    )(PrivateRoute)
)