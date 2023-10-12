import { projectsData } from "@/constans/home";
import React from "react";
import Project from "./components/Project";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { FaTimeline } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IoIosDownload } from "react-icons/io";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="space-y-6 mt-3 p-4 lg:p-8 rounded-md border bg-card text-card-foreground">
      <div className="space-y-2 ">
        <SectionHeading title="Carrer" icon={<FaTimeline className="mr-2" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My professional Project.</p>
        </SectionSubHeading>
        <div className="flex flex-col items-center justify-center">
          {projectsData?.map((project, key) => {
            return <Project {...project} key={key} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
