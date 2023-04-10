import { useState } from "react";
import { Link } from "react-router-dom";

export function  NavigationBar(){
    const  [activeTab, setActiveTab] = useState('Home');
    return (
        <header>
            <CategoryNav setActiveTab={setActiveTab}/>
            <Product setActiveTab={setActiveTab}/>
            <CartNav setActiveTab={setActiveTab}/>
            <BillNav setActiveTab={setActiveTab}/>
        </header>
        
    )
  
    function CategoryNav({setActiveTab}) {
        return <Link to="/dashboard/category"  
        onClick={() => setActiveTab('Category')}>Category</Link>;
      }
    
  function Product({setActiveTab}) {
    return <Link to="/dashboard/product"  
   
    onClick={() => setActiveTab('Product')}>Product</Link>;
  }
  
  function CartNav({setActiveTab}) {
    return <Link to="/dashboard/cart"  
    // className={`nav-link ${activeTab === 'User' ? 'active' : ''}`}
    onClick={() => setActiveTab('Cart')}>Cart</Link>;
  }
  
  function BillNav({setActiveTab}) {
    return <Link to="/dashboard/bill"  
    // className={`nav-link ${activeTab === 'User' ? 'active' : ''}`}
    onClick={() => setActiveTab('Bill')}>Bill</Link>;
  }
  
//   function PostNav() {
//     return <Link to="/dashboard/post"  
//     // className={`nav-link ${activeTab === 'Post' ? 'active' : ''}`}
//     onClick={() => setActiveTab('Post')}>Post</Link>;
//   }
  
//   function LoginNav() {
//     return <Link to="/login"  
//     // className={`nav-link ${activeTab === 'Login' ? 'active' : ''}`}
//     onClick={() => setActiveTab('Login')}>Login</Link>;
//   }
  
//   function SignUpNav() {
//     return <Link to="/signup"  
//     // className={`nav-link ${activeTab === 'Sign Up' ? 'active' : ''}`}
//     onClick={() => setActiveTab('Sign Up')}>Sign Up</Link>;
//   }
  
//   function HomeNav() {
//     return <Link to="/main" id='home-btn' 
//     // className={`nav-link ${activeTab === 'Contact' ? 'active' : ''}`}
//     onClick={() => setActiveTab('Home')}>Home</Link>;
//   }
  
  }
  export default NavigationBar;
