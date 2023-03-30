import axios from "axios";

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
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
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
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
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
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
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
  
 return axios.request(config)
 
  
 }