"use client";

import Image from "next/image";
import Link from "next/link";
import { Bike } from "@/app/types";
import { isValidUrl } from "@/app/utils";

interface BikeCardProps {
  bike: Bike;
  showOwnerActions?: boolean;
  onDelete?: () => void;
}

export default function BikeCard({
  bike,
  showOwnerActions,
  onDelete,
}: BikeCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center bg-white hover:shadow-lg transition-shadow">
      {bike.photoUrl && isValidUrl(bike.photoUrl) && (
        <Image
          src={bike.photoUrl}
          alt={bike.description}
          width={150}
          height={150}
          className="rounded mb-4"
        />
      )}
      <h2 className="text-lg font-semibold mb-2">{bike.description}</h2>
      <p className="text-sm text-gray-500">Type: {bike.type}</p>
      <p className="text-lg font-bold mt-2">${bike.price}</p>
      <p className="text-sm text-yellow-500">Rating: {bike.rating} / 5</p>
      <p className="text-sm text-gray-500">Stock: {bike.quantity}</p>
      {showOwnerActions && (
        <div className="mt-4 flex space-x-2">
          <Link href={`/owner/${bike.id}/view`}>
            <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition">
              View
            </button>
          </Link>
          <Link href={`/owner/${bike.id}/edit`}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
              Edit
            </button>
          </Link>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
