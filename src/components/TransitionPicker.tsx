"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "only-css-animation:view-transition";

const OPTIONS = [
  { value: "default", label: "Default" },
  { value: "slide", label: "Slide" },
  { value: "zoom", label: "Zoom" },
  { value: "flip", label: "Flip" },
  { value: "blur", label: "Blur" },
] as const;

type Mode = (typeof OPTIONS)[number]["value"];

function isMode(v: string | null): v is Mode {
  return OPTIONS.some((o) => o.value === v);
}

/** Syncs `data-transition` on `<html>` with localStorage for View Transitions. */
export default function TransitionPicker() {
  const [mode, setMode] = useState<Mode>("default");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = isMode(stored) ? stored : "default";
    document.documentElement.dataset.transition = initial;
    setMode(initial);
  }, []);

  const select = useCallback((next: Mode) => {
    setMode(next);
    document.documentElement.dataset.transition = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 border-b border-foreground/10 px-4 py-2">
      {OPTIONS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => select(value)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            mode === value
              ? "bg-foreground text-background"
              : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
