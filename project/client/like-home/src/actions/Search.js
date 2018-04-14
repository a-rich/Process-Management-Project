import axios from 'axios';
const ROOT_URL = "http://127.0.0.1:5000"


export function searchHotels(values) {
    const request = axios.post(`${ROOT_URL}/api/hotels/`, values)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
    console.log(error);
  });
    return { }
}
