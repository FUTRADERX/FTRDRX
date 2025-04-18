// components/AuthGuard.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authToken');

    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
}
