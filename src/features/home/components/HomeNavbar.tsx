export default function HomeNavbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 0',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div style={{ fontFamily: 'var(--font-label)', fontSize: '1.25rem' }}>
        <a href="/" style={{ color: 'var(--color-text-primary)' }}>Neo-Slow</a>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="/archive" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)' }}>
          Archive
        </a>
        <a href="/contributors" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)' }}>
          Contributors
        </a>
        <a href="/themes" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)' }}>
          Themes
        </a>
        <a href="/journal" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)' }}>
          Journal
        </a>
        <a href="/map" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)' }}>
          Map
        </a>
        <a href="/about" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-text-secondary)' }}>
          About
        </a>
      </div>
    </nav>
  );
}
