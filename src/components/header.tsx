"use client";
import { useState } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = ["about", "profile", "contact"];

  const handleLinkClick = (link: any) => {
    document
      .getElementById(link)
      ?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-10 bg-white bg-opacity-30 backdrop-blur-lg flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
        <div className="container flex items-center justify-between md:justify-between">
          <div
            className={cn(
              "text-5xl drop-shadow-2xl",
              goldenSignature.className,
            )}
          >
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img className="h-[32px] my-4" src="/logo.png" alt="logo" />
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-3xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
          <div className={`nav-links flex gap-x-8 text-xs md:text-base ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:gap-x-8`}>
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer"
                onClick={() => handleLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}
            <a
              href="https://drive.google.com/file/d/1UzYJmxMRyJAcqynXMsoFcAo6NiUGF-rZ/view?usp=sharing"
              target="__blank"
              download
              className="flex items-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faDownload} className="text-lg pb-1" />
              <span className="ml-2 hidden md:inline">Resume</span>
            </a>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center z-20 transition-transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ×
        </button>
        <div className="flex flex-col gap-y-8 text-lg">
          {links.map((link) => (
            <span
              key={link}
              className="cursor-pointer"
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </span>
          ))}
          <a
            href="https://drive.google.com/file/d/1UzYJmxMRyJAcqynXMsoFcAo6NiUGF-rZ/view?usp=sharing"
            download
            className="flex items-center cursor-pointer"
          >
            <span className="">Resume</span>
            <FontAwesomeIcon icon={faDownload} className="text-lg p-2" />
          </a>
        </div>
      </div>
    </>
  );
}
