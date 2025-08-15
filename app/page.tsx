import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', padding: '40px' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#222' }}>Benvenuto in Thanaris</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Soluzioni innovative per il tuo business
        </p>
      </header>

      {/* Hero Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '40px'
        }}
      >
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h2 style={{ color: '#0070f3' }}>Chi siamo</h2>
          <p style={{ color: '#444', lineHeight: '1.6' }}>
            Thanaris è una realtà orientata all’innovazione e all’eccellenza.
            Offriamo soluzioni personalizzate per aziende e privati, con un
            approccio basato su qualità, affidabilità e risultati concreti.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <Image
            src="https://via.placeholder.com/500x300"
            alt="Thanaris"
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#0070f3' }}>
          I nostri servizi
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h3>Consulenza</h3>
            <p>Supporto strategico e operativo per far crescere la tua azienda.</p>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h3>Marketing</h3>
            <p>Campagne mirate per raggiungere e fidelizzare i tuoi clienti.</p>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h3>E-commerce</h3>
            <p>Soluzioni complete per vendere online in modo semplice ed efficace.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', color: '#777', marginTop: '40px' }}>
        © {new Date().getFullYear()} Thanaris - Tutti i diritti riservati
      </footer>
    </main>
  );
}
