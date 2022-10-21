/** @format */
import "./assets/my-self.jpeg";

export function Apresentacao() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center mt-40">
        <img
          src="./src/assets/my-self.jpeg"
          alt="foto do Lucas"
          className="rounded-full w-64 mx-auto"
        />

        <div className="flex flex-col gap-10 text-center mt-10 mx-auto">
          <h1 className="apresentationBlock  text-4xl font-bold md:text-5xl">
            LUCAS FELIPE
          </h1>

          <p className="apresentationBlock flex flex-wrap w-72 mx-auto">
            Estudante de Ciência da computação com conhecimento em HTML5 e CSS3,
            e JavaScript (Intermediário), também com conhecimentos básicos em
            frameworks como React e TailwindCSS.
          </p>

          <h4 className="apresentationBlock text-2xl font-semibold mx-2 md:mx-auto">
            Desenvolvedor Front-End
          </h4>
        </div>
      </div>
    </div>
  );
}
