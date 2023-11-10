import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Productview from './pages/Productview'
import Cart from './pages/Cart'
import App from './App'
import { Context,SearchContext } from './context/MyContext'

import { createLocalStorage, getCartLength } from './module/LocalStorageApi'
import UserDetails from './pages/UserDetails'



function Main() {
const [cartCount,setCartCount]=useState(getCartLength('cartData'));
const [query,setQuery]=useState('');
useEffect(()=>{
  createLocalStorage('cartData');
},[])
document.addEventListener('localdatachanged',()=>{
    setCartCount(getCartLength('cartData'))
});
    return (
      <>
        <SearchContext.Provider value={{ query, setQuery }}>
          <BrowserRouter>
            <Context.Provider value={{ cartCount }}>
              <Navbar />
            </Context.Provider>
            <Routes>
              <Route path="/productview/:id" element={<Productview />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<App />} />
              <Route path="/userdetails" element={<UserDetails />} />
            </Routes>
          </BrowserRouter>
        </SearchContext.Provider>
      </>
    );
}

export default Main