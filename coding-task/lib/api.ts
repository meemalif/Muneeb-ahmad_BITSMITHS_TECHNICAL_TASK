// lib/api.ts
export const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export interface Story {
  id: number;
  by: string;
  title: string;
  url: string;
  time: number;
  score: number;
  descendants: number;
  type: "story";
}

export const fetchTopStoryIds = async (): Promise<number[]> => {
  const res = await fetch(`${BASE_URL}/topstories.json`, {
    next: { revalidate: 60 }, // ISR: 60s revalidation
  });

  if (!res.ok) throw new Error("Failed to fetch top story IDs");
  return res.json();
};

export const fetchStoryById = async (id: number): Promise<Story | null> => {
  const res = await fetch(`${BASE_URL}/item/${id}.json`);

  if (!res.ok) {
    console.error(`Failed to fetch story with ID ${id}`);
    return null;
  }

  const data = await res.json();
  if (!data || data.type !== "story") return null;

  return data as Story;
};
