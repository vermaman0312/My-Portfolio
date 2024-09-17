import {
  Github,
  HandPlatter,
  House,
  Instagram,
  Linkedin,
  MoveUp,
  MoveUpRight,
  PersonStanding,
  ReceiptText,
  Twitter,
} from "lucide-react";
import React from "react";

const CustomFooter = () => {
  return (
    <div className="w-full">
      <div className="p-2 bg-[#DAC5A7] bg-opacity-10 border-t border-b border-[#DAC5A7] border-opacity-15 flex items-center justify-start gap-4 overflow-hidden select-none">
        {Array.from({ length: 25 }, (_, index) => (
          <div key={index} className="flex items-center justify-start gap-4">
            <p className="text-xs font-light font-display text-[#DAC5A7] uppercase text-nowrap">
              +++
            </p>
            <p className="text-xs font-light font-display text-[#DAC5A7] uppercase text-nowrap">
              Let's Talk
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-4 md:p-64 p-4">
        <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
          Project in mind?
        </p>
        <p className="text-4xl md:text-8xl font-display text-[#DAC5A7] font-light text-center">
          Let's make website shine
        </p>
        <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
          Premium web design, webflow, and SEO services to help your business
          stand out.
        </p>
        <button className="bg-[#DAC5A7] p-2 w-40 h-12 flex items-center justify-center gap-2 rounded-lg font-display">
          <p>Get in touch</p>
          <MoveUpRight className="w-5 h-5" />
        </button>
      </div>

      <div className="w-full p-4 md:p-24 flex flex-col items-center justify-center gap-1">
        <div className="w-full flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col items-center justify-start gap-4">
            <div className="w-full">
              <p className="text-[#DAC5A7] font-display text-xl">aman.</p>
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <Github className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Github
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <Linkedin className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Linkedin
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <Instagram className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Instagram
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <Twitter className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Twitter
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-4">
            <div className="w-full">
              <p className="text-[#DAC5A7] font-display text-xl">Pages</p>
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <House className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Home
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <HandPlatter className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Services
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <PersonStanding className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  About
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <ReceiptText className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Contact
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-4">
            <div className="w-full">
              <p className="text-[#DAC5A7] font-display text-xl">Menus</p>
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <House className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Home
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <HandPlatter className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Services
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <PersonStanding className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  About
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <ReceiptText className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Contact
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-4">
            <div className="w-full">
              <p className="text-[#DAC5A7] font-display text-xl">Others</p>
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <House className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Home
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <HandPlatter className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Services
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <PersonStanding className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  About
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                  <ReceiptText className="text-[#DAC5A7] w-3 h-3" />
                </button>
                <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-3 border-t-2 pt-2 border-[#DAC5A7] border-opacity-60 flex items-center justify-center md:justify-between flex-wrap gap-4">
          <div>
            <p className="text-[#DAC5A7] text-opacity-60 text-xs font-display">
              © 2024 Made by Aman Verma. Powered by Framer..
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#DAC5A7] font-display font-extralight text-nowrap">
              To Top
            </p>
            <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
              <MoveUp className="w-5 h-5 text-[#DAC5A7]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;
