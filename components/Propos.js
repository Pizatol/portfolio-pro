import React, { useRef, useEffect } from "react";
import Image from "next/image";
import css from "../styles/Propos.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { icons } from "../public/assets/icons/Icons";

import QualityIcon from "../components/QualityIcon";
import { qualityIcons } from "../public/assets/icons/qualites/qualityIcons";
import lamp from "../public/assets/icons/qualites/lamp.svg";
import rocket from "../public/assets/icons/qualites/rocket.svg";
import screen from "../public/assets/icons/qualites/screen.svg";
import speed from "../public/assets/icons/qualites/speed.svg";

import idPerso from "../public/assets/IDperso.jpg";

export default function Propos() {
    gsap.registerPlugin(ScrollTrigger);

    const title_ref = useRef(null);
    const bottom_line_ref = useRef(null);

    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const imgRef4 = useRef(null);
    const imgRef5 = useRef(null);
    const imgRef6 = useRef(null);
    const imgRef7 = useRef(null);
    const imgRef8 = useRef(null);

    const img_perso_Ref = useRef(null);

    const quality_icon_Ref1 = useRef(null);
    const quality_icon_Ref2 = useRef(null);
    const quality_icon_Ref3 = useRef(null);
    const quality_icon_Ref4 = useRef(null);

    const quality_txt_Ref1 = useRef(null)
    const quality_txt_Ref2 = useRef(null)
    const quality_txt_Ref3 = useRef(null)
    const quality_txt_Ref4 = useRef(null)

    // useEffect icones techno + titre + bordure
    useEffect(() => {
        gsap.fromTo(
            title_ref.current,
            { opacity: 0, x: -300 },

            {
                scrollTrigger: {
                    trigger: title_ref.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                },
                x: 0,
                opacity: 1,
                delay: 0,
            }
        );
        gsap.fromTo(
            bottom_line_ref.current,
            { opacity: 0, x: -300 },

            {
                scrollTrigger: {
                    trigger: bottom_line_ref.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                },
                x: 0,
                opacity: 1,
                delay: 0.5,
            }
        );

        gsap.fromTo(
            imgRef1.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: imgRef1.current,
                    start: "top 90%",
                    toggleActions: "play none restart none",
                },
                opacity: 1,
                rotateY: 0,
            }
        );
        gsap.fromTo(
            imgRef2.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: imgRef2.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.2,
            }
        );
        gsap.fromTo(
            imgRef3.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: imgRef3.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.3,
            }
        );
        gsap.fromTo(
            imgRef4.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: imgRef4.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.4,
            }
        );
        gsap.fromTo(
            imgRef5.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: imgRef5.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.5,
            }
        );
        gsap.fromTo(
            imgRef6.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: imgRef6.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.6,
            }
        );
        gsap.fromTo(
            imgRef7.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: imgRef7.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.7,
            }
        );
        gsap.fromTo(
            imgRef8.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: imgRef8.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.8,
            }
        );
    }, []);
    // useEffect icones  Quality
    useEffect(() => {
        gsap.fromTo(
            quality_icon_Ref1.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: quality_icon_Ref1.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                   
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.1,
            }
        );
        gsap.fromTo(
            quality_icon_Ref2.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: quality_icon_Ref2.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                 
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.2,
            }
        );
        gsap.fromTo(
            quality_icon_Ref3.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: quality_icon_Ref3.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                 
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.3,
            }
        );
        gsap.fromTo(
            quality_icon_Ref4.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: quality_icon_Ref4.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                  
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.4,
            }
        );
    }, []);
    // useEffect text icones quality
    useEffect(() => {
        gsap.fromTo(
            quality_txt_Ref1.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: quality_txt_Ref1.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                  
                },
                opacity: 1,
                rotateY: 0,
                delay: 0,
            }
        );
        gsap.fromTo(
            quality_txt_Ref2.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: quality_txt_Ref2.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                    
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.2,
            }
        );
        gsap.fromTo(
            quality_txt_Ref3.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: quality_txt_Ref3.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
               
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.3,
            }
        );
        gsap.fromTo(
            quality_txt_Ref4.current,
            { opacity: 0, rotateY: 90 },
            {
                scrollTrigger: {
                    trigger: quality_txt_Ref4.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                   
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.4,
            }
        );
    }, [])
    // useEffect image perso
    useEffect(() => {
        gsap.fromTo(
            img_perso_Ref.current,
            { opacity: 0, x: -300 },
            {
                scrollTrigger: {
                    trigger: img_perso_Ref.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                   
                },
                opacity: 1,
                x: 0,
                delay: 0.0,
                duration: 1,
                ease : "back"
                
            }
        );
    }, [])

    return (
        <div className={css.propos_global_container}>
            <div className={css.propos_title_container}>
                <h1 ref={title_ref} className={css.propos_title}>
                    ABOUT ME
                </h1>
                <div
                    ref={bottom_line_ref}
                    className={css.propos_bottom_border}
                ></div>
            </div>

            <div className={css.propos_content_container}>
                {/* left */}

                <div className={css.txt_img_container} ref={img_perso_Ref} >
                    <div className={css.img_perso}>
                        <Image
                            src={idPerso}
                            width={1259}
                            height={1259}
                            alt="personal picture"
                        />
                    </div>
                    <p className={css.propos_txt}>
                        I&apos;m a Front-End Developer in Paris, Fr. I have
                        serious passion for UI effects, animations and creating
                        intuitive, dynamic user experiences.
                        <br />
                        <a href="#contact">
                            Let&apos;s do something great.
                        </a>
                    </p>
                </div>
                {/* right */}

                <div className={css.qualityIcons_container}>
                    <div className={css.icon_card}>
                        <div ref={quality_icon_Ref1}>
                            <QualityIcon
                                className={css.icon}
                                value={qualityIcons[0]}
                                url={lamp}
                            />
                        </div>
                        <div ref={quality_txt_Ref1} className={css.quality_icon_txt}>

                        <h3>Fast</h3>
                        <p>
                            Fast load times and lag free interaction, my highest
                            priority.
                        </p>
                        </div>
                    </div>
                    <div className={css.icon_card}>
                        <div ref={quality_icon_Ref2}>
                            <QualityIcon value={qualityIcons[1]} url={rocket} />
                        </div>
                        <div ref={quality_txt_Ref2} className={css.quality_icon_txt}>

                        <h3>Responsive</h3>
                        <p>My layouts will work on any device, big or small.</p>
                        </div>
                    </div>
                    <div className={css.icon_card}>
                        <div ref={quality_icon_Ref3} >
                            <QualityIcon value={qualityIcons[2]} url={screen} />
                        </div>
                        <div ref={quality_txt_Ref3} className={css.quality_icon_txt}>

                        <h3>Intuitive</h3>
                        <p>
                            Strong preference for easy to use, intuitive UX/UI.
                        </p>
                        </div>
                    </div>
                    <div className={css.icon_card}>
                        <div ref={quality_icon_Ref4} className={css.quality_icon_txt}>
                            <QualityIcon value={qualityIcons[3]} url={speed} />
                        </div>
                        <div ref={quality_txt_Ref4} className={css.quality_icon_txt}>

                        <h3>Dynamic</h3>
                        <p>
                            Websites don&apos;t have to be static, I love making
                            pages come to life.
                        </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.icon_container}>
                {/* <div ref={imgRef1} className={css.icon_item}>
                    <Image
                        src={icons[0].url}
                        width={70}
                        height={70}
                        alt={icons[0].name}
                    />
                    <p className={css.icon_subtitle_item}>html</p>
                </div> */}
                {/* <div ref={imgRef2} className={css.icon_item}>
                    <Image
                        src={icons[1].url}
                        width={70}
                        height={70}
                        alt={icons[1].name}
                    />
                    <p className={css.icon_subtitle_item}>css</p>
                </div> */}

                <div ref={imgRef3} className={css.icon_item}>
                    <Image
                        src={icons[2].url}
                        width={70}
                        height={70}
                        alt={icons[2].name}
                    />
                    <p className={css.icon_subtitle_item}>javascript</p>
                </div>

                <div ref={imgRef4} className={css.icon_item}>
                    <Image
                        src={icons[3].url}
                        width={70}
                        height={70}
                        alt={icons[3].name}
                    />
                    <p className={css.icon_subtitle_item}>react js</p>
                </div>

                <div ref={imgRef5} className={css.icon_item}>
                    <Image
                        src={icons[4].url}
                        width={70}
                        height={70}
                        alt={icons[4].name}
                    />
                    <p className={css.icon_subtitle_item}>next js</p>
                </div>

                <div ref={imgRef6} className={css.icon_item}>
                    <Image
                        src={icons[5].url}
                        width={70}
                        height={70}
                        alt={icons[5].name}
                    />
                    <p className={css.icon_subtitle_item}>firebase</p>
                </div>

                {/* <div ref={imgRef7} className={css.icon_item}>
                    <Image
                        src={icons[6].url}
                        width={70}
                        height={70}
                        alt={icons[6].name}
                    />
                    <p className={css.icon_subtitle_item}>sass</p>
                </div> */}

                {/* <div ref={imgRef8} className={css.icon_item}>
                    <Image
                        src={icons[7].url}
                        width={70}
                        height={70}
                        alt={icons[7].name}
                    />
                    <p className={css.icon_subtitle_item}>greensock</p>
                </div> */}
            </div>
        </div>
    );
}
