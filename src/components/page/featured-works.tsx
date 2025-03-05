import { SectionTitle } from "../ui/section-title";
import { Separator } from "../ui/separator";

export const Featured: React.FC = () => {
  return (
    <section className="flex flex-col sm:grid sm:grid-cols-[0.2fr_2px_1fr]  lg:grid-cols-[0.3fr_2px_1fr] gap-7 w-full">
      <SectionTitle>(Featured Works)</SectionTitle>
      <Separator orientation="vertical" className="hidden sm:block" />
      {/* Work holder div */}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-7">
          <div className="w-full aspect-[16/9] bg-muted-foreground rounded-md" />
          <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] gap-2">
            <h3 className="text-2xl font-bold">ReelCraft</h3>
            <p>
              A next-gen AI-powered image and video editing app that enhances
              creativity with smart tools. From automatic background removal to
              style transfers and real-time video enhancements, it streamlines
              editing like never before. Designed for speed, precision, and ease
              of use.
            </p>
          </div>
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_2px_1fr] gap-7">
          <div className="flex flex-col gap-7">
            <div className="w-full aspect-[9/10.5] bg-muted-foreground rounded-md" />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">ReelCraft</h3>
              <p>
                A next-gen AI-powered image and video editing app that enhances
                creativity with smart tools. From automatic background removal
                to style transfers and real-time video enhancements, it
                streamlines editing like never before. Designed for speed,
                precision, and ease of use.
              </p>
            </div>
          </div>
          <Separator orientation="vertical" className="hidden sm:block" />
          <div className="flex flex-col gap-7">
            <div className="w-full aspect-[9/10.5] bg-muted-foreground rounded-md" />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">ReelCraft</h3>
              <p>
                A next-gen AI-powered image and video editing app that enhances
                creativity with smart tools. From automatic background removal
                to style transfers and real-time video enhancements, it
                streamlines editing like never before. Designed for speed,
                precision, and ease of use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
