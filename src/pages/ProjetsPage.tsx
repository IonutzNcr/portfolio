import "../styles/projets.css";
import { projets } from "../data/projets";
import { MouseEvent, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";

export const ProjetsPage = () => {
  const [prj, setPrj] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const btn1Ref = useRef<HTMLAnchorElement>(null); //site
  const btn2Ref = useRef<HTMLAnchorElement>(null); //code

  const changeProjet = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ): void => {
    const data: string = e.currentTarget.dataset.projet as string;
    const lastActive = document.querySelector(
      ".active_projet"
    ) as HTMLDivElement;
    lastActive.classList.remove("active_projet");
    e.currentTarget.classList.add("active_projet");
    setPrj(data as unknown as number);
    document.querySelectorAll(".hidden_description").forEach(element=>{
        element.classList.remove("animation_cordeon")
    })
    document.querySelectorAll(".arrow").forEach((element)=>{
        element.classList.remove("arrow_up")
    })
  };

  const hover = (e: MouseEvent<HTMLDivElement>) => {
    console.log("hmmm3");
    const target = e.currentTarget as HTMLDivElement;
    target.classList.add("blur");
    const support = document.querySelector(".support_image") as HTMLDivElement;
    support.classList.remove("hidden");
  };

  const notHover = (): void => {
    if (imageRef.current) {
      imageRef.current.classList.remove("blur");
      const support = document.querySelector(
        ".support_image"
      ) as HTMLDivElement;
      support.classList.add("hidden");
    }
  };

  const activeArcodeon = (e: MouseEvent) => {
    console.log("c pour debug", e.currentTarget.nextElementSibling);
    e.currentTarget.nextElementSibling?.classList.toggle("animation_cordeon");
    e.currentTarget.classList.toggle("arrow_up");
  };

  return (
    <div className="page">
      <Navbar />
      <div className="side-project">
        <div data-projet="1" onClick={changeProjet}>
          Previously on
        </div>
        <div data-projet="2" onClick={changeProjet}>
          My Event
        </div>
        <div data-projet="0" onClick={changeProjet} className="active_projet">
          IRC
        </div>
      </div>
      <main>
        <div className="main_box">
          <div className="image PROJET_img">
            <div onMouseLeave={notHover} className="support_image hidden">
              {projets[prj].site ? (
                <a
                  ref={btn1Ref}
                  className="voir_btn btn1"
                  href={projets[prj].site}
                  target="_blank"
                >
                  Voir le site
                </a>
              ) : (
                <a
                  ref={btn1Ref}
                  className="voir_btn btn1 btn_disabled"
                     
                  
                >
                  Voir le site
                </a>
              )}

              <a
                ref={btn2Ref}
                className="voir_btn btn2"
                href={projets[prj].code}
                target="_blank"
              >
                Voir le code source
              </a>
            </div>
            <img
              ref={imageRef}
              onMouseEnter={hover}
              src={projets[prj].image}
              alt="image"
            />
          </div>
          <div className="projet_description">
            <div className="skills_container">
              {projets[prj].skills.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
            <p className="description_projet">{projets[prj].description}</p>
          </div>
          <div className="main_content_container">
            <div className="details">
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Fonctionnalités</th>
                  </tr>
                </thead>
                <tbody>
                  {projets[prj].functionality.map((item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <tr key={index}>
                          <td>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                              }}
                            >
                              <p>{item[0]}</p>
                              <svg
                                onClick={activeArcodeon}
                                className="arrow"
                                style={{ marginLeft: "auto", width: "20px" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                              </svg>

                              <p className = "hidden_description"  >
                                {item[1]}
                              </p>
                            </div>
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr key={index} className="active-row">
                          <td>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                              }}
                            >
                              <p>{item[0]}</p>
                              <svg
                                onClick={activeArcodeon}
                                className="arrow"
                                style={{ marginLeft: "auto", width: "20px" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                              </svg>
                              <p className = "hidden_description"  >
                                {item[1]}
                              </p>
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer>Ionut Nicoara</footer>
    </div>
  );
};
