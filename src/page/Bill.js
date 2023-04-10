import { useEffect, useState } from "react";
import { BillCreate, DeleteBill, UpdateBill, searchBill } from "../service/bill.service";

export function CreateBillnew(){
   let submit = (e) =>{
    e.preventDefault();
    let formdata = new FormData(e.target);
    let bill = {
        price: formdata.get("price"),
        cart:
            {
                id: formdata.get("idcart")
            }
        ,
        createdAt: formdata.get("createdAt"),
        createdBy:
            {
                id: formdata.get("iduser")
            }
        
    }
    BillCreate(bill);
   }
    return (
        <div>
        <form onSubmit={submit}>
            <label>Price:</label>
            <input type="text" name="price"/>
            <label>IdCart:</label>
            <input type="text" name="idcart"/>
            <label>CreatedAt:</label>
            <input type="text" name="createdAt"/>
            <label>IdUser:</label>
            <input type="text" name="iduser"/>
            <button submit>Create</button>
        </form>
        </div>
    )
}
export function UpdateBillnew(){
    let submit = (e) =>{
     e.preventDefault();
     let formdata = new FormData(e.target);
     let bill = {
        id:formdata.get("id"),
         price: formdata.get("price"),
        //  cart:
        //      {
        //          id: formdata.get("idcart")
        //      }
        //  ,
         createdAt: formdata.get("createdAt"),
        //  createdBy:
        //      {
        //          id: formdata.get("iduser")
        //      }
         
     }
     UpdateBill(bill);
    }
     return (
         <div>
         <form onSubmit={submit}>
         <label>Id:</label>
             <input type="text" name="id"/>
             <label>Price:</label>
             <input type="text" name="price"/>
             {/* <label>IdCart:</label>
             <input type="text" name="idcart"/> */}
             <label>CreatedAt:</label>
             <input type="text" name="createdAt"/>
             {/* <label>IdUser:</label>
             <input type="text" name="iduser"/> */}
             <button submit>Update</button>
         </form>
         </div>
     )
 }
 
 export function DeleteBillnew(){
    let submit = (e) =>{
     e.preventDefault();
     let formdata = new FormData(e.target);
     let bill = {
        id:formdata.get("id"),
         }
         DeleteBill(bill);
    }
     return (
         <div>
         <form onSubmit={submit}>
         <label>Id:</label>
        <input type="text" name="id"/>
             
             <button submit>Delete</button>
         </form>
         </div>
     )
 }
 export function SearchBill(){
    let [BillArr, setBillArr] = useState([])
    let [BillDTO, setBillDTO] = useState({
        
            "page": 0,
            "size": 10,
            "value": ""
          
    })
    let getdata = async ()=>{
        try{
            let resp = await searchBill(BillDTO)
            console.log(resp.data);
            setBillArr ( [ {
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
    },[BillDTO]
    )
    let handleSearchBill = (e) =>{
        setBillDTO({...BillDTO,[e.target.name]: e.target.value})
    }
    return(
        <div>
        <input name="value" onChange={handleSearchBill} placeholder="search..."/>
        <tr>
                    <th>totalElements  </th>
                    <th>numberOfElements  </th>
                    <th>totalPages </th>
                    
                </tr>
                {
                    BillArr.map(item =>{
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