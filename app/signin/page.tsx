"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLeftGraphics from "@/components/AuthLeftGraphics";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="relative w-full min-h-screen bg-[#003BE2] bg-hero-grid flex justify-center overflow-x-hidden select-none">
      {/* 1440px Standard Canvas */}
      <div
        className="relative w-full max-w-[1440px]"
        style={{
          minHeight: "1024px",
          height: "1024px",
        }}
      >
        {/* ============================================================== */}
        {/* TOP-LEFT LOGO & DESCRIPTION                                     */}
        {/* ============================================================== */}
        {/* vector.svg - top: 35px, left: 122px, width: 28.88px, height: 31.5px */}
        <Link
          href="/"
          className="absolute z-40 transition-transform duration-200 hover:scale-105"
          style={{
            top: "35px",
            left: "122px",
            width: "28.88px",
            height: "31.5px",
          }}
        >
          <Image
            src="/logos/Vector.svg"
            alt="ByteSpace Logo"
            width={29}
            height={32}
            priority
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Heading & Subtitle Block */}
        <div
          className="absolute z-20 flex flex-col gap-3"
          style={{
            top: "140px",
            left: "122px",
            maxWidth: "420px",
          }}
        >
          {/* Sign in with ease */}
          <h1 className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#F5F5F6] whitespace-nowrap">
            Sign in with ease
          </h1>

          {/* Subtitle Description */}
          <p className="font-satoshi font-normal text-[14px] leading-[160%] text-[#E5E6E8]/90">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* ============================================================== */}
        {/* LEFT-SIDE GRAPHICS (Cards + 3D Elements)                        */}
        {/* ============================================================== */}
        <AuthLeftGraphics />

        {/* ============================================================== */}
        {/* RIGHT-SIDE SIGN IN FRAME (WHITE CARD)                           */}
        {/* Spec: width: 579px, height: 784px, rounded: 24px,              */}
        {/*       top: 120px, left: 741px, bg: #FFFFFF                      */}
        {/* ============================================================== */}
        <div
          className="absolute z-30 bg-white rounded-[24px] shadow-2xl flex flex-col justify-between"
          style={{
            width: "579px",
            height: "784px",
            top: "120px",
            left: "741px",
            padding: "64px 63px",
          }}
        >
          {/* Top Form Container */}
          <div>
            {/* Sign In Eyebrow */}
            <p
              className="font-satoshi font-normal text-[18px] leading-[160%] text-[#003BE2]"
              style={{
                width: "148px",
                height: "29px",
              }}
            >
              Sign In
            </p>

            {/* Welcome Back Heading */}
            <h2
              className="font-heading font-semibold text-[44px] leading-[120%] tracking-[-0.01em] text-[#242528] mt-2 mb-8"
              style={{
                width: "453px",
              }}
            >
              Welcome Back
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* 1. Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-satoshi font-medium text-[14px] leading-[120%] text-[#000000]"
                  style={{ height: "17px" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-satoshi font-normal text-[15px] text-[#242528] placeholder-[#82868E] outline-none focus:border-[#003BE2] transition-colors"
                  style={{
                    width: "453px",
                    height: "52px",
                    borderRadius: "12px",
                    padding: "12px 24px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E6E8",
                  }}
                />
              </div>

              {/* 2. Password Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-satoshi font-medium text-[14px] leading-[120%] text-[#000000]"
                  style={{ height: "17px" }}
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-satoshi font-normal text-[15px] text-[#242528] placeholder-[#82868E] outline-none focus:border-[#003BE2] transition-colors"
                  style={{
                    width: "453px",
                    height: "52px",
                    borderRadius: "12px",
                    padding: "12px 24px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E6E8",
                  }}
                />
              </div>

              {/* Sign In Button (aligned to the right) */}
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center font-satoshi font-medium text-[16px] leading-[120%] text-[#242528] bg-[#D4FB20] hover:bg-[#cbf415] active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
                  style={{
                    width: "123px",
                    height: "46px",
                    borderRadius: "24px",
                    padding: "12px 24px",
                  }}
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider: — or — */}
            <div className="relative flex items-center justify-center my-8">
              <div className="w-full border-t border-[#CED0D3]" />
              <span className="absolute bg-white px-4 font-satoshi text-[14px] text-[#82868E]">
                or
              </span>
            </div>

            {/* Social Logins: Facebook & Google (Squircle design matching Image 2) */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook Button (Squircle with black circle 'f') */}
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="w-[56px] h-[56px] rounded-[18px] border border-[#CED0D3] bg-white flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="#000000" />
                  <path
                    d="M16.5 14.5H14.2V21H11.4V14.5H10.1V12.1H11.4V10.5C11.4 9.03 12.28 7.9 14.47 7.9H16.5V10.3H15.1C14.4 10.3 14.2 10.65 14.2 11.26V12.1H16.6L16.5 14.5Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </button>

              {/* Google Button (Squircle with solid black 'G') */}
              <button
                type="button"
                aria-label="Sign in with Google"
                className="w-[56px] h-[56px] rounded-[18px] border border-[#CED0D3] bg-white flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Link: New user? Create an account */}
          <div className="flex items-center justify-center gap-1.5 pt-4">
            <span
              className="font-satoshi font-normal text-[16px] leading-[160%] text-[#4B4C53]"
              style={{ height: "26px" }}
            >
              New user?
            </span>
            <Link
              href="/join"
              className="font-satoshi font-normal text-[16px] leading-[160%] text-[#003BE2] hover:underline"
              style={{ height: "26px" }}
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
