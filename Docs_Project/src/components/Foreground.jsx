import React, {useRef} from 'react'
import Card from './Card'


const Foreground = () => {

  const ref = useRef(null)


  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      filesize: "0.9mb",
      close: true
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      filesize: "10mb",
      close: false
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      filesize: "5mb",
      close: true
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      filesize: "8mb",
      close: false
    }
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex-wrap flex gap-2 p-5'>
        {data.map((item, index) => (
          <Card key={index} data={item} reference = {ref} />
        ))}
    </div>
  )
}

export default Foreground