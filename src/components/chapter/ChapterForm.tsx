"use client";

import SubmitButton from "@/components/layout/SubmitButton";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useChapterMutation from "@/hooks/useChapterMutation";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface IChapterForm {
  maxLength?: number;
  onSubmit: (chapterNumber: number) => void;
}

export const ChapterForm = ({ maxLength = 4, onSubmit }: IChapterForm) => {
  const [chapterNumber, setChapterNumber] = useState<number>();
  const { mutate, isError: error } = useChapterMutation();

  return (
    <form
      className="flex flex-col items-center justify-center gap-1 mt-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (!chapterNumber) return;
        mutate(chapterNumber, {
          onSuccess: () => {
            onSubmit(chapterNumber);
          },
        });
      }}
    >
      <InputOTP
        maxLength={maxLength}
        pattern={REGEXP_ONLY_DIGITS}
        value={chapterNumber ? chapterNumber.toString() : ""}
        onChange={(value) => setChapterNumber(Number(value))}
      >
        <InputOTPGroup>
          {Array.from({ length: maxLength }).map((_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>

      <p className="text-xs text-muted-foreground text-center">
        {!chapterNumber ? (
          <>Enter your chapter.</>
        ) : (
          <>Selected chapter: {chapterNumber}.</>
        )}
      </p>

      <SubmitButton
        error={error}
        disabled={!chapterNumber}
        className="cursor-pointer mt-5 font-semibold bg-sky-500"
      >
        <span>Submit</span>
        <ArrowRight />
      </SubmitButton>
    </form>
  );
};

export default ChapterForm;
