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

import { experiencesData } from "@/constans/home";
import { useTheme } from "next-themes";
import { Fragment } from "react";

type Props = {};

const CareerList = (props: Props) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  //   console.log(currentTheme);

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
            aria-label="download resume"
            className="flex gap-2 transition-all duration-300 items-center "
          >
            <div className="border-b-2 overflow-hidden border-neutral-600 dark:border-neutral-500">
              <IoIosDownload className="animate-rain-arrow" />
            </div>
            <span>Download Resume</span>
          </Button>
        </SectionSubHeading>
        <VerticalTimeline
          lineColor={
            currentTheme === "light" ? "#9ca3af" : "rgba(255,255,255,0.05)"
          }
        >
          {experiencesData?.map((row, key) => {
            return (
              <VerticalTimelineElement
                key={key}
                visible={true}
                contentStyle={{
                  background:
                    currentTheme === "light"
                      ? "f3f4f6"
                      : "rgba(255,255,255,0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    currentTheme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255,255,255,0.05)",
                }}
                date={row?.date}
                icon={row?.icon}
                iconStyle={{
                  background:
                    currentTheme === "light"
                      ? "white"
                      : "rgba(255,255,255,0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{row?.title}</h3>
                <p className="font-normal !mt-0">{row?.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/80">
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
