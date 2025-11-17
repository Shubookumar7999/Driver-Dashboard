export default function Home() {
  return (
    <div style={{
      minHeight: '100dvh',
      display: 'grid',
      placeItems: 'center',
      padding: 16
    }}>
      <div style={{
        width: '100%',
        maxWidth: 560,
        textAlign: 'center',
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 28,
        boxShadow: '0 6px 20px rgba(0,0,0,0.05)'
      }}>
      {/* 🔹 Logo section added here */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <img
            src="/images/logo.jpeg"
            alt="Trans 99 Logistics Logo"
            style={{
              width: '160px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}
            
      
          />
        </div>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800, letterSpacing: 0.2, color:'#0ea5e9' }}>
          Welcome to <span style={{ color: '#0ea5e9' }}>Driver Portal</span>
        </h1>
        <p style={{ color: '#6b7280', marginTop: 8 }}>
          Choose a section to continue:
        </p>

        <div style={{ display: 'grid', gap: 14, marginTop: 18 }}>
          <a
            href="/driver"
            style={{
              display: 'block',
              padding: '14px 18px',
              borderRadius: 10,
              background: '#0ea5e9',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(14,165,233,0.35)'
            }}
          >
            Driver Dashboard
          </a>

          <a
            href="/manager"
            style={{
              display: 'block',
              padding: '14px 18px',
              borderRadius: 10,
              background: '#10b981',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(16,185,129,0.35)'
            }}
          >
            Manager Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
