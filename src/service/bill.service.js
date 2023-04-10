import { axiosInstance } from "./myaxios";

export function BillCreate(databill){
  
    let data = JSON.stringify(databill);
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8200/bill/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    return handleResponse(config)
    
}
export function UpdateBill(databillnew){
    let data = JSON.stringify(databillnew);
      
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'http://localhost:8200/bill/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      return handleResponse(config)
}
export function DeleteBill(billdelete){
    let data = JSON.stringify(billdelete);
      
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://localhost:8200/bill/${billdelete.id}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
 return handleResponse(config)
}

 export function searchBill(billDTO){
  let data = JSON.stringify(billDTO);
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8200/bill/search',
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