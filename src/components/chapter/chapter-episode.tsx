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
          className="w-full justify-center bg-zinc-200/75 hover:bg-zinc-300/75 text-sm font-medium transition-colors duration-200"
        >
          Episode {episode}
        </Badge>
      </a>
    </li>
  );
};

export default ChapterEpisode;
