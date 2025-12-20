"use client";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Facebook from "./icons/Facebook";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    // Show button when scrolled 100px down
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <div
          id="icon-box"
          className={`hidden bg-[#0fabca] text-white p-3 rounded-full hover:bg-[#0d9bb8] hover:text-white cursor-pointer fixed lg:bottom-2 right-6 lg:flex justify-center items-center transition-all duration-500 transform ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          onClick={handleScrollToTop}
        >
          <ArrowUp />
        </div>
      )}

      <div className="border-t text-center">
        <h2 className="my-5 text-3xl font-bold">Kazi Mahbubur Rahman</h2>
        <div className="flex justify-center items-center gap-5 my-5">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="flex justify-center items-center gap-5 my-5">
          <Link href="https://www.facebook.com/MahbubDev" target="_blank">
            <Facebook />
          </Link>
          <Link href="https://github.com/KaziMahbuburRahman" target="_blank">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/mahbubdev/" target="_blank">
            <Linkedin />
          </Link>
        </div>
        <p>
          &copy; Kazi Mahbubur Rahman {new Date().getFullYear()} || All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
