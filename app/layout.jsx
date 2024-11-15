import localFont from "next/font/local";
import "./globals.css";

const hackedFont = localFont({
  src: "./fonts/Hacked-KerX.ttf",
  variable: "--font-hacked",
  weight: "100 900"
});

export const metadata = {
  title: "The Panic Loop Podcast",
  description: "The Panic Loop Podcast: An edgy, tech-infused podcast blending wit, insight, and NSFW humor.",
  keywords: "tech podcast, witty podcast, NSFW tech show, tech culture, IoT, video games, movies",
  author: "The Panic Loop Podcast Team",
  openGraph: {
    title: "The Panic Loop Podcast",
    description: "An unapologetically raw and witty podcast diving into tech, movies, gaming, and more.",
    type: "website",
    url: "https://www.thepanicloop.com", // Replace with your actual domain
    images: [
      {
        url: "/path-to-image.jpg", // Replace with a relevant image path
        width: 1200,
        height: 630,
        alt: "The Panic Loop Podcast Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      </head>
      <body className={`${hackedFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
