"use client";

import BikeForm from "@/app/components/BikeForm";
import { Bike } from "@/app/types";
import { useRouter } from "next/navigation";

export default function AddBikePage() {
  const router = useRouter();

  const handleAddBike = async (data: Bike) => {
    const response = await fetch("/api/bikes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      router.push("/owner");
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Add New Bike</h1>
      <BikeForm onSubmit={handleAddBike} />
    </section>
  );
}
