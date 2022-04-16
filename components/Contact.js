
import React, {useState, useRef, useEffect} from 'react'
import css from '../styles/Contact.module.scss'

export default function Contact() {


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
			 }, 1500);
		};
  
		const handleSubmit = (e) => {
			 e.preventDefault();
		};


  return (
	 <div>

<div id="contact" className={css.contact_container}>
                <h1 id="contact" className={css.contact_title}>
                    contact.
                </h1>
                <form onSubmit={handleForm} className={css.form}>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={css.input_small}
                        type="text"
                        required
                        placeholder="Enter your name"
                        id="name"
                    />
                    <input
                        onChange={(e) => setMail(e.target.value)}
                        value={mail}
                        className={css.input_small}
                        type="email"
                        required
                        placeholder="Enter your e-mail"
                        id="mail"
                    />
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className={css.input_big}
                        type="text"
                        required
                        placeholder="Message"
                        id="message"
                    />
                    <span className={css.form_span}> {span}</span>
                    <button
                        // onSubmit={handleSubmit}
                        className={css.btn_submit}
                    >
                        Submit
                    </button>
                </form>
                <a href="#top">Remonter la page</a>
            </div>
	 </div>
  )
}
