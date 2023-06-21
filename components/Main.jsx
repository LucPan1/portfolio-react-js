import React from 'react'
import { AiOutlineMail} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className='pt-44 w-full h-screen text-center'>
        <div className='max-w-[1200px] w-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'> Let's build something together 
            </p>
            <h1> Salut, je suis <span className='text-[#5651e5]'>Luc</span>
            </h1>
            <h1 className='py-2 text-gray-700'>Développeur Front-End</h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Je suis un développeur front-end spécialisé dans le développement 
                web. Actuellement, je me concentre dans des projets d'applications front-end 
                en apprenant en même temps la technologie back-end.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main