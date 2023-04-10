
import { axiosInstance } from "./myaxios";

export function CreateProduct(dataproduct){
    
let data = JSON.stringify(dataproduct);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8200/product/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

return handleResponse(config)

}

export function UpDateProduct(productdata){
 
let data = JSON.stringify(productdata);

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8200/product/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

return handleResponse(config)

}

export function DeletePR(idproduct)
{
  
  let data = JSON.stringify(idproduct);
  
  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `http://localhost:8200/product/${idproduct.id}`,
    headers: { 
      'Content-Type': 'application/json'
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