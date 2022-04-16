import react, { useState, useRef, useEffect } from "react";
import css from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Rellax from "rellax";

import Propos from "../components/Propos";
import Projets from "../components/Projets";
import Contact from "../components/Contact";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


import middleImg from "../public/assets/middleImg.jpg";
import bottomImg from "../public/assets/bottomImg.jpg";
import Navbar from "../components/Navbar";




export default function Home() {
    gsap.registerPlugin(ScrollTrigger);

   
    // SCROLL TRIGGERS
    const imgHeadRef = useRef();
 


  
    return (
        <div className={css.globalContainer}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                {/* header */}

                <div className={css.headerContainer}>
                    <div className={css.imgHeader}></div>

                    {/* navbar */}

                    <div className={css.navbarContainer}>
                        <div id="top" className={css.title}>
                            <h1>Hello, I'm <span>Guillaume Belmonte.</span></h1>                         
                            <h3>I'm a front-end web developer.</h3>
                            <a href="#propos" > View my work </a>
                        </div>

                
                    </div>
                </div>
            </header>
        {/* navbar */}
            <Navbar/>

            {/* PROPOS */}
            <div id="propos">
            <Propos  />
            </div>

            {/* middle bar */}
            <div className={css.middleBar}>
                <div className={css.middleImg}>
                    <Image
                        src={middleImg}
                        width={4272 }
                        height={1529 }
                        alt="image milieu"
                        layout="responsive"
                    />
                </div>
            </div>

        {/* PROJETS */}
        <div id="projets">

        <Projets/>
        </div>

       
            {/* bottom bar */}

            <div className={css.bottomBar}>
                <div className={css.bottomImg}>
                    <Image
                        src={bottomImg}
                        width={2395}
                        height={970}
                        alt="image bottom"
                        layout="fixed"
                    />
                </div>
            </div>

            {/* CONTACT */}
            <Contact/>

          
        </div>
    );
}
