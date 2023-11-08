import React from 'react'
import addCommas from '../module/addComma'
import { Link } from 'react-router-dom'


function Checkout({Total,isFreeShipping=false,Shipping=0,totalCartItems=0}) {

  return (
    <>
    <div className="Card w-full h-40 bg-white shadow-2xl shadow-black sticky bottom-0  flex flex-row mt-56">
        <div className="textContainer flex flex-col">
        <h1 className='bagtotal font-light text-1xl ml-5 mt-4'>Bag Total:<span className='font-medium text-2xl'> Rs. {addCommas(Total)}</span></h1>
        <p className="shipping mt-4 ml-5">Shipping Charges: <span className={`${isFreeShipping?"text-green-500":""}`}>{`${isFreeShipping?"You are eligible for free shipping!":'Rs. '+addCommas(Shipping)}`}</span></p>
        <h1 className="grandtotal font-medium text-1xl mt-3 ml-5">Grand Total: <span className='text-2xl'>Rs. {addCommas(Total+Shipping)}</span></h1>
        </div>
        <h1 className='font-normal text-2xl relative top-4 left-72'>Cart<span className='font-medium'>{` (${totalCartItems} items)`}</span></h1>
        <Link to={'/userdetails'} className='bg-rose-950  h-12 text-white px-3.5 py-3 rounded-md mt-24 ml-28 font-medium'>PROCEED TO PAYMENT</Link>
    </div>
    </>
  )
}

export default Checkout