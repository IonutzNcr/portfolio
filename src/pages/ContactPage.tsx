import emailjs from "@emailjs/browser";

import "../styles/contact.css";
import "../styles/general/navbar.css";
import src from "../assets/github-mark.svg";
import src2 from "../assets/linkedin_y.svg";
import cvPath from "../assets/cv-compressé.pdf";
import { FormEvent, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nom?: string;
  email: string;
  object?: string;
  message: string;
};

export const ContactPage = () => {
  const [modal, setModal] = useState<string | boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log("Errors:", errors);
  };

  const onErrors = (errors) => console.error(errors);

  emailjs.init("_I4OpWfnzzlvT4kVc");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setModal("waiting");
      emailjs
        .sendForm(
          "service_vosj0kz",
          "template_cjz3pis",
          form.current,
          "_I4OpWfnzzlvT4kVc"
        )
        .then(
          (result) => {
            console.log(result.text);
            for (let i = 0; i < 4; i++) {
              (
                form.current?.children[i].children[1] as HTMLInputElement
              ).value = "";
            }
            setModal("Done");
            setTimeout(() => {
              setModal(false);
            }, 2000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    // form.current.children[0].value = ""
    // console.log(form.current.children[0].value)
  };

  return (
    <div className="page">
      <Navbar />
      <main>
        <div className="contact_container">
          <form ref={form} onSubmit={handleSubmit(onSubmit, onErrors)}>
            <p className="champs_obligatoires">* champs obligatoires</p>
            <div className="groupe_li">
              <label htmlFor="nom">Nom / Prénom</label>
              <input className="correct" placeholder="Pierre Dupond" {...register("nom", { required: false })} />
            </div>
            <div className="groupe_li">
              <label htmlFor="email">E-mail *</label>
              <input
                className={
                  dirtyFields.email && !errors.email ? "correct" : "incorrect"
                }
                {...register("email", {
                  required: "Email is required", // Providing a custom message for when the field is empty
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address", // Providing a custom message for pattern mismatch
                  },
                })}
                placeholder="pierredupond@gmail.com"
              />
            </div>
            <div className="groupe_li">
              <label htmlFor="object">Objet</label>
              <input className="correct" placeholder="Mon objet..." {...register("object", { required: false })} />
            </div>
            <div className="groupe_li">
              <label htmlFor="message">Message *</label>
              <textarea
                className={
                  dirtyFields.message && !errors.message
                    ? "correct"
                    : "incorrect"
                }
                {...register("message", {
                  required: "message is required",
                  min: 1,
                })}
                placeholder="Mon message ..."
              ></textarea>
            </div>
            <button className="envoyer_btn">&#x21AA; Envoyer</button>

            <a
              href={cvPath}
              download="CV_Ionut_Nicoara"
              target="_blank"
              rel="noreferrer"
              className="cv_envoyer"
            >
              Télécharger CV
            </a>
          </form>
        </div>
        <div className="reseaux_container">
          <a target="_blank" href="https://github.com/IonutzNcr">
            <img src={src} alt="github" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ionut-nicoara">
            <img src={src2} alt="linkedin" />
          </a>
        </div>
      </main>

      <footer>Ionut Nicoara</footer>
      <div
        className={modal === "waiting" || modal === "Done" ? "waiting" : "off"}
      >
        {" "}
        {modal === "waiting" ? "Waiting..." : "Done"}{" "}
      </div>
    </div>
  );
};
