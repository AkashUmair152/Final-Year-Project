import React from 'react'
import pic1 from '../../../public/img/1.jpg'
import Image from 'next/image'

const Gallery = () => {
  return (
    <>
    <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
  <div className="relative rounded overflow-hidden">
  <Image
                  src={pic1}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Hanging Planters
    </p>
  </div>

  
</div>
<div className="relative rounded overflow-hidden">
  <Image
                  src={pic1}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Hanging Planters
    </p>
  </div>
  <div className="relative rounded overflow-hidden">
  <Image
                  src={pic1}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Hanging Planters
    </p>
  </div>
  <div className="relative rounded overflow-hidden">
  <Image
                  src={pic1}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
    <p
      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Hanging Planters
    </p>
  </div>
    </>
  )
}

export default Gallery