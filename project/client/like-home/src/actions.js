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
