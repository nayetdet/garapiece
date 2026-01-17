"use client";

import SubmitButton from "@/components/layout/SubmitButton";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import IChapter from "@/interfaces/chapter";
import { getChapterInfo } from "@/services/chapter.service";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface IChapterForm {
  error: string | undefined;
  fetch: (service: () => Promise<IChapter>) => Promise<IChapter | undefined>;
  maxLength?: number;
}

export const ChapterForm = ({ error, fetch, maxLength = 4 }: IChapterForm) => {
  const [chapterNumber, setChapterNumber] = useState<number>();
  const chapterAction = async (): Promise<void> => {
    if (!chapterNumber) return;
    await fetch(async () => getChapterInfo(chapterNumber));
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-1"
      action={chapterAction}
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

      <div className="text-xs text-muted-foreground text-center">
        {!chapterNumber ? (
          <>Enter your chapter.</>
        ) : (
          <>Selected chapter: {chapterNumber}.</>
        )}
      </div>

      <SubmitButton
        error={!!error}
        className="cursor-pointer mt-5 font-semibold"
        disabled={!chapterNumber}
      >
        <span>Submit</span>
        <ArrowRight />
      </SubmitButton>
    </form>
  );
};

export default ChapterForm;
