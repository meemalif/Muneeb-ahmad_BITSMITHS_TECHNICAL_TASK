import Link from "next/link";
import { Story } from "@/lib/api";

interface StoryCardProps {
  story: Story;
  index: number;
}

export default function StoryCard({ story, index }: StoryCardProps) {
  const domain = story.url
    ? new URL(story.url).hostname.replace("www.", "")
    : null;
  const hnLink = `https://news.ycombinator.com/item?id=${story.id}`;

  return (
    <div className="text-[13px] font-sans text-black dark:text-white">
      {/* Title row */}
      <div className="flex items-start gap-1">
        <span className="text-gray-500">{index + 1}.</span>
        <Link
          href={story.url || hnLink}
          target="_blank"
          className="hover:underline text-[13px] text-[#0000EE]"
        >
          {story.title}
        </Link>
        {domain && (
          <span className="text-gray-500 text-[11px]">({domain})</span>
        )}
      </div>

      {/* Subtext row */}
      <div className="pl-5 text-gray-600 dark:text-gray-400 text-[11px]">
        {story.score} points by{" "}
        <span className="hover:underline cursor-pointer">{story.by}</span> |{" "}
        <Link href={hnLink} target="_blank" className="hover:underline">
          {story.descendants ?? 0} comments
        </Link>
      </div>
    </div>
  );
}
