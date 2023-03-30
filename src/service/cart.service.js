import axios from "axios";

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

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

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
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
}