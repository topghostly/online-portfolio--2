import { SectionTitle } from "../ui/section-title";
import { Separator } from "../ui/separator";

export const Service: React.FC = () => {
  return (
    <section className="flex flex-col sm:grid sm:grid-cols-[0.2fr_2px_1fr]  lg:grid-cols-[0.3fr_2px_1fr] gap-7 w-full">
      <SectionTitle>(What I do)</SectionTitle>
      <Separator orientation="vertical" className="hidden sm:block" />
      <div className="flex flex-col gap-7">
        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_2px_1fr] gap-7">
          <article className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Web Development</h3>
            <p className="font-medium ">
              I build fast, secure, and user-friendly websites tailored to your
              needs. From sleek portfolios to powerful web applications, I bring
              your ideas to life.
            </p>
          </article>
          <Separator orientation="vertical" className="hidden sm:block" />
          <article className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Mobile App Development</h3>
            <p className="font-medium">
              High-performing mobile apps designed for seamless user experiences
              on both Android and iOS. Intuitive, efficient, and built to
              engage.
            </p>
          </article>
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_2px_1fr] gap-7">
          <article className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Desktop App Development </h3>
            <p className="font-medium ">
              Scalable and efficient desktop applications optimized for
              productivity and performance. Designed to work seamlessly across
              different systems.
            </p>
          </article>
          <Separator orientation="vertical" className="hidden sm:block" />
          <article className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">API Development</h3>
            <p className="font-medium ">
              Custom APIs built for secure and efficient communication between
              applications.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
