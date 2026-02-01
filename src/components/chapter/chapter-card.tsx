"use client";

import Chapter from "@/components/chapter/chapter";
import ChapterForm from "@/components/chapter/chapter-form";
import Logo from "@/components/layout/logo";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import IChapter from "@/types/chapter";
import { useState } from "react";

export const ChapterCard = () => {
  const [chapter, setChapter] = useState<IChapter | undefined>();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card
        className={cn(
          "w-full h-screen md:w-3/4 lg:w-1/3 lg:h-[95vh] p-10 grid content-center justify-items-center gap-4 overflow-y-auto",
          chapter && "grid-rows-[auto_1fr_auto]",
        )}
      >
        <Logo />
        <Chapter chapter={chapter} />
        <ChapterForm onSubmit={setChapter} />
      </Card>
    </div>
  );
};

export default ChapterCard;
