"use client";

import ChapterBreadcrumb from "@/components/chapter/ChapterBreadcrumb";
import ChapterEpisode from "@/components/chapter/ChapterEpisode";
import ChapterSkeleton from "@/components/chapter/ChapterSkeleton";
import ImageDialog from "@/components/layout/ImageDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import useChapter from "@/hooks/useChapter";

interface IChapterProps {
  chapterNumber?: number;
}

export const Chapter = ({ chapterNumber }: IChapterProps) => {
  const { data: chapter } = useChapter(chapterNumber);
  if (!chapter) {
    return <ChapterSkeleton />;
  }

  return (
    <Card className="w-full h-full py-4 grid grid-rows-[1fr_auto] gap-4 overflow-y-auto">
      <CardHeader className="grid grid-rows-[auto_1fr_auto]">
        <ChapterBreadcrumb chapter={chapter} />
        <figure className="relative w-full h-full">
          {chapter.imageSource ? (
            <ImageDialog src={chapter.imageSource} alt={chapter.title} />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </figure>
        <CardTitle className="text-xl font-semibold leading-tight tracking-tight text-center">
          {chapter.title}
        </CardTitle>
      </CardHeader>

      <div className="px-6">
        <Separator />
      </div>

      <CardContent className="space-y-4">
        <header>
          <h2 className="text-sm font-semibold text-foreground">
            Equivalent Episodes
          </h2>
          <p className="text-xs text-muted-foreground">
            {chapter.episodes.length > 0
              ? "Correspondences for this chapter in other sources."
              : "This chapter has no known correspondences in other sources."}
          </p>
        </header>
        <ul className="grid grid-cols-2 gap-4">
          {chapter.episodes.map((episode) => (
            <ChapterEpisode key={episode} episode={episode} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Chapter;
