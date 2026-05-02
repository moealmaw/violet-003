"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../theme-context";

const links = ["Home", "Life", "Gallery", "World", "Exhibitions", "Archive", "About"];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-chrome-border bg-chrome-bg/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 text-sm text-chrome-text sm:px-6 lg:px-8">
        <Link href="/" className="tracking-[0.2em] text-chrome-text uppercase">
          Violet
        </Link>

        <nav className="hidden md:flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
          {links.map((label) => (
            <Link key={label} href={label === "Home" ? "/" : `/${label.toLowerCase()}`} className="transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
          <button type="button" onClick={toggleTheme} className="ml-2 border border-chrome-border px-3 py-1 text-chrome-text transition-colors hover:text-foreground">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>

        <button
          type="button"
          className="flex md:hidden items-center justify-center p-2 text-chrome-text transition-colors hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-chrome-border bg-chrome-bg px-5 py-4 flex flex-col gap-4 text-sm">
          {links.map((label) => (
            <Link 
              key={label} 
              href={label === "Home" ? "/" : `/${label.toLowerCase()}`} 
              className="text-chrome-text transition-colors hover:text-foreground block py-1"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 border-t border-chrome-border/50">
            <button 
              type="button" 
              onClick={() => { toggleTheme(); setIsOpen(false); }} 
              className="inline-block border border-chrome-border px-3 py-1 text-chrome-text transition-colors hover:text-foreground"
            >
              {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
