import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import news from "../../../public/img/news2.jpg"

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-1 mx-auto flex flex-wrap">
        <div className="lg:w-full mx-auto">
          <div className="relative bg-slate-400 py-32 px-10">
            <Image
              src={news}
              alt="Shooting Stars"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="opacity-40 absolute inset-0"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl title-font mb-2 text-white font-bold">News Updates </h2>
              <p className="leading-relaxed font-semibold text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero