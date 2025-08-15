// app/page.tsx
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui puoi aggiungere integrazione email o backend
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md mb-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <Image src="/logo.png" alt="Thanaris Logo" width={150} height={50} />
          <div className="space-x-6">
            <a href="#products" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full max-w-6xl flex flex-col items-center mb-12 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">Thanaris Tiles</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">Premium large-format porcelain surfaces, 600×1200 mm collection.</p>
        <Image src="/hero.jpg" alt="Hero Image" width={1200} height={500} className="rounded-xl shadow-lg" />
      </section>

      {/* Products */}
      <section id="products" className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12 px-4">
        {['Tile A', 'Tile B', 'Tile C'].map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <Image
              src={`/product-${index + 1}.jpg`}
              alt={product}
              width={400}
              height={300}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{product}</h2>
            <p className="text-gray-600 mb-4">High-quality porcelain tiles, perfect for modern interiors.</p>
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Contact for Purchase
            </a>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section id="contact" className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        {submitted ? (
          <p className="text-green-600 text-center">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
              rows={5}
              required
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center text-gray-500 text-sm mb-4">
        <p>Contact: <a href="mailto:afazzinothanaris@outlook.com" className="text-blue-600 underline">afazzinothanaris@outlook.com</a></p>
        <p>© 2025 Thanaris Tiles. All rights reserved.</p>
      </footer>
    </main>
  );
}
