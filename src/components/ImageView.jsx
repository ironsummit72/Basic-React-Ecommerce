import React, { useState } from 'react'
import { MdNavigateNext} from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";


function ImageView({indexImg,imgarray,onClose,BackendUrl}) {
        const [index, setIndex] = useState(indexImg);
        const onNext = () => {
          if (index < imgarray.length - 1) {
            setIndex(index + 1);
          }
        };
        const onPrevious = () => {
          if (index > 0) {
            setIndex(index - 1);
          }
        };

        return (
            <div className="w-full h-full flex flex-col items-center mt-8">
                <img src={BackendUrl+imgarray[index].path} className="w-2/4 object-cover"  alt="" />
                <div className="btns flex justify-between w-96 sticky bottom-4">
                <button className='w-20 h-20 border-2 bg-white rounded-full flex justify-center items-center' onClick={onPrevious}><GrFormPrevious /></button>
                <button className='w-20 h-20 border-2 bg-white rounded-full flex justify-center items-center' onClick={onClose}><IoMdClose /></button>
                <button className='w-20 h-20 border-2 bg-white rounded-full flex justify-center items-center' onClick={onNext}><MdNavigateNext/></button>
                </div>
            </div>
        )
}

export default ImageView