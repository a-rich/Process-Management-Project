import axios from 'axios'
import { setSearchResults, setDetailResults } from '../actions.js'
const ROOT_URL = "http://127.0.0.1:5000"


export function searchHotels(values) {
    console.log("values: ",values)
    const request = axios.post(`${ROOT_URL}/api/hotels/`, values)
    .then(function (response) {
        console.log("response.data: ", response.data)
        window.store.dispatch(setSearchResults(response.data))
    })
    .catch(function (error) {
    console.log(error);
  });
    return { }
}

export function showHotelRooms(id) {
    console.log("id: ", id)
    const request = axios.get(`${ROOT_URL}/api/hotel/`+ id)
    .then(function (response) {
        console.log("response.data: ", response.data)
        window.store.dispatch(setDetailResults(response.data))
    })
    .catch(function (error) {
    console.log(error);
  });
    return { }
}