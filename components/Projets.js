import React, { useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "../styles/Projets.module.scss";

import { ModalProvider } from "../context/Context";
import { Context } from "../context/Context";

import { dataProjets } from "../data/projets/dataProjets";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import brique from "../public/assets/projetsImg/casse_brique.png";
import eshop from "../public/assets/projetsImg/eshop.png";
import memory from "../public/assets/projetsImg/memory.png";
import hiroko from "../public/assets/projetsImg/siteHiroko.png";
import snake from "../public/assets/projetsImg/snake.png";
import smoke from "../public/assets/projetsImg/smoke.jpg";

export default function Projets() {
    gsap.registerPlugin(ScrollTrigger);

    const projet_title_Ref = useRef(null);
    const projet_bottom_border_Ref = useRef(null);
    const projet_item_Ref = useRef(null);
 
    const pro1_Ref = useRef(null)
    const pro2_Ref = useRef(null)
    const pro3_Ref = useRef(null)
    const pro4_Ref = useRef(null)
    const pro5_Ref = useRef(null)
    const pro6_Ref = useRef(null)


    useEffect(() => {
        // title
        gsap.fromTo(
            projet_title_Ref.current,
            { opacity: 0, x: 300 },

            {
                scrollTrigger: {
                    trigger: projet_title_Ref.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                x: 0,
                opacity: 1,
                delay: 0,
            }
        );
        // bottom line
        gsap.fromTo(
            projet_bottom_border_Ref.current,
            { opacity: 0, x: 300, rotateY: 90 },

            {
                scrollTrigger: {
                    trigger: projet_bottom_border_Ref.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
               
                },
                x: 0,
                rotateY: 0,
                opacity: 1,
                delay: 0.3,
               
            }
        );
            // projet item 1
           gsap.fromTo(
            pro1_Ref.current,
            { opacity: 0, x:-300, scale:1 },

            {
                scrollTrigger: {
                    trigger: pro1_Ref.current,
                    start: "top 60%",
                    toggleActions: "play none none none",
                },
                x: 0,
                scale : 1,
                opacity: 1,
                // delay: 0,
            }
        );
        // projet item 2
        gsap.fromTo(
            pro2_Ref.current,
            { opacity: 0, y:-200 },

            {
                scrollTrigger: {
                    trigger: pro2_Ref.current,
                    start: "top 60%",
                    toggleActions: "play none none none",
                },
                y: 0,
                opacity: 1,
                delay: .3,
            }
        );
        // projet item 3
        gsap.fromTo(
            pro3_Ref.current,
            {opacity: 0, y:-100, x:50 },

            {
                scrollTrigger: {
                    trigger: pro3_Ref.current,
                    start: "top 60%",
                    toggleActions: "play none none none",
                },
                x: 0,
                y: 0,
                opacity: 1,
                delay: .5,
            }
        );
            // projet item 4
            gsap.fromTo(
                pro4_Ref.current,
                {opacity: 0, y:100, x:-50 },
    
                {
                    scrollTrigger: {
                        trigger: pro4_Ref.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    x: 0,
                    y: 0,
                    opacity: 1,
                    delay: 0,
                }
            );
                // projet item 5
                gsap.fromTo(
                    pro5_Ref.current,
                    {opacity: 0, y:50, x:0 },
        
                    {
                        scrollTrigger: {
                            trigger: pro5_Ref.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                        x: 0,
                        y: 0,
                        opacity: 1,
                        delay: 0.4,
                    }
                );
                  // projet item 6
                  gsap.fromTo(
                    pro6_Ref.current,
                    {opacity: 0, y:100, x:50 },
        
                    {
                        scrollTrigger: {
                            trigger: pro6_Ref.current,
                            start: "top 80%",
                            
                            toggleActions: "play none none none",
                        },
                        x: 0,
                        y: 0,
                        opacity: 1,
                        delay: 0.5,
                    }
                );

    }, []);

  

 

    return (
        <div>
            <div id="projets" className={css.projet_container}>
                <div className={css.projet_title_container}>
                    <h1 ref={projet_title_Ref} className={css.projet_title}>
                        PROJECTS
                    </h1>
                    <div
                        ref={projet_bottom_border_Ref}
                        className={css.projet_bottom_border}
                    ></div>
                </div>

                <div className={css.projet_grid}>
                    {/* smoke spot 1 */}
                    <div ref={pro1_Ref} className={css.card_container}>
                        <div className={css.img_card}>
                            <div className={css.overlay}>
                                <h3>Smoke-Spot </h3>
                                <h4> Javascript / Leaflet / Reactjs </h4>
                                <Link href="https://japan-smoke-spot.vercel.app/">
                                    <a target="_blank"> SEE MORE</a>
                                </Link>
                            </div>
                            <Image
                                src={smoke}
                                width={500}
                                height={300}
                                alt="Smoke-Spot"
                                layout="responsive"
                            />
                        </div>
                    </div>

                    {/* eshop 2 */}
                    <div ref={pro2_Ref} className={css.card_container}>
                        <div className={css.img_card}>
                            <div className={css.overlay}>
                                <h3>Amazoun </h3>
                                <h4> Javascript Nextjs Reactjs </h4>
                                <Link href="https://eshop-nextjs-one.vercel.app/">
                                    <a target="_blank"> SEE MORE</a>
                                </Link>
                            </div>
                            <Image
                                src={eshop}
                                width={500}
                                height={300}
                                alt="e-shop"
                                layout="responsive"
                            />
                        </div>
                    </div>

                    {/* hiroko 3 */}
                    <div ref={pro3_Ref} className={css.card_container}>
                        <div className={css.img_card}>
                            <div className={css.overlay}>
                                <h3>Café Japonais </h3>
                                <h4> Javascript </h4>
                                <Link href="https://cafe-japonais-hiroko-yamamoto.vercel.app/">
                                    <a target="_blank"> SEE MORE</a>
                                </Link>
                            </div>
                            <Image
                                src={hiroko}
                                width={500}
                                height={300}
                                alt="japanese teacher"
                                layout="responsive"
                            />
                        </div>
                    </div>
                    {/* snake 4 */}
                    <div ref={pro4_Ref} className={css.card_container}>
                        <div className={css.img_card}>
                            <div className={css.overlay}>
                                <h3>Snake</h3>
                                <h4> Javascript</h4>
                                <Link href="https://jeux-snake-js.vercel.app/">
                                    <a target="_blank"> SEE MORE</a>
                                </Link>
                            </div>
                            <Image
                                src={snake}
                                width={500}
                                height={300}
                                alt="snake game"
                                layout="responsive"
                            />
                        </div>
                    </div>
                    {/* memory card 5 */}
                    <div ref={pro5_Ref} className={css.card_container}>
                        <div className={css.img_card}>
                            <div className={css.overlay}>
                                <h3>Memory Card </h3>
                                <h4> Javascript </h4>
                                <Link href="https://memory-card-teal.vercel.app/">
                                    <a target="_blank"> SEE MORE</a>
                                </Link>
                            </div>
                            <Image
                                src={memory}
                                width={500}
                                height={300}
                                alt="Memory"
                                layout="responsive"
                            />
                        </div>
                    </div>
                    {/* brique 6 */}
                    <div ref={pro6_Ref} className={css.card_container}>
                        <div className={css.img_card}>
                            <div className={css.overlay}>
                                <h3>Casse Brique </h3>
                                <h4> Javascript</h4>
                                <Link href="https://casse-brique.vercel.app/">
                                    <a target="_blank"> SEE MORE</a>
                                </Link>
                            </div>
                            <Image
                                src={brique}
                                width={500}
                                height={300}
                                alt="Casse Brique game"
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
