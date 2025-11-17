'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ManagerEntry() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const router = useRouter();

  // shared local state (frontend-only)
  const [login, setLogin] = useState({ username: '', password: '' });
  const [signup, setSignup] = useState({ email: '', username: '', password: '', confirm: '' });
  const [error, setError] = useState<string | null>(null);

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // FRONTEND ONLY: pretend it worked and go to dashboard
    if (!login.username || !login.password) {
      setError('Please enter username and password.');
      return;
    }
    router.push('/manager/dashboard');
  };

  const onSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // basic client checks
    if (!signup.email.endsWith('@tran99.net')) {
      setError('Use your company email (must end with @tran99.net).');
      return;
    }
    if (!signup.username) {
      setError('Username is required.');
      return;
    }
    if (signup.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (signup.password !== signup.confirm) {
      setError('Passwords do not match.');
      return;
    }

    // FRONTEND ONLY: pretend account created -> go to dashboard
    router.push('/manager/dashboard');
  };

  return (
    <div style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', padding: 16, background: '#f8fafc' }}>
      <div
        style={{
          width: '100%',
          maxWidth: 520,
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: 14,
          padding: 28,
          boxShadow: '0 10px 28px rgba(0,0,0,0.06)',
        }}
      >
        {/* Logo (optional) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <img
            src="/images/logo.jpeg"
            alt="Trans 99 Logistics Logo"
            style={{ width: 150, height: 'auto', borderRadius: 8 }}
          />
        </div>

        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#0f172a', textAlign: 'center' }}>
          Manager Dashboard 
        </h2>

        {/* Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8,
            marginTop: 16,
            background: '#f1f5f9',
            padding: 6,
            borderRadius: 10,
          }}
        >
          <button
            onClick={() => {
              setMode('login');
              setError(null);
            }}
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              border: 0,
              cursor: 'pointer',
              fontWeight: 700,
              background: mode === 'login' ? '#111827' : 'transparent',
              color: mode === 'login' ? '#fff' : '#111827',
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setMode('signup');
              setError(null);
            }}
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              border: 0,
              cursor: 'pointer',
              fontWeight: 700,
              background: mode === 'signup' ? '#111827' : 'transparent',
              color: mode === 'signup' ? '#fff' : '#111827',
            }}
          >
            Sign up
          </button>
        </div>

        {error && (
          <div
            style={{
              marginTop: 14,
              padding: 10,
              borderRadius: 8,
              color: '#991b1b',
              background: '#fee2e2',
              border: '1px solid #fecaca',
              fontWeight: 600,
            }}
          >
            {error}
          </div>
        )}

        {/* Forms */}
        {mode === 'login' ? (
          <form onSubmit={onLogin} style={{ display: 'grid', gap: 14, marginTop: 16 ,color:'#0d0d0dff'}}>
            <label style={{ display: 'grid', gap: 6, textAlign: 'left' }}>
              <span style={{ fontWeight: 500, color: '#0f172a' }}>Username</span>
              <input
                value={login.username}
                onChange={(e) => setLogin((v) => ({ ...v, username: e.target.value }))}
                placeholder="your.username"
                required
                style={{ padding: 12, border: '1px solid #cbd5e1', borderRadius: 10, outline: 'none' }}
              />
            </label>

            <label style={{ display: 'grid', gap: 6, textAlign: 'left' }}>
              <span style={{ fontWeight: 500, color: '#0f172a' }}>Password</span>
              <input
                type="password"
                value={login.password}
                onChange={(e) => setLogin((v) => ({ ...v, password: e.target.value }))}
                placeholder=""
                required
                style={{ padding: 12, border: '1px solid #cbd5e1', borderRadius: 10, outline: 'none' }}
              />
            </label>

            <button
              type="submit"
              style={{
                padding: '12px 16px',
                borderRadius: 10,
                border: 0,
                background: '#111827',
                color: 'white',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Login
            </button>

            <a href="/" style={{ textAlign: 'center', color: '#0ea5e9', textDecoration: 'none', fontWeight: 600 }}>
              ← Back to Home
            </a>
          </form>
        ) : (
          <form onSubmit={onSignup} style={{ display: 'grid', gap: 14, marginTop: 16 ,color:'#0d0d0dff'}}>
            <label style={{ display: 'grid', gap: 6, textAlign: 'left' }}>
              <span style={{ fontWeight: 500, color: '#0f172a' }}>Company Email</span>
              <input
                type="email"
                value={signup.email}
                onChange={(e) => setSignup((v) => ({ ...v, email: e.target.value.trim() }))}
                placeholder="name@tran99.net"
                required
                style={{ padding: 12, border: '1px solid #cbd5e1', borderRadius: 10, outline: 'none' }}
              />
              <small style={{ color: '#64748b' }}>Only @tran99.net emails are allowed.</small>
            </label>

            <label style={{ display: 'grid', gap: 6, textAlign: 'left',color:'#0d0d0dff' }}>
              <span style={{ fontWeight: 500, color: '#0f172a' }}>Username</span>
              <input
                value={signup.username}
                onChange={(e) => setSignup((v) => ({ ...v, username: e.target.value }))}
                placeholder="your.username"
                required
                style={{ padding: 12, border: '1px solid #cbd5e1', borderRadius: 10, outline: 'none' }}
              />
            </label>

            <label style={{ display: 'grid', gap: 6, textAlign: 'left',color:'#0d0d0dff' }}>
              <span style={{ fontWeight: 500, color: '#0f172a' }}>Password</span>
              <input
                type="password"
                value={signup.password}
                onChange={(e) => setSignup((v) => ({ ...v, password: e.target.value }))}
                placeholder="at least 6 characters"
                required
                style={{ padding: 12, border: '1px solid #cbd5e1', borderRadius: 10, outline: 'none' }}
              />
            </label>

            <label style={{ display: 'grid', gap: 6, textAlign: 'left' ,color:'#0d0d0dff'}}>
              <span style={{ fontWeight: 500, color: '#0f172a' }}>Confirm Password</span>
              <input
                type="password"
                value={signup.confirm}
                onChange={(e) => setSignup((v) => ({ ...v, confirm: e.target.value }))}
                placeholder="retype password"
                required
                style={{ padding: 12, border: '1px solid #cbd5e1', borderRadius: 10, outline: 'none' }}
              />
            </label>

            <button
              type="submit"
              style={{
                padding: '12px 16px',
                borderRadius: 10,
                border: 0,
                background: '#10b981',
                color: 'white',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Create Account
            </button>

            <a href="/" style={{ textAlign: 'center', color: '#0ea5e9', textDecoration: 'none', fontWeight: 600 }}>
              ← Back to Home
            </a>
          </form>
        )}
      </div>
    </div>
  );
}
