import ChapterCard from "@/components/chapter/ChapterCard";
import DitherShader from "@/components/ui/dither-shader";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <DitherShader
        src="/background.jpg"
        gridSize={1}
        ditherMode="bayer"
        colorMode="duotone"
        primaryColor="#1aa2d9"
        secondaryColor="#edf5f5"
        threshold={0.75}
        className="absolute inset-0 w-full h-full object-cover scale-125"
      />

      <section className="relative z-10 min-h-screen">
        <ChapterCard />
      </section>
    </main>
  );
}
