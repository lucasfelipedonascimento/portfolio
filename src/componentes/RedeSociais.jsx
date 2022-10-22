/** @format */
import IconGitHub from "../assets/redesSociais/github.svg";
import IconInstagram from "../assets/redesSociais/instagram.svg";
import IconLinkedin from "../assets/redesSociais/linkedin.svg";

export function RedesSociais() {
  return (
    <div className="w-full">
      <div className="mt-20 bg-gray-800">
        <div className="flex justify-center md:justify-start md:ml-5 gap-2">
          <a href="https://www.instagram.com/lucas_felipe301/" target="_blank">
            <img
              src={IconInstagram}
              alt="ícone do instagram"
              className="w-8 m-3"
            />
          </a>

          <a href="https://github.com/lucasfelipedonascimento" target="_blank">
            <img
              src={IconGitHub}
              alt="ícone do github"
              className="w-8 m-3"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/lucasfelipedonascimento/"
            target="_blank">
            <img
              src={IconLinkedin}
              alt="ícone do linkedin"
              className="w-8 m-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
