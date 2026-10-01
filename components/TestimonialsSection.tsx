import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=face",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full flex justify-center bg-[#F5F5F6] py-0">
      {/* Outer Section Frame: width 1440px, height 784px */}
      <div
        className="relative w-full max-w-[1440px] overflow-hidden"
        style={{
          height: "784px",
          backgroundColor: "#F5F5F6",
        }}
      >
        {/* Background Gradient 1: Blue Glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "1137px",
            height: "1137px",
            top: "149px",
            left: "-442px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
          }}
        />

        {/* Background Gradient 2: Center-Top Lime Glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "672px",
            height: "672px",
            top: "-138px",
            left: "395px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
          }}
        />

        {/* Background Gradient 3: Right-Top Lime Glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "1137px",
            height: "1137px",
            top: "-241px",
            left: "842px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
          }}
        />

        {/* Contents Wrapper: width 1204px, height 653px, top 74px, left 118px */}
        <div
          className="absolute z-10 flex flex-col justify-between"
          style={{
            width: "1204px",
            height: "653px",
            top: "74px",
            left: "118px",
          }}
        >
          {/* Top Header Row: flex row between left heading and right description */}
          <div className="flex items-start justify-between w-full">
            {/* Left Heading: width 577px, height 106px */}
            <div style={{ width: "577px", height: "106px" }}>
              <h2 className="font-heading font-semibold text-[44px] leading-[120%] tracking-[-0.01em] text-[#040819]">
                Discover What Our Community Is Saying
              </h2>
            </div>

            {/* Right Description: width 580px, height 145px */}
            <div style={{ width: "580px", height: "145px" }}>
              <p className="font-satoshi font-normal text-[18px] leading-[160%] text-[#82868E]">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* Bottom Cards Row: 3 cards, width 374px, height 432px each, gap 41px */}
          <div className="flex items-center justify-between w-full">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-neutral-100/60 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                style={{
                  width: "374px",
                  height: "432px",
                  borderRadius: "24px",
                  padding: "24px",
                  gap: "24px",
                }}
              >
                {/* Avatar & Author Info */}
                <div className="flex flex-col gap-4">
                  {/* Circular Avatar: width 80px, height 80px */}
                  <div
                    className="relative overflow-hidden rounded-full ring-2 ring-neutral-100"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="flex flex-col gap-0.5">
                    {/* Name: font-family Poppins, SemiBold 600, 20px, line-height 120%, tracking -1%, text-[#040819] */}
                    <h3 className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#040819]">
                      {item.name}
                    </h3>

                    {/* Role: font-family Satoshi, Regular 400, 18px, line-height 160%, text-[#003BE2] */}
                    <span className="font-satoshi font-normal text-[18px] leading-[160%] text-[#003BE2]">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Quote: font-family Satoshi, Regular 400, 18px, line-height 160%, text-[#4F4F4F], width 326px */}
                <div style={{ width: "326px" }}>
                  <p className="font-satoshi font-normal text-[18px] leading-[160%] text-[#4F4F4F]">
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
