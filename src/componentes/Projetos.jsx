/** @format */
import ProjetoReturn from "../assets/projetos/projeto-return.svg";
import ProjetoMensagens from "../assets/projetos/projeto-mensagens.svg";
import ProjetoMicroTwitter from "../assets/projetos/projeto-microtwitter.svg";
import ProjetoStone from "../assets/projetos/projeto-stone-page.svg";
import IconeLink from "../assets/projetos/link.svg";

export function Projetos() {
  return (
    <div>
      <h1 className="text-white text-3xl font-semibold text-center mt-20">
        PROJETOS
      </h1>

      <div className="mt-10 flex flex-col md:grid md:grid-cols-2 gap-4 m-5">
        <div>
          <div className="box-Project">
            <div className="flex flex-col md:flex-row items-center">
              <div className="m-5">
                <img
                  src={ProjetoReturn}
                  alt="background do NLW Return"
                  className="w-32 h-32"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-Project font-bold">DecorCare</h2>

                <p className="text-Project text-xs w-56">
                  O NLW Return foi um evento de uma semana proposto pela
                  Rocketseat para que nós desenvolvedores pudéssemos praticar e
                  desenvolver um front-end completo de um site.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <button className="botao-Projeto duration-500 mt-3">
                <a
                  href="https://lucasfelipedonascimento.github.io/decorcare/"
                  className="text-white font-bold text-2xl"
                  target="_blank"
                >
                  PROJETO
                </a>
                <img src={IconeLink} alt="ícone de link" />
              </button>
            </div>
          </div>

          <div className="box-Project mt-5">
            <div className="flex flex-col md:flex-row items-center">
              <div className="m-5">
                <img
                  src={ProjetoMensagens}
                  alt="Background Projeto de Mensagens"
                  className="w-32 h-32"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-Project font-bold">
                  Programa de Mensagens
                </h2>
                <p className="text-Project text-xs w-56 mr-3">
                  Essa Maratona foi o evento feito pela Rocketseat para
                  desenvolvedores iniciantes. O projeto consiste na criação de
                  um programa para mostrar mensagens na tela..
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <button className="botao-Projeto duration-500 mt-3">
                <a
                  href="https://lucasfelipedonascimento.github.io/programa-mensagens/"
                  className="text-white font-bold text-2xl"
                  target="_blank"
                >
                  PROJETO
                </a>
                <img src={IconeLink} alt="ícone de link" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="box-Project">
            <div className="flex flex-col md:flex-row items-center">
              <div className="m-5">
                <img
                  src={ProjetoStone}
                  alt="Background da Página Stone"
                  className="w-32 h-32"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-Project font-bold">Landing Page - Stone</h2>
                <p className="text-Project text-xs w-56 mr-3">
                  Nesse projeto, fiz um clone da página do banco Stone. Onde
                  usei HTML e CSS para desenvolver a Landing Page. No código
                  procurei fazer padrões, já que vi que em algumas seções sempre
                  tinha Texto e imagem, então procurei padronizar para poder
                  economizar na hora de estilizar no CSS.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <button className="botao-Projeto duration-500 mt-3">
                <a
                  href="https://lucasfelipedonascimento.github.io/page-stone/"
                  className="text-white font-bold text-2xl"
                  target="_blank"
                >
                  PROJETO
                </a>
                <img src={IconeLink} alt="ícone de link" />
              </button>
            </div>
          </div>

          <div className="box-Project mt-5">
            <div className="flex flex-col md:flex-row items-center">
              <div className="m-5">
                <img
                  src={ProjetoMicroTwitter}
                  alt="background-MicroTwitter"
                  className="w-32 h-32"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-Project font-bold">MicroTwitter</h2>
                <span className="text-Project text-xs w-56">
                  Projeto desenvolvido no Full Stack Challenge da Codarme, aonde
                  desenvolvemos um clone do twitter, desenvolvendo tanto o
                  Front-End como o back-end.
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <button className="botao-Projeto duration-500 mt-3">
                <a
                  href="https://full-stack-challeng01-web.vercel.app/"
                  className="text-white font-bold text-2xl"
                  target="_blank"
                >
                  PROJETO
                </a>
                <img src={IconeLink} alt="ícone de link" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="botao-OtherProjects duration-500">
          <a
            href="https://github.com/lucasfelipedonascimento"
            className="text-white font-bold text-2xl"
            target="_blank"
          >
            OUTROS PROJETOS
          </a>
          <img src={IconeLink} alt="ícone de link" />
        </button>
      </div>
    </div>
  );
}
