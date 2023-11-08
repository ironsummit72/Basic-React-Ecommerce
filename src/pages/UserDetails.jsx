import React, { useState } from 'react'
import '../global.css'
import User from '../module/userDetailsLocalStorage';

export default function UserDetails() {
    let [FirstName,setFirstName]=useState('');
    let [LastName,setLastName]=useState('');
    let [Address,setAddress]=useState('');
    let [State,setState]=useState('');
    let [City,setCity]=useState('');
    let [Phone,setPhone]=useState(0);
    let [Zipcode,setZipcode]=useState(0);
    let [Email,setEmail]=useState(0);
    const userOrderDetailsData={
        "firstName":FirstName,
        "lastName":LastName,
        "Address":Address,
        "State":State,
        "City":City,
        "Phone":Phone,
        "Zipcode":Zipcode,
        "Email":Email,
        "OrderDetails":{
            "id":"",
            "quantity":0  
            
        }
    
    }

    const onHandleSubmit=()=>{
    
        User.createUserData('userDetails',userOrderDetailsData)

    }

    
  return (
    <>
<form className='p-10'>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
            <input type="text" id="first_name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rahul" onChange={(e)=>setFirstName(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yadav" onChange={(e)=>setLastName(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address</label>
            <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} required/>
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="pin" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-black">PIN CODE </label>
            <input type="number" id="pin" className="remove-arrow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PIN CODE OR POSTAL CODE" onChange={(e)=>setZipcode(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">City</label>
            <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" onChange={(e)=>setCity(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">State</label>
            <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" onChange={(e)=>setState(e.target.value)} required/>
        </div>
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} required/>
    </div> 
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onHandleSubmit}>Submit</button>
</form>

    </>
  )
}
