"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ILogoProps {
  className?: string;
}

export const Logo = ({ className }: ILogoProps) => {
  return (
    <figure className="relative w-full h-16">
      <Image
        src="/logo.png"
        alt="Logo"
        fill
        priority
        className={cn(className, "object-contain")}
        unoptimized
      />
    </figure>
  );
};

export default Logo;
