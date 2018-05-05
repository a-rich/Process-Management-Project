import C from '../constants.js'
import { combineReducers } from 'redux'

export const currentUser = (state = {}, action) =>
(action.type === C.SET_CURRENTUSER) ? action.payload : state

export const searchResults = (state = {}, action) =>
(action.type === C.SET_SEARCHRESULTS) ? action.payload : state

export const detailResults = (state = {}, action) =>
(action.type === C.SET_DETAILRESULTS) ? action.payload : state

export const cityData = (state = {}, action) =>
(action.type === C.SET_CITYDATA)? action.payload : state

export const searchDates = (state = {}, action) =>
(action.type === C.SET_SEARCHDATES)? action.payload : state

export const selectedHotel = (state = {}, action) =>
(action.type === C.SET_SELECTEDHOTEL)? action.payload : state

export const reservations = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_BOOKING:
    return [
      ...state, action.payload
    ]

    case C.UPDATE_BOOKING:

    case C.CANCEL_BOOKING:
    return state.filter(reservation => {return reservation.id !== action.payload});
    break;
    default:
    return state;
  }
}

export default combineReducers({
  currentUser, searchResults, detailResults, cityData, searchDates, selectedHotel, reservations
})

