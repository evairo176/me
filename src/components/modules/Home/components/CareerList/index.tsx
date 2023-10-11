import React from "react";
import SectionHeading from "@/components/elements/SectionHeading";
import { FaTimeline } from "react-icons/fa6";
import { IoIosDownload } from "react-icons/io";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { Button } from "@/components/ui/button";

type Props = {};

const CareerList = (props: Props) => {
  return (
    <section className="space-y-6 mt-3">
      <div className="space-y-2">
        <SectionHeading title="Carrer" icon={<FaTimeline className="mr-2" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My professional career journey.
          </p>
          <Button
            variant={"secondary"}
            aria-label="download_resume"
            className="flex gap-2 transition-all duration-300 items-center "
          >
            <div className="border-b-2 overflow-hidden border-neutral-600 dark:border-neutral-500">
              <IoIosDownload className="animate-rain-arrow" />
            </div>
            <span>Download Resume</span>
          </Button>
        </SectionSubHeading>
      </div>
    </section>
  );
};

export default CareerList;
