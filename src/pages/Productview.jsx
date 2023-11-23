import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios';
import { DefaultRating } from '../components/DefaultRating';
import addCommas from '../module/addComma';
import { insertDataLocalStorage,checkIfExists, deleteLocalStorageItem,updateQuantity, getItemQuantity } from '../module/LocalStorageApi';
import Toast from '../components/Toast';
import QuantitySelector from '../components/QuantitySelector';
import ImageView from '../components/ImageView';

function Productview() {
  const [response,setResponse]=useState([])
  const [images,setImages]=useState([]);
  const [isviewImage,setIsViewImage]=useState(false);
  const [quantitySelectorisDisabled,setQuantitySelectorisDisabled]=useState(false);
  const [cartBtnText,setCartBtnText]=useState('')
  const  [indexImg,setIndexImg]=useState(undefined)
  let {id}=useParams();
  const [quantity,setQuantity]=useState(getItemQuantity('cartData',id)!==undefined ? getItemQuantity('cartData',id):1);

  let cartQuantity=quantity
const isLocal = false;
  const BackendUrl = isLocal? process.env.REACT_APP_LOCAL_URL: process.env.REACT_APP_BACKEND_URL;
  const fetchUrl=BackendUrl+`productview?id=${id}`
  const fetch=async (url)=>{
    let response=await axios.get(url);
    setResponse(response.data)
    setImages(response.data.Paths);
  }
  const [toastIsVisable,setToastIsVisable]=useState(false);
  const [toastMessage,setToastMessage]=useState('');
  const showToast=(message,time=3000)=>{
    setToastIsVisable(true)
    setToastMessage(message)
    setTimeout(()=>{
      setToastIsVisable(false)
    },time)
  }

  const addToCartBtn=()=>{
    let data={
      "id": id,
      "quantity": quantity
    }
  const isInsert=insertDataLocalStorage('cartData',data);
  if(isInsert===0)
  {
    showToast('Item added to Cart',3000)
    setCartBtnText('Remove from cart ')
    
  }
  else if (isInsert===-1)
  {
    showToast("Item has Removed from Cart",3000)
    deleteLocalStorageItem('cartData',id);
    setCartBtnText('Add to Cart')
    
  }

  }
  const increment=()=>{
    cartQuantity++;
    setQuantity(cartQuantity)

    updateQuantity('cartData',id,cartQuantity)
  }
  const decrement=()=>{
    setQuantity((q)=>q>1?q-1:q)
    if(cartQuantity>1)
    {
      cartQuantity--
     updateQuantity('cartData',id,cartQuantity)
   }
  }

  useEffect(()=>{
    if(checkIfExists('cartData',id))
    {
      setCartBtnText('Remove from cart ')
      setQuantitySelectorisDisabled(false)
      
    }else{ 
      setCartBtnText('Add to Cart')
      setQuantitySelectorisDisabled(true)
      
    }
    fetch(fetchUrl)
  },[getItemQuantity('cartData',id)])

  const onHandleImageClick =(items)=>{
    setIndexImg(images.findIndex((images)=>images.filename===items))
    console.log(indexImg);
   setIsViewImage((is)=> !is)
  }
  console.log(isviewImage);
 
  if(isviewImage)
  {
    return <ImageView indexImg={indexImg} imgarray={images} BackendUrl={BackendUrl} onClose={()=>{setIsViewImage(false)}}/>
  }
  else{
    return (
        <>
        <div className="maincontainer flex">
        <div className="imagecontainer border-black h-auto min-h-0 w-3/5 mt-20 ml-5 grid grid-cols-2 gap-3">     
        {
          images.map((items)=>{
          
            return <img key={items.filename} src={BackendUrl+items.path} alt="" className='productImage '  onClick={()=>{onHandleImageClick(items.filename)}}/>
            })
          }
        </div>
        <div className='productInfoContainer w-2/5 '>
          <h1 className='ProductName font-bold text-xl ml-10 mt-20'>{response.ProductName}</h1>
          <h1 className='ProductPrice font-medium text-xl ml-10 mt-8'>Rs. {addCommas(response.ProductPrice)}</h1>
          <DefaultRating rating={3} className='ml-10 mt-6'/>
          {!quantitySelectorisDisabled&&<QuantitySelector quantity={quantity} onHandleDecrement={decrement} isDisabled={false} onHandleIncrement={increment}/>}
          
          <button className='bg-rose-950 w-4/5 h-14 ml-10 mt-20 text-white font-normal py-2 px-4 rounded-lg ' onClick={addToCartBtn}>{cartBtnText} "Rs." {addCommas(response.ProductPrice*quantity)}</button>
        
          <h1 className='font-bold ml-10 relative top-16 text-xl text-rose-950'>Offers</h1>
          <div className="offer w-4/5 text-rose-950 rounded-lg border-rounded border-dotted border-2 border-red-950 ml-10 mt-20 h-20 flex flex-col justify-around font-medium items-center">
            <h1 className='offer-text'>Flat Rs 250 Off | Use Code : FIRSTBUY </h1>
            <p className='description'>Valid on 1st order only| Min. Order value Rs 2500</p>
          </div>
        </div>
        </div>
        
          {toastIsVisable && <Toast message={toastMessage} onHandleClick={()=>{setToastIsVisable(false)}}/>}
        
        </>
  )
}
}


export default Productview