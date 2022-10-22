/** @format */

import { Apresentacao } from "./componentes/Apresentation";
import { Tecnologias } from "./componentes/Tecnologias";
import { Projetos } from "./componentes/Projetos";
import { RedesSociais } from "./componentes/RedeSociais";


export function App() {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-900">
        <div className="flex flex-col">
          <div className="greenBox w-56 py-2.5 xl:py-3.5"></div>
          <div className="bg-yellow-500 w-48 py-2.5 xl:py-3.5"></div>
          <div className="blueBox w-40 py-2.5 xl:py-3.5"></div>

          <Apresentacao />
          <Tecnologias />
          <Projetos />
          <RedesSociais />
        </div>
      </div>
    </div>
  );
}
