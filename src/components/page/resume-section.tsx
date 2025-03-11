import { resumeData } from "../data/resume";
import { SectionTitle } from "../ui/section-title";
import { Separator } from "../ui/separator";

export const Resume: React.FC = () => {
  return (
    <section className="flex flex-col sm:grid sm:grid-cols-[1fr_2px_0.3fr] lg:grid-cols-[1fr_2px_0.5fr] gap-7 w-full" id="resume-section">
      <div className="flex flex-col sm:order-none order-2">
        {/* This is where the looping would start */}
        {resumeData.map((data, index) => (
          <div key={index}>
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-bold">{data.companyName}</h3>
                <p className="italic">{data.role}</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="sub font-bold">(What I did)</p>
                <p className="font-medium">{data.responsibilities}</p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="sub font-bold">(Key Contributions)</p>
                {data.contributions.map((contribution, index) => (
                  <div
                    className="grid grid-cols-[5px_1fr] gap-4 ml-4"
                    key={index}
                  >
                    <span className="w-[10px] h-[4px] bg-muted-foreground mt-2.5"></span>
                    <p>{contribution}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <p className="sub font-bold">(Results)</p>
                {data.results.map((result, index) => (
                  <div
                    className="grid grid-cols-[5px_1fr] gap-4 items-start ml-4"
                    key={index}
                  >
                    <span className="w-[10px] h-[4px] bg-muted-foreground mt-2.5"></span>
                    <p>{result}</p>
                  </div>
                ))}
              </div>
            </div>
            {index !== resumeData.length - 1 && <Separator className="my-7" />}
          </div>
        ))}

        {/* This is where the looping would end */}
      </div>
      <Separator orientation="vertical" className="hidden sm:block" />
      <SectionTitle text="work experience" imagepath="/images/svg/ico-02.svg" />
    </section>
  );
};
