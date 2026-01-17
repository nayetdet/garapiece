import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  return (
    <header className="w-50">
      <AspectRatio ratio={3 / 1}>
        <Image
          src="/logo.png"
          alt="Logo"
          fill
          priority
          className={cn("object-contain", className)}
          unoptimized
        />
      </AspectRatio>
    </header>
  );
};

export default Header;
