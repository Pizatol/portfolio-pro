import React, { useState, useRef, useEffect } from "react";
import css from "../styles/Contact.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import emailjs from "emailjs-com";

export default function Contact() {
    gsap.registerPlugin(ScrollTrigger);

    const title_ref = useRef(null);
    const bottom_line_Ref = useRef(null);
    const subtitle_Ref = useRef(null);

    const form_name_Ref = useRef(null);
    const form_mail_Ref = useRef(null);
    const form_message_Ref = useRef(null);

    const form = useRef(null);

    useEffect(() => {
        // title
        gsap.fromTo(
            title_ref.current,
            { opacity: 0, x: 300 },

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
        // bottom line
        gsap.fromTo(
            bottom_line_Ref.current,
            { opacity: 0, x: -300 },

            {
                scrollTrigger: {
                    trigger: bottom_line_Ref.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                },
                x: 0,
                opacity: 1,
                delay: 0,
            }
        );
        // form subtitle
        gsap.fromTo(
            subtitle_Ref.current,
            { opacity: 0 },

            {
                scrollTrigger: {
                    trigger: subtitle_Ref.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                },

                opacity: 1,
                delay: 0.8,
            }
        );
        // form name
        gsap.fromTo(
            form_name_Ref.current,
            { opacity: 0, y: -100 },

            {
                scrollTrigger: {
                    trigger: form_name_Ref.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                },
                y: 0,
                opacity: 1,
                delay: 0.3,
            }
        );
        // form mail
        gsap.fromTo(
            form_mail_Ref.current,
            { opacity: 0, x: -50 },

            {
                scrollTrigger: {
                    trigger: form_mail_Ref.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                },
                x: 0,
                opacity: 1,
                delay: 0.6,
            }
        );
        // form message
        gsap.fromTo(
            form_message_Ref.current,
            { opacity: 0, y: -100 },

            {
                scrollTrigger: {
                    trigger: form_message_Ref.current,

                    start: "top 65%",
                    toggleActions: "play none none none",
                },
                y: 0,
                opacity: 1,
                delay: 0.3,
            }
        );
    }, []);

    // MAil
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [span, setSpan] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        console.log("name", name);
        console.log("mail", mail);
        console.log("message", message);

        setSpan("Votre message a bien été envoyé");

        setTimeout(() => {
            setName("");
            setMail("");
            setMessage("");
            setSpan("");
        }, 800);
    };

    // EMAIL JS

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_1c6pg3e",
                "test_mail",
                form.current,
                "UO7aWp3avYr1CXJvM"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setSpan("Your message has been sent !");
        setName("");
        setMail("");
        setMessage("");

        setTimeout(() => {
            setSpan("");
        }, 1300);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div >
            <div  className={css.contact_container}>
                <div className={css.contact_header}>
                    <div>
                        <h1
                            
                            ref={title_ref}
                            className={css.contact_title}
                        >
                            CONTACT
                        </h1>
                    </div>
                    <div
                        ref={bottom_line_Ref}
                        className={css.projet_bottom_border}
                    ></div>
                    <p ref={subtitle_Ref}>
                        Have a question or want to work together?
                    </p>
                </div>
                <form onSubmit={sendEmail} ref={form} className={css.form} autoComplete="off">
                    <input
                   autoComplete="false"
                        ref={form_name_Ref}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={css.input_small}
                        type="text"
                        required
                        placeholder="Enter your name"
                        id="name"
                        name="from_name"
                    />
                    <input
                        autoComplete="false"
                        
                        ref={form_mail_Ref}
                        onChange={(e) => setMail(e.target.value)}
                        value={mail}
                        className={css.input_small}
                        type="email"
                        required
                        placeholder="Enter your e-mail"
                        id="mail"
                        name="email"
                    />
                    <textarea
                        ref={form_message_Ref}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className={css.input_big}
                        type="text"
                        required
                        placeholder="Message"
                        id="message"
                        name="message"
                    />
                    <span className={css.form_span}> {span}</span>
                    <button
                        // onSubmit={handleSubmit}
                        className={css.btn_submit}
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}
