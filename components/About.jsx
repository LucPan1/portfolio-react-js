import React from "react";
import Image from "next/image";
import aboutImg from "../public/assets/about/paysage.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          A propos
          </p>
          <h2 className='py-4'>Mon profil</h2>
          <p className='py-2 text-gray-600'>
          Passionné par l'informatique, particulièrement dans le domaine du
        développement web. Je trouve un grand plaisir à m'engager et participer
        activement aux projets liés au Web. Je suis motivé par l'idée de
        travailler dans une entreprise tout en montant en compétences et
        d'apprendre de nouvelles technologies. Actuellement titulaire d'un BTS SIO, 
        je suis une formation en Bachelor en Concepteur de Projet SI 
        (Concepteur Développeur d’Applications) à l'Etna pour un Bac+3.
          </p>
         
          <Link href='/#projects' scroll={false}>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Voir mes projets
            </p>
          </Link>
        </div>
        <div id='home' className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={aboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
