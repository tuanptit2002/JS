// import { useState } from "react";
import { useEffect, useState } from "react";
import { CreateCategory, Delete,  UpdateCategory, searchCategoryAPI } from "../service/category.service";

export function CategoryAPI(){
    let summit = (e) =>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let category = {
            title: formdata.get("title"),
            description: formdata.get("description"),
            featureImage: formdata.get("featureImage")
        }
        CreateCategory(category);
    }
    return(
        <div>
            <form onSubmit={summit}>
            <label>Title:</label>
            <input type="text" name="title"/>
            <label>Description:</label>
            <input type="text" name="description"/>
            <label>FeatureImage:</label>
            <input type="text" name="featureImage"/>
            <button type="submit">Create</button>
            </form>
        </div>
    )
}
export function UpdateCategoryAPI(){
    // let [category, setCategory] = useState([]);
    let submit = (e) =>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let category = {
            id: formdata.get("id"),
            title: formdata.get("title"),
            description: formdata.get("description"),
            featureImage: formdata.get("featureImage")
        }
        UpdateCategory(category);
    }
    return(
        <div>
            <form onSubmit={submit}>
            <label>ID:</label>
            <input type="text" name ="id"/>
            <label>Title:</label>
            <input type="text" name="title"/>
            <label>Description:</label>
            <input type="text" name="description"/>
            <label>FeatureImage:</label>
            <input type="text" name="featureImage"/>
            <button type="submit">Update</button>
            </form>
        </div>
    )
}
export function DeleteCategory(){
    let submit = (e) =>{
        e.preventDefault();
        let formdata = new FormData(e.target);
        let category = {
            id: formdata.get("id")
            
        }
        Delete(category);
    }
    return(
        <div>
            <form onSubmit={submit}>
            <label>ID:</label>
            <input type="text" name ="id"/>
            <button type="submit">Delete</button>
            </form>
        </div>
    )
}

export function SearchAPI(){
    let [categoryArr, setCategoryArr] = useState([])
   
    let [searchDTO, setSearchDTO] = useState({
        "page": 0,
  "size": 200,
  "value": "",
  "orders": [
    {
      "order": "ASC",
      "property": "id"
    }
  ]
    })
    
    let getData = async () =>{
        try{
            let resp = await searchCategoryAPI(searchDTO);
            setCategoryArr(resp.data.data);
        }catch(err){
                console.log(err);
        }
    }
    useEffect(() => {
      
         getData();
        
      }, [searchDTO]);
      let handleSearchCategory = (e) => {
        setSearchDTO({ ...searchDTO, [e.target.name]: e.target.value });
      };
      return(
        <div>
            <input name="value" onChange={handleSearchCategory} placeholder="search..."/>
           
            <table>
                <tr>
                    <th>ID </th>
                    <th>title </th>
                    <th>description </th>
                    <th>featureImage </th>
                </tr>
                {
                    categoryArr.map(item =>{
                        return(<tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.featureImage}</td>
                        </tr>)
                    })
                }
            </table>
        </div>
      )
}