"use client";

import { getChapterInfo } from "@/services/chapter.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useChapterMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (chapterNumber: number) => getChapterInfo(chapterNumber),
    onSuccess: (data, chapterNumber) => queryClient.setQueryData(["chapter", chapterNumber], data),
  });
};

export default useChapterMutation;
