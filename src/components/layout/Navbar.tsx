"use client";

import Link from "next/link";
import { useTheme } from "../theme-context";

const links = ["Home", "Life", "Gallery", "World", "Exhibitions", "Archive", "About"];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-chrome-border bg-chrome-bg/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 text-sm text-chrome-text sm:px-6 lg:px-8">
        <Link href="/" className="tracking-[0.2em] text-chrome-text uppercase">
          Violet
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
          {links.map((label) => (
            <Link key={label} href={label === "Home" ? "/" : `/${label.toLowerCase()}`} className="transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
          <button type="button" onClick={toggleTheme} className="ml-2 border border-chrome-border px-3 py-1 text-chrome-text transition-colors hover:text-foreground">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
