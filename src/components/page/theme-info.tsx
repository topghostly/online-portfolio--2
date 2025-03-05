import ModeSwitch from "../theme/mode-toggle";

export const ThemeInfo: React.FC = () => {
  return (
    <div className="w-full flex justify-end gap-2 mb-7 md:mb-2">
      <ModeSwitch />
      <div className="font-semibold text-[0.8rem] py-1 px-4 bg-foreground text-background rounded-full m-0 flex justify-center items-center gap-1">
        Open to
        <span className="italic font-extralight">new opportunities</span>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-fade ml-2"></div>
      </div>
    </div>
  );
};
