"use server";

import IChapter from "@/interfaces/chapter";
import * as cheerio from "cheerio";

export async function getChapterInfo(chapterNumber: number): Promise<IChapter> {
  const response = await fetch(`https://onepiece.fandom.com/wiki/Chapter_${chapterNumber}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch chapter ${chapterNumber}: ${response.status}`);
  }

  const $ = cheerio.load(await response.text());
  return {
    imageSource: $("figure[data-source='image']")
      .find("a")
      .attr("href"),
    chapter: chapterNumber,
    volume: Number(
      $("div[data-source='vol']")
      .find("a")
      .attr("title")
      ?.trim()
      .replace("Volume ", "")
    ),
    title: $("div[data-source='ename']")
      .find("div")
      .text()
      .trim(),
    episodes: $("div[data-source='anime']")
      .find("a")
      .map((_index, element) => Number($(element).text().trim().replace("Episode ", "")))
      .get()
      .filter(Number.isSafeInteger),
  };
}
