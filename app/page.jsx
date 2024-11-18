import Image from "next/image";
import { EmailSubscription } from "@/components";

export async function generateMetadata() {
  return {
    title: "The Panic Loop Podcast",
    description: "The Panic Loop Podcast: An edgy, tech-infused podcast blending wit, insight, and NSFW humor.",
    keywords: "tech podcast, witty podcast, NSFW tech show, tech culture, IoT, video games, movies",
    openGraph: {
      title: "The Panic Loop Podcast",
      description: "An unapologetically raw and witty podcast diving into tech, movies, gaming, and more.",
      type: "website",
      url: "https://www.thepanicloop.com",
      images: [
        {
          url: "/path-to-image.jpg", // Adjust as needed
          width: 1200,
          height: 630,
          alt: "The Panic Loop Podcast Logo",
        },
      ],
    },
  };
}

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-10 mt-16">
      {/* Tagline */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-2 sm:mb-4 font-hacked font-hacked">
        The Panic Loop Podcast
      </h1>

      {/* Logo */}
      <Image
        src="/thepaniclooplogo.WEBP" // Corrected path to your logo
        alt="The Panic Loop Logo"
        width={400}
        height={400}
        className="mb-10 rounded-md"
        priority
      />

      <h4 className="text-md sm:text-2xl mb-2 text-center font-hacked">Sign up for a chance to win free swag!</h4>

      {/* Email Input and Subscribe Button */}
      <EmailSubscription />

      {/* Description */}
      <p className="text-md sm:text-lg text-white text-center mb-8 max-w-2xl">A high-voltage, NSFW ride through the best and worst of tech culture, the web, IoT, movies, video games, and more. If you&#39;re ready for a show that&#39;s both smart and irreverent, one that makes you love and hate us all at once, The Panic Loop is your digital meltdown destination.</p>
      

      {/* Indication of New Episodes */}
      <p className="text-sm text-gray-400">
        New episodes coming in 2025. Stay tuned!
      </p>
      
    </div>
  );
}
