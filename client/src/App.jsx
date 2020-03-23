// IMPORTS
import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom'

// ACTION CREATORS
import { a_GETbook_lists } from './redux/actions/a_lists.js'

// STYLES
import './styles/index.css'

// COMPONENTS
// -- PRIVATE Routes -- //
import PrivateRoute from './components/PrivateRoute.js'
import Homepage from './views/homepage.jsx'

// -- OPEN Routes -- //
import Login from './views/login.jsx'
import Register from './views/register.jsx'

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
  }, [props])

  // Return
  return ( 
    <div className="App">
      {/* <Route exact path='/' theme={props.theme} component={Homepage} /> */}
      <PrivateRoute exact path='/' theme={props.theme} component={Homepage} />
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
        a_GETbook_lists,
    }
)(App)
