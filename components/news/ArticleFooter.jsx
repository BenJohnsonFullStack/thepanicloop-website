import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function ArticleFooter() {
  return (
    <footer className="mt-10 py-6 px-4 bg-gray-800 text-gray-300 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Follow Us Section */}
        {/* <div className="mb-4">
          <h4 className="text-lg font-semibold text-white mb-2 font-hacked">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="Follow us on YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div> */}

        {/* Copyright Section */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The Panic Loop Podcast. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
