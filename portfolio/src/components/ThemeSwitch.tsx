"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Tant que ce n'est pas monté (chargé), on affiche un petit carré vide
  // pour éviter que le compilateur ne panique
  if (!mounted) {
    return <div className="w-10 h-10 opacity-0" />; 
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
      aria-label="Changer le thème"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-slate-700" />
      )}
    </button>
  );
}