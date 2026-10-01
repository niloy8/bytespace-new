"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <header className="relative z-30 w-full max-w-360 mx-auto px-6 sm:px-12 lg:px-30.5 pt-8 md:pt-8.75">
      <div className="relative flex items-start justify-between min-h-10">
        {/* Left: Brand / Logo */}
        {/* vector.svg (top: 35px, left: 122px, width: 28.88px, height: 31.5px) */}
        {/* ByteSpace (top: 42px -> mt-[7px], left: 159px -> gap-[8.12px], width: 134px, height: 30px) */}
        <Link
          href="/"
          className="flex items-start gap-[8.12px] group transition-transform duration-200 hover:scale-[1.02]"
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
            className="font-clash font-bold text-[24px] text-white tracking-normal select-none flex items-center"
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

        {/* Center: Desktop Navigation Links (top: 47px -> pt-[12px], left: 614.5px, width: 210px, height: 26px, gap: 24px) */}
        <nav
          className="hidden md:flex items-center justify-center gap-6 absolute left-1/2 -translate-x-1/2"
          style={{
            top: "12px",
            width: "210px",
            height: "26px",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-satoshi text-neutral-50 text-[16px] tracking-[0%] transition-all duration-200 ${isActive
                  ? "font-medium leading-[120%] -translate-y-0.5"
                  : "font-normal leading-[160%] opacity-90 hover:opacity-100"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Items (top: 48px -> pt-[13px], left: 1146px, width: 174px, height: 24px, gap: 24px) */}
        <div
          className="hidden md:flex items-center gap-6"
          style={{
            paddingTop: "13px",
            width: "174px",
            height: "24px",
          }}
        >
          <Link
            href="/signin"
            className={`font-satoshi text-neutral-50 text-[16px] tracking-[0%] transition-all duration-200 ${pathname === "/signin"
              ? "font-medium leading-[120%] -translate-y-0.5"
              : "font-normal leading-[160%] opacity-90 hover:opacity-100"
              }`}
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className={`font-satoshi text-neutral-50 text-[16px] tracking-[0%] transition-all duration-200 ${pathname === "/join"
              ? "font-medium leading-[120%] -translate-y-0.5"
              : "font-normal leading-[160%] opacity-90 hover:opacity-100"
              }`}
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative w-6 h-6 flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <Image
              src="/icons/shopping.svg"
              alt="Cart"
              width={24}
              height={24}
              className="w-full h-full object-contain brightness-100"
            />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-4 pt-1">
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative w-6 h-6 flex items-center justify-center text-white"
          >
            <Image
              src="/icons/shopping.svg"
              alt="Cart"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-3 bg-[#0034C7] border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-md flex flex-col gap-4 z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-satoshi text-[16px] py-1 border-b border-white/10 ${isActive
                  ? "text-neutral-50 font-medium"
                  : "text-neutral-50/90 font-normal"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 flex items-center justify-between gap-4">
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi text-neutral-50 text-[16px] py-2 px-4 rounded-full border border-white/30 text-center flex-1"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi bg-secondary-500 text-neutral-950 font-bold text-[16px] py-2 px-4 rounded-full text-center flex-1 shadow-md"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
