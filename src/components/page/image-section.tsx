// import Image from "next/image";

export const ImageSection: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "red",
        backgroundImage: "url('/images/Portfolio-Image.jpg')",
        backgroundPosition: "center 100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative aspect-[13/14] sm:aspect-[13/10] md:aspect-[13/7]"
    ></div>
  );
};
