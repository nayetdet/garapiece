"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { LoaderTwo } from "@/components/ui/loader";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ISubmitButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  pending?: boolean;
  error?: boolean;
}

export const SubmitButton = ({
  pending = false,
  error,
  disabled,
  children,
  className,
  ...props
}: ISubmitButtonProps) => {
  const prevPending = useRef<boolean>(false);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [flashTrigger, setFlashTrigger] = useState<boolean>(false);

  useEffect(() => {
    const currentPending: boolean = pending;
    if (prevPending.current && !currentPending) {
      setFlashTrigger((prev) => !prev);
      if (!error) {
        setStatus("success");
        const timeout = setTimeout(() => setStatus("idle"), 600);
        return () => clearTimeout(timeout);
      }
    }

    prevPending.current = currentPending;
  }, [pending, error]);

  useEffect(() => {
    if (error) {
      setStatus("error");
      const timeout = setTimeout(() => setStatus("idle"), 500);
      return () => clearTimeout(timeout);
    }
  }, [error, flashTrigger]);

  const variants: Variants = {
    error: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    success: {
      scale: [1, 1.05, 0.95, 1],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={variants} animate={status} className="inline-block">
      <Button
        {...props}
        disabled={disabled || pending}
        className={cn(
          className,
          "transition-colors duration-200",
          status === "error" && "bg-red-500 hover:bg-red-500 text-white",
          status === "success" && "bg-emerald-500 hover:bg-emerald-500 text-white",
          pending && "cursor-not-allowed",
        )}
      >
        {pending ? <LoaderTwo /> : children}
      </Button>
    </motion.div>
  );
};

export default SubmitButton;
