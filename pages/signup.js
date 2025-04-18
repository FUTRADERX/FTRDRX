import { useState } from 'react';
import { useRouter } from 'next/router';
import GlowButton from '../components/GlowButton';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('authToken', 'mock-token');
      router.push('/dashboard');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Sign Up for FutraderX</h2>
      <form style={styles.form} onSubmit={handleSignup}>
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
        <GlowButton text="Create Account" />
      </form>
    </div>
  );
}

const styles = {
  ... // Same as login styles
};
