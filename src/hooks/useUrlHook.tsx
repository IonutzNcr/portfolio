// import { useState } from "react";


interface Routes {
    "/" : "presentation";
    "/#contact" : "#contact";
    "/#projets" : "#projets";
    [key: string]: "presentation" | "#contact" | "#projets" ;
}

export function useUrlHook() : "presentation" | "#projets" | "#contact" {
    const url = window.location.pathname;
    const routes : Routes = {'/':'presentation', '/#contact': '#contact', '/#projets':'#projets'};

    return routes[url] ?? "presentation";

}

// "presentaiton" | "projets" | "contact" 