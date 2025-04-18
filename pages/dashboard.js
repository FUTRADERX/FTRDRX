import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <AuthGuard>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to Your Trading Dashboard</h1>
      </div>
    </AuthGuard>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: '#0a0a0a',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2rem',
    textShadow: '0 0 10px #00ffcc',
  },
};
