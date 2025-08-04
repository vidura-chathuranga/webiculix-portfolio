"use client"
import Image from 'next/image';
import ArrowIcon from '../assets/icons/arrow-w.svg';
import CursorImage from '../assets/images/cursor.png';
import MessageImage from '../assets/images/message.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,_#000,_#200D42_34%,_#4F21A1_65%,_#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px]  lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,_#000_82%,_#9560EB)] bottom-24 top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex justify-center items-center ">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,_#F87AFF,_#FB93D0,_#FFDD99,_#C3F0B2,_#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <div className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowIcon />
            </div>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br />
              at a Time
            </h1>
            <motion.div className='absolute right-[476px] top-[108px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt="Cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div className='absolute top-[56px] left-[498px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt="Message"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            sapiente libero? Minima, nesciunt voluptatem rerum alias pariatur
            odit vero aliquam quae, deserunt ab, mollitia deleniti eaque. Ipsam
            autem hic laudantium.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
