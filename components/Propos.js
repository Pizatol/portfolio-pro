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

    useEffect(() => {
        gsap.fromTo(
            title_ref.current,
            { opacity: 0, x: -300 },

            {
                scrollTrigger: {
                    trigger: title_ref.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                x: 0,
                opacity: 1,
                delay: 0,
            }
        );
        gsap.fromTo(
            bottom_line_ref.current,
            { opacity: 0, x: -200 },

            {
                scrollTrigger: {
                    trigger: bottom_line_ref.current,
                    start: "top 75%",
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
                    start: "top 75%",
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
                    start: "top 75%",
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
                    start: "top 75%",
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
                    start: "top 75%",
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
                    start: "top 75%",
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
                    start: "top 75%",
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
                    start: "top 75%",
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
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotateY: 0,
                delay: 0.8,
            }
        );
    }, []);

    return (
        <div className={css.propos_container}>
            <div className={css.qualityIcons_container}>
                <QualityIcon value={qualityIcons[0]} url={lamp} />
                <QualityIcon value={qualityIcons[1]} url={rocket} />
                <QualityIcon value={qualityIcons[2]} url={screen} />
                <QualityIcon value={qualityIcons[3]} url={speed} />
            </div>

            <div className={css.propos_title_container}>
                <h1 ref={title_ref} className={css.propos_title}>
                    A propos
                </h1>
                <div
                    ref={bottom_line_ref}
                    className={css.propos_bottom_border}
                ></div>
            </div>
            <p className={css.propos_txt}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem sit dolorem nisi aperiam aut mollitia nostrum a
                consequatur quam! Suscipit quae quam blanditiis molestiae
                accusamus. Dignissimos, hic, magnam repudiandae facere
                perspiciatis atque, qui ullam culpa suscipit numquam debitis
                amet quas earum odio et ea beatae sed iusto dolorem ex deserunt!
            </p>

            <div className={css.icon_container}>
                <div ref={imgRef1} className={css.icon_item}>
                    <Image
                        src={icons[0].url}
                        width={100}
                        height={100}
                        alt={icons[0].name}
                    />
                    <p className={css.icon_subtitle_item}>html</p>
                </div>
                <div ref={imgRef2} className={css.icon_item}>
                    <Image
                        src={icons[1].url}
                        width={100}
                        height={100}
                        alt={icons[1].name}
                    />
                    <p className={css.icon_subtitle_item}>css</p>
                </div>

                <div ref={imgRef3} className={css.icon_item}>
                    <Image
                        src={icons[2].url}
                        width={100}
                        height={100}
                        alt={icons[2].name}
                    />
                    <p className={css.icon_subtitle_item}>javascript</p>
                </div>

                <div ref={imgRef4} className={css.icon_item}>
                    <Image
                        src={icons[3].url}
                        width={100}
                        height={100}
                        alt={icons[3].name}
                    />
                    <p className={css.icon_subtitle_item}>react js</p>
                </div>

                <div ref={imgRef5} className={css.icon_item}>
                    <Image
                        src={icons[4].url}
                        width={100}
                        height={100}
                        alt={icons[4].name}
                    />
                    <p className={css.icon_subtitle_item}>next js</p>
                </div>

                <div ref={imgRef6} className={css.icon_item}>
                    <Image
                        src={icons[5].url}
                        width={100}
                        height={100}
                        alt={icons[5].name}
                    />
                    <p className={css.icon_subtitle_item}>firebase</p>
                </div>

                <div ref={imgRef7} className={css.icon_item}>
                    <Image
                        src={icons[6].url}
                        width={100}
                        height={100}
                        alt={icons[6].name}
                    />
                    <p className={css.icon_subtitle_item}>sass</p>
                </div>

                <div ref={imgRef8} className={css.icon_item}>
                    <Image
                        src={icons[7].url}
                        width={100}
                        height={100}
                        alt={icons[7].name}
                    />
                    <p className={css.icon_subtitle_item}>greensock</p>
                </div>
            </div>
        </div>
    );
}
