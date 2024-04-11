import { Link } from "react-router-dom";
import { useUrlHook } from "../hooks/useUrlHook";

export const Navbar = () => {
  const page = useUrlHook();
  const close = () => {
    const modal = document.querySelector(".modal") as HTMLElement;
    modal.classList.add("off");
  };



  const open = () => {
    const modal = document.querySelector(".modal") as HTMLElement;

    modal.classList.remove("off");
  };

  return (
    <>
      <nav>
        <div>
          <p className="ionut">IONUT</p>
          <div className="navbar_bar"></div>
        </div>
        <ul className="navbar_ul">
          <li className={page === "presentation" ? "active": ""}>
            <Link to="/">PRESENTATION</Link>
          </li>
          <li className={page === "projets" ? "active" : ""}>
            <Link to="/projets">PROJETS</Link>
          </li>
          <li className={page === "contact" ? "active": ""}>
            <Link to="/contact">CONTACT</Link>
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
        <p className="act">
          <Link to="/">PRESENTATION</Link>
        </p>
        <p>
          <Link to="/projets">PROJETS</Link>
        </p>
        <p>
          <Link to="/contact">CONTACT</Link>
        </p>
      </div>
    </>
  );
};
