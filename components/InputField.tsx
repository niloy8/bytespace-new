"use client";

import React from "react";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  containerClassName?: string;
}

export default function InputField({
  icon,
  iconPosition = "left",
  className = "",
  containerClassName = "",
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}: InputFieldProps) {
  return (
    <div
      className={`bg-white rounded-3xl px-6 py-3 flex items-center gap-2 h-13 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-transparent focus-within:border-white/80 focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all duration-200 ${containerClassName}`}
    >
      {icon && iconPosition === "left" && (
        <span className="text-neutral-400 shrink-0 flex items-center justify-center">
          {icon}
        </span>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full font-satoshi font-normal text-[16px] text-neutral-950 placeholder:text-neutral-400 bg-transparent outline-none leading-relaxed ${className}`}
        {...props}
      />

      {icon && iconPosition === "right" && (
        <span className="text-neutral-400 shrink-0 flex items-center justify-center">
          {icon}
        </span>
      )}
    </div>
  );
}
