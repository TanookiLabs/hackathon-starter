# Project

This is a Next.js app with Supabase for the backend, built at the Slow Ventures Creator Fund AI Hackathon.

# Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS + shadcn/ui for styling
- Supabase for database, auth, and storage
- Deployed on Vercel

# Rules

- Use Server Actions for all backend logic (not API routes)
- Use the Supabase client from lib/supabase/server.ts for server-side operations
- Use the Supabase client from lib/supabase/client.ts for client-side operations
- Use shadcn/ui components for UI elements (install with: pnpm dlx shadcn@latest add <component>)
- Use Tailwind CSS for styling, never inline styles
- Always handle errors in server actions and display them to the user
- Keep API keys in .env.local, never hardcode them
- Commit frequently with descriptive messages
- When creating new pages, add them to the app/ directory following Next.js App Router conventions
- File paths are routes: app/dashboard/page.tsx = /dashboard
