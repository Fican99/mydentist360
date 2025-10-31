# Supabase Authentication Setup Guide

## Overview
This guide outlines the steps to integrate Supabase database and authentication into your Next.js Webflow Cloud project.

## Step-by-Step Plan

### Step 1: Set Up Supabase Project
1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project credentials:
   - Project URL
   - Anon/Public Key
   - Service Role Key (for server-side operations)

### Step 2: Install Supabase Dependencies
- Install `@supabase/supabase-js` - Supabase JavaScript client
- Install `@supabase/ssr` - For Next.js server-side rendering support

### Step 3: Configure Environment Variables
- Create `.env.local` file
- Add Supabase URL and anon key
- Configure for Webflow Cloud deployment

### Step 4: Set Up Supabase Client
- Create Supabase client utility for client-side
- Create Supabase client utility for server-side
- Configure for SSR with Next.js 15 App Router

### Step 5: Create Authentication Flow
- Sign Up page/component
- Sign In page/component
- Sign Out functionality
- Password reset flow (optional)

### Step 6: Set Up Protected Routes
- Create middleware for route protection
- Create auth context/provider for client-side auth state
- Create protected route wrapper component

### Step 7: Update Layout with Auth Provider
- Wrap application with auth context
- Add auth state management

### Step 8: Create Auth Pages
- `/auth/signin` page
- `/auth/signup` page
- `/auth/callback` route for OAuth callbacks

### Step 9: Configure Webflow Cloud Environment Variables
- Add Supabase credentials to Webflow Cloud environment variables
- Ensure secure variable handling

## Prerequisites
- Supabase account
- Next.js 15 project (already set up ✅)
- Webflow Cloud project configured (already set up ✅)

