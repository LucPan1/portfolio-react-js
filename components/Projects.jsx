import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogImg from "../public/assets/projects/blog.png";
import bonbonsImg from "../public/assets/projects/Bonbons2.png";
import tshopImg from "../public/assets/projects/tshop.png";
import reservationImg from "../public/assets/projects/reservation-csharp.png";
import sicilylinesImg from "../public/assets/projects/sicilylines.png";
import { useRouter } from 'next/router';
import {Card, CardHeader, CardBody} from "@nextui-org/react";

const Projects = () => {
    
    /*const router = useRouter()
    const handleClick = () => {
        console.log('click')
        router.push('/project/project')
    }*/

  return (

    
    
    <div id="projects" className="w-full">
      <div className="max-w-[1200px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
           
        <h2 className="py-4">Mes projets</h2>

        <div className="flex flex-wrap justify-center">
      <Card className="py-4 mx-4 mb-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="grid md:grid-cols-2 gap-8">
            <h3 className="text-2xl tracking-wider text-center">
              Site web Ellis-car
            </h3>
            
          </div>
          <p className="text-center pt-2">Création d'articles et amélioration de la mise en page avec
              Elementor Wordpress dans l'onglet blog</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
          <a href="https://www.ellis-car.fr/blog/" target="_blank">
            <Image
              className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
              src={blogImg}
              alt="/"
            />
            </a>
          </div>
        </CardBody>
      </Card>
        
      <Card className="py-4 mx-4 mb-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="grid md:grid-cols-2 gap-8">
            <h3 className="text-2xl tracking-wider text-center">
              Site web Ellis-car
            </h3>
            
          </div>
          <p className="text-center pt-2">Création d'articles et amélioration de la mise en page avec
              Elementor Wordpress dans l'onglet blog</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
          <a href="https://www.ellis-car.fr/blog/" target="_blank">
            <Image
              className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
              src={blogImg}
              alt="/"
            />
            </a>
          </div>
        </CardBody>
      </Card>
    
      <Card className="py-4 mx-4 mb-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="grid md:grid-cols-2 gap-8">
            <h3 className="text-2xl tracking-wider text-center">
            Site web de e-commerce TShop
            </h3>
            
          </div>
          <p className="text-center pt-2">Projet fait en groupe pendant mes études et développé en partie
              front-end avec HTML/CSS et bootstrap</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative flex justify-between h-auto w-full rounded-xl p-4 pl-14">
          <a href="https://github.com/LucPan1/TShop" target="_blank">
            <Image
              className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
              src={tshopImg}
              alt="/"
            />
            </a>
          </div>
        </CardBody>
      </Card>

      <Card className="py-4 mx-4 mb-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="grid md:grid-cols-2 gap-8">
            <h3 className="text-2xl tracking-wider text-center">
            Logiciel de réservation de voyage
            </h3>
            
          </div>
          <p className="text-center pt-2">Projet réalisé en C# durant ma formation de bts sio qui va
              permettre réserver un voyage prédéfini</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
          <a href="https://github.com/LucPan1/Logiciel_Reservation-Voyage"
              target="_blank">
            <Image
              className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-78 h-68 ml-14"
              src={reservationImg}
              alt="/"
            />
            </a>
          </div>
        </CardBody>
      </Card>

      <Card className="py-4 mx-4 mb-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="grid md:grid-cols-2 gap-8">
            <h3 className="text-2xl tracking-wider text-center">
            Site de bonbons
            </h3>
            
          </div>
          <p className="text-center pt-2">Projet codé en PHP durant mes études qui va permettre de
              supprimer, modifer et ajouter un bonbon de notre choix</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
          <a href="https://github.com/LucPan1/Projet-Bonbons"
              target="_blank">
            <Image
              className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto pl-14"
              src={bonbonsImg}
              alt="/"
            />
            </a>
          </div>
        </CardBody>
      </Card>

      <Card className="py-4 mx-4 mb-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="grid md:grid-cols-2 gap-8">
            <h3 className="text-2xl tracking-wider text-center">
            Logiciel de réservation de bateau
            </h3>
            
          </div>
          <p className="text-center pt-2">Logiciel qui va permettre de supprimer, modifier et ajouter une
              liaison pour une traversée en bateau en C#</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
          <a href="https://github.com/MaksY18/Mission2_SicilyLines"
              target="_blank">
            <Image
              className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-78 h-68 ml-24"
              src={sicilylinesImg}
              alt="/"
            />
            </a>
          </div>
        </CardBody>
      </Card>

      
      {/* <Card className="py-4 mx-4 mb-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="grid md:grid-cols-2 gap-8">
            <h3 className="text-2xl tracking-wider text-center">
              Site web Ellis-car
            </h3>
            <p className="text-center pt-2">
              Création d'articles et amélioration de la mise en page avec
              Elementor Wordpress dans l'onglet blog
            </p>
          </div>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
            <Image
              className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
              src={blogImg}
              alt="/"
            />
          </div>
        </CardBody>
      </Card> */}

      {/* Ajoutez autant de cartes que nécessaire */}
    </div>

     

        {/* <h3 className="text-2xl tracking-wider text-center">
              Site web de e-commerce TShop
            </h3>
            <p className="pb-4 pt-2 text-center">
              Projet fait en groupe pendant mes études et développé en partie
              front-end avec HTML/CSS et bootstrap
            </p>
            

        <div className="relative flex items-center justify-between h-auto w-full rounded-xl p-4">
          <Image
            className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500"
            src={tshopImg}
            alt="/"
          />
        
        </div>

        <div className="max-w-[1200px] w-[200px] mx-auto justify-center items-center py-9">
        <Link href="https://github.com/LucPan1/TShop" target="_blank">
              <p className="text-center rounded-lg bg-blue-500 font-bold text-lg cursor-pointer">
                Lien GitHub
              </p>
            </Link>
            </div>

            
            <h3 className="text-2xl tracking-wider text-center">
              Logiciel de réservation de voyage
            </h3>
            <p className="pb-4 pt-2 text-center">
              Projet réalisé en C# durant ma formation de bts sio qui va
              permettre réserver un voyage prédéfini
            </p>
            
        <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4">
          <Image
            className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500"
            src={reservationImg}
            alt="/"
          />
          </div>
          <div className="max-w-[1200px] w-[200px] mx-auto justify-center items-center py-9">
            <Link
              href="https://github.com/LucPan1/Logiciel_Reservation-Voyage"
              target="_blank"
            >
              <p className="text-center content-center rounded-lg bg-blue-500 font-bold text-lg cursor-pointer">
                Lien GitHub
              </p>
            </Link>
            </div>
          
        
            <h3 className="text-2xl tracking-wider text-center">
              Site de bonbons
            </h3>
            <p className="pb-4 pt-2 text-center">
              Projet codé en PHP durant mes études qui va permettre de
              supprimer, modifer et ajouter un bonbon de notre choix
            </p>

        <div className="relative flex items-center justify-between h-auto w-full rounded-xl p-4">
          <Image
            className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500"
            src={bonbonsImg}
            alt="/"
          />
         </div>

            <div className="max-w-[1200px] w-[200px] mx-auto justify-center items-center py-9">
            <Link
              href="https://github.com/LucPan1/Projet-Bonbons"
              target="_blank"
            >
              <p className="text-center rounded-lg bg-blue-500 font-bold text-lg cursor-pointer">
                Lien GitHub
              </p>
            </Link>
            </div>
       
            <h3 className="text-2xl tracking-wider text-center">
              Logiciel de réservation de bateau
            </h3>
            <p className="pb-4 pt-2 text-center">
              Logiciel qui va permettre de supprimer, modifier et ajouter une
              liaison pour une traversée en bateau en C#
            </p>

        <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4">
          <Image
            className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500"
            src={sicilylinesImg}
            alt="/"
          />
        </div>
           
           <div className="max-w-[1200px] w-[200px] mx-auto justify-center items-center py-9">
            <Link
              href="https://github.com/MaksY18/Mission2_SicilyLines"
              target="_blank"
            >
              <p className="text-center rounded-lg bg-blue-500 font-bold text-lg cursor-pointer">
                Lien GitHub
              </p>
            </Link>
            </div> */}
        
      </div>
    </div>
  );
};

export default Projects;
