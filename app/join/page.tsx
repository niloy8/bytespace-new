"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLeftGraphics from "@/components/AuthLeftGraphics";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
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
          {/* Sign up and come in */}
          <h1 className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#F5F5F6] whitespace-nowrap">
            Sign up and come in
          </h1>

          {/* Subtitle Description */}
          <p className="font-satoshi font-normal text-[14px] leading-[160%] text-[#E5E6E8]/90">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>
        </div>

        {/* ============================================================== */}
        {/* LEFT-SIDE GRAPHICS (Cards + 3D Elements)                        */}
        {/* ============================================================== */}
        <AuthLeftGraphics />

        {/* ============================================================== */}
        {/* RIGHT-SIDE REGISTER FRAME (WHITE CARD)                          */}
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
            {/* Create an Account Eyebrow */}
            <p
              className="font-satoshi font-normal text-[18px] leading-[160%] text-[#7F30F7]"
              style={{
                width: "148px",
                height: "29px",
              }}
            >
              Create an Account
            </p>

            {/* Welcome to ByteSpace Heading */}
            <h2
              className="font-heading font-semibold text-[44px] leading-[120%] tracking-[-0.01em] text-[#242528] mt-2 mb-8"
              style={{
                width: "453px",
                height: "106px",
              }}
            >
              Welcome to<br />ByteSpace
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* 1. Full Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="font-satoshi font-medium text-[14px] leading-[120%] text-[#000000]"
                  style={{ height: "17px" }}
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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

              {/* 2. Email Field */}
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

              {/* 3. Password Field */}
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

              {/* Continue Button (aligned to the right) */}
              <div className="flex justify-end mt-3">
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
                  Continue
                </button>
              </div>
            </form>
          </div>

          {/* Bottom Link: Already have an account? Login */}
          <div className="flex items-center justify-center gap-1.5 pt-4">
            <span
              className="font-satoshi font-normal text-[16px] leading-[160%] text-[#4B4C53]"
              style={{ height: "26px" }}
            >
              Already have an account?
            </span>
            <Link
              href="/signin"
              className="font-satoshi font-normal text-[16px] leading-[160%] text-[#003BE2] hover:underline"
              style={{ height: "26px" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
