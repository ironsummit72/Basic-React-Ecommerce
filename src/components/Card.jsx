import {Link} from 'react-router-dom'
import addCommas from '../module/addComma'
import { useEffect, useState } from 'react'
import { checkIfExists, deleteLocalStorageItem, insertDataLocalStorage } from '../module/LocalStorageApi';
function Card({price,productname,imageurl,onHandleClick,productid,inStock=true})
{
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

return <>
<div className="flex font-sans  ml-20 mr-20 mt-10 mb-10 shadow-xl bg-gray-100 rounded-lg cursor-pointer  " onClick={onHandleClick}>
  <div className="flex-none w-48 relative">
    <img src={imageurl} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <Link to={`/productview/${productid}`}   className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        {productname}
      </h1>
      <div className="text-lg font-semibold text-slate-500">
      ₹{addCommas(price)}
      </div>
      <div className={`w-full flex-none text-sm font-medium  text-slate-700 mt-2 ${inStock?'text-green-600':'text-red-600'}`}>
        {inStock?"In stock":"Out of Stock"}
      </div>
    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div className="space-x-2 flex text-sm">
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xs" checked />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="s" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="m" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="l" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xl" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button" onClick={onHandleClickCart}>
        {btnText}
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-700">
      Free shipping across India. Shipping charges may vary country wise.
    </p>
  </Link>
</div>


</>
}
export default Card