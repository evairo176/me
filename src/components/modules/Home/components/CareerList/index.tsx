"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "@/components/elements/SectionHeading";
import { FaTimeline } from "react-icons/fa6";
import { IoIosDownload } from "react-icons/io";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { DictionaryInterface } from "@/types/home-types";

interface CareerListInterface {
  lang: string;
  dictionary: DictionaryInterface;
}

const CareerList = ({ lang, dictionary }: CareerListInterface) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  //   console.log(currentTheme);

  return (
    <section className="space-y-6 mt-3 p-4 lg:p-8 rounded-md border bg-card text-card-foreground">
      <div className="space-y-2">
        <SectionHeading
          title={dictionary.home.career?.career}
          icon={<FaTimeline className="mr-2" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            {dictionary.home.career?.descriptionCareer}
          </p>
          <Button
            variant={"secondary"}
            aria-label="download resume"
            className="flex gap-2 transition-all duration-300 items-center "
          >
            <div className="border-b-2 overflow-hidden border-neutral-600 dark:border-neutral-500">
              <IoIosDownload className="animate-rain-arrow" />
            </div>
            <span>{dictionary.home.career?.downloadResume}</span>
          </Button>
        </SectionSubHeading>
        <VerticalTimeline lineColor={"hsl(var(--muted))"}>
          {dictionary.home.career.experiencesData?.map((row, key) => {
            return (
              <VerticalTimelineElement
                key={key}
                visible={true}
                contentStyle={{
                  background: "hsl(var(--muted))",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "hsl(var(--muted))",
                }}
                date={row?.date}
                dateClassName="md:mx-3"
                icon={row.icon}
                iconStyle={{
                  background: "hsl(var(--muted))",
                  fontSize: "1.5rem",
                  marginRight: "20px",
                }}
              >
                <h3 className="font-semibold capitalize">{row?.title}</h3>
                <p className="font-normal !mt-0">{row?.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/80 text-justify">
                  {row?.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default CareerList;
