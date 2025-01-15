/** @format */
import IconeHtml from "../assets/icones/icone-html.svg";
import IconeCss from "../assets/icones/icone-css.svg";
import IconeJs from "../assets/icones/icone-js.svg";
import IconeFigma from "../assets/icones/icone-figma.svg";
import IconeGitHub from "../assets/icones/icone-github.svg";
import IconeVscode from "../assets/icones/icone-vscode.svg";
import IconeReact from "../assets/icones/icone-react.svg";
import IconeNode from "../assets/icones/icone-node.svg";
import IconeVite from "../assets/icones/icone-vite.svg";

export function Technologies() {
  const technologies = [
    {
      id: 1,
      nome: "HTML",
      icone: IconeHtml,
    },
    {
      id: 2,
      nome: "CSS",
      icone: IconeCss,
    },
    {
      id: 3,
      nome: "JavaScript",
      icone: IconeJs,
    },
    {
      id: 4,
      nome: "Figma",
      icone: IconeFigma,
    },
    {
      id: 5,
      nome: "Visual Studio Code",
      icone: IconeVscode,
    },
    {
      id: 6,
      nome: "React",
      icone: IconeReact,
    },
    {
      id: 7,
      nome: "Node.js",
      icone: IconeNode,
    },
    {
      id: 8,
      nome: "Vite",
      icone: IconeVite,
    },
    {
      id: 9,
      nome: "NextJS",
      icone:
        "https://images.seeklogo.com/logo-png/44/2/next-js-icon-logo-png_seeklogo-449825.png",
    },
    {
      id: 10,
      nome: "GitHub",
      icone: IconeGitHub,
    },
    {
      id: 11,
      nome: "Tailwind CSS",
      icone:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
    },
    {
      id: 12,
      nome: "Docker",
      icone: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    },
    {
      id: 13,
      nome: "Chakra UI",
      icone: "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
    },
    {
      id: 13,
      nome: "Radix UI",
      icone:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9N_B65ddyyYPaBZS4HJIl9oInpnHYzIMgKQ&s",
    },
  ];

  return (
    <div>
      <h1 className="text-white text-3xl font-semibold text-center mt-20">
        TECNOLOGIAS
      </h1>

      <div className="flex items-center justify-evenly bg-gray-900 border-4 rounded-3xl border-white mt-8 mx-2 md:mx-5">
        {technologies.map((t) => {
          return (
            <img
              key={t.id}
              src={t.icone}
              alt={`${t.nome}`}
              className="w-7 xl:w-12 xl:hover:scale-110 my-5"
            />
          );
        })}
      </div>
    </div>
  );
}
