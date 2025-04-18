// pages/index.js
import Link from 'next/link';
import Navbar from '../components/Navbar';
import GlowButton from '../components/GlowButton';

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <div style={styles.hero}>
        <h1 style={styles.title}>FUTRADERX</h1>
        <p style={styles.tagline}>Get paid to trade. No cap, no fluff.</p>
        <Link href="/login">
          <GlowButton>Login</GlowButton>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#00ffcc',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 'calc(100vh - 80px)',
  },
  title: {
    fontSize: '4rem',
    textShadow: '0 0 20px #00ffcc',
  },
  tagline: {
    fontSize: '1.2rem',
    margin: '1rem 0 2rem',
    color: '#99ffee',
  },
};
