import axios from 'axios';
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
    localStorage.jwt = response.data.jwt
    localStorage.currenUserName = response.data.name
  })
  .catch(function (error){
    console.log(error)
  })

  return {}
}
