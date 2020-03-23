// REACT 
import React from 'react'
import {Route, Redirect, withRouter } from 'react-router'
// REDUX
import { connect } from 'react-redux'
// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //
// const PrivateRoute = ({ component: Component, token, ...rest }) => {
const PrivateRoute = ({ component: Component, redux_token, ...rest }) => {
console.log('PRIVATE ROUTE')
console.log(redux_token)
return (
    <Route
        {...rest}
        render={props => 
            // token ? <Component {...props} /> : <Redirect to='/login' />
            redux_token ? <Component {...props} /> : <Redirect to='/login' />
        }
    />
)
}
// MAP STATE TO PROPS
const mstp = state => {
return {
    redux_token: state.r_login.token
}
}
// CONNECT
export default withRouter(
    connect(
        mstp,
        {}
    )(PrivateRoute)
)