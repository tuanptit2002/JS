import axios from "axios";

export function createUser(UserDTO){
  let data = JSON.stringify(UserDTO);
  console.log(UserDTO);
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8200/api/auth/singup',
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'JSESSIONID=478BC678840BF4638BD4FA32BD1B7F38'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}

