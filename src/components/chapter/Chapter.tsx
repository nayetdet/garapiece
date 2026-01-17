import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import IChapter from "@/interfaces/chapter";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";

interface IChapterProps {
  chapter: IChapter;
}

export const Chapter = ({ chapter }: IChapterProps) => {
  return (
    <Card className="mx-auto">
      <CardHeader>
        <Breadcrumb className="shrink-0">
          <BreadcrumbList className="flex-nowrap">
            <BreadcrumbItem>
              <BookOpen size={16} />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight size={16} />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm font-medium text-muted-foreground">
                Vol. {chapter.volume}
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight size={16} />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm font-medium text-muted-foreground">
                Cap. {chapter.chapter}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <AspectRatio ratio={3 / 4} className="w-full" asChild>
          {chapter.imageSource ? (
            <Image
              src={chapter.imageSource}
              alt={chapter.title}
              className="object-cover"
              fill
            />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </AspectRatio>
        
        <CardTitle className="text-center">
          {chapter.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="grid grid-cols-2 gap-4">
          {chapter.episodes.map((episode) => (
            <li key={episode}>
              <Badge
                variant="secondary"
                className="w-full justify-center text-sm font-medium"
              >
                Episode {episode}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Chapter;
