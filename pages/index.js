import Link from 'next/link';

export default function Home() {
  return (
    <div className="landing-container">
      <img src="/logo.png" alt="FutraderX" className="landing-logo" />

      <h1 className="headline">Trade Like a Funded Pro</h1>
      <p className="subhead">Pass the combine. Get funded. Keep up to 90% profits.</p>

      <div className="button-group">
        <Link href="/login">
          <button className="glow-button">Login</button>
        </Link>
        <Link href="/signup">
          <button className="glow-button alt">Start Challenge</button>
        </Link>
      </div>
    </div>
  );
}
