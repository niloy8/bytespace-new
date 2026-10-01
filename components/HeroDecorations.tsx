import React from "react";
import Image from "next/image";

export default function HeroDecorations() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-25"
      style={{ zIndex: 25 }}
      aria-hidden="true"
    >
      {/* 1. Spiral Left (Lime Green 3D Spiral: top: 221px, left: -118px, width: 385px, height: 385px) */}
      <div
        className="absolute hidden md:block animate-float-1"
        style={{
          width: "385px",
          height: "385px",
          top: "221px",
          left: "calc(50% - 838px)",
        }}
      >
        <Image
          src="/icons/spiral left.svg"
          alt=""
          width={385}
          height={385}
          priority
          className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* 2. Square (Lime Green 3D Twisted Prism: top: 221px, left: 1231px, width: 370px, height: 370px) */}
      <div
        className="absolute hidden md:block animate-float-2"
        style={{
          width: "370px",
          height: "370px",
          top: "221px",
          left: "calc(50% + 511px)",
        }}
      >
        <Image
          src="/icons/square.svg"
          alt=""
          width={370}
          height={370}
          priority
          className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* 3. Spiral (White 3D Zigzag / Spiral: top: 477px, left: 183px, width: 175px, height: 175px, rotate: -180deg) */}
      <div
        className="absolute hidden lg:block animate-float-2"
        style={{
          width: "175px",
          height: "175px",
          top: "477px",
          left: "calc(50% - 537px)",
          transform: "rotate(-180deg)",
        }}
      >
        <Image
          src="/icons/spiral.svg"
          alt=""
          width={175}
          height={175}
          className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
        />
      </div>

      {/* 4. Cone (White 3D Cone / Pyramid: top: 464px, left: 1106px, width: 188px, height: 188px) */}
      <div
        className="absolute hidden lg:block animate-float-1"
        style={{
          width: "188px",
          height: "188px",
          top: "464px",
          left: "calc(50% + 386px)",
        }}
      >
        <Image
          src="/icons/Cone.svg"
          alt=""
          width={188}
          height={188}
          className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
        />
      </div>

      {/* 5. Circle (White 3D Torus / Donut: top: 682px, left: 18px, width: 342px, height: 342px) */}
      {/* Placed at top (z-index 25) so it overlaps on top of Ellipse 7.svg */}
      <div
        className="absolute hidden md:block animate-float-1"
        style={{
          width: "342px",
          height: "342px",
          top: "682px",
          left: "calc(50% - 702px)",
          zIndex: 25,
        }}
      >
        <Image
          src="/icons/circle.svg"
          alt=""
          width={342}
          height={342}
          className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]"
        />
      </div>

      {/* 6. Spiral White (White 3D Spiral: top: 672px, left: 1127px, width: 330px, height: 330px) */}
      <div
        className="absolute hidden md:block animate-float-2"
        style={{
          width: "330px",
          height: "330px",
          top: "672px",
          left: "calc(50% + 407px)",
        }}
      >
        <Image
          src="/icons/spiral white.svg"
          alt=""
          width={330}
          height={330}
          className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]"
        />
      </div>
    </div>
  );
}
