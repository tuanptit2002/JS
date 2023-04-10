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
  
  return handleResponse(config)
}

const handleResponse = async (config) => {
  try {
    let response = await axiosInstance(config);

    let result = response.data;
    return { code: 200, result };
  } catch (error) {
    console.log(error);

    if (error.response) {
      return { code: error.response.status };
    } else if (error.request) {
      return { code: 408 };
    } else {
      return { code: 500 };
    }
  }
};