import React from 'react'
import {Link} from 'react-router-dom'
import addCommas from '../module/addComma'
import { useEffect, useState } from 'react'
import { checkIfExists, deleteLocalStorageItem, insertDataLocalStorage } from '../module/LocalStorageApi';
function Card3({price,productname,imageurl,onHandleClick,productid,inStock=true}) {

    const [btnText,setBtnText]=useState('');
    const onHandleClickCart=(e)=>{
      e.preventDefault();
      const isItemExist=checkIfExists('cartData',productid);
      if(isItemExist)
      {
        deleteLocalStorageItem('cartData',productid)
        setBtnText('Add to Cart')

      }else{
        insertDataLocalStorage('cartData',{id:productid,quantity:1});
        setBtnText('Remove from Cart')
      }
    }
    //const [isProductExist,setProductExist
    useEffect(()=>{
    const isItemExist=checkIfExists('cartData',productid);
    if(isItemExist)
    {
      setBtnText('Remove from Cart')
    }
    else{
      setBtnText('Add to Cart')
    }
    },[])

  return (
    <><div className="relative m-12 h-full  flex w-9/12 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <Link className="relative mx-4 mt-4 flex h-70 overflow-hidden rounded-xl" to={`/productview/${productid}`} >
      <img className="object-cover h-full w-full " src={imageurl} alt="productimage" />
      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
    </Link>
    <div className="mt-4 px-5 pb-5">
      <Link to={`/productview/${productid}`}>
        <h5 className="text-xl  tracking-tight text-slate-900">{productname}</h5>
      </Link>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span className="text-3xl font-bold text-slate-900">{`₹`+addCommas(price)}</span>
          <span className="text-sm text-slate-900 line-through">{`₹`+addCommas((Math.round((price*39/100))+Math.round(price)))}</span>
        </p>
      </div>
      <button onClick={onHandleClickCart} className="flex items-center w-full relative top-20 justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {btnText}</button>

    </div>
  </div>
  </>
  )
}

export default Card3