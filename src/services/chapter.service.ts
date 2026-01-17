"use server";

import IChapter from "@/interfaces/chapter";
import api from "@/services/api";
import * as cheerio from "cheerio";

export async function getChapterInfo(chapter: number): Promise<IChapter> {
  const { data: html } = await api.get(`Chapter_${chapter}`);
  const $ = cheerio.load(html);
  return {
    imageSource: $("figure[data-source='image']")
      .find("a")
      .attr("href"),
    chapter: chapter,
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
