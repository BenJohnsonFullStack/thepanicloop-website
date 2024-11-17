'use client';

import { useState } from 'react';

export default function SearchBarArticles({ articles, setFilteredArticles }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm === '') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) =>
        article.headline.toLowerCase().includes(searchTerm) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        article.description.toLowerCase().includes(searchTerm) ||
        (article.body && article.body.toLowerCase().includes(searchTerm))
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search articles..."
        className="w-full sm:w-1/4 mb-2 px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
}
