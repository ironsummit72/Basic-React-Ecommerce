import { useEffect, useState } from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import axios from "axios"
import "./style/filter.css";
import { createLocalStorage } from "./module/LocalStorageApi";
function App() {
  const [card, setCard] = useState([]);
  const [responseState, setResponse] = useState([]);
  const isLocal = false;
  const BackendUrl = isLocal
    ? process.env.REACT_APP_LOCAL_URL
    : process.env.REACT_APP_BACKEND_URL;

const sortByName=(data)=>{
const newarray=data.map((items)=>items)
let sortedData=newarray.sort((a,b)=>{
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
return sortedData;
}


const sortByPrice=(data)=>{
  const newarray= data.map((items)=>items)
  let sortedData=newarray.sort((a,b)=> b.ProductPrice-a.ProductPrice)
  return sortedData

}
const onHandleClick=()=>{

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
      createLocalStorage('cartData');
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
  return (
    <> 
      <Filter onHandleChange={onFilterChange}/>
      {card.map((items,key)=>{
        try{
          let imageurl=BackendUrl+items.Paths[0].path
          return <Card key={key} productid={items._id} productname={items.ProductName} price={items.ProductPrice} imageurl={imageurl} inStock={true} onHandleClick={onHandleClick}/>
        }catch(error )
        {
        }
      })}
    </>
  );
}

export default App;
