"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    listeners.delete(callback);
    media.removeEventListener("change", callback);
  };
}

function readTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): Theme | null {
  return null;
}

function setTheme(next: Theme) {
  localStorage.setItem("theme", next);
  document.documentElement.setAttribute("data-theme", next);
  listeners.forEach((listener) => listener());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot);

  // Re-apply after React clears attributes on the dev Strict Mode remount; a no-op in production.
  useLayoutEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? (
        <Sun size={16} />
      ) : theme === "light" ? (
        <Moon size={16} />
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  );
}
