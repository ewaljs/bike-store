"use client";

import { useEffect, useState } from "react";
import { Bike } from "@/app/types";
import Modal from "./Modal";
import BikeCard from "./BikeCard";

interface BikeListProps {
  showOwnerActions?: boolean;
}

export default function BikeList({ showOwnerActions }: BikeListProps) {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [bikeToDelete, setBikeToDelete] = useState<Bike | null>(null);

  useEffect(() => {
    async function fetchBikes() {
      const res = await fetch("/api/bikes");
      const data = await res.json();
      setBikes(data);
    }
    fetchBikes();
  }, []);

  const confirmDelete = (bike: Bike) => {
    setBikeToDelete(bike);
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (bikeToDelete) {
      const res = await fetch(`/api/bikes/${bikeToDelete.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setBikes(bikes.filter((bike) => bike.id !== bikeToDelete.id));
      }
      setShowModal(false);
      setBikeToDelete(null);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setBikeToDelete(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
            showOwnerActions={showOwnerActions}
            onDelete={() => confirmDelete(bike)}
          />
        ))}
      </div>
      <Modal
        show={showModal}
        title="Confirm Delete"
        message={`Are you sure you want to delete the bike: ${bikeToDelete?.description}?`}
        onConfirm={handleDelete}
        onClose={closeModal}
      />
    </>
  );
}
