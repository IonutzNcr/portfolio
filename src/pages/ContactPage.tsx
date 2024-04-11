import emailjs from '@emailjs/browser'

import '../styles/contact.css';
import "../styles/general/navbar.css";
import src from '../assets/github-mark.svg';
import src2 from '../assets/linkedin_y.svg';
import cvPath from '../assets/cv-compressé.pdf'
import { FormEvent, useRef, useState } from 'react';
import { Navbar } from '../components/Navbar';

export const ContactPage = () => {

    const [modal, setModal] = useState<string | boolean>(false);
    const form = useRef<HTMLFormElement> (null);


    emailjs.init('_I4OpWfnzzlvT4kVc');


    const sendEmail = ( e: FormEvent )  => {
        e.preventDefault();
        
        if(form.current){
            setModal("waiting");
            emailjs.sendForm('service_vosj0kz', 'template_cjz3pis', form.current, '_I4OpWfnzzlvT4kVc')
            .then((result) => {
                console.log(result.text);
                for (let i = 0; i < 4; i++) {
                    (form.current?.children[i].children[1] as HTMLInputElement).value = "";
                }
                setModal("Done");
                setTimeout(() => {
                    setModal(false);
                }, 2000);

            }, (error) => {
                console.log(error.text);
            });
        }
        // form.current.children[0].value = ""
        // console.log(form.current.children[0].value)
        
    };


  
    return (
        <div className="page">
            <Navbar />
            <main>
                <div className='contact_container'>
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="groupe_li">
                            <label htmlFor='name'>Nom / Prénom</label>
                            <input id="name" name="name" type="text" placeholder='Dupond Jean' />
                        </div>
                        <div className="groupe_li">
                            <label htmlFor='email'>E-mail</label>
                            <input id="email" name="email" type="text" placeholder='jeandupond@gmail.com' />
                        </div>
                        <div className="groupe_li">
                            <label htmlFor='Objet'>Objet</label>
                            <input id="Objet" type="text" placeholder='Mon objet ...' />
                        </div>
                        <div className="groupe_li">
                            <label htmlFor='message'>Message</label>
                            <textarea name="message" id="message" placeholder='Mon message ...'></textarea>
                        </div>
                        <button className='envoyer_btn'>&#x21AA; Envoyer</button>

                        <a
                            href={cvPath}
                            download="CV_Ionut_Nicoara"
                            target="_blank"
                            rel="noreferrer"
                            className='cv_envoyer'>
                            Télécharger CV
                        </a>


                    </form>

                </div>
                <div className='reseaux_container'>
                    <a target="_blank" href="https://github.com/IonutzNcr">
                        <img src={src} alt="github" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/ionut-nicoara">
                        <img src={src2} alt="linkedin" />
                    </a>
                </div>
            </main >
            
            <footer>Ionut Nicoara</footer>
            <div className={modal === "waiting" || modal === "Done" ? "waiting" : "off"}> { modal === "waiting" ? "Waiting..." : "Done" } </div>
        </div >
    )
}
