/** @format */

import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center">
      <div className="bg-gray-900">
        <div className="flex flex-col">
          <div className="greenBox w-56 p-3.5"></div>
          <div className="bg-yellow-500 w-48 p-3.5"></div>
          <div className="blueBox w-40 p-3.5"></div>

          <div className="flex items-center mx-auto mt-40 gap-32">
            <img
              src="./src/assets/my-self.jpeg"
              alt="foto do Lucas"
              className="rounded-full w-64 ml-10"
            />

            <div className="flex flex-col gap-10 mr-10">
              <h1 className="text-white text-5xl font-bold">LUCAS FELIPE</h1>
              <span className="text-white flex flex-wrap">
                Lorem ipsum dolor sunt facilis quibusdam quis repudiandae?
              </span>
              <h4 className="text-white text-2xl font-semibold">
                Desenvolvedor Front-End
              </h4>
            </div>
          </div>

          <h1 className="text-white text-3xl font-semibold text-center mt-40">
            TECNOLOGIAS
          </h1>
          <div className="flex items-center justify-evenly bg-gray-900 border-4 rounded-3xl border-white mt-8 mx-5">
            <img
              src="./src/assets/icones/icone-html.svg"
              alt="ícone do html"
              className="w-12 hover:scale-110 my-5"
            />

            <img
              src="./src/assets/icones/icone-css.svg"
              alt="ícone do CSS"
              className="w-12 hover:scale-110 my-5"
            />

            <img
              src="./src/assets/icones/icone-js.svg"
              alt="ícone do JavaScript"
              className="w-16 hover:scale-110 my-5"
            />

            <img
              src="./src/assets/icones/icone-figma.svg"
              alt="ícone do Figma"
              className="w-12 hover:scale-110 my-5"
            />

            <img
              src="./src/assets/icones/icone-github.svg"
              alt="ícone do GitHub"
              className="w-12 hover:scale-110 my-5"
            />

            <img
              src="./src/assets/icones/icone-vscode.svg"
              alt="ícone do VS Code"
              className="w-12 hover:scale-110 my-5"
            />

            <img
              src="./src/assets/icones/icone-react.svg"
              alt="ícone do React"
              className="w-12 hover:scale-110 my-5"
            />

            <img
              src="./src/assets/icones/icone-node.svg"
              alt="ícone do Node"
              className="w-12 hover:scale-110 my-5"
            />

            <img
              src="./src/assets/icones/icone-vite.svg"
              alt="ícone do Vite"
              className="w-12 hover:scale-110 my-5"
            />
          </div>
          
          <h1 className="text-white text-3xl font-semibold text-center mt-20">
            PROJETOS
          </h1>
          <div className="mt-10 grid grid-cols-2 gap-4 m-5">
            <div>
              <div className="border-2 border-white py-40"></div>
              <div className="border-2 border-white py-40 mt-5"></div>
            </div>
            <div>
              <div className="border-2 border-white py-40"></div>
              <div className="border-2 border-white py-40 mt-5"></div>
            </div>
          </div>

          <div className="mt-20 bg-gray-800">
            <div className="flex ml-5">
              <a href="https://www.instagram.com/lucas_felipe301/"
              target="_blank">
                <img
                  src="./src/assets/redesSociais/instagram.svg"
                  alt="ícone do instagram"
                  className="w-8 mt-3 mr-3"
                />
              </a>

              <a
                href="https://github.com/lucasfelipedonascimento"
                target="_blank">
                <img
                  src="./src/assets/redesSociais/github.svg"
                  alt="ícone do github"
                  className="w-8 m-3"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/lucasfelipedonascimento/"
                target="_blank">
                <img
                  src="./src/assets/redesSociais/linkedin.svg"
                  alt="ícone do linkedin"
                  className="w-8 m-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
