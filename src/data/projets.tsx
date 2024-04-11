import src from "../assets/irc.png";
import src2 from "../assets/event.png";
import src3 from "../assets/prev.png";

interface Projet {
    name: string;
    description: string;
    skills: Array<string>;
    functionality: Array<string>;
    image: string;
    site: string;
    code: string;
  }
  
 export const projets: Projet[] = [
    {
      name: "Irc",
      description:
        "Irc est une applicaiton web qui te permet de communiquer avec tes amis en temps réel et te faire des nouveaux amis.",
      skills: ["React", "Node", "Socket.io", "Tailwind"],
      image: src,
      functionality: [
        "Se connecter / Se déconnecter",
        "Rejoindre / Quitter un channel",
        "Ecrire des messages",
      ],
      site: "",
      code: "https://github.com/IonutzNcr/my_irc/tree/main",
    },
    {
      name: "Previously on",
      description:
        "Previously on est une application web qui te permet de voir les derniers épisodes de tes séries préferées.",
      skills: ["React", "Api", "Oauth2"],
      image: src3,
      functionality: [
        "Se connecter / Se déconnecter",
        "Explorer de nouvelles séries",
        "Suivre des Séries",
      ],
      site: "",
      code: "https://github.com/IonutzNcr/my_prev_on/tree/main/prev",
    },
    {
      name: "My Event",
      description:
        "My Event est une application web qui te permet de créer des événements et de les partager avec tes amis.",
      skills: ["React", "Node", "Mysql", "Express"],
      image: src2,
      functionality: [
        "Créer des événements",
        "Partager des événements",
        "Lister des événements",
      ],
      site: "",
      code: "https://github.com/IonutzNcr/my_events",
    },
  ];