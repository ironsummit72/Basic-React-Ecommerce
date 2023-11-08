import React from 'react'
import '../global.css'
export default function QuantitySelector({onHandleDecrement,onHandleIncrement,quantity,isDisabled}) {
  return (
    <>
    <div className="custom-number-input h-10 w-32 ml-10 mt-8">
    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button onClick={onHandleDecrement} disabled={isDisabled} data-action="decrement" className=" border border-black text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span className="m-auto text-2xl font-thin">−</span>
     </button>
    <input type="number" className="outline-none remove-arrow focus:outline-none text-center w-full border border-black font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
    <button disabled={isDisabled} data-action="increment" onClick={onHandleIncrement} className="border border-black text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span className="m-auto text-2xl font-thin">+</span>
    </button>
    </div>
    </div>
</>
  )
}
