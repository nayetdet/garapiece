"use client";

import SubmitButton from "@/components/layout/submit-button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useChapter from "@/hooks/use-chapter";
import IChapter from "@/types/chapter";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface IChapterForm {
  maxLength?: number;
  onSubmit: (chapter: IChapter) => void;
}

export const ChapterForm = ({ maxLength = 4, onSubmit }: IChapterForm) => {
  const [chapter, setChapter] = useState<number | undefined>();
  const { mutate, isPending, isError } = useChapter();

  return (
    <form
      className="flex flex-col items-center justify-center gap-1 mt-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (!chapter) return;
        mutate(chapter, {
          onSuccess: (data: IChapter) => {
            onSubmit(data);
          },
        });
      }}
    >
      <InputOTP
        maxLength={maxLength}
        pattern={REGEXP_ONLY_DIGITS}
        value={chapter ? chapter.toString() : ""}
        onChange={(value) => setChapter(Number(value))}
      >
        <InputOTPGroup>
          {Array.from({ length: maxLength }).map((_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>

      <p className="text-xs text-muted-foreground text-center">
        {!chapter ? (
          <>Enter your chapter.</>
        ) : (
          <>Selected chapter: {chapter}.</>
        )}
      </p>

      <SubmitButton
        pending={isPending}
        error={isError}
        disabled={!chapter}
        className="cursor-pointer mt-5 font-semibold bg-sky-500 hover:bg-sky-600"
      >
        <span>Submit</span>
        <ArrowRight />
      </SubmitButton>
    </form>
  );
};

export default ChapterForm;
