import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import fashion from "../../../public/img/fashion.jpg"
import Link from 'next/link'
import pic1 from "../../../public/img/1.jpg";
import pic2 from "../../../public/img/2.jpeg";
import pic3 from "../../../public/img/3.jpeg";
import pic4 from "../../../public/img/4.jpg";
import pic5 from "../../../public/img/5.jpg";
import pic6 from "../../../public/img/6.jpeg";
import Subscribe from '../components/Subscribe'

const Fashion = () => {
  return (
    <>
    <Header/>
   {/* Hero section start from Here */}
   <section className="text-gray-600 body-font">
      <div className="container px-5 py-1 mx-auto flex flex-wrap">
        <div className="lg:w-full mx-auto">
          <div className="relative bg-slate-400 py-32 px-10">
            <Image
              src={fashion}
              alt="Shooting Stars"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="opacity-30 absolute inset-0"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl title-font mb-2 text-white font-bold">Fashion News </h2>
              <p className="leading-relaxed font-semibold text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* hero section end here */}
    <section>
      <div className="max-w-7xl mx-auto my-8 px-4">
        <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
        Fashion News
        </div>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/writey-ai">
              <div className="relative w-full aspect-video">
                <Image
                  src={pic1}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Writey A.I</h2>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched
                blog posts in minutes, provides content optimization advice, and
                works with a plagiarism-free rule.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <Link href={""}>Read More</Link>
                </li>
              </ul>
            </div>
          </li>

          {/* More tools here... */}
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/writey-ai">
              <div className="relative w-full aspect-video">
                <Image
                  src={pic2}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Writey A.I</h2>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched
                blog posts in minutes, provides content optimization advice, and
                works with a plagiarism-free rule.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <Link href={""}>Read More</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/writey-ai">
              <div className="relative w-full aspect-video">
                <Image
                  src={pic3}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Writey A.I</h2>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched
                blog posts in minutes, provides content optimization advice, and
                works with a plagiarism-free rule.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <Link href={""}>Read More</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/writey-ai">
              <div className="relative w-full aspect-video">
                <Image
                  src={pic4}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Writey A.I</h2>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched
                blog posts in minutes, provides content optimization advice, and
                works with a plagiarism-free rule.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <Link href={""}>Read More</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/writey-ai">
              <div className="relative w-full aspect-video">
                <Image
                  src={pic5}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Writey A.I</h2>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched
                blog posts in minutes, provides content optimization advice, and
                works with a plagiarism-free rule.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <Link href={""}>Read More</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/writey-ai">
              <div className="relative w-full aspect-video">
                <Image
                  src={pic6}
                  alt="Shooting Stars"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className=" absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Writey A.I</h2>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched
                blog posts in minutes, provides content optimization advice, and
                works with a plagiarism-free rule.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <Link href={""}>Read More</Link>
                </li>
              </ul>
            </div>
          </li>
          
        </ul>
      </div>
      
    </section>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Fashion