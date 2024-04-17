import src from "../assets/irc.png";
import src2 from "../assets/event.png";
import src3 from "../assets/prev.png";

interface Projet {
  name: string;
  description: string;
  skills: Array<string>;
  functionality: Array<string[]>;
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
      [
        "Identification",
        "L'accès à l'application se fait à travers une simple connexion. L'utilisateur entre un pseudonyme qui est ensuite stocké sur le serveur. Un utilisateur ne peut pas se connecter avec le même pseudonyme s'il existe déjà. Une fois que l'utilisateur quitte l'application, son compte est automatiquement supprimé. Il existe deux façons de quitter l'application : soit en cliquant sur le bouton « Déconnecter », soit en fermant simplement l'application web.",
      ],
      [
        "Rejoindre / Quitter un channel",
        "Une fois connecté, l'utilisateur peut créer autant de salons qu'il le souhaite. Il peut également rejoindre des salons existants. Une fonctionnalité de recherche est proposée pour faciliter la recherche de salons. L'utilisateur peut taper le nom partiel ou complet d'un salon, et l'application lui propose une liste de salons disponibles en fonction de sa saisie. Il peut aussi quitter des salons. Il est important de noter que s'il quitte un salon dont il est le propriétaire, tous les messages du salon seront définitivement supprimés.",
      ],
      ["Ecrire des messages", "La fonctionnalité principale de l'application consiste à rencontrer et discuter avec d'autres utilisateurs. C'est pourquoi les messages dans cette application sont instantanés. De plus, des commandes sont mises à disposition de l'utilisateur pour créer des salons, rejoindre des salons existants et voir la liste des utilisateurs d'un salon. Parallèlement, l'interface graphique offre les mêmes fonctionnalités que les commandes."],
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
      ["Identification", "Cette fonction permet à l'utilisateur d'accéder à son compte personnel où il peut sauvegarder ses préférences et suivre ses séries favorites."],
      ["Explorer de nouvelles séries", "Cette fonctionnalité offre à l'utilisateur la possibilité de découvrir de nouvelles séries basées sur ses goûts et les tendances actuelles. L'application propose des recommandations personnalisées et permet la recherche de séries par genre, popularité ou recommandations critiques. C'est une excellente manière d'élargir ses horizons télévisuels et de trouver de nouveaux coups de cœur."],
      ["Suivre des Séries", "Avec cette fonctionnalité, l'utilisateur peut suivre les séries qu'il commence à regarder. Il peut ajouter des séries à sa liste personnelle et recevoir des notifications lorsque de nouveaux épisodes sont disponibles. Cela inclut des mises à jour sur les dates de sortie des épisodes et des alertes pour les épisodes manqués, assurant ainsi qu'il reste à jour avec ses séries préférées."],
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
      ["Créer des événements", "Cette fonctionnalité permet à l'utilisateur de créer ses propres événements en spécifiant des détails tels que le titre, la date, le lieu, et une description de l'événement. L'interface utilisateur, intuitive et facile à naviguer, guide l'utilisateur à travers le processus de création, en offrant des options telles que l'ajout de tags ou de catégories pour classifier l'événement."],
      ["Partager des événements", "Après la création d'un événement, l'utilisateur peut le partager avec ses amis ou des groupes spécifiques. Cette fonctionnalité inclut des options pour envoyer des invitations par e-mail ou via des réseaux sociaux, ainsi que des paramètres de confidentialité pour contrôler qui peut voir l'événement et qui est invité."],
      ["Lister des événements", "Les utilisateurs peuvent consulter une liste de tous les événements qu'ils ont créés ou auxquels ils sont invités. La liste peut être personnalisée pour afficher les événements par date, popularité ou pertinence. Des filtres et des outils de recherche permettent de naviguer facilement parmi les différents événements et de planifier sa participation."],
    ],
    site: "",
    code: "https://github.com/IonutzNcr/my_events",
  },
];
