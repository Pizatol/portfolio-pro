
import React, {useRef, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import css from '../styles/Projets.module.scss'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import brique from "../public/assets/projetsImg/casse_brique.png";
import eshop from "../public/assets/projetsImg/eshop.png";
import memory from "../public/assets/projetsImg/memory.png";
import smoke from "../public/assets/projetsImg/smoke.jpg";
import snake from "../public/assets/projetsImg/snake.png";
import space from "../public/assets/projetsImg/space.jpg";

export default function Projets() {
	gsap.registerPlugin(ScrollTrigger);


	const projet_title_Ref = useRef(null);
	const projet_bottom_border_Ref = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			projet_title_Ref.current,
			 { opacity: 0, x: -300 },

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
			 { opacity: 0, x: -200 },

			 {
				  scrollTrigger: {
						trigger: projet_bottom_border_Ref.current,
						start: "top 75%",
						toggleActions: "play none none none",
				  },
				  x: 0,
				  opacity: 1,
				  delay: 0.5,
				  // duration : .75
			 }
		);
  }, []);


  return (
	 <div>

<div id="projets" className={css.projet_container}>
                    <div className={css.projet_title_container}>
                        <h1 ref={projet_title_Ref} className={css.projet_title}>
                            projets
                        </h1>
                        <div
                            ref={projet_bottom_border_Ref}
                            className={css.projet_bottom_border}
                        ></div>
                    </div>

                    <div className={css.projet_grid}>
                        <div className={css.projet_card}>
                            {/* casse brique */}
                            <Link
                                href={"https://casse-brique.vercel.app/"}
                                target="_blank"
                                passHref
                            >
                                <a target="_blank">
                                    <Image
                                        src={brique}
                                        width={1280}
                                        height={800}
                                        alt="jeux du casse brique"
                                    />
                                </a>
                            </Link>
                        </div>
                        {/* eshop */}
                        <div className={css.projet_card}>
                            <Link
                                href={"https://eshop-nextjs-one.vercel.app/"}
                                target="_blank"
                                passHref
                            >
                                <a target="_blank">
                                    <Image
                                        src={eshop}
                                        width={1280}
                                        height={800}
                                        alt="e-commerce Amazoun"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={css.projet_card}>
                            <Link
                                href={"https://memory-card-teal.vercel.app/"}
                                target="_blank"
                                passHref
                            >
                                <a target="_blank">
                                    <Image
                                        src={memory}
                                        width={1280}
                                        height={800}
                                        alt="jeux de mémoire"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={css.projet_card}>
                            <Link
                                href={"https://japan-smoke-spot.vercel.app/"}
                                target="_blank"
                                passHref
                            >
                                <a target="_blank">
                                    <Image
                                        src={smoke}
                                        width={1280}
                                        height={800}
                                        alt="smoking spots on map"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={css.projet_card}>
                            <Link
                                href={"https://jeux-snake-js.vercel.app/"}
                                target="_blank"
                                passHref
                            >
                                <a target="_blank">
                                    <Image
                                        src={snake}
                                        width={1280}
                                        height={800}
                                        alt="snake game"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={css.projet_card}>
                            <Link
                                href={"https://space-invaders-js.vercel.app/"}
                                target="_blank"
                                passHref
                            >
                                <a target="_blank">
                                    <Image
                                        src={space}
                                        width={1280}
                                        height={800}
                                        alt="Space Invaders"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>


	 </div>
  )
}
