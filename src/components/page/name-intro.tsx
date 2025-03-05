import { ArrowDownRight } from "lucide-react";

export const NameIntro: React.FC = () => {
  return (
    <section className="flex flex-col gap-7 w-full">
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
