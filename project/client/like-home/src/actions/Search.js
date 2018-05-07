import axios from 'axios'
import { setSearchResults, setDetailResults } from '../actions.js'
const ROOT_URL = "http://127.0.0.1:5000"


export function searchHotels(values) {
    if(values.query === "Chicago"){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.chicago))
    } else if(values.query === "San Francisco"){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.sanfrancisco))
    } else if(values.query === "Los Angeles"){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.losangeles))
    } else if(values.query === "San Jose"){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.sanjose))
    } else if(values.query === "Washington" || values.query === "Washington D.C." ){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.washington))
    } else if(values.query === "New York"){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.newyork))
    } else if(values.query === "Miami"){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.miami))
    } else if(values.query === "Las Vegas"){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.lasvegas))
    } else if(values.query === "Austin"){
      window.store.dispatch(setSearchResults(window.store.getState().cityData.citydata.austin))
    }
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
