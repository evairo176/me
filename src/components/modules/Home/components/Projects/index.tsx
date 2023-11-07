import { projectsData } from "@/constans/home";
import React from "react";
import Project from "./components/Project";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { DictionaryInterface } from "@/types/home-types";

interface ProjectsListInterface {
  dictionary: DictionaryInterface;
}

const Projects = ({ dictionary }: ProjectsListInterface) => {
  return (
    <section className="space-y-6 mt-3 p-4 lg:p-8 rounded-md border bg-card text-card-foreground">
      <div className="space-y-2 ">
        <SectionHeading
          title={dictionary.home.projects.title}
          icon={<AiOutlineFundProjectionScreen className="mr-2" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            {dictionary.home.projects.description}
          </p>
        </SectionSubHeading>
        <div className="flex flex-col items-center justify-center">
          {dictionary.home.projects.projectsData?.map((project, key) => {
            return <Project {...project} key={key} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
