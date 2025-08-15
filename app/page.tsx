// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-8">
      {/* Header */}
      <header className="w-full max-w-6xl text-center mb-12">
        <Image
          src="/logo.png" // sostituisci con il logo reale
          alt="Thanaris Tiles Logo"
          width={200}
          height={60}
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Thanaris Tiles
        </h1>
        <p className="text-lg text-gray-600">
          Large-format porcelain surfaces, 600×1200 mm collection.
        </p>
      </header>

      {/* Hero Image */}
      <section className="w-full max-w-6xl flex flex-col items-center mb-12">
        <Image
          src="/hero.jpg" // sostituisci con un’immagine della collezione
          alt="Thanaris Tiles Collection"
          width={1200}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* Info Section */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">Premium Quality</h2>
          <p className="text-gray-600">
            Our tiles are made with top-grade porcelain for durability and elegance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">Large Formats</h2>
          <p className="text-gray-600">
            Sizes up to 600×1200 mm for seamless, modern interior surfaces.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">Fast Delivery</h2>
          <p className="text-gray-600">
            Reliable shipping across Italy with tracking and insurance.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center text-gray-500 text-sm mb-4">
        © 2025 Thanaris Tiles. All rights reserved.
      </footer>
    </main>
  );
}
