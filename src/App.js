
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import "./style/filter.css"
function App() {
  const [products,setProducts]=useState([]);
  const [sortByPrice,setSortByPrice]=useState([]);
  const [sortByName,setSortByName]=useState([]);
  const isLocal=false;
  let filterValue=undefined
  const BackendUrl= isLocal? 'http://localhost:3000/':'http://192.168.1.100:3000/'
  const byPriceSort= (products)=>{
    
    let sorted= products.map(element => {
      return element
    });
    let byPrice= sorted.sort((a,b)=> b.ProductPrice-a.ProductPrice)
    return byPrice
    //setProducts(sortByPrice)
    
    
  }
  const byNameSort=(products)=>{
    let sorted= products.map(element => {
      return element
    });
    let byName= sorted.sort((a,b)=>{
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
      return 0;
    })
  console.log(byName);
  setSortByName(byName)
  setProducts(sortByName)

  
}
useEffect(()=>{
  console.log("on start");
  fetchUserData()

},[])

const filterOnSelect=(e)=>{
   filterValue=e.target.value
  if(filterValue==='price')
  {
    let Price=byPriceSort(products)
  
    setSortByPrice(Price)
    setProducts(sortByPrice)
      
      
    }if(filterValue==='name')
    {
      byNameSort(products)
      
    }
   

  }
  useEffect(()=>{

   byNameSort(products)
  
  },[filterValue])

  const fetchUserData=async()=>{
    console.log(BackendUrl);
    let data=await fetch(`${BackendUrl}products`)
    let response=await data.json()
    console.log(response);
    setProducts(response);  
  }
  
 // console.log(products[0].Paths[0].path); ${items.Paths[3].path}
 

  return (
<>
<Navbar/>
<Filter onHandleChange={filterOnSelect}/>
{
  products.map((items,index)=>{
    return <Card2 productname={items.ProductName} price={items.ProductPrice} imageurl={`${BackendUrl}${items.Paths[3].path}`} onHandleClick={(e)=>{console.log(e.target.firstChild.innerText,`_id ${items._id}`);
    document.title=e.target.firstChild.innerText
    }}  key={items._id}  />
  })
}

</>
  )
}

export default App;
