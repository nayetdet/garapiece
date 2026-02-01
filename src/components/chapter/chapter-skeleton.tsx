import { BookOpen } from "lucide-react";

export const ChapterSkeleton = () => {
  return (
    <div className="w-full px-6 py-12 rounded-xl border-2 border-dashed text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted-foreground/10 text-muted-foreground">
        <BookOpen className="h-6 w-6" />
      </div>
      <div className="mt-2 space-y-1">
        <h2 className="text-lg font-semibold">No content yet</h2>
        <p className="text-sm text-muted-foreground">
          Enter a chapter number to see the cover, title, and related episodes.
        </p>
      </div>
    </div>
  );
};

export default ChapterSkeleton;
