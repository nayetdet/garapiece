import ChapterCard from "@/components/chapter/ChapterCard";
import DitherShader from "@/components/ui/dither-shader";

export default function Home() {
  return (
    <main className="relative">
      <DitherShader
        src="/background.png"
        gridSize={1}
        ditherMode="bayer"
        colorMode="duotone"
        primaryColor="#0b090a"
        secondaryColor="#ff2e2e"
        threshold={0.75}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 min-h-screen">
        <ChapterCard />
      </div>
    </main>
  );
}
