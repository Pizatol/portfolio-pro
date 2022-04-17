import React from "react";
import css from "../styles/ProjetCard.module.scss";
import Image from "next/image";
import Link from 'next/link'

export default function ProjetCard(props) {


    return (
        <div className={css.card_container}>

            <div className={css.img_card}>
                <div className={css.overlay}>
                    <h3>{props.value.name} </h3>
                    <h4> {props.value.tech} </h4>
						 <Link href={props.value.url}>
						<a target="_blank"> SEE MORE</a>
						 </Link>

                </div>
                <Image
                    src={props.value.img}
                    width={500}
                    height={300}
                    alt={props.value.name}
						  layout='responsive'
                />
            </div>
        </div>
    );
}
