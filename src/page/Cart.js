import { CreateCart, DeleteCart, UpdateCreateCart } from "../service/cart.service";

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
