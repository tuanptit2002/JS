import { axiosInstance } from "./myaxios";

export function CreateCart(datacart){
   
let data = JSON.stringify(datacart);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8200/cart/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

return handleResponse(config)

}
export function UpdateCreateCart(dataUpdateCart){
    let data = JSON.stringify(dataUpdateCart);
      
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'http://localhost:8200/cart/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      return handleResponse(config)
}
export function DeleteCart(deletecart){
    let data = JSON.stringify(deletecart);
      
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://localhost:8200/cart/${deletecart.id}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      return handleResponse(config)
}
export function searchCart(cart){
  let data = JSON.stringify(cart);
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8200/cart/search',
      headers: { 
        'Content-Type': 'application/json', 
        'Cookie': 'JSESSIONID=5AB9CAB5D36445D74A7010A35D61594A'
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