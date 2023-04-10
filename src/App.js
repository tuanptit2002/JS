
import { DeleteProduct, Product, UpDateProductnew } from "./page/Product";


import { BrowserRouter, Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ProvideAuth } from "./context/ProvideAuth";
import { CreateBillnew, DeleteBillnew, SearchBill, UpdateBillnew } from "./page/Bill";


import { CreateCartnew, DeleteCartnew, SearchCart, UpdateCreateCartnew } from "./page/Cart"
import Login from "./page/login/Login";
import Signup from "./page/login/SignUp";
import { Category, CategoryAPI, DeleteCategory, SearchAPI, UpdateCategoryAPI } from "./page/Category";
import NavigationBar from "./page/NavPage";

import {store} from "./redux/store"
import { Provider } from 'react-redux';
import { AppBar, Box, Button, Container ,Divider,Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import { Accessible, CollectionsBookmark, Inbox, MenuBook, Person, Scoreboard } from "@mui/icons-material";

function App() {
  return (
   
    // <Provider store={store}>
    <ProvideAuth >
    {/* //  <AuthenProvider>  */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/category" element={ <Category />} />
          
          {/* <Route path="/signup" element={<Signup/>} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard/category" />} />
            <Route path="category" element={<CategoryABC />} />
            <Route path="product" element={<ProductABC />} />
            <Route path="cart" element={<CartABC />} />
            <Route path="bill" element={<BillABC />} />
          </Route> */}

        </Routes>
       </BrowserRouter>
      {/* // </AuthenProvider> */}
       </ProvideAuth>
    //   </Provider>
  );
}


// function DashboardLayout(){
//   return <div>
//   <NavigationBar/>
//   <Outlet />
//   </div>
// }

// function MainApp(){
//   return <BrowserRouter basename="/public">
//     <Routes>

//     </Routes>
//   </BrowserRouter>
// }

export default App;
