"use client";

import Chapter from "@/components/chapter/Chapter";
import ChapterForm from "@/components/chapter/ChapterForm";
import Logo from "@/components/layout/Logo";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ChapterCard = () => {
  const [chapterNumber, setChapterNumber] = useState<number | undefined>();

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Card
        className={cn(
          "w-full h-screen md:w-3/4 lg:w-1/3 lg:h-[95vh] p-10 grid content-center justify-items-center gap-4 overflow-y-auto",
          chapterNumber !== undefined && "grid-rows-[auto_1fr_auto]",
        )}
      >
        <Logo />
        <Chapter chapterNumber={chapterNumber} />
        <ChapterForm onSubmit={setChapterNumber} />
      </Card>
    </section>
  );
};

export default ChapterCard;
