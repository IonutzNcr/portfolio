import "../styles/presentation.css";
import "../styles/animation.css";
import "../styles/general/navbar.css";
import "../styles/general/footer.css";
import  src_svg from "../assets/fleche_cst.svg";
import src from "../assets/bin.svg";
// import src2 from "../assets/bp2.png";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const PresentationPage = () => {
  const navigate = useNavigate();

  const contact = () => {
    navigate("/contact");
  };


  return (
    <div className="page_presentation">
      <Navbar />
      <main>
        <div className="cover-page_presentation">
          <img className="img_p1" src={src} />
          <img className="img_p2" src={src} />
          <div className="div_img_avatar">
            {/* <img className="img_avatar" src={src3} /> */}
          </div>
        </div>
        <div className="description_pr">
          <div className="div_title_pr">
            <p className="title_pr">
              <span className="title_span_pr">Développeur </span>
              <span>Web</span>
            </p>
            <p className="title_pr">
              <span className="title_span_pr">Full</span> <span>Stack</span>
            </p>
          </div>
          <div className="div_core_pr">
            <p className="core_pr">
              Apprenti développeur Full Stack en pleine évolution, passionné par
              la création d'applications web de bout en bout. Acquiert des
              compétences aussi bien dans le développement côté serveur que côté
              client pour offrir des solutions complètes et innovantes. Attentif
              à rester à jour avec les dernières technologies et méthodologies,
              et toujours prêt à relever de nouveaux défis pour perfectionner
              ses compétences.
            </p>
            <p className="recherche_pr">
              Cherche alternance de 6 mois <span className="span_asap"> asap </span> avec un rythme de 3 semaines en
              entreprise / 1 semaine en formation.{" "}
            </p>
          </div>
          <div>
            <button className="button_contact" onClick={contact}>  <img className="svg_fleche" src={src_svg} /> Contactez-moi</button>
          </div>
        </div>
      </main>
      
      <footer>Ionut Nicoara</footer>
    </div>
  );
};
