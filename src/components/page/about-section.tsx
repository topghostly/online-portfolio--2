import React from "react";
import { Separator } from "../ui/separator";
import { SectionTitle } from "../ui/section-title";

export const About: React.FC = () => {
  return (
    <section className="flex flex-col sm:grid sm:grid-cols-[1fr_2px_0.3fr] lg:grid-cols-[1fr_2px_0.5fr] gap-7 w-full relative">
      <h2 className="sm:order-none text-4xl md:text-6xl font-bold order-2">
        As a software developer, <br className="hidden md:block" /> I build
        <span className="text-[var(--theme)]"> high-quality</span> and
        <span className="text-[var(--theme)]"> impactful </span>
        digital experiences.
      </h2>
      <Separator orientation="vertical" className="hidden sm:block" />
      <SectionTitle text="About" imagepath="/images/svg/ico-03.svg" />
    </section>
  );
};
