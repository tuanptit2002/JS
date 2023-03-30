// import { BrowserRouter, Route, Router ,Routes} from "react-router-dom";
// import { ProvideAuth } from "./context/ProvideAuth";
// import Login from './login/Login';
// import Signup from './login/SignUp';
// import { User } from "./page/User";
// import {  CategoryAPI, DeleteCategory, UpdateCategoryAPI } from "./page/Category";
// import { Delete, UpdateCategory } from "./service/category.service";
// import { DeleteProduct, Product, UpDateProductnew } from "./page/Product";
// import { UpDateProduct } from "./service/product.service";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProvideAuth } from "./context/ProvideAuth";
import { CreateBillnew, DeleteBillnew, SearchBill, UpdateBillnew } from "./page/Bill";


import { CreateCartnew, DeleteCartnew, UpdateCreateCartnew } from "./page/Cart"
import Login from "./page/login/Login";
import Signup from "./page/login/SignUp";
import { SearchAPI } from "./page/Category";

// import { CreateBillnew } from "./page/User";

function App() {
  return (
    <SearchBill/>
    // < SearchAPI />
    // <DeleteBillnew/>
    // <UpdateBillnew/>
    // <CreateBillnew/>
    // <DeleteCartnew/>
    // <UpdateCreateCartnew />
    // <CreateCartnew />
    // <DeleteProduct/>
    // <UpDateProductnew/>
    // <Product/>
    // <DeleteCategory/>
    // <UpdateCategoryAPI />
    // <CategoryAPI/>
    // <User/>
    // <ProvideAuth>npm
    //   <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<Login/>} />
    //       <Route path="/signup" element={<Signup/>} />
    //     </Routes>
    //   </BrowserRouter>
    //   </ProvideAuth>
  );
}

export default App;
