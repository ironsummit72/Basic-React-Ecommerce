import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCartLength, getItemQuantity, getLocalStorageData, getLocalStorageDataLength } from "../module/LocalStorageApi";
import Checkout from "../components/Checkout";
import CartItems from "../components/CartItems";

function Cart() {
  const BackendUrl =process.env.REACT_APP_BACKEND_URL;
    const [resposnseData, setResponseData] = useState([]);
    const localstorageData = (getLocalStorageData("cartData"));
    let shippingCharge=undefined;
    let isShippingFree=false
     const idItems=localstorageData.map((items)=>items.id);
     const cartIDData=JSON.stringify(idItems);
     const getDatafromDatabase = async()=>{
      let response=await axios.get(`${BackendUrl+"cartData?cartitems="+cartIDData}`);
      setResponseData(response.data);
     }
     const cartLength=getCartLength('cartData')
     useEffect(()=>{
     getDatafromDatabase();
     },[cartLength])
   const QuantitiesPrice=resposnseData.map((items)=>getItemQuantity('cartData',items._id)===undefined?0:getItemQuantity('cartData',items._id)*items.ProductPrice);
  
    let cartTotal=QuantitiesPrice.reduce((a, b) => a + b, 0);
    
  if(getCartLength('cartData')>3||cartTotal>15000)
  {
    shippingCharge=0
    isShippingFree=true

  }else{
    shippingCharge= Math.round((4/100)*cartTotal);
    isShippingFree=false
  }


  return (
    <>

      {resposnseData.map((data) => {
        return (
         <CartItems
          key={data._id}
          productname={data.ProductName}
          price={data.ProductPrice}
          productid={data._id}
          imageurl={BackendUrl + data.Paths[0].path}
          />
          );
        })}
    
      {getLocalStorageDataLength('cartData')!==0&&<Checkout totalCartItems={getCartLength('cartData')} Total={cartTotal} Shipping={shippingCharge} isFreeShipping={isShippingFree}/>}
     
    </>
  );
}
<>
</>

export default Cart;
