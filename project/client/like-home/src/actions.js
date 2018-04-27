import C from './constants'

export const setcurrentuser = (name, token) => ({
      type: C.SET_CURRENTUSER,
          payload: {"currentUser":  {name, token}}
   })

export const setSearchResults = (searchResults) => ({
type: C.SET_SEARCHRESULTS,
    payload: {"searchResults":  searchResults}
})