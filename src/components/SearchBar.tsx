// components/SearchBar.tsx
"use client";

import { useState } from "react";

export default function SearchBar({
  onSearchChange,
}: {
  onSearchChange: (q: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setSearchTerm(rawValue);

    // Penerapan Postel's Law: Normalisasi Input (Trimming & Lowercase)
    const normalizedQuery = rawValue.trim().toLowerCase();
    onSearchChange(normalizedQuery);
  };

  return (
    <div className="relative max-w-xl mx-auto my-6">
      <label htmlFor="catalog-search" className="sr-only">
        Cari Judul Buku atau Penulis
      </label>
      <input
        id="catalog-search"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Cari judul buku, penulis, atau kata kunci..."
        aria-label="Cari judul buku atau penulis"
        className="w-full px-4 py-3 pl-10 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}