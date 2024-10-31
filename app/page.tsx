"use client";

import BikeList from "@/app/components/BikeList";

export default function HomePage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Available Bikes</h1>
      <BikeList />
    </section>
  );
}
