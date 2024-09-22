import React from 'react'
import { FaRegFileArchive } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={.1} dragTransition={{bounceStiffness: 600, bounceDamping: 10}} className='relative flex-shrink-0 w-40 h-48 rounded-[20px] bg-[#297EA6] p-3 overflow-hidden'>
        <FaRegFileArchive />
        <p className='text-xs mt-3 text-left leading-tight'>{data.desc}</p>
        <div className='footer absolute w-full bottom-0 left-0 h-10 py-2 '>
            <div className='flex items-center justify-between px-3'>
                <h4 className='text-xs'>{data.filesize}</h4>
                <span className='w-7 h-7 rounded-full flex justify-center items-center bg-[#001829]'>
                {
                    data.close ? <IoClose size=".8em" /> : <LuDownload size=".8em" />
                }
                </span>
            </div>
        </div>
        
    </motion.div>
  )
}

export default Card