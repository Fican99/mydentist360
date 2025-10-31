"use client"

import { useState, useEffect, Suspense } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Section, Block } from '@/devlink/_Builtin'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()

  useEffect(() => {
    // Check if user is already signed in
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        const redirectTo = searchParams.get('redirectedFrom') || '/'
        router.push(redirectTo)
      }
    })
  }, [router, searchParams, supabase])

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Redirect to the page they were trying to access, or home
      const redirectTo = searchParams.get('redirectedFrom') || '/'
      router.push(redirectTo)
      router.refresh()
    } catch (error: any) {
      setError(error.message || 'An error occurred during sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section
      tag="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Block
        tag="div"
        style={{
          maxWidth: '400px',
          width: '100%',
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          Sign In
        </h1>

        <form onSubmit={handleSignIn}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontSize: '1rem',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontSize: '1rem',
              }}
            />
          </div>

          {error && (
            <div
              style={{
                padding: '0.75rem',
                marginBottom: '1rem',
                background: '#fee2e2',
                color: '#dc2626',
                borderRadius: '4px',
                fontSize: '0.875rem',
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: loading ? '#9ca3af' : '#146ef5',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
          Don't have an account?{' '}
          <a
            href="/auth/signup"
            style={{ color: '#146ef5', textDecoration: 'none', fontWeight: 500 }}
          >
            Sign up
          </a>
        </p>
      </Block>
    </Section>
  )
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <Section
        tag="section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>Loading...</div>
      </Section>
    }>
      <SignInForm />
    </Suspense>
  )
}

