interface BookCardProps {
  title: string;
  author: string;
  category: string;
  isAvailable: boolean;
}

export default function BookCard({ title, author, category, isAvailable }: BookCardProps) {
  return (
    <div className="group flex flex-col justify-between p-6 bg-white border border-zinc-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-300">
      <div>
        <span className="inline-block px-2.5 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 rounded-md">
          {category}
        </span>
        <h3 className="font-semibold text-lg text-gray-950 mt-3 leading-snug group-hover:text-zinc-950">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 mt-1">Oleh {author}</p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-between items-center">
        <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
          isAvailable 
            ? 'bg-emerald-800 text-white font-bold border border-emerald-200/60' 
            : 'bg-rose-800 text-white font-bold border border-rose-200/60'
        }`}>
          {isAvailable ? 'Tersedia' : 'Dipinjam'}
        </span>
        <button className="text-xs font-medium text-zinc-700 hover:text-zinc-950 transition">
          Detail Buku →
        </button>
      </div>
    </div>
  );
}