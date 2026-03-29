# Hackathon Starter: Next.js + Supabase

Based on the [official Vercel Supabase Starter](https://github.com/vercel/next.js/tree/canary/examples/with-supabase), pre-configured for the AI Bootcamp with Slow Creator Fund.

## What's Included

- **Next.js** (App Router) with TypeScript
- **Supabase** auth (email/password, sign up, forgot password, protected routes)
- **Tailwind CSS** + **shadcn/ui** components
- **Claude Code config** (CLAUDE.md + custom slash commands)
- Ready to deploy on **Vercel**

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/TanookiLabs/hackathon-starter.git my-project
cd my-project
npm install
```

### 2. Set up Supabase

- Go to [supabase.com/dashboard](https://supabase.com/dashboard) and create a new project
- Go to **Settings → API** and copy your project URL and anon/publishable key

### 3. Configure environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and paste in your Supabase URL and key.

### 4. Run it

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser.

### 5. Install the Vercel CLI

```bash
npm i -g vercel
```

If you're using Claude Code, also install the Vercel MCP plugin so Claude can deploy for you:

```bash
claude mcp add vercel -- npx -y vercel-mcp@latest
```

### 6. Deploy to Vercel

```bash
# Option A: Tell Claude Code
claude
> "Deploy this to Vercel"

# Option B: Use the Vercel CLI directly
vercel

# Option C: Use the Vercel dashboard
# Go to vercel.com/new → Import your GitHub repo → Deploy
```

## Using Claude Code

This project comes with a `CLAUDE.md` and custom slash commands pre-configured. Open Claude Code in this directory and try:

| Command | What It Does |
|---------|-------------|
| `/deploy` | Commit, push to GitHub, and deploy via Vercel |
| `/new-page` | Create a new page with navigation |
| `/add-table` | Create a new Supabase database table |
| `/add-ai` | Add an AI feature (image gen, text gen, chat) |
| `/help` | Show available commands and tips |

## Adding Features

Tell Claude Code what you want to add. Some examples:

- "Add a dashboard page that shows a list of my brand deals from Supabase"
- "Add image generation using Replicate — let users describe an image and generate it"
- "Add a contact form that saves submissions to a Supabase table"
- "Add Stripe checkout so users can buy my digital products"

## Project Structure

```
app/
  page.tsx                    ← Homepage
  layout.tsx                  ← Root layout (fonts, theme)
  globals.css                 ← Tailwind + CSS variables
  auth/
    login/page.tsx            ← Login page
    sign-up/page.tsx          ← Sign up page
    forgot-password/page.tsx  ← Password reset
    update-password/page.tsx  ← Update password
  protected/
    page.tsx                  ← Protected page (requires login)
components/
  ui/                         ← shadcn/ui components (button, card, input, etc.)
  auth-button.tsx             ← Login/logout button
  login-form.tsx              ← Login form component
  sign-up-form.tsx            ← Sign up form component
lib/
  supabase/
    client.ts                 ← Browser-side Supabase client
    server.ts                 ← Server-side Supabase client
  utils.ts                    ← cn() helper for classnames
.claude/
  commands/                   ← Custom Claude Code slash commands
CLAUDE.md                     ← Claude Code project config
.env.local.example            ← Environment variable template
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values you need:

| Variable | Required | Where to Get It |
|----------|----------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Yes | Supabase dashboard → Settings → API |
| `REPLICATE_API_TOKEN` | For image/video gen | replicate.com/account/api-tokens |
| `OPENAI_API_KEY` | For text gen (OpenAI) | platform.openai.com/api-keys |
| `STRIPE_SECRET_KEY` | For payments | dashboard.stripe.com/apikeys |
| `RESEND_API_KEY` | For email | resend.com/api-keys |
