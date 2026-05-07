import {useState} from 'react'
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

function App ()  {

  const [cart, setCart] = useState([]);
  return (
     <>
    <Navbar />
    <Routes>
      <Route path="/"
       element={
       <Products
         cart={cart}  
         setCart={setCart}
          />
    } 
    />

       <Route
        path="/cart"
         element={<Cart
           cart={cart} 
         setCart={setCart} />} 
       />

       <Route 
        path="/payment"
        element={<Payment cart={cart} />}
       />

       <Route 
       path="/success"
       element={<Success cart={cart} />}
       />

       <Route path="/login" element={<Login />} />

       <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App; 