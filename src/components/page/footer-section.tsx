import { Copyright } from "lucide-react";
import Image from "next/image";

const InfoHoder = () => {
  return (
    <div className="h-[50px] grid grid-cols-[50px_200px] border border-foreground">
      <div className="grid relative place-content-center h-full border border-r-foreground border-b-foreground w-full">
        <Image
          src={"/images/svg/ico-01.svg"}
          alt="logo svg icon"
          width={35}
          height={35}
        />
      </div>
      <div className="grid grid-rows-[0.9fr_1fr]">
        <div className="border border-b-foreground">
          <p
            style={{
              fontFamily: "var(--font-gobold)",
              fontSize: "15px",
              textTransform: "uppercase",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              justifyContent: "center",
            }}
          >
            2025{" "}
            <span>
              <Copyright size={15} />
            </span>{" "}
            All rights reserved
          </p>
        </div>
        <div className="relative text-[8px] text-center">
          David is a Full-Stack Developer focused on React, Node.js, and ML.
        </div>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pb-5 flex justify-between items-end">
      <InfoHoder />
      <p className="text-md font-bold">Code by Tope</p>
    </footer>
  );
};
