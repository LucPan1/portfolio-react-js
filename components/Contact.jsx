import Image from 'next/image';
//import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact/get_in_touch.jpg';

const Contact = () => {
  return (
    <div id='contact' className='lg:h-screen'>
      <div className='max-w-[500px] m-auto px-2 py-16 '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
      
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Luc PAN</h2>
                <p>Développeur Front-end</p>
                <p className='pt-4'>
                  Je suis disponible à partir de novembre/décembre 2023 pour un contrat en alternance.
                  N'hésitez pas à me contacter ou pour discuter sur l'adresse mail: lucpan2003@gmail.com
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Retrouvez moi sur</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/luc-pan-1314b7233/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/LucPan1'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  
                    <a
                    href='/assets/contact/CV.pdf'
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>

                    </a>
                
                </div>
              </div>
            </div>
          </div>

         </div>
        
      </div>
    
  );
};

export default Contact;