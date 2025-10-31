# Supabase Authentication Setup - Complete Instructions

## ✅ What Has Been Set Up

I've integrated Supabase authentication into your Next.js project. Here's what's been configured:

### Files Created:
1. **Supabase Client Utilities**
   - `src/lib/supabase/client.ts` - Client-side Supabase client
   - `src/lib/supabase/server.ts` - Server-side Supabase client
   - `src/lib/supabase/middleware.ts` - Middleware helper
   - `src/lib/supabase/database.types.ts` - TypeScript types for your database

2. **Authentication Pages**
   - `src/app/auth/signin/page.tsx` - Sign in page
   - `src/app/auth/signup/page.tsx` - Sign up page
   - `src/app/auth/callback/route.ts` - OAuth callback handler

3. **Authentication Context**
   - `src/contexts/AuthContext.tsx` - Auth context and provider
   - `src/components/UserStatus.tsx` - User status component

4. **Middleware**
   - `middleware.ts` - Route protection middleware

### Configuration Updated:
- ✅ `package.json` - Added Supabase dependencies
- ✅ `src/app/layout.tsx` - Added AuthProvider wrapper
- ✅ `src/app/page.tsx` - Added UserStatus component

---

## 📋 Next Steps - What You Need to Do

### Step 1: Install Dependencies

Run this command in your terminal:

```bash
cd /Users/filip/Documents/GitHub/mydentist360
npm install
```

This will install:
- `@supabase/supabase-js` - Supabase JavaScript client
- `@supabase/ssr` - Server-side rendering support for Next.js

---

### Step 2: Set Up Supabase Project

1. **Create a Supabase account** (if you don't have one):
   - Go to [supabase.com](https://supabase.com)
   - Sign up for a free account

2. **Create a new project**:
   - Click "New Project"
   - Choose an organization
   - Enter project details:
     - Name: `mydentist360` (or your preferred name)
     - Database Password: Create a strong password (save it!)
     - Region: Choose closest to you
     - Pricing Plan: Free tier works for development

3. **Get your project credentials**:
   - In your Supabase project dashboard, go to **Settings** → **API**
   - Copy these values:
     - **Project URL**: `https://xxxxx.supabase.co`
     - **anon/public key**: The `anon` `public` key

---

### Step 3: Configure Environment Variables

1. **Update `.env.local` file** with your Supabase credentials:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace:
- `https://your-project-id.supabase.co` with your actual Project URL
- `your-anon-key-here` with your actual anon/public key

2. **Verify the file exists**: Check that `.env.local` is in your project root

---

### Step 4: Configure Supabase Authentication

In your Supabase dashboard:

1. **Enable Email Authentication**:
   - Go to **Authentication** → **Providers**
   - Make sure **Email** is enabled
   - Configure email templates if needed (optional)

2. **Set up Site URL** (important for email confirmations):
   - Go to **Authentication** → **URL Configuration**
   - Add your site URL:
     - For local development: `http://localhost:3000`
     - For production: Your Webflow Cloud domain + mount path
     - Example: `https://yoursite.webflow.io/app`

3. **Add Redirect URLs**:
   - Add: `http://localhost:3000/auth/callback`
   - Add: `https://yoursite.webflow.io/app/auth/callback`

---

### Step 5: Test the Authentication Flow

1. **Start your development server**:

```bash
npm run dev
```

2. **Test Sign Up**:
   - Navigate to `http://localhost:3000/auth/signup`
   - Create a test account
   - Check your email for the confirmation link (if email confirmation is enabled)

3. **Test Sign In**:
   - Navigate to `http://localhost:3000/auth/signin`
   - Sign in with your test account
   - You should see your email in the top bar

4. **Test Sign Out**:
   - Click the "Sign Out" button
   - You should be redirected appropriately

---

### Step 6: Configure Protected Routes (Optional)

By default, the middleware protects these routes:
- `/dashboard`
- `/profile`
- `/settings`

To add more protected routes, edit `src/lib/supabase/middleware.ts`:

```typescript
const protectedRoutes = ['/dashboard', '/profile', '/settings', '/admin']
```

To make all routes protected except auth pages, you can modify the middleware logic.

---

### Step 7: Deploy to Webflow Cloud

Before deploying, make sure to:

1. **Add environment variables to Webflow Cloud**:
   - In your Webflow site settings → **Webflow Cloud** tab
   - Find your project → **Settings** → **Environment Variables**
   - Add:
     - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Your anon key

2. **Update Supabase Site URL**:
   - In Supabase dashboard: **Authentication** → **URL Configuration**
   - Add your production URL: `https://yoursite.webflow.io/app`

3. **Deploy**:

```bash
npm run deploy
# or
webflow cloud deploy
```

---

## 🔧 Customization Options

### Customize Auth Pages

You can customize the sign-in and sign-up pages:
- `src/app/auth/signin/page.tsx` - Sign in page styling and logic
- `src/app/auth/signup/page.tsx` - Sign up page styling and logic

### Add OAuth Providers

To add Google, GitHub, etc.:

1. **Enable in Supabase**:
   - Go to **Authentication** → **Providers**
   - Enable the provider (e.g., Google)
   - Configure OAuth credentials

2. **Update signin page** to add OAuth buttons:

```typescript
const { error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${location.origin}/auth/callback`,
  },
})
```

### Add User Profile Management

You can create a profile page at `/profile` that:
- Shows user information
- Allows profile updates
- Uses the protected route middleware

---

## 📚 Useful Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Next.js 15 App Router](https://nextjs.org/docs/app)
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

## 🐛 Troubleshooting

### Issue: "Invalid API key"
- **Solution**: Check that your `.env.local` file has the correct values
- Make sure you're using the `anon` key, not the `service_role` key

### Issue: Email not sending
- **Solution**: 
  - Check Supabase email settings
  - Verify site URL is configured correctly
  - Check spam folder

### Issue: Redirect loop
- **Solution**: 
  - Check middleware configuration
  - Ensure `/auth` routes are excluded from protection
  - Verify callback route is working

### Issue: User not persisting
- **Solution**: 
  - Check that cookies are being set properly
  - Verify middleware is working
  - Check browser console for errors

---

## ✨ Next Steps After Setup

Once authentication is working, you can:

1. **Create a database schema** in Supabase
2. **Set up Row Level Security (RLS)** policies
3. **Add user profiles table**
4. **Create protected pages** that use user data
5. **Integrate with Webflow CMS** for user-specific content

---

## 📝 Summary

Your Next.js project now has:
- ✅ Supabase authentication configured
- ✅ Sign in / Sign up pages
- ✅ Protected routes middleware
- ✅ Auth context for client-side state
- ✅ User status component
- ✅ OAuth callback handling

**Next Action**: Install dependencies and configure your Supabase project credentials!

