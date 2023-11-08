import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Productview from './pages/Productview'
import Cart from './pages/Cart'
import App from './App'
import { Context } from './context/MyContext'
import { createLocalStorage, getCartLength } from './module/LocalStorageApi'
import UserDetails from './pages/UserDetails'

function Main() {
const [cartCount,setCartCount]=useState(getCartLength('cartData'));
useEffect(()=>{
  createLocalStorage('cartData');
},[])
document.addEventListener('localdatachanged',()=>{
    setCartCount(getCartLength('cartData'))
});
    return (
        <>
      <BrowserRouter>
      <Context.Provider value={{cartCount}}>
      <Navbar/>
      </Context.Provider>
    <Routes>
      <Route path="/productview/:id" element={<Productview/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<App />} />
      <Route path="/userdetails" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default Main