import { SectionTitle } from "../ui/section-title";
import { Separator } from "../ui/separator";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const Badge = ({ text }: { text: "Web App" | "Mobile App" | "Website" }) => {
  return (
    <div className="text-[8px] text-white font-bold bg-[var(--theme)] w-fit h-fit px-2 py-1 rounded-2xl">
      {text}
    </div>
  );
};

const LinkHolder = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      className="absolute top-3 left-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="font-semibold text-[0.8rem] h-[30px] bg-foreground text-background w-[95px] grid grid-cols-[30px_1fr] group cursor-pointer">
        <div className="w-full bg-background border border-foreground flex flex-col gap-0.5 justify-center items-center group">
          <ArrowUpRight color="var(--theme)" />
        </div>
        <div
          className="flex w-full justify-center items-center text-[12px] px-3 border border-foreground"
          style={{
            fontFamily: "var(--font-gobold)",
            letterSpacing: "1px",
          }}
        >
          {text}
        </div>
      </div>
    </a>
  );
};

export const Featured: React.FC = () => {
  return (
    <section
      className="flex flex-col sm:grid sm:grid-cols-[0.2fr_2px_1fr]  lg:grid-cols-[0.3fr_2px_1fr] gap-7 w-full"
      id="featured-section"
    >
      <SectionTitle text="projects" imagepath="/images/svg/ico-04.svg" />
      <Separator orientation="vertical" className="hidden sm:block" />
      {/* Work holder div */}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-7 relative">
          <LinkHolder
            text="GITHUB"
            href="https://github.com/topghostly/next-AI-video-editor"
          />
          <div
            className="w-full aspect-[16/9] rounded-md"
            style={{
              backgroundImage: "url('/images/reelCraft.png')",
              backgroundPosition: "center 0%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] gap-2">
            <div className="flex flex-col">
              <Badge text="Web App" />
              <h3 className="text-2xl font-bold">ReelCraft</h3>
            </div>

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
        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_2px_1fr] gap-7 relative">
          <LinkHolder
            text="GITHUB"
            href="https://github.com/topghostly/Echonote-react-native-app"
          />
          <div className="flex flex-col gap-7">
            <div
              className="w-full aspect-[9/10.5] rounded-md"
              style={{
                backgroundImage: "url('/images/EchoNote.png')",
                backgroundPosition: "center 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <Badge text="Mobile App" />
                <h3 className="text-2xl font-bold">EchoNote</h3>
              </div>
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
          <div className="flex flex-col gap-7 relative">
            <LinkHolder
              text="GITHUB"
              href="https://github.com/topghostly/backDropper-app"
            />
            <div
              className="w-full aspect-[9/10.5] rounded-md"
              style={{
                backgroundImage: "url('/images/imageRaft.png')",
                backgroundPosition: "center 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <Badge text="Mobile App" />
                <h3 className="text-2xl font-bold">BackDropper</h3>
              </div>
              <p>
                A smart, intuitive voice memo app crafted with React Native for
                effortless audio recording and organization. Capture thoughts,
                meetings, and ideas on the fly with high-quality sound, quick
                playback, and easy file management. Perfect for productivity,
                creativity, and note-taking anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
