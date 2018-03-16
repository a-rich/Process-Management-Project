import axios from 'axios';
const ROOT_URL = "http://127.0.0.1:5000"


export function createUser(values) {
    const request = axios.post(`${ROOT_URL}/api/create_user/`, values)
    .then(function (response) {
        console.log("response!!!!")
        console.log(response);
    })
    .catch(function (error) {
    console.log(error);
  });;
    console.log("CREATE USER");
    return {
        //type: create_user,
       // payload: request
    }
}
