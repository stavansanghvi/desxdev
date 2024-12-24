"use client";

import phoneIcon from "@/assets/icons/phone.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const HeaderSm: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (document.getElementById("hamburger-btn")) setMounted(true);
  }, []);

  return (
    <>
      {mounted &&
        createPortal(
          <button
            className="lg:hidden flex flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>,
          document.getElementById("hamburger-btn")!
        )}

      <div
        className={`fixed inset-y-0 right-0 z-10 w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="md:hidden flex flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="block text-lg text-white mb-1">X</span>
          </button>
        </div>
        <nav>
          <ul className="space-y-4 p-4">
            <li>
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="w-full h-[1px] bg-white/20" />
        <div className="flex contact-info items-center mt-4">
          <div className="rounded-full p-2 border-[1px] border-[#ffffff66] bg-[#ffffff1a] mr-4">
            <Image src={phoneIcon} alt="Phone Icon" width={16} height={16} />
          </div>
          <a href="tel:+1234567890">+91 9054382207</a>
        </div>
      </div>
    </>
  );
};

export default HeaderSm;
