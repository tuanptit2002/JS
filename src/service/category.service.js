import axios from "axios";
import { axiosInstance } from "./myaxios";

export function createCategoryAPI(categoryDTO){
    let data = JSON.stringify(categoryDTO);
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8200/category/',
        headers: { 
          'Content-Type': 'application/json', 
          'Cookie': 'JSESSIONID=478BC678840BF4638BD4FA32BD1B7F38'
        },
        data : data
      };
      
    return handleResponse(config)
      
      
}
export function updateCategoryAPI(categoryDTO){
 
let data = JSON.stringify(categoryDTO);

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8200/category/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

return handleResponse (config);

}

export function deleteCategoryAPI(x){
  
let data = JSON.stringify(x);

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: `http://localhost:8200/category/${x.id}`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};
  return handleResponse(config)
}


export function searchCategoryAPI(newDTO){
  let data = JSON.stringify(newDTO);
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8200/category/search',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  return handleResponse(config);
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