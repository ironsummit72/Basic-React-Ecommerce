import { useEffect, useState } from "react";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import axios from "axios"
import "./style/filter.css";
function App() {
  const [card, setCard] = useState([]);
  const [responseState, setResponse] = useState([]);
  const isLocal = false;
  const BackendUrl = isLocal
    ? process.env.REACT_APP_LOCAL_URL
    : process.env.REACT_APP_BACKEND_URL;

const sortByName=(data)=>{
const newarray=data.map((items)=>items)
let sort=newarray.sort((a,b)=>{
  let fa=a.ProductName.toLowerCase()
  let fb=b.ProductName.toLowerCase()
  if(fa<fb)
  {
    return -1
  }
  if(fa>fb)
  {
    return 0
  }
  return 0
})
return sort;
}


const sortByPrice=(data)=>{
  const newarray= data.map((items)=>items)

}

async function getData()
{
  try {
    const response=await axios.get(BackendUrl)
    setResponse(response.data)
    setCard(response.data)

   
  }catch (error)
  {
    console.log(error);
  }
}
useEffect(()=>{
  getData()
},[])



    const onFilterChange=(e)=>{
      const value=e.target.value
    
      if (value==='default')
      {
        setCard(responseState)
      }else if(value==='name')
      {
         setCard(sortByName(responseState))
      }else if(value==='price')
      {
        setCard(sortByPrice(responseState));
      }else{
        setCard(responseState)
      }
    }

  // console.log(products[0].Paths[0].path); ${items.Paths[3].path}

  return (
    <>
      <Navbar />
      <Filter onHandleChange={onFilterChange}/>
      {card.map((items,key)=>{
        return <Card key={key} productname={items.ProductName} price={items.ProductPrice} imageurl={`${BackendUrl}${items.Paths[0].path}`} onHandleClick={()=>{}}/>
      })}
    </>
  );
}

export default App;
