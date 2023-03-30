import axios from 'axios';
import { axiosShop } from '../utils/axios';

export const loginAPI = async (data) => {
  const config = {
    url: 'http://localhost:8200/api/auth/singin',
    method: 'POST',
    data
  }
  return handleRequest(config)
}


const handleRequest = async (config) => {
  try {
    const resp = await axios.post( 'http://localhost:8200/api/auth/singin', config.data, {method:  "post"});
    return resp.data;
  } catch (error) {
    console.log(error);
    if (error.response)
      return (error.response.data)

    return ({ code: "408", message: error.message })
  }
}
// export function loginAPI(username, password){
//   let data = JSON.stringify(username, password);
  
//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'http://localhost:8200/api/auth/singin',
//     headers: { 
//       'Content-Type': 'application/json', 
//       'Cookie': 'JSESSIONID=478BC678840BF4638BD4FA32BD1B7F38'
//     },
//     data : data
//   };
  
//   axios.request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
  
// }