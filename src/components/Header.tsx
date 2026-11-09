import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-200 gap-4">
      <div className="flex items-center">
        <span className="font-bold text-base sm:text-lg tracking-tight text-zinc-900">PerpusDigital</span>
      </div>
      <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-zinc-600">
        <Link href="/" className="transition hover:text-zinc-900">Beranda</Link>
        <Link href="/catalog" className="transition hover:text-zinc-900">Katalog</Link>
      </nav>
      <button className="px-3.5 py-2 text-xs sm:text-sm font-medium text-white bg-zinc-900 rounded-lg shadow-sm transition hover:bg-zinc-800">
        Masuk
      </button>
    </header>
  );
}