import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blogImg from '../public/assets/projects/blog.png'
import bonbonsImg from '../public/assets/projects/bonbons2.png'
import tshopImg from '../public/assets/projects/tshop.png'
import reservationImg from '../public/assets/projects/reservation-csharp.png'
import sicilylinesImg from '../public/assets/projects/sicilylines.png'


const Projects = () => {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1200px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>Mes projets</h2>
            <div className='grid md:grid-cols-2-gap-8'>
            

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10'  src={blogImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] translate-y-[-45%] '>
                <h3 className='text-2xl text-white tracking-wider text-center'>Site web Ellis-car</h3>
                <p className='pb-4 pt-2 text-white text-center'>Création d'articles et améliorer la mise en page 
                avec Elementor Wordpress dans l'onglet blog</p>
                <Link href='https://www.ellis-car.fr/blog/' target="_blank">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Voir le site</p>
                </Link>       
            </div>
            </div>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10'  src={tshopImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] translate-y-[-45%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Site web de e-commerce TShop</h3>
                <p className='pb-4 pt-2 text-white text-center'>Projet fait en groupe pendant mes études et développé en partie front-end avec HTML/CSS et bootstrap</p>
                <Link href='https://github.com/LucPan1/TShop' target="_blank">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Lien GitHub</p>
                </Link>       
            </div>
            </div>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10'  src={reservationImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] translate-y-[-45%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Logiciel de réservation de voyage</h3>
                <p className='pb-4 pt-2 text-white text-center'>Projet réalisé en C# durant ma formation de bts sio qui va permettre réserver un voyage prédéfini</p>
                <Link href='https://github.com/LucPan1/Logiciel_Reservation-Voyage' target="_blank">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Lien GitHub</p>
                </Link>       
            </div>
            </div>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10'  src={bonbonsImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] translate-y-[-45%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Site de bonbons</h3>
                <p className='pb-4 pt-2 text-white text-center'>Projet codé en PHP durant mes études qui va permettre de supprimer, modifer et ajouter un bonbon
                de notre choix</p>
                <Link href='https://github.com/LucPan1/Projet-Bonbons' target="_blank">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Lien GitHub</p>
                </Link>       
            </div>
            </div>

            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10'  src={sicilylinesImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] translate-y-[-45%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Logiciel de réservation de bateau</h3>
                <p className='pb-4 pt-2 text-white text-center'>Logiciel qui va permettre de supprimer, modifier et ajouter
                une liaison pour une traversée en bateau en C#</p>
                <Link href='https://github.com/MaksY18/Mission2_SicilyLines' target="_blank">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Lien GitHub</p>
                </Link>       
            </div>
            </div>

          
           


            </div>
        </div>
    </div>
  )
}

export default Projects