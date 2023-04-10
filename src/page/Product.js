import { CreateProduct, DeletePR, GetProduct, UpDateProduct } from "../service/product.service";

export function Product(){
    let submit = (e)=>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let product = 
        {
            title: formdata.get("title"),
            description: formdata.get("description"),
            type: formdata.get("type"),
            featureImage: formdata.get("featureImage"),
            category: 
            {
                id: formdata.get("id")
            }
        }
        CreateProduct(product)
    }
    return(
        <div>
        <form onSubmit={submit}>
            <label>Title:</label>
            <input type="text" name="title"/>
            <label>Description:</label>
            <input type="text" name="description"/>
            <label>Type:</label>
            <input type="text" name="type"/>
            <label>FeatureImage:</label>
            <input type="text" name="featureImage"/>
            <label>IDCategory</label>
            <input type="text" name="id"/>
            <button type="submit">Create</button>

        </form>
        </div>
    )
}

export function UpDateProductnew(){
    let submit = (e)=>{
    e.preventDefault();
    let formdata = new FormData(e.target);
    let product = 
    {
        id: formdata.get("id"),
        title: formdata.get("title"),
        description: formdata.get("description"),
        type: formdata.get("type"),
        featureImage: formdata.get("featureImage"),
        
    }
    UpDateProduct(product)
}
return(
    <div>
    <form onSubmit={submit}>
        <label>ID:</label>
        <input type="text" name="id"/>
        <label>Title:</label>
        <input type="text" name="title"/>
        <label>Description:</label>
        <input type="text" name="description"/>
        <label>Type:</label>
        <input type="text" name="type"/>
        <label>FeatureImage:</label>
        <input type="text" name="featureImage"/>
        <button type="submit">Update</button>

    </form>
    </div>
)

}
// export function getProduct()
// {
//     let submit = (e) =>{
//         e.preventDefault();
//         let formdata = new FormData(e.target)
//         let product ={
//             id: formdata.get("id")

//         }
//         GetProduct(product);
//     }
//     return(
//         <div>
//             <form onSubmit={submit}>
//             <label>ID:</label>
//             <input type="text" name="id"/>
//             <button type="submit">Get</button>
//             </form>
//         </div>
//     )
// }
export function DeleteProduct(){
    let submit = (e)=>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let product = {
            id: formdata.get("id")
        }
        DeletePR(product)
    }
    return(
        <div>
            <form onSubmit={submit}>
                <label>ID:</label>
                <input type="text" name="id"/>
               <button type="submit">Delete</button>
            </form>
        </div>
    )
}