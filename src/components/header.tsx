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
      <nav className="fixed left-0 top-0 z-10 flex w-full select-none bg-white bg-opacity-30 pt-6 font-light backdrop-blur-lg md:px-28 md:pb-2">
        <div className="container flex items-center justify-between md:justify-between">
          <div
            className={cn(
              "text-5xl drop-shadow-2xl",
              goldenSignature.className,
            )}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img className="my-4 h-[32px]" src="/logo.png" alt="logo" />
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="text-3xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
          <div
            className={`nav-links flex gap-x-8 text-xs md:text-base ${isMobileMenuOpen ? "block" : "hidden"} md:flex md:gap-x-8`}
          >
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
              href="https://drive.google.com/file/d/1nMYSrsD8o83DPr2FjLDlbCPVBQPxZG2k/view?usp=sharing"
              target="__blank"
              download
              className="flex cursor-pointer items-center"
            >
              <span className="mr-2 hidden md:inline">Resume</span>
              <FontAwesomeIcon icon={faDownload} className="pb-1 text-lg" />
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-20 flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-lg transition-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute right-4 top-4 text-3xl"
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
            href="https://drive.google.com/file/d/1nMYSrsD8o83DPr2FjLDlbCPVBQPxZG2k/view?usp=sharing"
            download
            className="flex cursor-pointer items-center"
          >
            <span className="">Resume</span>
            <FontAwesomeIcon icon={faDownload} className="p-2 text-lg" />
          </a>
        </div>
      </div>
    </>
  );
}
