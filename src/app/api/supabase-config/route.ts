import { NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'

export async function GET() {
  try {
    // Access environment variables through Webflow Cloud's Workers runtime
    const { env } = getCloudflareContext()
    
    const supabaseUrl = env.SUPABASE_URL
    const supabaseAnonKey = env.SUPABASE_PUBLISHABLE_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: 'Missing Supabase environment variables' },
        { status: 500 }
      )
    }

    // Return only the public URL and anon key (safe to expose to client)
    return NextResponse.json({
      url: supabaseUrl,
      key: supabaseAnonKey,
    })
  } catch (error) {
    console.error('Error accessing Supabase configuration:', error)
    return NextResponse.json(
      { error: 'Failed to access Supabase configuration' },
      { status: 500 }
    )
  }
}

