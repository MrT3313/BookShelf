// REACT 
import React from 'react'
import {Route, Redirect, withRouter } from 'react-router'
// REDUX
import { connect } from 'react-redux'
// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //
const PrivateRoute = ({ component: Component, token, ...rest }) => {
console.log('PRIVATE ROUTE')
return (
    <Route
        {...rest}
        render={props => 
            token ? <Component {...props} /> : <Redirect to='/login' />
        }
    />
)
}
// MAP STATE TO PROPS
const mstp = state => {
return {
    token: localStorage.getItem('Authorization')
}
}
// CONNECT
export default withRouter(
    connect(
        mstp,
        {}
    )(PrivateRoute)
)