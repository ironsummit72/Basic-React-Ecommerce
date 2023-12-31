import React, { useState } from 'react'
import { MdNavigateNext} from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import ImageMagnifier from './ImageMagnifier';


function ImageView({indexImg,imgarray,onClose,BackendUrl}) {
        const [index, setIndex] = useState(indexImg);
        const [isNext,setIsNext] = useState(index < imgarray.length - 1?true:false);
        const [isPrevious,setIsPrevious] = useState(index > 0?true:false);
        
        const onNext = () => {
          if (index < imgarray.length - 1) {
            setIsPrevious(true)
            setIndex(index + 1);
          }
          else{
            setIsNext(false);
          }
        };
        const onPrevious = () => {
          if (index > 0) {
            setIsNext(true)
            setIndex(index - 1);
          }
          else{
            setIsPrevious(false)
          }
        };

        return (
            <div className="w-full h-full flex flex-col items-center mt-8">
                <ImageMagnifier imageurl={BackendUrl+imgarray[index].path}  />
                <div className="flex justify-between w-96 sticky bottom-4">
               <button className={`${isPrevious?"":"hidden"} w-20 h-20 border-2 bg-white rounded-full flex justify-center items-center`} onClick={onPrevious}><GrFormPrevious size={30} /></button>
                <button className='w-20 h-20 border-2 bg-white rounded-full flex justify-center items-center' onClick={onClose}><IoMdClose size={30}/></button>
                <button className={`${isNext?"":"hidden"} w-20 h-20 border-2 bg-white rounded-full flex justify-center items-center`} onClick={onNext}><MdNavigateNext size={30}/></button>
                </div>
            </div>
        )
}

export default ImageView