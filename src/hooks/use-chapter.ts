"use client";

import { getChapter } from "@/services/chapter.service";
import IChapter from "@/types/chapter";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";

export const useChapter = () => {
  const queryClient: QueryClient = useQueryClient();
  return useMutation({
    mutationFn: async (chapter: number) => {
      const cached: IChapter | undefined = queryClient.getQueryData<IChapter>(["chapter", chapter]);
      if (cached) {
        await new Promise((resolve) => setTimeout(resolve, 250));
        return cached;
      }

      return getChapter(chapter);
    },
    onSuccess: (data: IChapter, chapter: number) => {
      queryClient.setQueryData(["chapter", chapter], data);
    },
  });
};

export default useChapter;
