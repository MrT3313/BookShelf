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
import { cyan, blueGrey } from '@material-ui/core/colors'

// COMPONENTS
import App from './App.jsx';

// MIDDLEWARE
const middlewares = [];


// STORE ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// __MAIN__
    // -A- Create Store
    let store = undefined
    if (process.env.NODE_ENV === `development`) {
        store = createStore(
            rootReducer,
            composeEnhancers(applyMiddleware(thunk, logger))
        )
    } else {
        store = createStore(
            rootReducer,
            composeEnhancers(applyMiddleware(thunk))
        )
    }

    // -B- Styles
    const theme = createMuiTheme({
        palette: {
            primary: cyan,
            secondary: {
                main: blueGrey[900]
            },
        },
        overrides: {
            MuiInputLabel: {
                root: {
                    color: '#01BCD4',  // Hack to use Cyan...
                }
            },
            MuiSelect: {
                // root: {
                //     color: 'white',
                // }
            }
            // MuiSelect: {
            //     root: {
            //         color: 'white '
            //     }
            // }
        }
    })
    // console.log(theme)

    // -C- Render
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <App theme={theme}/>
                </ThemeProvider>
            </Router>
        </Provider>,
        document.getElementById('root')
    );