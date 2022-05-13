import react, { useState, useRef, useEffect } from "react";
import css from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Propos from "../components/Propos";
import Projets from "../components/Projets";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


import headerImg from "../public/assets/headerImg.jpg";
import middleImg from "../public/assets/middleImg.jpg";
import bottomImg from "../public/assets/bottomImg.jpg";
import arrow from "../public/assets/icons/arrow_right.svg";

export default function Home() {

    gsap.registerPlugin(ScrollTrigger);
 

    const img_header = useRef(null)
    const title_subtitle_ref = useRef(null)
    const title_button_ref = useRef(null)

//    img_header.addEventListener('mousemove', e => {
//     img_header.style.backgroundPositionX = -e.offsetX + "px";
//     img_header.style.backgroundPositionY = -e.offsetY + "px";
//    })

    useEffect(() => {

        gsap.fromTo(
            img_header.current,
            {  scale:1 },
            {
                scrollTrigger: {
                    trigger: img_header.current,                    
                    scrub: 2,
                    start : "top top"
                    },               
                scale : 1.2,               
            })

       

    }, [])


    return (
        <div className={css.globalContainer}>
            <Head>
                <title>Guillaume Belmonte Web Dev</title>
                <meta
                    name="description"
                    content="portfolio from Guillaume Belmonte, Front-end web developper"
                />
                <link rel="icon" href="/favicon.ico" />

                <meta name="google-site-verification" content="7WrgOp4-KN6ryndOG0hFb2z5WQspESWcRfFDOY8vTtw" />
            </Head>

            <header>
                <div className={css.overlay}></div>
                {/* header */}

                <div  className={css.headerContainer}>
                    <div ref={img_header}   className={`${css.imgHeader}`}>
                        <Image                        
                            src={headerImg}
                            alt="image en-tête"
                            layout="responsive"
                        />
                    </div>

                    {/* navbar */}

                    <div className={css.navbarContainer}  ref={title_subtitle_ref}>
                        <div id="top" className={css.title}>
                        <div>
                            <h1>
                                Hello, I&apos;m <span>Guillaume Belmonte.</span>
                            </h1>
                            <h3>I&apos;m a front-end web developer.</h3>
                        </div>
                            <a href="#propos" alt="bouton voir mon travail"  >
                                About me
                                <span>
                                    <Image
                                        src={arrow}
                                        width={18}
                                        height={18}
                                        alt="flèche"
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {/* navbar */}
            <Navbar />

            {/* PROPOS */}
            <div  id="propos" className={css.propos_container}>
                <Propos />
            </div>

            {/* middle bar */}
            <div className={css.middleBar}>
                <div  className={css.middleImg}>
                  
                </div>
            </div>

            {/* PROJETS */}
            <div className={css.projets_container}>
                <Projets />
            </div>

            {/* bottom bar */}

            <div className={css.bottomBar}>
                <div className={css.bottomImg}>
                   
                </div>
            </div>

            {/* CONTACT */}
            <div id="contact"></div>
            <Contact />

            {/* FOOTER */}
            <Footer/>

        </div>
    );
}
