import React, { useState } from 'react'
import "../style/Imagemagnifier.css"
import { MdOutlineZoomIn } from "react-icons/md";
function ImageMagnifier({imageurl}) {
    const [position,setPosition]=useState({x:0,y:0})
    const [showMagnifier,setshowMagnifier]=useState(false)
    const [cursorPosition,setCursorPosition]=useState({x:0,y:0});
    const handleMouseMove=(e)=>{
      const {left,top,width,height}=e.currentTarget.getBoundingClientRect();
    //?  calculating the position (x,y) as percentage based on cursor location
    const scrollPosition=window.scrollY;
    const x=((e.pageX-left)/width)*100
    const y=((e.pageY-top-scrollPosition)/height)*100
    setPosition({x,y})
    
    // update cursor position to store the current mouse cursor cordinates relative to the image
    setCursorPosition({x:e.pageX-left,y:e.pageY-top-scrollPosition})


    }
  return (
     <div className="image-magnifier-container "  onMouseMove={handleMouseMove}> 
        <button onClick={()=>{setshowMagnifier((val)=>!val)}} className='w-20 h-20 border-2 bg-white rounded-full flex justify-center items-center relative left-full top-14  ml-24'><MdOutlineZoomIn size={30}/></button>
        <img src={imageurl} className=" magnifier-img w-2/4 object-cover"  alt="" />
        {showMagnifier && <div style={{position:'absolute',
        left:`${cursorPosition.x-100}px`,
        top:`${cursorPosition.y-100}px`,
        pointerEvents:"none"}}>
        <div className="magnifier-image" style={{backgroundImage:`url('${imageurl}')`,
        backgroundPosition:`${position.x}% ${position.y}%`,
        
    }}/>
    </div >}
    </div>
  
  )
}


export default ImageMagnifier