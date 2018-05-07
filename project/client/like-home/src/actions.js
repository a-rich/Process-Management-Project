import C from './constants'

export const setcurrentuser = (name, token) => ({
      type: C.SET_CURRENTUSER,
          payload: {name, token}
   })

export const setSearchResults = (searchResults) => ({
type: C.SET_SEARCHRESULTS,
    payload: {"searchResults":  searchResults}
})

export const setDetailResults = (detailResults) => ({
    type: C.SET_DETAILRESULTS,
        payload: {"detailResults":  detailResults}
    })

export const setCityData = (cityData) => ({
  type: C.SET_CITYDATA,
    payload: {"citydata":cityData}
})

export const setSearchDates = (startDate, endDate) => ({
    type: C.SET_SEARCHDATES,
      payload: {"startDate":startDate, "endDate":endDate}
  })

export const selectedHotel = (selectedHotel) => ({
    type: C.SET_SELECTEDHOTEL,
      payload: selectedHotel
})

export const addBooking = (hotel, startDate, endDate, price) => ({
    type: C.ADD_BOOKING,
      payload: { hotel: hotel, startDate: startDate, endDate: endDate, price: price }
})

export const cancelBooking = (hotel) => ({
    type: C.CANCEL_BOOKING,
      payload: {hotel: hotel}
})

export const updateBooking = (booking) => ({
    type: C.UPDATE_BOOKING,
      payload: booking
})

export const cancelAllBooking = () => ({
    type: C.CANCELALL_BOOKING
})

export const clearUser = () => ({
    type: C.CLEAR_CURRENTUSER
})