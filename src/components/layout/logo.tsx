import logoImg from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ILogoProps {
  className?: string;
}

export const Logo = ({ className }: ILogoProps) => {
  return (
    <figure className="relative w-full h-16">
      <Image
        src={logoImg}
        alt="Logo"
        fill
        priority
        className={cn("object-contain", className)}
      />
    </figure>
  );
};

export default Logo;
