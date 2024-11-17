import { ArticleDetails } from "@/components/news";

import { articles } from "@/constants";

export default function ReadArticle({ params }) {
    const { slug } = params;
  
    // Ensure type consistency by converting params.id to a number
    const article = articles.find(art => art.slug === slug);
  
    // Check if article was found
    if (!article) {
      return <div className="mt-16 py-10 px-4 text-white text-2xl">Article not found</div>;
    }
  
    return (
      <ArticleDetails article={article} />
    );
  }
  