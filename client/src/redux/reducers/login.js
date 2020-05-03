const defaultState = {
    userName:'Berk',
    age: 25,
    isUserLoggedIn: false
}

const login = (state = defaultState, action) => {
    switch (action.type) {
        
        case 'USER_LOGGED_IN':
            return {
                ...state,
                userName:action.payload.userName,
                isUserLoggedIn: true
            }




        default:
            return state
    }
}

export default login