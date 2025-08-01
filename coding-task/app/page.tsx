// app/page.tsx
import { fetchTopStoryIds } from "@/lib/api";
import StoryList from "@/components/StoryList";
import Topbar from "@/components/TopBar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic"; // ensure SSR for fresh data

export default async function HomePage() {
  const storyIds = await fetchTopStoryIds();

  return (
    <main className="py-4">
      <div className="max-w-5xl mx-auto">
        <Topbar />
        <StoryList storyIds={storyIds} />
        <Footer />
      </div>
    </main>
  );
}
