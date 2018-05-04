import C from '../constants.js'
import { combineReducers } from 'redux'

export const currentUser = (state = {}, action) =>
(action.type === C.SET_CURRENTUSER) ? action.payload : state

export const searchResults = (state = {}, action) =>
(action.type === C.SET_SEARCHRESULTS) ? action.payload : state

export const detailResults = (state = {}, action) =>
(action.type === C.SET_DETAILRESULTS) ? action.payload : state

export default combineReducers({
  currentUser, searchResults, detailResults
})
