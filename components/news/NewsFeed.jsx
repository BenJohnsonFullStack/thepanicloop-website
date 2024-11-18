import { NewsArticle } from '.';
import { articles } from '@/constants';

export default function NewsFeed({ searchParams }) {
  
  const { query = "" } = searchParams;
  
  // Conditional filtering based on the query
  const filteredArticles = query
    ? articles.filter((article) =>
        article.headline.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        article.description.toLowerCase().includes(query.toLowerCase())
      )
    : articles; // Return all articles if the query is an empty string

  return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map(article => (
          <NewsArticle key={article.id} article={article} />
        ))}
      </div>
  );
}
