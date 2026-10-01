"use client";

import React from "react";
import Image from "next/image";

export default function HeroCenterpiece() {
  return (
    <div className="relative lg:static w-full max-w-360 mx-auto select-none">
      {/* 1. Ellipse 7.svg (top: 582px, left: 145px, width: 1149px, height: 442px, border-width: 320px) */}
      <div
        className="absolute pointer-events-none overflow-hidden"
        style={{
          width: "1149px",
          height: "442px",
          top: "582px",
          left: "calc(50% - 574.5px)",
          zIndex: 10,
        }}
      >
        <Image
          src="/icons/Ellipse 7.svg"
          alt="Ellipse 7"
          width={1149}
          height={442}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* 2. Person Image (Natural bounds 722x515, bottom-aligned at y=1024px matching Figma top: 512px) */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "722px",
          height: "515px",
          bottom: "0px",
          left: "calc(50% - 350px)",
          zIndex: 20,
        }}
      >
        <Image
          src="/images/person.png"
          alt="Smiling student with headphones and laptop"
          width={722}
          height={515}
          priority
          className="w-full h-full object-contain object-bottom"
          style={{
            filter:
              "drop-shadow(0.52px 0.74px 3.04px rgba(0,0,0,0.04)) drop-shadow(2.23px 3.19px 5.72px rgba(0,0,0,0.06)) drop-shadow(6px 9px 12px rgba(0,0,0,0.08)) drop-shadow(15px 22px 25px rgba(0,0,0,0.1))",
          }}
        />
      </div>


      {/* 4. Card: UI/UX Design (top: 639px, left: 404px, width: 208px, height: 70px, padding: 16px, border-radius: 16px, gap: 8px) */}
      <div
        className="absolute bg-white rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.12)] border border-white/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(0,0,0,0.18)] hidden sm:flex flex-col justify-center gap-2 pointer-events-auto"
        style={{
          width: "208px",
          height: "70px",
          top: "639px",
          left: "calc(50% - 368px)",
          zIndex: 30,
        }}
      >
        <h3 className="font-satoshi font-bold text-neutral-950 text-[16px] leading-none">
          UI/UX Design
        </h3>
        <p className="font-satoshi font-normal text-neutral-400 text-[12px] leading-none">
          200 Courses &bull; 1000+ Students
        </p>
      </div>

      {/* 5. Card: Learning Progress (top: 651px, left: 842px, width: 232px, height: 131px) */}
      <div
        className="absolute bg-white rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.12)] border border-white/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(0,0,0,0.18)] hidden sm:flex flex-col justify-between pointer-events-auto"
        style={{
          width: "232px",
          height: "131px",
          top: "651px",
          left: "calc(50% + 122px)",
          zIndex: 30,
        }}
      >
        <span className="font-satoshi font-medium text-neutral-800 text-[14px] leading-5">
          Learning Progress
        </span>
        <div className="font-heading font-bold text-neutral-950 text-[36px] leading-none my-1">
          55%
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-neutral-50 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-secondary-500 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: "55%" }}
          />
        </div>
      </div>

      {/* 6. Card: Happy Students (top: 837px, left: 328px, width: 258px, height: 121px) */}
      <div
        className="absolute bg-white rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.12)] border border-white/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(0,0,0,0.18)] hidden sm:flex flex-col justify-between pointer-events-auto"
        style={{
          width: "258px",
          height: "121px",
          top: "837px",
          left: "calc(50% - 392px)",
          zIndex: 30,
        }}
      >
        <div>
          <h4 className="font-satoshi font-medium text-neutral-950 text-[14px] leading-5">
            Happy Students
          </h4>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="font-satoshi font-bold text-neutral-950 text-[14px]">
              4.5
            </span>
            <span className="font-satoshi font-normal text-neutral-400 text-[14px]">
              (240)
            </span>
            <span className="text-[#FFB800] text-[14px] leading-none">&#9733;</span>
          </div>
        </div>

        {/* Overlapping Avatar Stack */}
        <div className="flex items-center -space-x-2 overflow-hidden py-1">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
            alt="Student 1"
            className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
            alt="Student 2"
            className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
            alt="Student 3"
            className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
            alt="Student 4"
            className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
          />
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face"
            alt="Student 5"
            className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
          />
          <div className="w-8 h-7 rounded-full bg-secondary-500 flex items-center justify-center text-neutral-950 font-satoshi font-bold text-[11px] ring-2 ring-white">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}
