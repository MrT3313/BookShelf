// IMPORTS
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom'

// ACTION CREATORS
import { a_GETbook_lists } from './redux/actions/a_lists.js'

// COMPONENTS
// -- OPEN Routes -- //
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import Homepage from './views/homepage.jsx'

// -- PROTECTED Routes -- //
  // 1. PROFILE

// __MAIN__
function App(props) {
console.log('APP PROPS: ', props)
// -- //
  // useEffect
  useEffect(() => {
    async function get_lists() {
      await props.a_GETbook_lists()
    }
    get_lists()
  }, [])

  // Return
  return ( 
    <div className="App">
      <Route exact path='/' theme={props.theme} component={Homepage} />
      {/* <Route exact path='/login' theme={props.theme} component={Login} />
      <Route exact path='/register' theme={props.theme} component={Register} /> */}
    </div>
  );
}

// CONNECT & EXPORT
export default connect(
    null,
    {
        a_GETbook_lists,
    }
)(App)
