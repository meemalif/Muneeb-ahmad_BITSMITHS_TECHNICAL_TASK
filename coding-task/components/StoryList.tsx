"use client";

import { useEffect, useState } from "react";
import { fetchStoryById, Story } from "@/lib/api";
import StoryCard from "./StoryCard";

interface StoryListProps {
  storyIds: number[];
}

const ITEMS_PER_PAGE = 30;

export default function StoryList({ storyIds }: StoryListProps) {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Fetch stories based on visibleCount
  useEffect(() => {
    const loadStories = async () => {
      setLoading(true);
      try {
        const idsToFetch = storyIds.slice(0, visibleCount);
        const storyPromises = idsToFetch.map((id) => fetchStoryById(id));
        const results = await Promise.all(storyPromises);
        const filtered = results.filter(Boolean) as Story[];
        setStories(filtered);
      } catch (error) {
        console.error("Error loading stories", error);
      } finally {
        setLoading(false);
      }
    };

    loadStories();
  }, [storyIds, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-[#fef7e0] text-black px-2 sm:px-4 py-8">
      {loading && stories.length === 0 ? (
        <p className="text-center text-sm">Loading stories...</p>
      ) : (
        <>
          {stories.map((story, index) => (
            <StoryCard key={story.id} index={index} story={story} />
          ))}
          {visibleCount < storyIds.length && (
            <div className="text-center mt-6">
              <button
                onClick={handleLoadMore}
                className="text-orange-600 hover:underline text-sm"
              >
                More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
