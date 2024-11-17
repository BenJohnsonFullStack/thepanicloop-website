'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Subscribe' },
  { href: '/news', label: 'News' },
  // You can add more links here later
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-4">
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.href} 
          className={`font-hacked text-lg sm:ml-6 sm:text-2xl hover:text-indigo-400 ${
            pathname === link.href ? 'text-indigo-500' : ''
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
