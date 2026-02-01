import { Badge } from "@/components/ui/badge";
import { origin } from "@/services/api";

interface IChapterEpisodeProps {
  episode: number;
}

export const ChapterEpisode = ({ episode }: IChapterEpisodeProps) => {
  return (
    <li>
      <a
        href={new URL(`/wiki/Episode_${episode}`, origin).toString()}
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
