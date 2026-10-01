import React from "react";
import Image from "next/image";

export default function CreatorBannerSection() {
  return (
    <section className="w-full flex justify-center bg-[#F5F5F6] py-0">
      <div
        className="relative w-full max-w-[1440px] overflow-hidden flex flex-col items-center justify-center text-center select-none"
        style={{
          height: "488px",
          backgroundColor: "#003BE2",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "0 0",
        }}
      >
        {/* 1. Top-Left Lime Spiral (width: 385, height: 385, top: -162px, left: -118px, angle: 0deg) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            width: "340px",
            height: "340px",
            top: "-100px",
            left: "-100px",
          }}
        >
          <Image
            src="/icons/banner-spiral-lime.png"
            alt="3D Lime Spiral"
            width={385}
            height={385}
            className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)]"
            priority
            unoptimized
          />
        </div>

        {/* 2. Top-Left White Spiral (width: 175, height: 175, top: 5px, left: 178px, angle: -180deg) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            width: "175px",
            height: "175px",
            top: "5px",
            left: "178px",
            transform: "rotate(-180deg)",
          }}
        >
          <Image
            src="/icons/banner-spiral-white.png"
            alt="3D White Spiral"
            width={175}
            height={175}
            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            priority
            unoptimized
          />
        </div>

        {/* 3. Bottom-Left White Cone (width: 188.93, height: 188.93, top: 248px, left: 18px: z-10) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            width: "188.93px",
            height: "188.93px",
            top: "248px",
            left: "-30px",
          }}
        >
          <Image
            src="/icons/banner-cone-white.png"
            alt="3D White Cone"
            width={189}
            height={189}
            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            priority
            unoptimized
          />
        </div>

        {/* 4. Bottom-Left Lime Torus (width: 342, height: 342, top: 299px, left: 20px, angle: 0deg: z-15) */}
        <div
          className="absolute pointer-events-none z-15"
          style={{
            width: "245px",
            height: "242px",
            top: "360px",
            left: "150px",
          }}
        >
          <Image
            src="/icons/banner-torus-lime.png"
            alt="3D Lime Torus"
            width={342}
            height={342}
            className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
            priority
            unoptimized
          />
        </div>

        {/* 5. Top-Right Lime Pyramid (width: 188, height: 188, top: 48px, left: 1080px, angle: 0deg: z-10) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            width: "188px",
            height: "188px",
            top: "48px",
            left: "1080px",
          }}
        >
          <Image
            src="/icons/banner-pyramid-lime.png"
            alt="3D Lime Pyramid"
            width={188}
            height={188}
            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            priority
            unoptimized
          />
        </div>

        {/* 6. Far Top-Right White Cylinder (width: 370, height: 370, top: 6px, left: 1226px, angle: 0deg: z-10) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            width: "370px",
            height: "370px",
            top: "6px",
            left: "1270px",
          }}
        >
          <Image
            src="/icons/banner-cylinder-white.png"
            alt="3D White Cylinder"
            width={370}
            height={370}
            className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
            priority
            unoptimized
          />
        </div>

        {/* 7. Bottom-Right Lime Spiral (width: 330, height: 330, top: 289px, left: 1110px, angle: 0deg: z-10) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            width: "290px",
            height: "290px",
            top: "330px",
            left: "1110px",
          }}
        >
          <Image
            src="/icons/banner-spiral-small-lime.png"
            alt="3D Lime Spiral"
            width={330}
            height={330}
            className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] -rotate-45"
            priority
            unoptimized
          />
        </div>

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center px-6 max-w-[940px]">
          {/* Main Title */}
          <h2 className="font-heading font-semibold text-[38px] sm:text-[44px] leading-[120%] tracking-[-0.01em] text-white text-center mb-4">
            Unlock Your Potential as a<br className="hidden sm:inline" /> Creator with ByteSpace
          </h2>

          {/* Subtitle Description */}
          <p className="font-satoshi font-normal text-[15px] sm:text-[16px] leading-[150%] text-white/85 text-center max-w-[840px] mb-8">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          {/* Call to Action Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center font-satoshi font-medium text-[15px] leading-[20px] text-[#040819] bg-[#D4FB20] hover:bg-[#cbf415] active:scale-95 transition-all duration-200 px-7 py-3 rounded-full shadow-[0_8px_20px_rgba(212,251,32,0.25)] cursor-pointer"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
