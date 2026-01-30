"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import IChapter from "@/interfaces/chapter";
import { BookOpen, ChevronRight } from "lucide-react";

interface IChapterBreadcrumbProps {
  chapter: IChapter;
}

export const ChapterBreadcrumb = ({ chapter }: IChapterBreadcrumbProps) => {
  return (
    <Breadcrumb className="shrink-0 overflow-hidden">
      <BreadcrumbList className="flex-nowrap">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a
              href="https://onepiece.fandom.com/wiki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen size={16} />
            </a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {!Number.isNaN(chapter.volume) && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight size={16} />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a
                  href={`https://onepiece.fandom.com/wiki/Volume_${chapter.volume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vol. {chapter.volume}
                </a>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        <BreadcrumbSeparator>
          <ChevronRight size={16} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a
              href={`https://onepiece.fandom.com/wiki/Chapter_${chapter.chapter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cap. {chapter.chapter}
            </a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight size={16} />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="flex-1 min-w-0">
          <BreadcrumbPage className="text-sm text-muted-foreground truncate">
            {chapter.title}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ChapterBreadcrumb;
