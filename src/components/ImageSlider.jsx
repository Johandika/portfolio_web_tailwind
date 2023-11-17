import { useState } from "react"
import {udemycertificate,bwacertificate, coursenetcertificate, freecodecampcertificate,dicodingcertificate} from '../assets/images/index'
import { motion } from "framer-motion";
import Button from './Button'

const ImageSlider = () => {
  const [positionIndex,setPositionIndex]=useState([0,1,2,3,4])
  
  const handleNext = () => {
    setPositionIndex((prevIndex) =>{
      const updateIndex =prevIndex.map((prevIndex) =>(prevIndex +1) %5)
      return updateIndex
    })
  }
  
  const images = [
    udemycertificate,
    bwacertificate,
    coursenetcertificate,
    freecodecampcertificate,
    dicodingcertificate
  ]
  
  const positions = [
    'center',
    'left1',
    'left',
    'right',
    'right1'
  ]

  const imageVariants = {
    center: {x:'0%',scale:1, zIndex:5},
    left1: {x:'-50%',scale:0.7, zIndex:2},
    left: {x:'-90%',scale:0.5, zIndex:1},
    right: {x:'90%',scale:0.5, zIndex:1},
    right1: {x:'50%',scale:0.7, zIndex:2},
  }
  
  return (
    <div className="flex flex-col w-full relative">
      <div className="w-full h-[calc(70vh-70px)] sm:h-[calc(90vh-90px)] flex items-center justify-center  ">
        {images.map((image,index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className='rounded-xl w-[90%] sm:w-[40%] absolute'
            initial='center'
            animate={positions[positionIndex[index]]}
            variants={imageVariants}
            transition={{duration:0.5}}
            onClick={()=>alert('hai')}
          />
        ))}
      </div>
      <Button text={'Next'} className="text-white self-center rounded-md py-2 px-4" onClick={handleNext} outline/>
    </div>
  )
}

export default ImageSlider