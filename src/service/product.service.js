import axios from "axios";

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

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

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

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

}
// export function GetProduct(pro){
 
// let data = JSON.stringify(pro);

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: `http://localhost:8200/product/${pro.id}`,
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
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
} 