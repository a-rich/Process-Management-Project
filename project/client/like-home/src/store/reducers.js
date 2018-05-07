import C from '../constants.js'
import { combineReducers } from 'redux'

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case C.SET_CURRENTUSER:
      return action.payload
    case C.CLEAR_CURRENTUSER:
      return {}
      default:
      return state
  }
}

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

export const rewards = (state = 0, action) => {
  switch (action.type) {
    case C.ADD_REWARD:
    return state+action.payload
    case C.REDEEM_REWARD:
    return state-action.payload
    default:
    return state
  }
}

export const reservations = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_BOOKING:
    return [
      ...state, action.payload
    ]

    case C.UPDATE_BOOKING:
    return state;
    case C.CANCEL_BOOKING:
    return state.filter(reservation => {return reservation.id !== action.payload.id});
    case C.CANCELALL_BOOKING:
    return [];
    default:
    return state;
  }
}

export const selectedHotelClientPrice = (state = 0, action) => 
  (action.type === C.SET_SELECTED_HOTEL_CLIENT_PRICE) ? (action.payload > 0 ? action.payload : 0) : state


export default combineReducers({
  currentUser, searchResults, detailResults, cityData, searchDates, selectedHotel, reservations, rewards,selectedHotelClientPrice
})
