import { ArrowDownRight } from "lucide-react";

export const NameIntro: React.FC = () => {
  return (
    <section
      className="flex flex-col gap-4 w-full mb-7 z-2"
      data-scroll
      data-scroll-speed="-0.1"
    >
      <div>
        <span className="text-6xl md:text-8xl font-bold">David Bolaji</span>
        <span className="text-6xl hidden sm:block md:text-8xl font-bold">
          Software Developer
        </span>
      </div>
      <div className="w-full flex justify-between font-bold">
        <p className="sub">(Lagos, Nigeria)</p>
        <p className="sub">
          <ArrowDownRight />
          Scroll down
        </p>
      </div>
    </section>
  );
};
