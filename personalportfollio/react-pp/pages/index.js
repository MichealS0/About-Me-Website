import Head from 'next/head';
import Image from 'next/Image';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import mineimage from "../public/Author.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Personal Portfollio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" cross0origin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;800&display=swap" rel="stylesheet" />

      </Head>
      <main>
        <section className='min-w-full min-h-screen bg-[#171717]'>
          <section>
            <nav className='text-[#EDEDED] flex justify-around py-2 border-b-[1px] border-gray-500'>
              <p> Awaab T. Kheiri.</p>
              <ul className='flex flex-row gap-3'>
                <li><a className='hover:text-[#DA0037] duration-200 hover:p-3' href="#About">About.</a></li>
                <li><a className='hover:text-[#DA0037] duration-200 hover:p-3' href="#Resume">Resume.</a></li>
                <li><a className='hover:text-[#DA0037] duration-200 hover:p-3' href="#Contact">Get In Touch.</a></li>
              </ul>
            </nav>
            <section className='text-center text-[#EDEDED] md:flex justify-center md:mt-[10%]'>
              <section>
                <section className='md:w-[640px] md:mt-[25%]'>
                  <p>👋</p>
                  <p className='font-extrabold text-2xl'>Hello, I am <span className='hover:text-[#DA0037] duration-200 cursor-pointer'>Awaab Tariq Kheiri</span></p>
                  <p className='p-6 py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend velit sed metus mattis dignissim. Suspendisse pretium risus pharetra mattis sagittis. Vivamus sollicitudin interdum tristique. Nulla lacinia mauris elit, in.</p>
                  <section className='flex justify-center gap-4 py-3'>
                    <a ><FaInstagram /></a>
                    <a><FaYoutube /></a>
                    <a><FaGithub /></a>
                    <a><FaLinkedinIn /></a>
                  </section>
                  <section className=' mt-[55%] ml-[75%] w-4 animate-bounce'>
                    <a><FaRegArrowAltCircleDown /></a>
                  </section>
                </section>
              </section>
              <section>
               <Image src={mineimage} className=' object-scale-down h-[160px] w-[160px] mx-auto rounded-[100%] md:h-[440px] md:rounded-none md:object-fit md:w-[440px]'/>
              </section>
            </section>
          </section>
        </section>
      </main>
    </div>
  )
}
