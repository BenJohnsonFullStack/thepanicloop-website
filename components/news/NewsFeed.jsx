'use client'

import { useState } from 'react';
import { SearchBarArticles, NewsArticle } from '.';
import { articles } from '@/constants';

export default function NewsFeed() {
  const [filteredArticles, setFilteredArticles] = useState(articles);

  return (
    <div>
      <SearchBarArticles articles={articles} setFilteredArticles={setFilteredArticles} />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map(article => (
          <NewsArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
