"use client";

import { useState } from "react";
import { Bike } from "@/app/types";

interface BikeFormProps {
  initialData?: Bike;
  onSubmit: (data: Bike) => void;
}

export default function BikeForm({ initialData, onSubmit }: BikeFormProps) {
  const [formData, setFormData] = useState<Bike>(
    initialData ||
      ({
        description: "",
        rating: 0,
        price: 0,
        quantity: 0,
        type: "",
        photoUrl: "",
      } as Bike)
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-md mx-auto space-y-4"
    >
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief description of the bike"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700"
        >
          Rating
        </label>
        <input
          id="rating"
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Bike rating out of 5"
          className="w-full p-2 border rounded"
        />
        <p className="text-xs text-gray-500">
          Enter a rating from 0 to 5 (e.g., 4.5)
        </p>
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          id="price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Bike price in USD"
          className="w-full p-2 border rounded"
          required
        />
        <p className="text-xs text-gray-500">
          Specify the price in dollars (e.g., 1200.00)
        </p>
      </div>

      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700"
        >
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Number of bikes in stock"
          className="w-full p-2 border rounded"
        />
        <p className="text-xs text-gray-500">
          Specify the available stock quantity
        </p>
      </div>

      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Type
        </label>
        <input
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type of bike (e.g., mountain, road)"
          className="w-full p-2 border rounded"
          required
        />
        <p className="text-xs text-gray-500">
          Enter the bike type, such as road, mountain, or hybrid
        </p>
      </div>

      <div>
        <label
          htmlFor="photoUrl"
          className="block text-sm font-medium text-gray-700"
        >
          Photo URL
        </label>
        <input
          id="photoUrl"
          name="photoUrl"
          value={formData.photoUrl}
          onChange={handleChange}
          placeholder="Link to a photo of the bike"
          className="w-full p-2 border rounded"
        />
        <p className="text-xs text-gray-500">
          Optional: Provide a URL to an image of the bike
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
