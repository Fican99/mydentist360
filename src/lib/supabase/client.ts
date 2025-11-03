import { createBrowserClient } from '@supabase/ssr'

// Since Webflow Cloud doesn't support NEXT_PUBLIC_ variables,
// we fetch the Supabase URL and key from an API route
let supabaseUrl: string | null = null
let supabaseAnonKey: string | null = null

async function getSupabaseConfig() {
  if (supabaseUrl && supabaseAnonKey) {
    return { supabaseUrl, supabaseAnonKey }
  }

  try {
    // Fetch config from API route that accesses Webflow Cloud env vars
    const response = await fetch('/api/supabase-config')
    if (!response.ok) {
      throw new Error('Failed to fetch Supabase configuration')
    }
    const config = await response.json()
    supabaseUrl = config.url
    supabaseAnonKey = config.key
    return { supabaseUrl, supabaseAnonKey }
  } catch (error) {
    console.error('Error fetching Supabase configuration:', error)
    throw new Error('Failed to initialize Supabase client')
  }
}

export async function createClient() {
  const { supabaseUrl: url, supabaseAnonKey: key } = await getSupabaseConfig()

  if (!url || !key) {
    throw new Error(
      'Missing Supabase configuration. Please ensure SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are set in Webflow Cloud.'
    )
  }

  return createBrowserClient(url, key)
}

