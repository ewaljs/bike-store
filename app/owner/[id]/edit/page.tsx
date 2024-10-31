"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import BikeForm from "@/app/components/BikeForm";
import { Bike } from "@/app/types";

export default function EditBikePage() {
  const router = useRouter();
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

  const handleEditBike = async (data: Bike) => {
    const response = await fetch(`/api/bikes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      router.push("/owner");
    }
  };

  if (!bike) return <p>Loading...</p>;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Edit Bike</h1>
      <BikeForm initialData={bike} onSubmit={handleEditBike} />
    </section>
  );
}
