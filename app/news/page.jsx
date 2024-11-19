import { Suspense } from "react";
import { NewsFeed, SearchBarArticles } from "@/components/news";
import { Spinner } from "@/components";

export async function generateMetadata() {
  return {
    title: "The Panic Loop News",
    description: "Stay up-to-date with The Panic Loop's take on tech news, events, and trending topics.",
    keywords: "tech news, latest tech updates, tech events, podcast news, Panic Loop news",
    author: "The Panic Loop Podcast Team",
    openGraph: {
      title: "The Panic Loop News",
      description: "Explore breaking news, tech insights, and hot takes from The Panic Loop team.",
      type: "website",
      url: "https://www.thepanicloop.com/news", // Replace with your actual news page URL
      images: [
        {
          url: "/panic-loop-seo-banner.png", // Replace with an image relevant to the news content
          width: 1200,
          height: 630,
          alt: "The Panic Loop News Banner",
        },
      ],
    },
  };
}

export default function News({ searchParams }) {

  const { query = "" } = searchParams

  return (
    <div className="mt-16 py-10 px-4 text-white text-2xl">
      <SearchBarArticles />
      <Suspense key={query} fallback={
        <div className="flex items-center justify-center min-h-[300px]">
          <Spinner className="w-16 h-16" />
        </div>
      }>
        <NewsFeed query={query} />
      </Suspense>
    </div>
  )
}
