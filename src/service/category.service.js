import axios from "axios";

export function CreateCategory(categoryDTO){
    let data = JSON.stringify(categoryDTO);
      
      let configCategory = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8200/category/',
        headers: { 
          'Content-Type': 'application/json', 
          'Cookie': 'JSESSIONID=478BC678840BF4638BD4FA32BD1B7F38'
        },
        data : data
      };
      
      axios.request(configCategory)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
      
}
export function UpdateCategory(categoryDTO){
 
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

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

}

export function Delete(x){
  
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

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

}
// export function Search(b){
//   const axios = require('axios');
// let data = JSON.stringify(b);

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'http://localhost:8200/category/search',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

// }
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
  
  return axios.request(config)
  
  
}