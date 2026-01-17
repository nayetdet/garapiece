"use client";

import Chapter from "@/components/chapter/Chapter";
import ChapterForm from "@/components/chapter/ChapterForm";
import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import useService from "@/hooks/useService";
import IChapter from "@/interfaces/chapter";

export const ChapterCard = () => {
  const { data: chapter, fetch, error } = useService<IChapter | undefined>();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="p-10 flex flex-col items-center gap-6">
        <Header />
        {chapter && <Chapter chapter={chapter} />}
        <ChapterForm error={error} fetch={fetch} />
      </Card>
    </div>
  );
};

export default ChapterCard;
