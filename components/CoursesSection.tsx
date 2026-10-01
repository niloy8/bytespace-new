"use client";

import React, { useState } from "react";
import Image from "next/image";

// 1. Category Filter Pills (Photo 1)
const PILL_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

// 2. Course Cards Data (Photo 2)
interface CourseCard {
  id: string;
  title: string;
  instructor: string;
  rating: string;
  level: string;
  price: string;
  period: string;
  imageSrc: string;
}

const COURSES: CourseCard[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    imageSrc: "/images/image1.png",
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    imageSrc: "/images/image2.png",
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    instructor: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    imageSrc: "/images/image3.png",
  },
  {
    id: "course-4",
    title: "Balancing Productivity an...",
    instructor: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    imageSrc: "/images/image4.png",
  },
  {
    id: "course-5",
    title: "Mastering Money Manage...",
    instructor: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    imageSrc: "/images/image5.png",
  },
  {
    id: "course-6",
    title: "From Idea to Startup Succ...",
    instructor: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    imageSrc: "/images/image6.png",
  },
];

// 3. Learning Path Categories (Photo 3)
interface PathCategory {
  id: string;
  title: string;
  iconSrc: string;
}

const PATH_CATEGORIES: PathCategory[] = [
  { id: "cat-1", title: "Design", iconSrc: "/icons/design.svg" },
  { id: "cat-2", title: "Development", iconSrc: "/icons/Development.svg" },
  { id: "cat-3", title: "IT & Software", iconSrc: "/icons/IT & Software.svg" },
  { id: "cat-4", title: "Business", iconSrc: "/icons/Business.svg" },
  { id: "cat-5", title: "Marketing", iconSrc: "/icons/Marketing.svg" },
  { id: "cat-6", title: "Photography", iconSrc: "/icons/Photography.svg" },
];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section
      aria-label="Courses and Learning Paths"
      style={{ backgroundColor: "#FFFFFF" }}
      className="w-full flex flex-col items-center py-20 px-4 sm:px-8 select-none"
    >
      <div className="w-full max-w-460 mx-auto flex flex-col items-center">
        {/* ============================================================== */}
        {/* PART 1: Discover Your Passion, Build Your Skills Header & Pills */}
        {/* ============================================================== */}
        <div className="w-full flex flex-col items-center text-center">
          <h2
            className="font-heading font-semibold text-[#040819] text-3xl sm:text-4xl md:text-[44px] leading-[120%] tracking-[-0.01em] max-w-147"
          >
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>

          <p className="font-satoshi font-normal text-neutral-400 text-[16px] sm:text-[18px] leading-[160%] max-w-[917px] mt-4 sm:mt-5">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>

          {/* Category Filter Pills (3 Rows) */}
          <div className="w-full flex flex-col items-center gap-3 sm:gap-3.5 mt-8 sm:mt-10">
            {PILL_ROWS.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
              >
                {row.map((category) => {
                  const isActive = activeCategory === category;
                  const isMore = category === "+ More";

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => !isMore && setActiveCategory(category)}
                      className={`font-satoshi font-medium text-[15px] sm:text-[16px] leading-[120%] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-200 cursor-pointer ${isActive
                        ? "bg-secondary-400 text-[#040819] shadow-sm font-semibold"
                        : isMore
                          ? "bg-transparent text-primary-800 hover:bg-neutral-100 font-semibold"
                          : "bg-neutral-50 text-neutral-800 hover:bg-[#EAEAEA] hover:text-neutral-950"
                        }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 2: 6 Course Cards Grid                                    */}
        {/* ============================================================== */}
        <div className="w-full flex justify-center mt-12 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 justify-items-center max-w-[1170px] w-full">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="w-full max-w-[373px] h-96 rounded-3xl border border-[#CED0D3] bg-white p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 cursor-pointer"
              >
                {/* 1. Course Thumbnail Image */}
                <div className="w-full h-50 rounded-2xl overflow-hidden relative bg-neutral-100 shrink-0">
                  <Image
                    src={course.imageSrc}
                    alt={course.title}
                    width={341}
                    height={200}
                    className="w-full h-full object-cover"
                    priority={course.id === "course-1"}
                  />
                </div>

                {/* 2. Course Details Area (width: 100%, height ~131px) */}
                <div className="w-full flex flex-col justify-between flex-1 pt-3.5 pb-0.5">
                  {/* Title & Rating */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#040819] truncate">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className="font-satoshi font-normal text-[18px] leading-[160%] text-[#4F4F4F]">
                          {course.rating}
                        </span>
                        <svg
                          className="w-4 h-4 text-[#CED0D3] fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </div>
                    </div>

                    {/* Instructor */}
                    <p className="font-satoshi font-normal text-[12px] leading-[160%] text-neutral-400 mt-0.5">
                      by{" "}
                      <span className="text-primary-800 hover:underline">
                        {course.instructor}
                      </span>
                    </p>
                  </div>

                  {/* Badges: Beginner Level + Student Avatars Stack */}
                  <div className="flex items-center justify-between gap-2 my-1">
                    {/* Beginner Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100">
                      {/* Signal Bars Icon */}
                      <svg
                        className="w-3.5 h-3.5 text-[#4F4F4F]"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                        <rect x="6.75" y="7" width="2.5" height="7" rx="0.5" />
                        <rect x="11.5" y="4" width="2.5" height="10" rx="0.5" />
                      </svg>
                      <span className="font-satoshi font-medium text-[12px] leading-[120%] text-[#4F4F4F]">
                        {course.level}
                      </span>
                    </div>

                    {/* Student Avatars Stack (128px wide) */}
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
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
                        alt="Student"
                        className="w-6 h-6 rounded-full object-cover ring-1.5 ring-white"
                      />
                      <div className="w-6 h-6 rounded-full bg-secondary-400 flex items-center justify-center text-[10px] font-satoshi font-bold text-neutral-950 ring-1.5 ring-white">
                        26+
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline">
                    <span className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-primary-800">
                      {course.price}
                    </span>
                    <span className="font-satoshi font-normal text-[12px] leading-[160%] text-[#4F4F4F]">
                      {course.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 3: Explore Diverse Learning Paths at Bytespace             */}
        {/* ============================================================== */}
        <div className="w-full flex flex-col items-center text-center mt-24 sm:mt-28">
          <h2 className="font-heading font-semibold text-[#040819] text-2xl sm:text-3xl md:text-[36px] leading-[120%] tracking-[-0.01em] max-w-198">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="font-satoshi font-normal text-neutral-400 text-[16px] sm:text-[18px] leading-[160%] max-w-229.25 mt-4">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there's
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>

          {/* 6 Category Path Boxes (1202px total container, 167x167 each, 40px gap) */}
          <div className="w-full flex items-center justify-center mt-12 sm:mt-14">
            <div
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10"
              style={{ maxWidth: "1202px" }}
            >
              {PATH_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-3xl border border-[#CED0D3] bg-white flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-secondary-400 cursor-pointer"
                  style={{
                    width: "167px",
                    height: "167px",
                  }}
                >
                  {/* Lime Circle Icon (width: 60px, height: 60px, border-radius: 40px, padding: 12px, bg: #D4FB20) */}
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "40px",
                      padding: "12px",
                      backgroundColor: "#D4FB20",
                    }}
                  >
                    <Image
                      src={cat.iconSrc}
                      alt={cat.title}
                      width={36}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <span className="font-satoshi font-medium text-[20px] leading-[120%] text-neutral-950 text-center px-2">
                    {cat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
