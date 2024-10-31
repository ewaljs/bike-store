"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Bike } from "@/app/types";

export default function ViewBikePage() {
  const { id } = useParams();
  const [bike, setBike] = useState<Bike | null>(null);

  useEffect(() => {
    async function fetchBike() {
      const response = await fetch(`/api/bikes/${id}`);
      const data = await response.json();
      setBike(data);
    }
    fetchBike();
  }, [id]);

  if (!bike) return <p>Loading...</p>;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Bike Details</h1>
      <p>
        <strong>Description:</strong> {bike.description}
      </p>
      <p>
        <strong>Type:</strong> {bike.type}
      </p>
      <p>
        <strong>Price:</strong> ${bike.price}
      </p>
      <p>
        <strong>Rating:</strong> {bike.rating} / 5
      </p>
      <p>
        <strong>Quantity:</strong> {bike.quantity}
      </p>
      {bike.photoUrl && (
        <img
          src={bike.photoUrl}
          alt={bike.description}
          className="w-64 h-64 object-cover mt-4"
        />
      )}
    </section>
  );
}
