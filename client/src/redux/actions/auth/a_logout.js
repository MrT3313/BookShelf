// __MAIN__
    // CREATE ACTION TYOES
    export const LOGOUT = 'LOGOUT'

    // ACTION
    export const a_logout = () => {
        return dispatch => {
            dispatch({ type: LOGOUT})
        }
    }