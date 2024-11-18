'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBarArticles() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300);

  return (
    <div className="mb-4">
      <input
        type="text"
        defaultValue={params.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value.trim().toLowerCase())}
        placeholder="Search articles..."
        className="w-full sm:w-1/4 mb-2 px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
}
