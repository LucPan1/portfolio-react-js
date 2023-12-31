// import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Head from "next/head";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title> Luc | Développeur Front-End </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Main />  
      <About />
      <Projects /> 
      <Contact />
    </div>
  );
}
