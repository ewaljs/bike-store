"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <Link href="/" className="text-2xl font-bold hover:text-gray-200">
        Bike Store
      </Link>
      <div className="space-x-4">
        <Link href="/" className="hover:text-gray-200">
          Shop
        </Link>
        <Link href="/owner" className="hover:text-gray-200">
          Owner Dashboard
        </Link>
      </div>
    </nav>
  );
}
