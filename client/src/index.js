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

// MATERIAL UI - Theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan, amber } from '@material-ui/core/colors'

// COMPONENTS
import App from './App.jsx';

// STORE ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// __MAIN__
    // -A- Create Store
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk, logger))
    )

    // -B- Styles
    const theme = createMuiTheme({
        palette: {
            primary: cyan,
            secondary: {
                // light: amber[200],
                main: amber[500],
                // dark: amber[900],
            }
        },
    })

    // -C- Render
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Router>
        </Provider>,
        document.getElementById('root')
    );