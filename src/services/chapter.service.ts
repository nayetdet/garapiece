import api from "@/services/api";
import IChapter from "@/types/chapter";
import * as cheerio from "cheerio";

export async function getChapter(chapter: number): Promise<IChapter> {
  const { data } = await api.get("/", {
    params: {
      action: "parse",
      page: `Chapter_${chapter}`,
      prop: "text",
      format: "json",
      origin: "*"
    },
  });

  const $ = cheerio.load(data.parse.text["*"]);
  return {
    image: $("[data-source='image']")
      .find("a")
      .attr("href"),
    chapter: chapter,
    volume: Number(
      $("[data-source='vol']")
      .find("a")
      .attr("title")
      ?.trim()
      .replace("Volume ", "")
    ),
    title: $("[data-source='ename']")
      .find("div")
      .text()
      .trim(),
    episodes: $("[data-source='anime']")
      .find("a")
      .map((_index, element) => Number($(element).text().trim().replace("Episode ", "")))
      .get()
      .filter(Number.isFinite),
  };
}
