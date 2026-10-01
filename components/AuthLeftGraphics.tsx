"use client";

import React from "react";
import Image from "next/image";

export default function AuthLeftGraphics() {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        width: "548px",
        height: "585px",
        top: "305px",
        left: "97px",
      }}
    >
      {/* ============================================================== */}
      {/* 1. Back Course Card: Build Digital Asset (peeking from behind) */}
      {/* ============================================================== */}
      <div
        className="absolute bg-white rounded-[24px] p-4 border border-[#E5E6E8] shadow-lg pointer-events-auto"
        style={{
          width: "330px",
          height: "360px",
          top: "90px",
          left: "0px",
          zIndex: 10,
          opacity: 0.95,
        }}
      >
        {/* Course Thumbnail */}
        <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden bg-neutral-100">
          <Image
            src="/images/image2.png"
            alt="Build Digital Asset"
            fill
            className="object-cover"
          />
          {/* Badge */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-satoshi">
            17 Lessons
          </div>
        </div>

        {/* Course Info */}
        <div className="pt-3">
          <h4 className="font-heading font-semibold text-[17px] text-[#040819] leading-tight truncate">
            Build Digital Asset
          </h4>
          <p className="font-satoshi font-normal text-[12px] text-neutral-400 mt-0.5">
            by <span className="text-[#003BE2]">purepearl studio</span>
          </p>

          <div className="flex items-center justify-between mt-3">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-neutral-50 border border-neutral-100 text-[11px] text-[#4F4F4F]">
              Beginner
            </div>
            <div className="flex items-center -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-[#CBFC01] flex items-center justify-center text-[9px] font-bold text-neutral-950">
                26+
              </div>
            </div>
          </div>

          <div className="mt-2 text-[#003BE2] font-bold text-[16px]">
            $25<span className="text-neutral-400 text-[11px] font-normal">/lifetime</span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. Front Course Card: the Power of Big Data                     */}
      {/* Spec: width: 373px, height: 384px, rounded: 24px, left: 136px  */}
      {/* (136px relative to container left 97px = 233px page position)   */}
      {/* ============================================================== */}
      <div
        className="absolute bg-white rounded-[24px] p-4 border border-[#E5E6E8] shadow-2xl pointer-events-auto"
        style={{
          width: "373px",
          height: "384px",
          top: "0px",
          left: "136px", // 97px + 136px = 233px from page left
          zIndex: 20,
        }}
      >
        {/* Course Thumbnail with 3 overlay badges */}
        <div className="relative w-full h-[190px] rounded-[16px] overflow-hidden bg-neutral-900">
          <Image
            src="/images/image3.png"
            alt="the Power of Big Data"
            fill
            className="object-cover"
            priority
          />

          {/* 3 Pills: 17 Lessons, 2 hours 16 mins, 59 Comments */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 overflow-hidden">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-satoshi font-normal whitespace-nowrap">
              17 Lessons
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-satoshi font-normal whitespace-nowrap">
              2 hours 16 mins
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-satoshi font-normal whitespace-nowrap">
              59 Comments
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="pt-3.5 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-semibold text-[19px] leading-[120%] tracking-[-0.01em] text-[#040819]">
                the Power of Big Data
              </h3>
              <div className="flex items-center gap-1 text-[16px] font-satoshi font-medium text-[#4F4F4F]">
                4.5
                <span className="text-[#FFB800] text-[15px] leading-none">&#9733;</span>
              </div>
            </div>

            <p className="font-satoshi font-normal text-[12px] text-neutral-400 mt-0.5">
              by <span className="text-[#003BE2]">purepearl studio</span>
            </p>
          </div>

          {/* Badges: Beginner + Avatars */}
          <div className="flex items-center justify-between mt-3">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-[12px] text-[#4F4F4F] font-satoshi">
              <svg className="w-3.5 h-3.5 text-[#4F4F4F]" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                <rect x="6.75" y="7" width="2.5" height="7" rx="0.5" />
                <rect x="11.5" y="4" width="2.5" height="10" rx="0.5" />
              </svg>
              <span>Beginner</span>
            </div>

            {/* Student Avatar Stack */}
            <div className="flex items-center -space-x-1.5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face"
                alt="Student"
                className="w-6 h-6 rounded-full object-cover ring-1.5 ring-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                alt="Student"
                className="w-6 h-6 rounded-full object-cover ring-1.5 ring-white"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face"
                alt="Student"
                className="w-6 h-6 rounded-full object-cover ring-1.5 ring-white"
              />
              <div className="w-6 h-6 rounded-full bg-[#CBFC01] flex items-center justify-center text-[10px] font-satoshi font-bold text-neutral-950 ring-1.5 ring-white">
                26+
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-2 text-[#003BE2] font-heading font-bold text-[18px]">
            $25
            <span className="font-satoshi font-normal text-neutral-400 text-[13px]">
              /lifetime
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. 3D Floating Assets (high z-index): Lime Torus, Lime Pyramid, */}
      {/*    White Spiral, and Happy Students lime card                   */}
      {/* ============================================================== */}

      {/* Lime Torus (top: 320px, left: 151px -> relative: top: 15px, left: 54px) */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "146px",
          height: "146px",
          top: "15px",
          left: "54px", // 97px + 54px = 151px
          zIndex: 30,
        }}
      >
        <Image
          src="/icons/banner-torus-lime.png"
          alt="3D Lime Torus"
          width={146}
          height={146}
          unoptimized
          priority
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Lime Pyramid (top: 702px, left: 97px -> relative: top: 397px, left: 0px) */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "188px",
          height: "188px",
          top: "397px",
          left: "0px", // 97px + 0px = 97px
          zIndex: 30,
        }}
      >
        <Image
          src="/icons/banner-pyramid-lime.png"
          alt="3D Lime Pyramid"
          width={188}
          height={188}
          unoptimized
          priority
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      {/* White Spiral (top: 626px, left: 470px -> relative: top: 321px, left: 373px, rotate: -180deg) */}
      <div
        className="absolute pointer-events-none -rotate-180"
        style={{
          width: "175px",
          height: "175px",
          top: "321px",
          left: "373px", // 97px + 373px = 470px
          zIndex: 30,
        }}
      >
        <Image
          src="/icons/banner-spiral-white.png"
          alt="3D White Spiral"
          width={175}
          height={175}
          unoptimized
          priority
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Happy Students Lime Card (top: 740px, left: 348px -> relative: top: 435px, left: 251px) */}
      {/* Spec: width: 258, height: 123, rounded: 16px, p: 16px, bg: #D4FB20, backdrop-blur: 20px */}
      <div
        className="absolute pointer-events-auto rounded-[16px] p-4 flex flex-col justify-between shadow-2xl border border-white/40"
        style={{
          width: "258px",
          height: "123px",
          top: "435px",
          left: "251px", // 97px + 251px = 348px
          backgroundColor: "#D4FB20",
          backdropFilter: "blur(20px)",
          zIndex: 35,
        }}
      >
        <div>
          <h4 className="font-satoshi font-semibold text-[#242528] text-[14px] leading-5">
            Happy Students
          </h4>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="font-satoshi font-bold text-[#242528] text-[14px]">
              4.5
            </span>
            <span className="font-satoshi font-normal text-[#242528]/80 text-[14px]">
              (240)
            </span>
            <span className="text-[#003BE2] text-[14px] leading-none">&#9733;</span>
          </div>
        </div>

        {/* Avatars + Dark 2K+ Pill */}
        <div className="flex items-center -space-x-1.5 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
            alt=""
            className="w-7 h-7 rounded-full object-cover ring-2 ring-[#D4FB20]"
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
            alt=""
            className="w-7 h-7 rounded-full object-cover ring-2 ring-[#D4FB20]"
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
            alt=""
            className="w-7 h-7 rounded-full object-cover ring-2 ring-[#D4FB20]"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
            alt=""
            className="w-7 h-7 rounded-full object-cover ring-2 ring-[#D4FB20]"
          />
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face"
            alt=""
            className="w-7 h-7 rounded-full object-cover ring-2 ring-[#D4FB20]"
          />
          <div className="w-8 h-7 rounded-full bg-[#242528] flex items-center justify-center text-white font-satoshi font-bold text-[11px] ring-2 ring-[#D4FB20]">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}
