import { BiSearchAlt } from 'react-icons/bi';

function SearchBar({onHandleChange,value}) {
  return (
  <>
    <div className=' h-min w-64 bg-white justify-between relative right-20  mr-50 top-8 flex items-center  rounded-3xl' action="">
      <BiSearchAlt className='ml-4'/>
      <input type="search" className="w-5/6 focus:outline-none p-2  rounded-3xl" value={value}  placeholder={'type to search product'} onChange={onHandleChange}></input>
    </div>
  </>
  )
}

export default SearchBar