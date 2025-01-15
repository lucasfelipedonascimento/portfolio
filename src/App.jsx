/** @format */

import { Apresentation } from "./components/Apresentation";
import { Projects } from "./components/Projects";
import { SocialMedias } from "./components/SocialMedias";
import { Technologies } from "./components/Technologies";

export function App() {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-900">
        <div className="flex flex-col">
          <div className="greenBox w-56 py-2.5 xl:py-3.5"></div>
          <div className="bg-yellow-500 w-48 py-2.5 xl:py-3.5"></div>
          <div className="blueBox w-40 py-2.5 xl:py-3.5"></div>

          <Apresentation />
          <Technologies />
          <Projects />
          <SocialMedias />
        </div>
      </div>
    </div>
  );
}
