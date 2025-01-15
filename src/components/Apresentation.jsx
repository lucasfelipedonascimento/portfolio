/** @format */
import FotoPerfil from "../assets/my-self.svg";
import InputCertificado from "../assets/certificados/input.png";
import NLWIACertificado from "../assets/certificados/nlw-ia-certificate.pdf";
import DiscoverCertificado from "../assets/certificados/discover-conectar-certificate.pdf";
import FundamentosProgramacaoCertificado from "../assets/certificados/fundamentos-programacao.pdf";
import TrilhaTypescriptCertificado from "../assets/certificados/trilha-typescript-portugues.pdf";
import CursoBancoDadosRelacionalCertificado from "../assets/certificados/curso-banco-relacional-portugues.pdf";

export function Apresentation() {
  const certificaties = [
    {
      id: 1,
      nome: "NLW IA",
      certificado: NLWIACertificado,
    },
    {
      id: 2,
      nome: "Discover Conectar",
      certificado: DiscoverCertificado,
    },
    {
      id: 3,
      nome: "Fundamentos de Programação",
      certificado: FundamentosProgramacaoCertificado,
    },
    {
      id: 4,
      nome: "Trilha Typescript",
      certificado: TrilhaTypescriptCertificado,
    },
    {
      id: 5,
      nome: "Curso Input",
      certificado: InputCertificado,
    },
    {
      id: 6,
      nome: "Curso de Banco de Dados Relacional",
      certificado: CursoBancoDadosRelacionalCertificado,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center mt-12">
      <img
        src={FotoPerfil}
        alt="foto do Lucas"
        className="rounded-full w-64 mx-auto"
      />

      <div className="flex flex-col gap-7 mt-10 mx-6 xl:mx-auto">
        <h1 className="text-white text-4xl font-bold md:text-5xl">
          LUCAS FELIPE
        </h1>

        <h4 className="text-white text-lg xl:text-2xl font-semibold mr-2">
          Desenvolvedor Full-Stack Júnior
        </h4>

        <ul className="apresentationBlock text-left flex flex-col gap-2">
          <li> Formado em Ciência da Computação</li>

          <div className="flex flex-col gap-2">
            <li className="apresentationBlock">Experiências Profissionais:</li>
            <b className="ml-6">
              Desenvolvimento Front-end | 11/2022 - 01/2025
            </b>
          </div>
        </ul>

        <h4 className="text-lg text-white xl:text-2xl font-semibold mx-2">
          Certificações
        </h4>

        <ul className="apresentationBlock text-left flex flex-col gap-2">
          {certificaties.map((c) => {
            return (
              <li key={c.id}>
                <a href={c.certificado} download>
                  {c.nome}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
