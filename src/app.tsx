import { FC } from "react";
import { Education, Header, Jobs, Languages, Skills } from "./components";
import { education, jobs, languages, personalInfo, skills } from "./constants";

export const App: FC = () => {
  return (
    <div className="page rounded-t-lg bg-cool-50">
      <div className="parent">
        <div className="div1">
          <Header data={personalInfo} />
        </div>

        <div className="div2 px-8">
          <Jobs experience={jobs} />
        </div>

        <div className="div3 px-8">
          <Education education={education} />
        </div>

        <div className="div4 pl-8 pr-4 ">
          <Languages languages={languages} />
        </div>

        <div className="div5 pl-4 pr-8">
          <Skills data={skills} />
        </div>
      </div>
    </div>
  );
};
