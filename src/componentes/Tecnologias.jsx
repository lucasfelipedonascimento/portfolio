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

export function Tecnologias() {
  return (
    <div>
      <h1 className="text-white text-3xl font-semibold text-center mt-20">
        TECNOLOGIAS
      </h1>

      <div className="flex items-center justify-evenly bg-gray-900 border-4 rounded-3xl border-white mt-8 mx-2 md:mx-5">
        <img
          src={IconeHtml}
          alt="ícone do Html"
          className="w-7 xl:w-12 xl:hover:scale-110 my-5"
        />

        <img
          src={IconeCss}
          alt="ícone do CSS"
          className="w-7 xl:w-12 xl:hover:scale-110 my-5"
        />

        <img
          src={IconeJs}
          alt="ícone do JavaScript"
          className="w-9 xl:w-14 xl:hover:scale-110 my-5"
        />

        <img
          src={IconeFigma}
          alt="ícone do Figma"
          className="w-7 xl:w-12 xl:hover:scale-110 my-5"
        />

        <img
          src={IconeGitHub}
          alt="ícone do GitHub"
          className="w-7 xl:w-12 xl:hover:scale-110 my-5"
        />

        <img
          src={IconeVscode}
          alt="ícone do VS Code"
          className="w-7 xl:w-12 xl:hover:scale-110 my-5"
        />

        <img
          src={IconeReact}
          alt="ícone do React"
          className="w-7 xl:w-12 xl:hover:scale-110 my-5"
        />

        <img
          src={IconeNode}
          alt="ícone do Node"
          className="w-7 xl:w-12 xl:hover:scale-110 my-5"
        />

        <img
          src={IconeVite}
          alt="ícone do Vite"
          className="w-7 xl:w-12 xl:hover:scale-110 my-5"
        />
      </div>
    </div>
  );
}
