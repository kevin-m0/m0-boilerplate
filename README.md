# M0 Production Boilerplate

A production-ready Next.js boilerplate with the T3 stack, designed for scalable applications.

## 🚀 Features

- ⚡ **Next.js 15** - React framework with server-side rendering
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔒 **TypeScript** - Static type checking
- 🔌 **tRPC** - End-to-end type-safe APIs
- 📦 **Prisma** - Type-safe database ORM
- 🎭 **Playwright** - End-to-end testing
- 📊 **Bundle Analysis** - Track bundle sizes
- 🎯 **ShadCN Components** - Accessible UI components
- 🔍 **TypeScript Reset** - Enhanced type safety
- 📝 **ESLint & Prettier** - Code quality tools

## 📋 Prerequisites

- Node.js 18+
- PNPM 10+
- SQLite (default) or your preferred database

## 🛠️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/m0-boilerplate.git
   cd m0-boilerplate
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

4. **Initialize the database**

   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

## 📚 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run Playwright tests
- `pnpm ui-test` - Run Playwright tests with UI
- `pnpm lint` - Run ESLint
- `pnpm format:check` - Check code formatting
- `pnpm format:write` - Fix code formatting
- `pnpm typecheck` - Check TypeScript types
- `pnpm analyze` - Analyze bundle size

## 🏗️ Project Structure

```
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable components
│   ├── lib/          # Utility functions
│   ├── server/       # Server-side code
│   ├── styles/       # Global styles
│   └── trpc/         # tRPC router and procedures
├── prisma/           # Database schema and migrations
├── public/           # Static assets
└── tests/           # E2E tests
```

## 🧪 Testing

- End-to-end tests using Playwright
- Run tests with `pnpm test`
- UI mode available with `pnpm ui-test`

## 📦 Deployment

This project can be deployed on any platform that supports Next.js:

- Vercel (recommended)
- AWS
- Docker
- Self-hosted

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
