import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface ImageDialogProps {
  src: string;
  alt: string;
}

export const ImageDialog = ({ src, alt }: ImageDialogProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <figure
          className="relative w-full h-full cursor-zoom-in"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Image src={src} alt={alt} fill className="object-cover rounded-xl" />
        </figure>
      </DialogTrigger>
      <DialogContent
        className="p-0 max-w-5xl bg-transparent border-none shadow-none cursor-zoom-out [&>button]:hidden"
        onClick={() => setOpen(false)}
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <figure className="relative w-full h-[80vh]">
          <Image src={src} alt={alt} fill className="object-contain rounded-xl" />
        </figure>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
