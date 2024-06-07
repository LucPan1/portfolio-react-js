import React from 'react'
import Link from 'next/link'
import { AiOutlineMail} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className='pt-44 w-full h-screen text-center'>
        <div className='max-w-[1200px] w-full mx-auto p-2 flex justify-center items-center'>
            <div>
         
            <h1> Salut, je suis <span className='text-[#5651e5]'>Luc</span>
            </h1>
            <h1 className='py-2 text-gray-700'>Développeur full-stack</h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Je suis un développeur web spécialisé dans le développement 
                web. Actuellement, je me concentre dans des projets d'applications front-end 
                et tout en apprenant la technologie back-end.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href='https://www.linkedin.com/in/luc-pan-1314b7233/' target="_blank"> <FaLinkedinIn /> </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href='https://github.com/LucPan1' target="_blank"> <FaGithub /> </Link>
                </div>
                
                <a
                    href='/assets/contact/CV.pdf'
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                <button className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    Mon CV
                </button>
                </a>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main