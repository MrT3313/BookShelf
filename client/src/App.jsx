// IMPORTS
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'

// COMPONENTS
// -- OPEN Routes -- //
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import Homepage from './views/homepage.jsx'

// -- PROTECTED Routes -- //
  // 1. PROFILE

// __MAIN__
function App(props) {
  const {theme} = props
  return ( 
    <div className="App">
      <Route exact path='/' theme={props.theme} component={Homepage} />
      {/* <Route exact path='/login' theme={props.theme} component={Login} />
      <Route exact path='/register' theme={props.theme} component={Register} /> */}
    </div>
  );
}

// EXPORTS
export default App;
