"use client";

import React from "react";
import Image from "next/image";

export default function ProfessionalGrowthSection() {
  return (
    <section
      aria-label="Professional Growth & Course Management"
      className="relative w-full overflow-hidden select-none"
      style={{
        backgroundColor: "#FFFFFF",
        minHeight: "1460px",
      }}
    >
      {/* ============================================================== */}
      {/* 5 Background Radial Gradients with 40px Blur                    */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Gradient 1: Top-Left Lime */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "1137px",
            height: "1137px",
            top: "-466px",
            left: "calc(50% - 720px - 152px)",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Gradient 2: Top-Right Blue */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "1137px",
            height: "1137px",
            top: "-458px",
            left: "calc(50% - 720px + 811px)",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.0184) 53%, rgba(0, 59, 226, 0.0048) 75%, rgba(0, 59, 226, 0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Gradient 3: Mid-Left Blue */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "1137px",
            height: "1137px",
            top: "183px",
            left: "calc(50% - 720px - 508px)",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.0368) 53%, rgba(0, 59, 226, 0.0096) 75%, rgba(0, 59, 226, 0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Gradient 4: Bottom-Left Lime */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "672px",
            height: "672px",
            top: "946px",
            left: "calc(50% - 720px - 287px)",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Gradient 5: Bottom-Right Blue */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "1137px",
            height: "1137px",
            top: "788px",
            left: "calc(50% - 720px + 722px)",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* Main Content Container (width: 1258px, gap: 72px)              */}
      {/* ============================================================== */}
      <div className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-8 py-24 sm:py-28 flex flex-col items-center">
        <div
          className="w-full flex flex-col gap-18 lg:gap-24"
          style={{ maxWidth: "1258px" }}
        >
          {/* ============================================================ */}
          {/* PART 1 (Top Block): Professional Growth + Person 1 Showcase  */}
          {/* ============================================================ */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* Left Column: Text & Stats */}
            <div className="w-full lg:w-144.25 flex flex-col items-start text-left">
              <h2 className="font-heading font-semibold text-neutral-950text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.01em] max-w-144.25">
                Your Path to Professional Growth Starts Here!
              </h2>

              <p className="font-satoshi font-normal text-[#4B4C53] text-[16px] sm:text-[18px] leading-[160%] max-w-119.25 mt-6">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>

              {/* Stats Row */}
              <div className="flex items-center gap-8 sm:gap-12 mt-8 sm:mt-10">
                {/* Stat 1 */}
                <div className="flex flex-col">
                  <span className="font-heading font-medium text-[#003BE2] text-[36px] leading-[44px] tracking-[-0.01em]">
                    12K
                  </span>
                  <span className="font-satoshi font-normal text-[#4B4C53] text-[18px] leading-[160%]">
                    Students
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col">
                  <span className="font-heading font-medium text-[#003BE2] text-[36px] leading-[44px] tracking-[-0.01em]">
                    70+
                  </span>
                  <span className="font-satoshi font-normal text-[#4B4C53] text-[18px] leading-[160%]">
                    Courses
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col">
                  <span className="font-heading font-medium text-[#003BE2] text-[36px] leading-[44px] tracking-[-0.01em]">
                    16
                  </span>
                  <span className="font-satoshi font-normal text-[#4B4C53] text-[18px] leading-[160%]">
                    Creators
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Person 1 + Learn Figma Card + Learning Progress + 3D Spiral */}
            <div
              className="relative w-full max-w-[621px] h-138 shrink-0"
              style={{ width: "621px", height: "552px" }}
            >
              {/* 1. Behind Person: Learn Figma from Basic Card (width: 373, height: 384) */}
              <div
                className="absolute top-0 left-0 w-[373px] h-[384px] rounded-[24px] border border-[#CED0D3] bg-white p-4 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.06)] z-10"
              >
                {/* Thumbnail */}
                <div className="w-full h-[200px] rounded-[16px] overflow-hidden relative bg-neutral-100 shrink-0">
                  <Image
                    src="/images/image1.png"
                    alt="Learn Figma from Basic"
                    width={341}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Details */}
                <div className="w-full flex flex-col justify-between flex-1 pt-3.5 pb-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#040819] truncate">
                      Learn Figma from Basic
                    </h3>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="font-satoshi font-normal text-[18px] leading-[160%] text-[#4F4F4F]">
                        4.5
                      </span>
                      <svg className="w-4 h-4 text-[#CED0D3] fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  </div>

                  <p className="font-satoshi font-normal text-[12px] leading-[160%] text-[#82868E]">
                    by <span className="text-[#003BE2]">purepearl studio</span>
                  </p>

                  <div className="flex items-center justify-between gap-2 my-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F6] border border-[#E5E6E8]">
                      <svg className="w-3.5 h-3.5 text-[#4F4F4F]" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                        <rect x="6.75" y="7" width="2.5" height="7" rx="0.5" />
                        <rect x="11.5" y="4" width="2.5" height="10" rx="0.5" />
                      </svg>
                      <span className="font-satoshi font-medium text-[12px] leading-[120%] text-[#4F4F4F]">
                        Beginner
                      </span>
                    </div>

                    <div className="flex items-center -space-x-1.5 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full object-cover ring-1.5 ring-white" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full object-cover ring-1.5 ring-white" />
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full object-cover ring-1.5 ring-white" />
                      <div className="w-6 h-6 rounded-full bg-[#D4FB20] flex items-center justify-center text-[10px] font-satoshi font-bold text-neutral-950 ring-1.5 ring-white">
                        26+
                      </div>
                    </div>
                  </div>

                  <div className="flex items-baseline">
                    <span className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-primary-800">$25</span>
                    <span className="font-satoshi font-normal text-[12px] leading-[160%] text-[#4F4F4F]">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* 2. 3D Lime Spiral (top-right, behind Learning Progress card: z-25) */}
              <div
                className="absolute pointer-events-none z-25"
                style={{
                  width: "216px",
                  height: "216px",
                  top: "20px",
                  right: "30px",
                }}
              >
                <Image
                  src="/icons/spiral small.png"
                  alt="3D Lime Spiral"
                  width={216}
                  height={216}
                  className="w-full h-full rotate-6 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
                  priority
                  unoptimized
                />
              </div>

              {/* 3. Person 1 Image (width: 577px, height: 540px, top: -48px to go more up) */}
              <div
                className="absolute pointer-events-none z-20"
                style={{
                  width: "577px",
                  height: "540px",
                  top: "-48px",
                  right: "0px",
                }}
              >
                <Image
                  src="/images/person.png"
                  alt="Student with laptop"
                  width={577}
                  height={540}
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* 4. Learning Progress Card (top: 213px, left: 345px, width: 232px, height: 138px) */}
              <div
                className="absolute z-30 bg-white rounded-[16px] p-4 shadow-[0_15px_30px_rgba(0,0,0,0.14)] border border-white/60 flex flex-col justify-between"
                style={{
                  width: "232px",
                  height: "138px",
                  top: "213px",
                  left: "345px",
                }}
              >
                <span className="font-satoshi font-medium text-neutral-800 text-[14px] leading-5">
                  Learning Progress
                </span>
                <div className="font-heading font-bold text-neutral-950 text-[36px] leading-none my-1">
                  55%
                </div>
                <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#CBFC01] h-full rounded-full"
                    style={{ width: "55%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* PART 2 (Bottom Block): Person 2 Showcase + Create & Manage   */}
          {/* ============================================================ */}
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-12">
            {/* Left Column: Person 2 + Revenue Cards + Spiral + Happy Students */}
            <div
              className="relative w-full max-w-[541px] h-[596px] shrink-0"
              style={{ width: "541px", height: "596px" }}
            >
              {/* 1. Blue Box 1: Total Revenue (top: 44px, left: 0px, width: 232px, height: 119px, behind person: z-10) */}
              <div
                className="absolute z-10 text-white rounded-[16px] p-4 shadow-[0_20px_35px_rgba(0,59,226,0.3)] flex flex-col justify-between"
                style={{
                  width: "232px",
                  height: "119px",
                  top: "44px",
                  left: "0px",
                  backgroundColor: "#003BE2",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div>
                  <div className="font-satoshi font-medium text-[#F5F5F6] text-[16px] leading-[120%]">
                    Total Revenue
                  </div>
                  <div className="font-satoshi font-normal text-[#F5F5F6]/80 text-[10px] leading-[120%] mt-0.5">
                    July 1-28
                  </div>
                </div>

                <div>
                  <div className="font-heading font-semibold text-[#F5F5F6] text-[24px] leading-[32px] tracking-[-0.01em]">
                    $120.29
                  </div>
                  {/* Subtle Accent Line */}
                  <div className="w-full bg-white/20 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#D4FB20] h-full rounded-full w-2/3" />
                  </div>
                </div>
              </div>

              {/* 2. Blue Box 2: Year to Date (top: 194px, left: 0px, width: 134px, height: 135px, behind person: z-10) */}
              <div
                className="absolute z-10 text-white rounded-[16px] p-4 shadow-[0_20px_35px_rgba(0,59,226,0.3)] flex flex-col justify-between"
                style={{
                  width: "134px",
                  height: "135px",
                  top: "194px",
                  left: "0px",
                  backgroundColor: "#003BE2",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div>
                  <div className="font-satoshi font-medium text-[#F5F5F6] text-[16px] leading-[120%]">
                    Year to Date
                  </div>
                  <div className="font-satoshi font-normal text-[#F5F5F6]/80 text-[10px] leading-[120%] mt-0.5">
                    2023
                  </div>
                </div>

                <div>
                  <div className="font-heading font-semibold text-[#F5F5F6] text-[20px] leading-[28px] tracking-[-0.01em]">
                    $1,200.38
                  </div>
                  <div
                    className="inline-flex items-center justify-center rounded-full mt-1.5"
                    style={{
                      width: "38px",
                      height: "24px",
                      padding: "2px 8px",
                      backgroundColor: "#D4FB20",
                    }}
                  >
                    <span className="font-satoshi font-medium text-[10px] leading-[20px] text-[#242528]">
                      +12%
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. 3D Lime Spiral (right side, behind Happy Students card: z-25) */}
              <div
                className="absolute pointer-events-none z-25"
                style={{
                  width: "216px",
                  height: "216px",
                  top: "70px",
                  right: "90px",
                }}
              >
                <Image
                  src="/icons/spiral small.png"
                  alt="3D Lime Spiral"
                  width={216}
                  height={216}
                  className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
                  priority
                  unoptimized
                />
              </div>

              {/* 4. Person 2 Image (on top of blue boxes: z-20) */}
              <div
                className="absolute pointer-events-none z-20"
                style={{
                  width: "435px",
                  height: "596px",
                  left: "28px",
                  top: "0px",
                }}
              >
                <Image
                  src="/images/person 2.png"
                  alt="Instructor with tablet and headset"
                  width={435}
                  height={596}
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.22)]"
                />
              </div>

              {/* 5. Happy Students Card (top: 413px, left: 283px, width: 258px, height: 123px) */}
              <div
                className="absolute z-30 bg-white rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.14)] border border-white/60 flex flex-col justify-between"
                style={{
                  width: "258px",
                  height: "123px",
                  top: "360px",
                  left: "270px",
                  backdropFilter: "blur(20px)",
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

                <div className="flex items-center -space-x-2 overflow-hidden py-1">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-white" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-white" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-white" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-white" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face" alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-white" />
                  <div className="w-8 h-7 rounded-full bg-[#CBFC01] flex items-center justify-center text-neutral-950 font-satoshi font-bold text-[11px] ring-2 ring-white">
                    2K+
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text + 4 Checkbox Points */}
            <div className="w-full lg:w-[580px] flex flex-col items-start text-left">
              <h2 className="font-heading font-semibold text-[#242528] text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.01em] max-w-[391px]">
                Create & Manage Courses Easily.
              </h2>

              <p className="font-satoshi font-normal text-[#82868E] text-[16px] sm:text-[18px] leading-[160%] max-w-[574px] mt-6">
                <strong className="font-bold text-[#242528]">ByteSpace</strong> supports
                individuals or entities in the creation, publication, and
                administration of educational courses.
              </p>

              {/* 4 Feature Items with Checkbox */}
              <div className="flex flex-col gap-4 mt-8 sm:mt-10">
                {[
                  "Share Your Expertise",
                  "Monetize Your Passion",
                  "Flexibility and Autonomy",
                  "Build a Community",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    {/* Blue Circular Checkmark */}
                    <div className="w-6 h-6 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-sm">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>

                    <span className="font-satoshi font-medium text-[#242528] text-[18px] leading-[120%]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
