import { articles } from "@/constants";
import { ArticleDetails } from "@/components/news";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found - The Panic Loop",
      description: "This article could not be found.",
    };
  }

  return {
    title: `${article.headline} - The Panic Loop`,
    description: article.description,
    openGraph: {
      title: `${article.headline} - The Panic Loop`,
      description: article.description,
      url: `https://www.thepanicloop.com/news/${article.slug}`,
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.headline,
        },
      ],
    },
  };
}

export default function ReadArticle({ params }) {
  const { slug } = params;

  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    return <div className="mt-16 py-10 px-4 text-white text-2xl">Article not found</div>;
  }

  return <ArticleDetails article={article} />;
}
