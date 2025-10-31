"use client"

import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export function UserStatus() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return (
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        Loading...
      </div>
    )
  }

  if (!user) {
    return (
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <Link
          href="/auth/signin"
          style={{
            marginRight: '1rem',
            color: '#146ef5',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          Sign In
        </Link>
        <Link
          href="/auth/signup"
          style={{
            color: '#146ef5',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          Sign Up
        </Link>
      </div>
    )
  }

  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Signed in as:
        </span>
        <span style={{ fontWeight: 500 }}>{user.email}</span>
      </div>
      <button
        onClick={signOut}
        style={{
          padding: '0.5rem 1rem',
          background: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        Sign Out
      </button>
    </div>
  )
}

