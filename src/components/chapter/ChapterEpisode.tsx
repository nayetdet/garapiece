import { Badge } from "@/components/ui/badge";

interface IChapterEpisodeProps {
  episode: number;
}

export const ChapterEpisode = ({ episode }: IChapterEpisodeProps) => {
  return (
    <li>
      <a
        href={`https://onepiece.fandom.com/wiki/Episode_${episode}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge
          variant="secondary"
          className="w-full justify-center text-sm font-medium"
        >
          Episode {episode}
        </Badge>
      </a>
    </li>
  );
};

export default ChapterEpisode;
