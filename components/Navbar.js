import React from "react";
import css from "../styles/Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={css.navbar_container_global}>
            <div className={css.navbar_container}>
				<a href="#"> HOME</a>

                <a href="#propos">ABOUT</a>
                <a href="#projets">PROJECTS</a>

                <a href="#contact">CONTACT</a>
            </div>
        </div>
    );
}
