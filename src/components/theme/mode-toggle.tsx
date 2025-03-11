"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ModeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-background"
    >
      {theme === "dark" ? (
        <p className="flex gap-3 items-center">
          Light Mode
          <Sun size={20} />
        </p>
      ) : (
        <p className="flex gap-3 items-center">
          Dark Mode
          <Moon size={20} />
        </p>
      )}
    </button>
  );
};

export default ModeSwitch;
