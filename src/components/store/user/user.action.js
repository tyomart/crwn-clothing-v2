import { USER_ACTIONS_TYPE } from "./user.types";
import { createAction } from "../../../utils/reducer.utils"

export const setCurrentUser = (user) => 
    createAction(USER_ACTIONS_TYPE.SET_CURRENT_USER, user)
