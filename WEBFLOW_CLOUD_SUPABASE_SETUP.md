# Supabase Setup with Webflow Cloud Environment Variables

This guide explains how to connect Supabase to your Next.js app on Webflow Cloud using environment variables.

## Overview

In Webflow Cloud, you cannot use `process.env` directly to access custom environment variables. Instead, you must access them through the **Workers runtime** using the `getCloudflareContext()` function.

## Environment Variables Setup

1. **In Webflow Cloud Dashboard:**
   - Navigate to your project's environment settings
   - Add the following environment variables:
     - `SUPABASE_URL` - Your Supabase project URL (e.g., `https://xxxxx.supabase.co`)
     - `SUPABASE_PUBLISHABLE_KEY` - Your Supabase anon/public key
     - `SUPABASE_SECRET_KEY` (optional) - Your Supabase service role key (for server-side admin operations)

2. **Type Generation:**
   The `cloudflare-env.d.ts` file already includes these types. If you add new variables, regenerate types:
   ```bash
   npm run cf-typegen
   ```

## How It Works

### Server-Side Access

The server-side Supabase client (`src/lib/supabase/server.ts`) uses `getCloudflareContext()` to access environment variables:

```typescript
import { getCloudflareContext } from '@opennextjs/cloudflare'

const { env } = getCloudflareContext()
const supabaseUrl = env.SUPABASE_URL
```

**Important Notes:**
- Always call `getCloudflareContext()` inside a function (not at module top level)
- For static routes (ISR/SSG), use `getCloudflareContext({ async: true })` and await it

### Client-Side Access

Since Webflow Cloud doesn't support `NEXT_PUBLIC_*` prefix for client-side variables, we use an API route (`/api/supabase-config`) that:
1. Accesses the environment variables server-side using `getCloudflareContext()`
2. Returns them to the client
3. The client-side Supabase client fetches this config and caches it

The client-side Supabase client (`src/lib/supabase/client.ts`) automatically fetches the configuration from this API route.

## Usage Examples

### Server Component Example

```typescript
import { createClient } from '@/lib/supabase/server'

export default async function ServerComponent() {
  const supabase = await createClient()
  const { data } = await supabase.from('table').select('*')
  return <div>{/* render data */}</div>
}
```

### Client Component Example

```typescript
'use client'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function ClientComponent() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    async function fetchData() {
      const supabase = await createClient()
      const { data } = await supabase.from('table').select('*')
      setData(data)
    }
    fetchData()
  }, [])
  
  return <div>{/* render data */}</div>
}
```

### API Route Example

```typescript
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data } = await supabase.from('table').select('*')
  return NextResponse.json(data)
}
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install @supabase/supabase-js @supabase/ssr
   ```

   Note: If you encounter npm cache permission issues, fix them first:
   ```bash
   sudo chown -R $(whoami) ~/.npm
   ```

2. **Set environment variables in Webflow Cloud:**
   - Go to your Webflow Cloud environment dashboard
   - Add `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`
   - Deploy your app after adding variables

3. **Verify the setup:**
   - The API route `/api/supabase-config` should return your Supabase configuration
   - Test server-side and client-side Supabase clients

## Troubleshooting

### Environment Variables Not Found

- Ensure variables are set in Webflow Cloud dashboard (not just `.env` file locally)
- Redeploy your app after adding/modifying environment variables
- Check that variable names match exactly (case-sensitive)

### Client-Side Client Not Working

- Verify `/api/supabase-config` route is accessible
- Check browser console for errors
- Ensure `SUPABASE_PUBLISHABLE_KEY` is set (not just `SUPABASE_SECRET_KEY`)

### TypeScript Errors

- Run `npm run cf-typegen` to regenerate Cloudflare environment types
- Ensure `cloudflare-env.d.ts` includes your environment variables

