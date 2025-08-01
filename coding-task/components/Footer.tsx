"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-orange-200 bg-[#fef7e0] px-4 py-6 text-black">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        {/* Left - Logo */}
        <div className="font-serif font-bold text-lg text-orange-700">
          Hacker News
        </div>

        {/* Center - Tagline */}
        <div className="text-center text-xs text-neutral-700">
          Built with ❤️ by Muneeb Ahmad
        </div>

        {/* Right - GitHub Link */}
        <div className="text-right">
          <Link
            href="https://github.com/muneebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:underline"
          >
            GitHub →
          </Link>
        </div>
      </div>
    </footer>
  );
}
