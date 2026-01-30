"use client";

import IChapter from "@/interfaces/chapter";
import { getChapterInfo } from "@/services/chapter.service";
import { useQuery } from "@tanstack/react-query";

export const useChapter = (chapterNumber?: number) => {
  return useQuery<IChapter>({
    queryKey: ["chapter", chapterNumber],
    queryFn: () => getChapterInfo(chapterNumber!),
    enabled: !!chapterNumber,
    staleTime: Infinity,
  });
};

export default useChapter;
