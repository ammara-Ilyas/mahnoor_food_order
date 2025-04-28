"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link href="/">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg">
          Go Back Home
        </button>
      </Link>
      <footer className="text-center mt-10 text-gray-600">
        © Ammara Ilyas, All Rights Reserved. Designed By HTML Codex
        <br />
        Distributed By Yummy Yatch
      </footer>
    </div>
  );
}
