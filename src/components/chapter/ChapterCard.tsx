"use client";

import Chapter from "@/components/chapter/Chapter";
import ChapterForm from "@/components/chapter/ChapterForm";
import Logo from "@/components/layout/Logo";
import { Card } from "@/components/ui/card";
import useService from "@/hooks/useService";
import IChapter from "@/interfaces/chapter";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

export const ChapterCard = () => {
  const { data: chapter, fetch, error } = useService<IChapter | undefined>();

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Card
        className={cn(
          "w-full h-screen md:w-3/4 lg:w-1/3 lg:h-[95vh] p-10 grid content-center justify-items-center gap-4 overflow-y-auto",
          chapter && "grid-rows-[auto_1fr_auto]",
        )}
      >
        <Logo />
        {chapter ? (
          <Chapter chapter={chapter} />
        ) : (
          <div className="w-full p-6 rounded-xl border-2 border-dashed text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted-foreground/10 text-muted-foreground">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="mt-2 space-y-1">
              <h2 className="text-lg font-semibold">No content yet</h2>
              <p className="text-sm text-muted-foreground">
                Enter a chapter number to see the cover, title, and related
                episodes.
              </p>
            </div>
          </div>
        )}
        <ChapterForm error={error} fetch={fetch} />
      </Card>
    </section>
  );
};

export default ChapterCard;
