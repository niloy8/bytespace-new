"use client";

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-satoshi font-semibold rounded-[24px] transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none";

  const variantStyles = {
    primary:
      "bg-[#D4FB20] text-neutral-950 hover:bg-[#c2e915] shadow-sm",
    secondary:
      "bg-white text-neutral-950 hover:bg-neutral-100 shadow-sm",
    outline:
      "border border-white/40 text-white hover:bg-white/10",
    ghost:
      "text-neutral-950 hover:bg-neutral-100",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5 h-[38px]",
    md: "px-6 py-3 text-[16px] gap-2 h-[46px]",
    lg: "px-8 py-3.5 text-lg gap-2.5 h-[52px]",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
