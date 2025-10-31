import { createBrowserClient } from '@supabase/ssr'
import { Database } from './database.types'

export function createClient() {
  // Check for Webflow Cloud environment variables first (SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  // Then fallback to Next.js standard naming (NEXT_PUBLIC_* prefix)
  const supabaseUrl = 
    process.env.SUPABASE_URL || 
    process.env.NEXT_PUBLIC_SUPABASE_URL || 
    ''
  
  const supabaseAnonKey = 
    process.env.SUPABASE_PUBLISHABLE_KEY || 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
    ''

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase environment variables. Please set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY in Webflow Cloud (or NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY)'
    )
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
}

