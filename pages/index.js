import Link from 'next/link';
import GlowButton from '../components/GlowButton';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.center}>
        <h1 style={styles.logo}>FUTRADERX</h1>
        <p style={styles.tagline}>Get paid to trade. No cap, no fluff.</p>
        <Link href="/login">
          <GlowButton text="Login" />
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: '#0a0a0a',
    height: '100vh',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  },
  logo: {
    fontSize: '3rem',
    color: '#00ffcc',
    textShadow: '0 0 20px #00ffcc',
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#87f8ff',
  },
};
