export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 0',
      borderBottom: '1px solid var(--color-border)',
      maxWidth: '2000px'
    }}>
      <div style={{ fontFamily: 'var(--font-label)', fontSize: '3rem', fontWeight: '700', marginRight: '3.2rem' }}>
        <a href="/" style={{ color: 'var(--color-text-primary)' }}>Neo-Slow</a>
      </div>
      
      <div style={{ display: 'flex', gap: '2.8rem', alignItems: 'center' }}>
        <a href="/ideas" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)', fontSize: '2rem' }}>
          Archive
        </a>
        <a href="/contributors" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)', fontSize: '2rem' }}>
          Contributors
        </a>
        <a href="/themes" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)', fontSize:'2rem' }}>
          Themes
        </a>
        <a href="/journal" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)', fontSize: '2rem' }}>
          Journal
        </a>
        <a href="/map" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)', fontSize: '2rem' }}>
          Map
        </a>
        <a href="/about" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)', fontSize:'2rem' }}>
          About
        </a>
      </div>
    </nav>
  );
}
