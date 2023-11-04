import React, { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Productview from './pages/Productview'
import Cart from './pages/Cart'
import App from './App'
import { Context } from './context/MyContext'
import { getLocalStorageDataLength } from './module/LocalStorageApi'

function Main() {
const [cartCount,setCartCount]=useState(0);
document.addEventListener('localdatachanged',()=>{
    setCartCount(getLocalStorageDataLength('cartData'))
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
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default Main