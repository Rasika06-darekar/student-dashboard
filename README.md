# Student Dashboard 🎓

A sleek, dark-themed learning dashboard built with Next.js — designed to give students a clean, futuristic overview of their courses, progress, and activity, all in one place.

## 📋 Description

Student Dashboard is a modern web app that displays a student's enrolled courses, learning progress, activity streaks, and study statistics in a visually rich, animated interface. Course data is fetched live from a Supabase database, while the dashboard UI (sidebar navigation, hero banner, progress bars, activity heatmap) is built with smooth motion animations for a polished, app-like feel.

The project currently serves as a **UI/UX-focused foundation** — the visual layer is complete and animated, while deeper interactivity (routing between sections, course detail views, authentication) is designed to be extended on top of it.

## ✨ Features

- **Dashboard overview** — hero banner with streak, active courses, and weekly study time
- **Course cards** — animated progress bars pulling real data from Supabase
- **Activity heatmap** — GitHub-style contribution grid showing recent learning activity
- **Collapsible sidebar** — animated navigation with active-tab indicator
- **Loading skeletons** — smooth skeleton-loading states while data fetches
- **Dark, modern UI** — custom-styled with a violet/purple accent theme

## 🛠️ Tools & Technologies

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Backend / Database | [Supabase](https://supabase.com/) (PostgreSQL + Auto-generated API) |
| Linting | ESLint (Next.js config) |
| Deployment | [Vercel](https://vercel.com/) (recommended) |

## 📁 Project Structure

```
student-dashboard/
├── app/
│   ├── layout.tsx        # Root layout (Sidebar + shell)
│   ├── page.tsx           # Home page (Dashboard entry point)
│   ├── loading.tsx        # Suspense fallback (skeleton UI)
│   └── globals.css        # Global styles
├── components/
│   ├── dashboard/
│   │   ├── DashboardGrid.tsx   # Fetches courses from Supabase, lays out grid
│   │   ├── HeroTile.tsx        # Welcome banner + stats
│   │   ├── CourseCard.tsx      # Individual course card with progress bar
│   │   ├── ActivityTile.tsx    # Activity heatmap
│   │   └── SkeletonCard.tsx    # Loading placeholder
│   └── sidebar/
│       └── Sidebar.tsx         # Collapsible navigation sidebar
├── lib/
│   └── supabase.ts        # Supabase client setup
├── types/
│   └── index.ts            # TypeScript interfaces (Course, etc.)
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com/) account and project

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Create a `.env.local` file in the project root:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Create the `courses` table in Supabase
Run this in the Supabase SQL Editor:
```sql
create table courses (
  id bigint generated always as identity primary key,
  title text not null,
  progress int not null default 0,
  icon_name text not null default 'BookOpen',
  created_at timestamptz default now()
);

insert into courses (title, progress, icon_name) values
('React Fundamentals', 65, 'Code'),
('UI/UX Design', 40, 'Palette'),
('Backend with Node', 80, 'Server'),
('Database Systems', 55, 'Database');
```
Make sure Row Level Security (RLS) has a policy allowing public read access, or disable RLS for quick testing.

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint checks |

## 🔮 Future Improvements

- Sidebar navigation with real routed pages (Courses, Achievements, Profile, Settings)
- Clickable course cards with detailed progress views
- User authentication (Supabase Auth) for personalized dashboards
- Real activity tracking instead of randomly generated heatmap data
- Editable/dynamic user profile (name, avatar, streak) instead of hardcoded values

## 📄 License

This project is private and intended for personal/educational use.
