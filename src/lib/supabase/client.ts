import { createBrowserClient } from '@supabase/ssr'
import { Database } from './database.types'

export function createClient() {
  // Check for NEXT_PUBLIC_ prefix first (Next.js standard)
  // Then fallback to Webflow Cloud naming convention
  const supabaseUrl = 
    process.env.NEXT_PUBLIC_SUPABASE_URL || 
    process.env.SUPABASE_URL || 
    ''
  
  const supabaseAnonKey = 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
    process.env.SUPABASE_PUBLISHABLE_KEY || 
    ''

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL) and NEXT_PUBLIC_SUPABASE_ANON_KEY (or SUPABASE_PUBLISHABLE_KEY)'
    )
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
}

