// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Thanaris Tiles',
  description: 'Large-format porcelain surfaces, 600×1200 mm collection.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
