import React, { useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "../styles/Projets.module.scss";

import { ModalProvider } from "../context/Context";
import { Context } from "../context/Context";

import { dataProjets } from "../data/projets/dataProjets";
import ProjetCard from "./ProjetCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function Projets() {
    gsap.registerPlugin(ScrollTrigger);

    const { modal, setModal } = useContext(Context);

    const projet_title_Ref = useRef(null);
    const projet_bottom_border_Ref = useRef(null);
    const projet_item_Ref = useRef(null)
    let itemNb = dataProjets.length
    console.log(itemNb);

    useEffect(() => {
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
                // duration : .75
            }
        );
    }, []);

    // useEffect projet item

    useEffect(() => {





        gsap.fromTo(
            projet_item_Ref.current,
            { opacity: 0,  },

            {
                scrollTrigger: {
                    trigger: projet_item_Ref.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                },
                
                opacity: 1,
                delay: 1,
            }
        );
    }, [])

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
                    {dataProjets.map((e, index) => (
                        
                        <div className={css.projet_item}  key={index}>
                            <ProjetCard  value={e} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
