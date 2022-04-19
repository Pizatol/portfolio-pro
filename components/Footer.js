

import React from 'react'
import css from '../styles/Footer.module.scss'
import Image from 'next/image'
import linkImg from '../public/assets/icons/linkedin.svg'

export default function Footer() {
  return (
	 <div className={css.footer_container}>

			<div className={css.logo_container}>
				<div>
					<Image 
						src={linkImg}
						width={40}
						height={40}
						alt="logo linkedIn"
					/>
				</div>
			</div>
			<div className={css.text}>
				<h3> GUILLAUME BELMONTE <span>© 2022</span></h3>
			</div>

	 </div>
  )
}
