

import React from 'react'
import css from '../styles/QualityIcon.module.scss'
import Image from 'next/image'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import lamp from '../public/assets/icons/qualites/lamp.svg'

export default function QualityIcon(props) {

	gsap.registerPlugin(ScrollTrigger);

  return (
	 <div className={css.icon_container}>
			<Image
			className={css.img}
				src = {props.url}
				width = {60}
				height = {60}
				alt = {props.value.name}
			/>
			<p></p>
				 </div>
  )
}
