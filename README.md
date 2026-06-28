# The Wild Oasis

**The Wild Oasis** is a React-based booking and administration dashboard for a cabin rental experience. It is built with Vite, React Query, Supabase, and styled-components, and includes user authentication, cabin management, booking workflows, and check-in/out operations.

## Features

- User authentication with signup, login, and protected routes
- Cabin management: create, edit, delete, and list cabins
- Booking management: view, filter, and manage bookings
- Check-in / checkout flows for daily activity tracking
- Dashboard analytics and user settings
- Responsive layout with dark mode support

## Tech stack

- React 18
- Vite
- Supabase
- React Query
- React Router DOM
- Styled Components
- React Hook Form
- Recharts
- React Hot Toast

## Project structure

- `src/pages/` – route pages such as `Dashboard`, `Bookings`, `Cabins`, `Account`, `Checkin`, and `Settings`
- `src/features/` – domain-specific modules for authentication, bookings, cabins, check-in/out, and more
- `src/services/` – Supabase client and API service wrappers
- `src/ui/` – reusable UI components and layout primitives
- `src/hooks/` – custom hooks for local state, routing, and outside click handling
- `src/styles/` – global styling setup

## Getting started

### Prerequisites

- Node.js 18+ (or compatible)
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Supabase configuration

The project currently uses a Supabase client initialized in `src/services/supabase.js`.

Create a local environment file with your Supabase settings. For Vite, use these variable names:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Store those values in a `.env.local` file or a similar local-only environment file. This repository already ignores `*.local`, so `.env.local` will not be committed.

If you want to share a template, use `.env.example` with placeholder values instead of your real key.

## Deployment

This repository includes `netlify.toml` routing for deployment on Netlify. The configuration redirects all routes to `index.html` to support client-side routing.

## Notes

- ESLint is included and can be run with `npm run lint`
- Replace hardcoded Supabase credentials with environment variables before sharing or deploying publicly
- The app is structured for extendability, with reusable UI components and feature-specific hooks

## License

This project does not include a license file. Add one if you plan to share or publish this repository.
