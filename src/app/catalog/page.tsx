"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";

// Simulasi data katalog buku (buku lama tetap dipertahankan dan ditambah genre beragam)
const books = [
  // Buku bawaan sebelumnya (Romance)
  { id: 1, title: "Malioboro at Midnight", author: "Skysphire", category: "Romance", isAvailable: true },
  { id: 2, title: "Azzamine", author: "Sophie Aulia", category: "Romance", isAvailable: false },
  { id: 3, title: "172 Days", author: "Nadzira Shafa", category: "Romance", isAvailable: false },
  { id: 4, title: "Mariposa", author: "Luluk Hanten", category: "Romance", isAvailable: true },
  
  // Tambahan buku dengan berbagai genre berbeda
  { id: 5, title: "Bumi Manusia", author: "Pramoedya Ananta Toer", category: "Historical Fiction", isAvailable: true },
  { id: 6, title: "Atomic Habits", author: "James Clear", category: "Self-Improvement", isAvailable: true },
  { id: 7, title: "Pulang", author: "Tere Liye", category: "Action / Thriller", isAvailable: false },
  { id: 8, title: "Bumi", author: "Tere Liye", category: "Fantasy / Sci-Fi", isAvailable: true },
  { id: 9, title: "The Da Vinci Code", author: "Dan Brown", category: "Mystery / Thriller", isAvailable: false },
  { id: 10, title: "Filosofi Kopi", author: "Dewi Lestari", category: "Fiction / Philosophy", isAvailable: true },
];

export default function CatalogPage() {
  // State untuk menangkap kueri pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // Logika filter dinamis berdasarkan judul atau penulis
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Katalog Digital</h1>
            <p className="text-sm text-zinc-500 mt-1">Jelajahi koleksi literasi dan e-book pilihan dengan mudah.</p>
          </div>
          <Button label="+ Tambah Koleksi" variant="primary" />
        </div>
        
        {/* Komponen SearchBar untuk pencarian real-time */}
        <div className="mb-8">
          <SearchBar onSearchChange={(q) => setSearchQuery(q)} />
        </div>

        {/* Grid Katalog Buku (menggunakan filteredBooks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              isAvailable={book.isAvailable}
            />
          ))}
        </div>

        {/* Pesan jika buku tidak ditemukan */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12 text-zinc-500">
            <p>Tidak ada buku yang cocok dengan kata kunci &quot;{searchQuery}&quot;.</p>
          </div>
        )}
      </main>
    </div>
  );
}