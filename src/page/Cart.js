import { useEffect, useState } from "react";
import { CreateCart, DeleteCart, UpdateCreateCart, searchCart } from "../service/cart.service";

export function CreateCartnew(){
    let submit = (e) =>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let cart = {
            title: formdata.get("title"),
  description: formdata.get("description"),
  featureImage: formdata.get("featureImage"),
  products: [
    {
      id: formdata.get("idpro")
    }
  ],
  createdAt: formdata.get("day"),
  createdBy: {
    id: formdata.get("iduser")
  }
     }
     CreateCart(cart);
    }
    return (
        <div>
        <form onSubmit={submit}>
            <label>Title:</label>
            <input type="text" name="title"/>
            <label>Description:</label>
            <input type="text" name="description"/>
            <label>FeatureImage:</label>
            <input type="text" name="featureImage"/>
            <label>ProductID:</label>
            <input type="text" name="idpro"/>
            <label>ProductUser:</label>
            <input type="text" name="iduser"/>
            <button submit>Create</button>
        </form>
        </div>
    )
}
export function UpdateCreateCartnew(){
    let submit = (e) =>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let cart = {
            id: formdata.get("id"),
            title: formdata.get("title"),
  description: formdata.get("description"),
  featureImage: formdata.get("featureImage"),
  
     }
     UpdateCreateCart(cart);
    }
    return (
        <div>
        <form onSubmit={submit}>
        <label>ID:</label>
            <input type="text" name="id"/>
            <label>Title:</label>
            <input type="text" name="title"/>
            <label>Description:</label>
            <input type="text" name="description"/>
            <label>FeatureImage:</label>
            <input type="text" name="featureImage"/>
            
            <button submit>Update</button>
        </form>
        </div>
    )
}
export function DeleteCartnew(){
    let submit = (e) =>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let cart = {
            id: formdata.get("id"),
          
  
     }
     DeleteCart(cart);
    }
    return (
        <div>
        <form onSubmit={submit}>
        <label>ID:</label>
            <input type="text" name="id"/>
            
            
            <button submit>Delete</button>
        </form>
        </div>
    )
}

export function SearchCart(){
    let [CartArr, setCartArr] = useState([])
    let [CartDTO, setCartDTO] = useState({
        
            "page": 0,
            "size": 10,
            "value": ""
          
    })
    let getdata = async ()=>{
        try{
            let resp = await searchCart(CartDTO)
            console.log(resp.data);
            setCartArr ( [ {
                totalElements:  resp.data.totalElements,
                numberOfElements: resp.data.numberOfElements,
                totalPages: resp.data.totalPages
                }])
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() =>{
        getdata();
    },[CartDTO]
    )
    let handleSearchCart = (e) =>{
        setCartDTO({...CartDTO,[e.target.name]: e.target.value})
    }
    return(
        <div>
        <input name="value" onChange={handleSearchCart} placeholder="search..."/>
        <tr>
                    <th>totalElements  </th>
                    <th>numberOfElements  </th>
                    <th>totalPages </th>
                    
                </tr>
                {
                    CartArr.map(item =>{
                        return(<tr>
                            <td>{item.totalElements}</td>
                            <td>{item.numberOfElements}</td>
                                   
                   <td>{item.totalPages}</td>
                         </tr>)
                    })
                }
        </div>
    )
 }