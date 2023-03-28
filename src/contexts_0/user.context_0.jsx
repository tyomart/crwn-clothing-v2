import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";
import { createAction } from "../utils/reducer.utils";
export const UserContext = createContext ({

    setCurrentUser: ()=> null,
    currentUser:null,
});

export const USER_ACTIONS_TYPE = {
    SET_CURRENT_USER:'SET_CURRENT_USER'
}

export const userReducer = (state, action) => {

    console.log('dispatched');
    console.log(action);

    const { type, payload } = action;
    switch(type) {

        case USER_ACTIONS_TYPE.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default:
            
                throw new Error(`Unhandled type ${type} in UserReducer`)   
    }   
}

const INTITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ( {children} ) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INTITIAL_STATE ) // {currentUser} = state
    console.log('cur_User_obj ',currentUser);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTIONS_TYPE.SET_CURRENT_USER,user))
    }
     
    const value = { currentUser,setCurrentUser };
    

    // useEffect(( ) => {
    //     const unsubscribe = () => onAuthStateChangedListener((user) =>{
    //         if (user) {
    //             createUserDocumentFromAuth(user);
    //         }
    //         setCurrentUser(user);
    //     })

    //     return unsubscribe
    // }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

};