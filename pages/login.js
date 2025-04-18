import { useState } from 'react';
import { useRouter } from 'next/router';
import GlowButton from '../components/GlowButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('authToken', 'mock-token');
      router.push('/dashboard');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login to FutraderX</h2>
      <form style={styles.form} onSubmit={handleLogin}>
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <GlowButton text="Login" />
      </form>
    </div>
  );
}

const styles = {
  container: {
    background: '#0a0a0a',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#00ffcc',
    textShadow: '0 0 15px #00ffcc',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px',
  },
  input: {
    padding: '0.7rem',
    border: '1px solid #00ffcc',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: '5px',
  },
};
