import { IoLogoJavascript as Js } from "react-icons/io";
import { IoLogoHtml5 as Html } from "react-icons/io";
import { IoLogoCss3 as Css } from "react-icons/io";
import { IoLogoReact as React } from "react-icons/io";

export const projects = [
    {
        name: "Coding Challenges",
        icon: <Js />,
        description: "Retos enfocados al desarrollo de Js",
        github: "https://github.com/maquevedo7/landing_challenges",
        deploy: "https://landing-challenges-hazel.vercel.app/",
    },
    {
        name: "Tribute Page",
        icon: [<Html />, <Css />],
        description: "Retos enfocados al desarrollo de Js",
        github: "https://github.com/maquevedo7/landing_challenges",
        deploy: "https://vercel.com/maquevedo7/kimetsu-no-yaiba",
    },
    {
        name: "Spicy Burger",
        icon: [<React />, <Css />],
        description: "Primer cliente real, plataforma para compras",
        github: "https://github.com/maquevedo7/spicy-burger",
        deploy: "https://spicy-burger.vercel.app/",
    },
];
