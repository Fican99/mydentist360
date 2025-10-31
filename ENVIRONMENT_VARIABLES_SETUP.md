# Environment Variables Setup Guide

## Current Setup

Based on your Webflow Cloud panel, you have these environment variables set up:
- `SUPABASE_URL` = `https://ubemaeuiyfwutxyfjzr.supabase.co`
- `SUPABASE_PUBLISHABLE_KEY` = `sb_publishable_yldA8fiSNsyot_KBz0pQmg_h1ZfMd5H`
- `SUPABASE_SECRET_KEY` = (hidden, server-side only)

## ✅ Code Updated

I've updated the code to work with **both** naming conventions:
1. **Next.js standard**: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. **Your current setup**: `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`

The code will automatically check both, so your current setup **should work**!

## ⚠️ Important Note

However, for Next.js to embed variables in the **client-side bundle**, they **must** have the `NEXT_PUBLIC_` prefix. This means:

- ✅ **Server-side code** (middleware, API routes) will work with your current variable names
- ⚠️ **Client-side code** (browser) may not have access to variables without `NEXT_PUBLIC_` prefix

## 🔧 Recommended Solution

To ensure everything works correctly in both client and server contexts, add these variables to Webflow Cloud with the `NEXT_PUBLIC_` prefix:

### Option 1: Add New Variables (Recommended)
Add these alongside your existing ones:
- `NEXT_PUBLIC_SUPABASE_URL` = `https://ubemaeuiyfwutxyfjzr.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `sb_publishable_yldA8fiSNsyot_KBz0pQmg_h1ZfMd5H`

This way:
- Client-side code uses `NEXT_PUBLIC_*` variables
- Server-side code can use either set
- You have flexibility for different use cases

### Option 2: Rename Existing Variables
Rename your current variables to:
- `SUPABASE_URL` → `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Keep `SUPABASE_SECRET_KEY` as is (server-side only, doesn't need prefix).

## 🧪 Testing

After updating variables, test locally:

1. **Update `.env.local`** with your values:
   ```bash
   SUPABASE_URL=https://ubemaeuiyfwutxyfjzr.supabase.co
   SUPABASE_PUBLISHABLE_KEY=sb_publishable_yldA8fiSNsyot_KBz0pQmg_h1ZfMd5H
   ```

2. **Test the build**:
   ```bash
   npm run build
   ```

3. **Test locally**:
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000/auth/signup` and try creating an account.

## 📝 Summary

**Current Status**: ✅ Code updated to work with your variable names  
**Recommendation**: Add `NEXT_PUBLIC_*` prefixed variables for full client-side support  
**Your Setup**: Should work for server-side, may need adjustment for client-side

The code will now:
- ✅ Use `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` if available
- ✅ Prefer `NEXT_PUBLIC_*` versions if both exist
- ✅ Work in both server and client contexts when properly configured

