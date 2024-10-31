import { ReactNode } from "react";

export default function OwnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="owner-dashboard">
      <h2 className="text-3xl font-bold mb-4">Owner Dashboard</h2>
      {children}
    </div>
  );
}
