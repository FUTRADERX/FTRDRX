// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <nav style={styles.nav}>
      <Link href="/">
        <span style={styles.logo}>FUTRADERX</span>
      </Link>
      <div style={styles.links}>
        {authenticated ? (
          <>
            <Link href="/dashboard"><span style={styles.link}>Dashboard</span></Link>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login"><span style={styles.link}>Login</span></Link>
            <Link href="/signup"><span style={styles.link}>Sign Up</span></Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#0a0a0a',
    padding: '1rem 2rem',
    borderBottom: '1px solid #00ffcc',
  },
  logo: {
    fontSize: '1.5rem',
    color: '#00ffcc',
    fontWeight: 'bold',
    textShadow: '0 0 10px #00ffcc',
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textShadow: '0 0 8px #00ffcc',
    cursor: 'pointer',
  },
  button: {
    background: 'transparent',
    color: '#ff5c5c',
    border: '1px solid #ff5c5c',
    padding: '0.4rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
};
