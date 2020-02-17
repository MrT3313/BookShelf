// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

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

    // Render
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );