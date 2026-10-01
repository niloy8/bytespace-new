"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

export default function HeroHeader() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div className="relative z-20 w-full max-w-360 mx-auto px-4 sm:px-8 flex flex-col items-center text-center pt-8 sm:pt-12 md:pt-10">
      {/* 1. Main Heading */}
      <h1
        className="font-heading font-semibold text-white tracking-[-0.01em] max-w-233.75 text-3xl sm:text-5xl md:text-[64px] lg:text-[72px] leading-[1.15] md:leading-[120%]"
        style={{ letterSpacing: "-0.01em" }}
      >
        Get Access to Hundreds <br className="hidden sm:inline" />
        Courses Available
      </h1>

      {/* 2. Subtitle */}
      <p className="font-satoshi font-normal text-white/95 text-sm sm:text-base md:text-[18px] leading-[160%] max-w-204.75 mt-4 sm:mt-5 px-2">
        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
      </p>

      {/* 3. Search Bar: InputField (461x52) + Button (104x46) with 8px gap */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-143.25 flex items-center justify-center gap-2 mt-6 sm:mt-8"
      >
        <InputField
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Course, topic, creator"
          containerClassName="w-full max-w-[461px] h-[52px]"
          icon={
            <svg
              className="w-5 h-5 text-neutral-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
        />

        <Button
          type="submit"
          className="w-26 h-11.5 shrink-0"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
