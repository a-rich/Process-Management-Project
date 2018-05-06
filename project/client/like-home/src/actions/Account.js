import axios from 'axios';
import { setcurrentuser } from '../actions.js'
const ROOT_URL = "http://127.0.0.1:5000"


export function createUser(values) {
    const request = axios.post(`${ROOT_URL}/api/create_user/`, values)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
    console.log(error);
  });
    return { }
}

export function login(values){
  const request = axios.post(`${ROOT_URL}/api/login/`, values)
  .then(function(response){
    console.log(response);
    console.log(response.data.jwt)
    window.store.dispatch(setcurrentuser(response.data.name, response.data.jwt))
  })
  .catch(function (error){
    console.log(error)
  })

  return {}
}
