import React from 'react'
import Image from "../../public/bg img.png"

const Background = () => {
  return (
    <>
    <div className='w-full h-[88vh] fixed z-[2]'>
    <img src={Image} alt="" width={500} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'/>
    </div>

   

      {/*<h1 className=' text-[10vw]'>Docs.</h1>*/}
    </>
  )
}

export default Background