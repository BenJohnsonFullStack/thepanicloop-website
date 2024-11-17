'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NewsArticle({ article }) {
  const { imageUrl, author, datetime, headline, slug, tags, description } = article;
  const formattedDate = new Date(datetime).toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour12: true,
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <Link href={`/news/${slug}`}>
      <div className="group bg-gray-900 shadow-md rounded-lg border border-gray-800 overflow-hidden hover:bg-gray-800 hover:shadow-2xl hover:text-gray-100 transition-all duration-100 cursor-pointer h-full">
        <div className="relative w-full h-36 sm:h-64">
          <Image
            src={article.imageUrl}
            alt={article.headline}
            fill
            priority
            className="rounded-md mb-2 object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-400">By {author} | {formattedDate}</p>
          <h3 className="text-lg font-bold text-indigo-300">{headline}</h3>
          <p className="text-sm text-gray-300 mt-2">{description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-gray-900 bg-indigo-300 rounded-full px-2 py-1 truncate"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
