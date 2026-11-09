import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import Button from "@/components/Button";

// Simulasi data katalog buku
const books = [
  { id: 1, title: "Malioboro at Midnight", author: "Skysphire", category: "Romance", isAvailable: true },
  { id: 2, title: "Azzamine", author: "Sophie Aulia", category: "Romance", isAvailable: false },
  { id: 3, title: "172 Days", author: "Nadzira Shafa", category: "Romance", isAvailable: false },
  { id: 4, title: "Mariposa", author: "Luluk Hanten", category: "Romance", isAvailable: true },
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <Header />
      
      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Katalog Buku Digital</h1>
            <p className="text-sm text-zinc-500 mt-1">Jelajahi koleksi literasi dan e-book pilihan dengan mudah.</p>
          </div>
          <Button label="+ Tambah Koleksi" variant="primary" />
        </div>
        
        {/* Grid Katalog Buku */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              isAvailable={book.isAvailable}
            />
          ))}
        </div>
      </main>
    </div>
  );
}