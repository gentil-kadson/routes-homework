"use client";

import { useParams } from "next/navigation";

export default function Product() {
  const { id } = useParams();

  return (
    <main className="py-4">
      <h2 className="text-xl">
        Essa é a página do produto <strong>{id}</strong>
      </h2>
    </main>
  );
}
