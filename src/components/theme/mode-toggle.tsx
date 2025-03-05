"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ModeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-full bg-foreground text-background"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ModeSwitch;
