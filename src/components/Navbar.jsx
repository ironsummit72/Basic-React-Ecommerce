import { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Context,SearchContext } from '../context/MyContext'
import SearchBar from './SearchBar';


function Navbar()
{
  const { cartCount } = useContext(Context);
  const { query, setQuery } = useContext(SearchContext);
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };
    return <>
    <nav className="bg-gray-900 h-24">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-48 sm:block mt-4">
          <div className="flex space-x-8 space-y-8 ">
            <SearchBar onHandleChange={onchangeHandler} value={query}/>
            <NavLink to="/" className={({isActive})=>`${isActive?'bg-gray-500 h-min text-white rounded-md px-3 py-2 text-sm font-medium':""} h-min text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`} aria-current="page">Products</NavLink>
            <NavLink to="/wishlist" className={({isActive})=>`${isActive?'bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':""} h-min text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Wishlist</NavLink>
            <NavLink to="cart" className={({isActive})=>`${isActive?'bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':""} h-min text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-between items-center w-20`}>Cart
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartCount}</p>
            </NavLink>
            <NavLink to="/orders" className={({isActive})=>`${isActive?'h-min bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':""} h-min text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Orders</NavLink>
            <NavLink to="/more" className={({isActive})=>`${isActive?'h-min bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':""}  h-min text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>More</NavLink>
            <NavLink to="/about" className={({isActive})=>`${isActive?'h-min bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':""} h-min text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>About</NavLink>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" fill="white" strokeLinejoin="round" d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
   
      <NavLink to="/" className={({isActive})=>`${isActive?'bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':''}`} aria-current="page">Products</NavLink>
      <NavLink to="/orders" className={({isActive})=>`${isActive?'bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':''}`}>Your Orders</NavLink>
      <NavLink to="/more" className={({isActive})=>`${isActive?'bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':''}`}>More</NavLink>
      <NavLink to="/about" className={({isActive})=>`${isActive?'bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium':''}`}>About Us</NavLink>
    </div>
  </div>
</nav>
    </>
}
export default Navbar