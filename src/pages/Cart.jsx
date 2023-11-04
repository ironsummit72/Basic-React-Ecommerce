import axios from "axios";
import React, { useEffect, useState } from "react";
import { getLocalStorageData, getLocalStorageDataLength } from "../module/LocalStorageApi";
import Card from "../components/Card";
import Checkout from "../components/Checkout";

function Cart() {
  const isLocal = false;
  const BackendUrl = isLocal
    ? process.env.REACT_APP_LOCAL_URL
    : process.env.REACT_APP_BACKEND_URL;
  const [resposnseData, setResponseData] = useState([]);
  const localstorageData = JSON.stringify(getLocalStorageData("cartData"));
  let cartItemPrices=[]
  let cartTotal=0;
  let freeShipping=false;
  let shippingCharges=undefined;
  const getDataFromDatabase = async () => {
    let response = await axios.get(
      `${BackendUrl + "cartData?cartitems=" + localstorageData}`
    );
    setResponseData(response.data);
  };
  useEffect(() => {
    getDataFromDatabase();
  }, []);
resposnseData.forEach((items)=>{
  cartItemPrices.push(parseInt(items.ProductPrice));
  cartTotal= cartItemPrices.reduce((a, b) => a + b, 0);
})
shippingCharge()

function shippingCharge()
{
  if(getLocalStorageDataLength('cartData')>2||cartTotal>10000)
  {   freeShipping=true
     shippingCharges=0;
  }else{
    freeShipping=false
    shippingCharges=Math.round((4/100)*cartTotal)
  }
}


  return (
    <>

      {resposnseData.map((data) => {
        return (
          <Card
          key={data._id}
          productname={data.ProductName}
          price={data.ProductPrice}
          productid={data._id}
          imageurl={BackendUrl + data.Paths[0].path}
          />
          );
        })}
    
      {getLocalStorageDataLength('cartData')!==0&&<Checkout Total={cartTotal} shipping={shippingCharges} isFreeShipping={freeShipping}/>}
     
    </>
  );
}

export default Cart;
