import C from './constants'

export const setcurrentuser = (name, token) => ({
      type: C.SET_CURRENTUSER,
          payload: {"currentUser":  {name, token}}
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
      payload: {selectedHotel}
})

export const addBooking = (hotel) => ({
    type: C.ADD_BOOKING,
      payload: { hotel }
})

export const cancelBooking = (booking) => ({
    type: C.CANCEL_BOOKING,
      payload: {booking}
})

export const updateBooking = (booking) => ({
    type: C.UPDATE_BOOKING,
      payload: {booking}
})
