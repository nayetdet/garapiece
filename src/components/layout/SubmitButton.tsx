import { Button, buttonVariants } from "@/components/ui/button";
import { LoaderTwo } from "@/components/ui/loader";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

interface ISubmitButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  error?: boolean;
}

export const SubmitButton = ({
  error,
  children,
  disabled,
  className,
  ...props
}: ISubmitButtonProps) => {
  const { pending } = useFormStatus();
  const prevPendingRef = useRef<boolean>(false);

  const [flash, setFlash] = useState<boolean>(false);
  const [flashTrigger, setFlashTrigger] = useState<boolean>(false);

  useEffect(() => {
    const currentPending: boolean = pending;
    if (prevPendingRef.current && !currentPending) {
      setFlashTrigger((prev) => !prev);
    }

    prevPendingRef.current = currentPending;
  }, [pending]);

  useEffect(() => {
    if (error) {
      setFlash(true);
      const timeout = setTimeout(() => setFlash(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [error, flashTrigger]);

  const variants: Variants = {
    idle: { x: 0 },
    error: {
      x: [0, -6, 6, -6, 6, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={flash ? "error" : "idle"}
      className="inline-block"
    >
      <Button
        {...props}
        disabled={disabled || pending}
        className={cn(
          className,
          "transition-colors duration-300",
          flash && "bg-red-500 hover:bg-red-500 text-white",
          pending && "cursor-not-allowed"
        )}
      >
        {pending ? <LoaderTwo /> : children}
      </Button>
    </motion.div>
  );
};

export default SubmitButton;
