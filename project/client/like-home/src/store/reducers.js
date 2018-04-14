import C from '../constants.js'
import { combineReducers } from 'redux'

export const currentUser = (state = {}, action) =>
(action.type === C.SET_CURRENTUSER) ? action.payload : state

export default combineReducers({
  currentUser,
})
