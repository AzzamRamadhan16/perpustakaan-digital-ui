export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="font-bold text-xl text-blue-600">Perpustakaan Digital</h1>
      <nav className="space-x-4">
        <a href="/" className="text-gray-600 hover:text-blue-600">Beranda</a>
        <a href="/catalog" className="text-gray-600 hover:text-blue-600">Katalog</a>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Masuk</button>
    </header>
  );
}