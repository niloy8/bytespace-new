import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  const column1 = [
    "Featured Courses",
    "Featured Categories",
    "Business",
    "IT",
    "Design",
  ];

  const column2 = [
    "Development",
    "Marketing",
    "Photography",
    "Finance",
    "Sport",
  ];

  const column3 = [
    "Become a Creator",
    "Affiliate Program",
    "Contact",
    "Help",
    "About",
  ];

  return (
    <footer className="w-full flex justify-center bg-white py-0">
      {/* 1440px wide x 525px high container */}
      <div
        className="relative w-full max-w-[1440px] flex flex-col justify-between select-none"
        style={{
          height: "525px",
          backgroundColor: "#FFFFFF",
          paddingTop: "80px",
          paddingBottom: "48px",
        }}
      >
        {/* Upper Part: width 1200px */}
        <div
          className="mx-auto flex flex-col"
          style={{
            width: "1200px",
          }}
        >
          {/* Brand / Logo */}
          <div style={{ marginBottom: "45px" }}>
            <Link
              href="/"
              className="inline-flex items-start gap-[8.12px] group transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="relative w-[28.88px] h-[31.5px] shrink-0">
                <Image
                  src="/logos/Vector.svg"
                  alt="ByteSpace Logo"
                  width={29}
                  height={32}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="font-clash font-bold text-[24px] text-[#242528] tracking-normal select-none flex items-center"
                style={{
                  width: "134px",
                  height: "30px",
                  marginTop: "7px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                ByteSpace
              </span>
            </Link>
          </div>

          {/* Main Row: Left Newsletter Column & Right Link Columns (Start at the EXACT SAME HEIGHT) */}
          <div
            className="flex justify-between items-start"
            style={{
              width: "1200px",
              gap: "92px",
            }}
          >
            {/* Left Part: width 528px */}
            <div
              className="flex flex-col gap-6"
              style={{
                width: "528px",
              }}
            >
              {/* Newsletter Heading: Aligned with the top of the link columns */}
              <p
                className="font-satoshi font-normal text-[14px] leading-[160%] text-[#242528]"
                style={{
                  width: "528px",
                  height: "22px",
                }}
              >
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>

              {/* Input & Search Button Row */}
              <div className="flex items-center gap-4">
                {/* Input Box: width 376px, height 52px, border-radius 100px */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="font-satoshi font-normal text-[14px] text-[#242528] placeholder-[#82868E] outline-none focus:border-[#003BE2] transition-colors"
                  style={{
                    width: "376px",
                    height: "52px",
                    borderRadius: "100px",
                    padding: "18px 24px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #CED0D3",
                  }}
                />

                {/* Search Button: width 104px, height 46px, border-radius 24px, bg #D4FB20 */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center font-satoshi font-medium text-[18px] leading-[120%] text-[#242528] bg-[#D4FB20] hover:bg-[#cbf415] active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
                  style={{
                    width: "104px",
                    height: "46px",
                    borderRadius: "24px",
                    padding: "12px 24px",
                  }}
                >
                  Search
                </button>
              </div>

              {/* Disclaimer Text */}
              <p
                className="font-satoshi font-normal text-[12px] leading-[160%] text-[#82868E]"
                style={{
                  width: "504px",
                  height: "38px",
                }}
              >
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>

            {/* Right Part: width 580px, height 222px, 3 columns, gap 40px (Starts at the SAME HEIGHT) */}
            <div
              className="flex justify-between items-start"
              style={{
                width: "580px",
                height: "222px",
                gap: "40px",
              }}
            >
              {/* Column 1 */}
              <div className="flex flex-col justify-between h-[222px]">
                {column1.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="font-satoshi font-normal text-[14px] leading-[160%] text-[#242528] hover:text-[#003BE2] transition-colors"
                    style={{ height: "22px" }}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col justify-between h-[222px]">
                {column2.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="font-satoshi font-normal text-[14px] leading-[160%] text-[#242528] hover:text-[#003BE2] transition-colors"
                    style={{ height: "22px" }}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col justify-between h-[222px]">
                {column3.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="font-satoshi font-normal text-[14px] leading-[160%] text-[#242528] hover:text-[#003BE2] transition-colors"
                    style={{ height: "22px" }}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Divider Line + Bottom Links Bar */}
        <div className="mx-auto flex flex-col gap-6" style={{ width: "1200px" }}>
          {/* Divider Line: width 1200px, border: 1px solid #CED0D3 */}
          <div
            style={{
              width: "1200px",
              height: "0px",
              borderTop: "1px solid #CED0D3",
            }}
          />

          {/* Bottom Bar: Copyright + Legal Links */}
          <div className="flex items-center justify-between w-full">
            {/* Copyright Text */}
            <p
              className="font-satoshi font-normal text-[12px] leading-[160%] text-[#242528]"
              style={{
                width: "460px",
                height: "19px",
              }}
            >
              @ 2023 ByteSpace. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="font-satoshi font-normal text-[12px] leading-[160%] text-[#242528] hover:underline"
                style={{ height: "19px" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-satoshi font-normal text-[12px] leading-[160%] text-[#242528] hover:underline"
                style={{ height: "19px" }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="font-satoshi font-normal text-[12px] leading-[160%] text-[#242528] hover:underline"
                style={{ height: "19px" }}
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
