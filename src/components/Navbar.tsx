import { Link } from "react-router-dom";
import { useUrlHook } from "../hooks/useUrlHook";
import { useNavigate } from "react-router-dom";



export const Navbar = () => {
  const page = useUrlHook();
  const navigate = useNavigate();
  const close = () => {
    const modal = document.querySelector(".modal") as HTMLElement;
    modal.classList.add("off");
    document.querySelector("main")?.classList.remove("none");
  };



  const open = () => {
    const modal = document.querySelector(".modal") as HTMLElement;
    document.querySelector("main")?.classList.add("none");
    modal.classList.remove("off");
  };

  return (
    <>
      <nav>
        <div className="home_navigator" onClick = {()=>navigate("/")}>
          <p className="ionut">IONUT</p>
          <div className="navbar_bar"></div>
        </div>
        <ul className="navbar_ul">
          <li className={page === "presentation" ? "active": ""}>
            <Link to="/">PRESENTATION</Link>
          </li>
          <li className={page === "#projets" ? "active" : ""}>
            <Link to="/#projets">PROJETS</Link>
          </li>
          <li className={page === "#contact" ? "active": ""}>
            <Link to="/#contact">CONTACT</Link>
          </li>
        </ul>
        <div onClick={open} className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className="modal off">
        <p onClick={close} className="close">
          X
        </p>
        <p className={page === "presentation"? "act" : ""}>
          <Link to="/" onClick={()=>close()} >PRESENTATION</Link>
        </p>
        <p className={page === "#projets"? "act" : ""}>
          <Link to="/projets" onClick={()=>close()}>PROJETS</Link>
        </p>
        <p className={page === "#contact"? "act" : ""}>
          <Link to="/contact" onClick={()=>close()}>CONTACT</Link>
        </p>
      </div>
    </>
  );
};
