// IMPORTS
import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom'

// ACTION CREATORS
import { a_getBookLists } from './redux/actions/GET/a_getBookLists.js'

// STYLES
import './styles/index.css'

// COMPONENTS
// -- PRIVATE Routes -- //
import PrivateRoute from './components/PrivateRoute.js'
import Homepage from './views/homepage.jsx'
import Account from './views/account.jsx'
import Profile from './views/profile.jsx'

// -- OPEN Routes -- //
import Login from './views/login.jsx'
import Register from './views/register.jsx'

// __MAIN__
function App(props) {
// console.log('APP PROPS: ', props)
const { a_getBookLists } = props
// -- //
  // useEffect
  useEffect(() => {
    async function get_lists() {
      await a_getBookLists()
    }
    get_lists()
  }, [props])

  // Return
  return ( 
    <div className="App">
      {/* <Route exact path='/' theme={props.theme} component={Homepage} /> */}
      <PrivateRoute exact path='/' theme={props.theme} component={Homepage} />
      <PrivateRoute exact path='/account' theme={props.theme} component={Account} />
      <PrivateRoute exact path='/profile' theme={props.theme} component={Profile} />

      <Route exact path='/login' theme={props.theme} component={Login} />
      <Route exact path='/register' theme={props.theme} component={Register} />
    </div>
  );
}

// MAP STATE TO PROPS
const mstp = state => {
  return {
    
  }
}

// CONNECT & EXPORT
export default connect(
  mstp,
    {
      a_getBookLists,
    }
)(App)
