import { Globe } from "lucide-react";

const InfoHoder = () => {
  return (
    <div className="w-[250px] h-[60px] grid grid-cols-[0.4fr_1fr] border border-foreground">
      <div className="grid place-content-center h-full border border-r-foreground w-full">
        <Globe size={40} strokeWidth={0.6} />
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full pb-5 flex justify-between items-end">
        <InfoHoder />
        <p className="text-md font-bold">Code by Tope</p>
      </footer>
    </>
  );
};
