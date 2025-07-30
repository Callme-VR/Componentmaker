"use client";

import { ElementType, ComponentPropsWithoutRef } from "react";

interface StarBorderProps<T extends ElementType> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

export default function StarBorder<T extends ElementType = "button">({
  as,
  className = "",
  children,
  ...props
}: StarBorderProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-block p-[3px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-glow shadow-md ${className}`}
      {...props}
    >
      <div className="rounded-full bg-black text-white text-lg md:text-xl font-semibold px-8 py-4 min-w-[180px] text-center">
        {children} vishal
      </div>
    </Component>
  );
}
