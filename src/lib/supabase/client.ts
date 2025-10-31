import { createBrowserClient } from '@supabase/ssr'
import { Database } from './database.types'

export function createClient() {
  // For client-side: Next.js only exposes NEXT_PUBLIC_* variables to the browser
  // Check NEXT_PUBLIC_* first (required for client-side), then fallback to Webflow Cloud naming
  const supabaseUrl = 
    process.env.NEXT_PUBLIC_SUPABASE_URL || 
    process.env.SUPABASE_URL || 
    ''
  
  const supabaseAnonKey = 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
    process.env.SUPABASE_PUBLISHABLE_KEY || 
    ''

  if (!supabaseUrl || !supabaseAnonKey) {
    // Log what we found for debugging
    console.error('Supabase environment variables check:', {
      hasNextPublicUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasNextPublicKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      hasSupabaseUrl: !!process.env.SUPABASE_URL,
      hasSupabaseKey: !!process.env.SUPABASE_PUBLISHABLE_KEY,
    })
    
    throw new Error(
      'Missing Supabase environment variables. Client-side code requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to be set in Webflow Cloud and the app must be rebuilt after adding them.'
    )
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
}

