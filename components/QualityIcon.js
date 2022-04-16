

import React from 'react'
import css from '../styles/QualityIcon.module.scss'
import Image from 'next/image'

import lamp from '../public/assets/icons/qualites/lamp.svg'

export default function QualityIcon(props) {

	console.log(props);
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
