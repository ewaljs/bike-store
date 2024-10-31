"use client";

import BikeList from "@/app/components/BikeList";
import Link from "next/link";

export default function OwnerDashboard() {
  return (
    <section className="bg-gray-100 min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Bike Inventory</h1>
        <Link href="/owner/add-bike">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add New Bike
          </button>
        </Link>
      </div>

      <BikeList showOwnerActions />

      <footer className="mt-12 text-center text-gray-600 text-sm">
        Manage your inventory by adding, editing, or removing bikes as needed.
      </footer>
    </section>
  );
}
