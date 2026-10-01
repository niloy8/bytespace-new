import React from "react";
import Image from "next/image";

interface LogoItem {
  id: string;
  name: string;
  src: string;
  isSvg: boolean;
}

const LOGOS: LogoItem[] = [
  {
    id: "logo-1",
    name: "Logoipsum",
    src: "/logos/logoipsum1.svg",
    isSvg: true,
  },
  {
    id: "logo-2",
    name: "Logoipsum",
    src: "/logos/logoipsum2.png",
    isSvg: false,
  },
  {
    id: "logo-3",
    name: "Logoipsum",
    src: "/logos/logoipsum3.svg",
    isSvg: true,
  },
  {
    id: "logo-4",
    name: "Logoipsum",
    src: "/logos/logoipsum4.svg",
    isSvg: true,
  },
  {
    id: "logo-5",
    name: "Logoipsum",
    src: "/logos/logoipsum5.svg",
    isSvg: true,
  },
];

export default function LogosSection() {
  return (
    <section
      aria-label="Partner Logos"
      style={{
        backgroundColor: "#F5F5F6",
        height: "202px",
        opacity: 1,
      }}
      className="relative w-full flex items-center justify-center select-none overflow-hidden"
    >
      <div
        className="relative mx-auto flex items-center justify-center px-4 sm:px-8"
        style={{
          width: "1440px",
          maxWidth: "100%",
          height: "202px",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            width: "1132px",
            maxWidth: "100%",
            height: "42px",
            gap: "72px",
          }}
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center gap-2.5 shrink-0 opacity-100 hover:opacity-80 transition-opacity duration-200 cursor-default"
              style={{
                width: "167px",
                height: "41px",
              }}
            >
              <div
                className="shrink-0 flex items-center justify-center relative"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="font-satoshi font-bold text-[19px] leading-none text-neutral-400 tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
