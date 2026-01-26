"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesList } from "../data/experiencesList";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-cyan-700 text-center mb-8 sm:mb-16 font-mono">
          Experience
        </h2>
        <VerticalTimeline lineColor="#0e7490">
          {experiencesList.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              dateClassName="text-stone-500 font-medium font-mono"
              contentStyle={{
                borderRadius: "16px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
              contentArrowStyle={{
                borderRight: "10px solid #ffffff",
              }}
              iconStyle={{
                background: "#a6a09b",
                color: "#ffffff",
              }}
              icon={exp.icon}
            >
              <h3 className="text-md sm:text-xl font-bold text-cyan-700 font-mono">
                {exp.title}
              </h3>

              <p className="text-sm font-medium text-stone-500 mt-1">
                {exp.company}| {exp.location}
              </p>

              <p className="mt-4  leading-relaxed">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
