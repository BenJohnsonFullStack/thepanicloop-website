'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { ArticleFooter, PhotoSubtitle } from '.';
import Image from 'next/image';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function ArticleDetails({ article }) {
  const router = useRouter();

  // Format the date to display in EDT
  const formattedDate = new Date(article.datetime).toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour12: true,
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <div className="mt-16 py-10 px-4 sm:px-10 md:px-16 lg:px-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/news')}
          className="flex items-center text-indigo-300 hover:text-indigo-500 mb-6 transition-colors duration-150"
        >
          <FaArrowLeft className="mr-2" />
          Back to Articles
        </button>

        {/* Article Header */}
        <h1 className="text-xl md:text-4xl font-bold text-indigo-300 mb-4">
          {article.headline}
        </h1>
        <p className="text-sm text-gray-400 mb-3">
          By {article.author} | {formattedDate}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-gray-900 bg-indigo-300 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Article Image */}
        <div className="relative w-full h-36 sm:h-96">
          <Image
            src={article.imageUrl}
            alt={article.headline}
            fill
            priority
            className="rounded-md mb-2 object-cover"
          />
        </div>

        <PhotoSubtitle description="Mike Tyson, Nakisa Bidarian and Jake Paul pose onstage during the Jake Paul vs. Mike Tyson Boxing match Arlington press conference at Texas Live! on May 16, 2024, in Arlington, Texas." credit={article.photoCredit} />

        {/* Article Lede */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">{article.lede}</p>

        {/* Article Nut Graf */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">{article.nutGraf1}</p>

        {/* Nut Graf Post */}
        <div className="flex flex-col gap-8 md:flex-row flex-wrap items-center justify-center mb-8">
          {article.tweetIds[0] && (
            <div className="w-full max-w-md">
              <TwitterTweetEmbed tweetId={article.tweetIds[0]} />
            </div>
          )}
        </div>

        {/* Article Nut Graf */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">{article.nutGraf2}</p>

        {/* Article User Reactions */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">{article.userReactions}</p>

        <div className="flex flex-col gap-8 md:flex-row flex-wrap items-center justify-center mb-8">
          {article.tweetIds.slice(1, 4).map((tweetId, index) => (
            <div key={index} className="w-full max-w-md">
              <TwitterTweetEmbed tweetId={tweetId} />
            </div>
          ))}
        </div>

        {/* Article Subject Response */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          {article.subjectResponse.map((part, index) =>
            typeof part === 'string' ? (
              <span key={index}>{part}</span>
            ) : (
              <a
                key={index}
                href={part.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                {part.text}
              </a>
            )
          )}
        </p>

        {/* Article What's Next */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">{article.whatsNext}</p>

        {/* Article Sign Off */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">{article.signOff}</p>

        {/* Sign Off Post */}
        <div className="flex flex-col gap-8 md:flex-row flex-wrap items-center justify-center mb-8">
          {article.tweetIds[4] && (
            <div className="w-full max-w-md">
              <TwitterTweetEmbed tweetId={article.tweetIds[4]} />
            </div>
          )}
        </div>

        {/* Article Footer */}
        <ArticleFooter />
        
      </div>
    </div>
  );
}
