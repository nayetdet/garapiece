"use client";

import Chapter from "@/components/chapter/Chapter";
import ChapterForm from "@/components/chapter/ChapterForm";
import Logo from "@/components/layout/Logo";
import { Card } from "@/components/ui/card";
import useService from "@/hooks/useService";
import IChapter from "@/interfaces/chapter";
import { cn } from "@/lib/utils";

export const ChapterCard = () => {
  const { data: chapter, fetch, error } = useService<IChapter | undefined>();

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Card
        className={cn(
          "w-full h-screen md:w-3/4 lg:w-1/3 lg:h-[95vh] p-10 grid content-center justify-items-center gap-4 overflow-y-auto",
          chapter ? "grid-rows-[auto_1fr_auto]" : "grid-rows-[auto_auto]",
        )}
      >
        <Logo />
        {chapter && <Chapter chapter={chapter} />}
        <ChapterForm error={error} fetch={fetch} />
      </Card>
    </section>
  );
};

export default ChapterCard;
