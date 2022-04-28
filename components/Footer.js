

import React from 'react'
import css from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import linkImg from '../public/assets/icons/linkedin.svg'
import githubImg from '../public/assets/icons/github.svg'

export default function Footer() {
  return (
	 <div className={css.footer_container}>

			<div className={css.logo_container}>
				<div className={css.logo_item}>
					<Link href="https://www.linkedin.com/in/guillaume-belmonte-bb9098239/">
					<a target="_blank">
					<Image 
						src={linkImg}
						width={50}
						height={50}
						alt="logo linkedIn"
					/>
					</a>
					</Link>

					<Link href="https://github.com/Pizatol">
						<a target="_blank">

					<Image 
						src={githubImg}
						width={50}
						height={50}
						alt="logo linkedIn"
					/>
						</a>
					</Link>


				</div>
				<div>
				
				</div>
			</div>
			<div className={css.text}>
				<h3> GUILLAUME BELMONTE <span>© 2022</span></h3>
			</div>

	 </div>
  )
}
