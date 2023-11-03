import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios';
import { DefaultRating } from '../components/DefaultRating';
import addCommas from '../module/addComma';

function Productview() {
  const [response,setResponse]=useState([])
  const [images,setImages]=useState([]);
 let {id}=useParams();
const isLocal = false;
  const BackendUrl = isLocal? process.env.REACT_APP_LOCAL_URL: process.env.REACT_APP_BACKEND_URL;
  const fetchUrl=BackendUrl+`productview?id=${id}`
  const fetch=async (url)=>{
    let response=await axios.get(url);
    setResponse(response.data)
    setImages(response.data.Paths);
  }

  useEffect(()=>{
    fetch(fetchUrl)
  },[])

  return (
    <>
    <div className="maincontainer flex">
    <div className="imagecontainer border-black h-auto min-h-0 w-3/5 mt-20 ml-5 grid grid-cols-2 gap-3">     
     {
      images.map((items)=>{
        return <img key={items.filename} src={BackendUrl+items.path} alt="" className='productImage '/>
      })
     }
    </div>
     <div className='productInfoContainer w-2/5 '>
      <h1 className='ProductName font-bold text-xl ml-10 mt-20'>{response.ProductName}</h1>
      <h1 className='ProductPrice font-medium text-xl ml-10 mt-8'>Rs. {addCommas(response.ProductPrice)}</h1>
      <DefaultRating rating={3} className='ml-10 mt-6'/>
      <button className='bg-rose-950 w-4/5 h-14 ml-10 mt-20 text-white font-normal py-2 px-4 rounded-lg '>Add to Cart  :  Rs.{addCommas(response.ProductPrice)}</button>
      <h1 className='font-bold ml-10 relative top-16 text-xl text-rose-950'>Offers</h1>
      <div className="offer w-4/5 text-rose-950 rounded-lg border-rounded border-dotted border-2 border-red-950 ml-10 mt-20 h-20 flex flex-col justify-around font-medium items-center">
        <h1 className='offer-text'>Flat Rs 250 Off | Use Code : FIRSTBUY </h1>
        <p className='description'>Valid on 1st order only| Min. Order value Rs 2500</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Productview