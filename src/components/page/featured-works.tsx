import { SectionTitle } from "../ui/section-title";
import { Separator } from "../ui/separator";

export const Featured: React.FC = () => {
  return (
    <section className="flex flex-col sm:grid sm:grid-cols-[0.2fr_2px_1fr]  lg:grid-cols-[0.3fr_2px_1fr] gap-7 w-full">
      {/* <SectionTitle>(Featured Works)</SectionTitle> */}
      <Separator orientation="vertical" className="hidden sm:block" />
      {/* Work holder div */}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-7">
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
              <h3 className="text-2xl font-bold">EchoNote</h3>
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
              <h3 className="text-2xl font-bold">ImageCraft</h3>
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
