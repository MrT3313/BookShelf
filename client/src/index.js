// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// REDUX
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";

    // Reducers
    import { rootReducer } from './redux/reducers'

// COMPONENTS
import App from './App.jsx';

// STORE ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// __MAIN__
    // Create Store
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk, logger))
    )

    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        document.getElementById('root')
    );