// import { useState } from "react";
import { useEffect, useState } from "react";
import { createCategoryAPI, deleteCategoryAPI, searchCategoryAPI, updateCategoryAPI } from "../service/category.service";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { Delete, Send, Update } from "@mui/icons-material";


export function Category(){
    let [categoryArr, setCategoryArr] = useState([]);

    let [data,setData] = useState({
        "value": "%%",
        "page": 0,
        "size": 10
    });

    useEffect(() => {
        const readData = async () =>{
            const response = await searchCategoryAPI(data);
            console.log(response)
            setCategoryArr(response.data)
            if(response) {
                return;
            }
        }
        readData();
    },[data])

    let  handleTextChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    let [categoryDTO, setcategoryDTO] = useState({
        title: "",
        description: "",
        featureImage:""
    });

    let handleChangeCategory = (e) => {
        setcategoryDTO({ ...categoryDTO, [e.target.name]: e.target.value });

    };

    let createCategory = async () => {
        try {
          console.log(categoryDTO);
          let resp = await createCategoryAPI(categoryDTO); 
          console.log("Tạo student thành công");
          setCategoryArr(resp.data)
        } catch (err) {
          console.log(err);
        }
      };

      let updateCategory = async () => {
        try {
          console.log(categoryDTO);
          let resp = await updateCategoryAPI(categoryDTO); 
          console.log("Update data: ", resp.data);
          console.log("Update category thành công");
          setCategoryArr(resp.data.data);
        } catch (err) {
          console.log(err);
        }
      };

      let deleteCategory = async (id) => {
        try {
          let yes = window.confirm("Are you sure want to delete this item ?");
          let resp = await deleteCategoryAPI(id); 
          let newArray = categoryArr.filter(function (item) {
          console.log(yes);
            return item.id !== id;
          });
          console.log("Delete category thành công");
          setCategoryArr(newArray.data.data);
          
        } catch (err) {
          console.log(err);
        }
      }
      
    return (
        <div>
            
      <th>Create Category</th>
      <form>
        
        <TextField  label="CategoryTitle" name="title" onChange={handleChangeCategory} variant="standard" placeholder="categoryTitle..."/>
        <TextField  label="CategoryDescription" name="description" onChange={handleChangeCategory} variant="standard" placeholder="categoryDescription..."/>
        <TextField  label="CategoryFeatureImage" name="featureImage" onChange={handleChangeCategory} variant="standard" placeholder="categoryFeatureImage..."/>
        <Button  onClick={createCategory}  startIcon={<Send/>} variant="outlined">Save </Button>
        
    
        <Box
            component="form"
            sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, }}
            noValidate
            autoComplete="off"
                 >
            <TextField  label="Search" name ="value" onChange={handleTextChange}  variant="standard" placeholder="Search..."></TextField>
          
            <FormControl>
               <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select name ="size" onChange={handleTextChange}>
              
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="20">20</MenuItem>
            </Select>
            </FormControl>
            </Box>
          
            <Table  sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    {/* <TableCell>ID</TableCell> */}
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Description</TableCell>
                    <TableCell align="center">FeatureImage</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                   categoryArr&& categoryArr.map(item => {
                        return (
                            <TableRow key={item.id}>
                                {/* <TableCell>{item.id}</TableCell> */}
                                <TableCell>{item.title}</TableCell> 
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.featureImage}</TableCell>                                                               
                                <TableCell>
                                  <Button  onClick={() => deleteCategory(item.id)} startIcon={<Delete/>} variant="outlined">Delete </Button>
                                  <Button  onClick={() => updateCategory(item.id)} startIcon={<Update/>} variant="outlined">Update</Button>
                               </TableCell>
                            </TableRow>
                        )
                    })
                }
             </TableBody>   
            </Table>
           </form>
         </div>
    )
}
