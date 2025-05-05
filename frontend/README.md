# FSD React Template

A modern React template built with Feature-Sliced Design (FSD) architecture, TypeScript, and TailwindCSS.

## Features

- 🏗️ Feature-Sliced Design architecture
- ⚡ Vite for fast development and building
- 🎨 TailwindCSS for styling
- 📦 TypeScript for type safety
- 🔍 ESLint and Prettier for code quality
- 🚀 React Router for routing
- 🏪 Zustand for state management
- 🔄 Axios for API requests
- 🎯 Path aliases for clean imports
- 🧪 Jest and Testing Library for testing

## Documentation

Detailed documentation is available in the `docs` folder:
- [Architecture Guidelines](docs/ARCHITECTURE.md) - Detailed explanation of the FSD architecture implementation
- [Testing Guidelines](docs/TESTING.md) - Testing strategy and examples

## Architecture

```
src/
├── app/
│   ├── index.tsx        # Application entry point (ReactDOM render)
│   ├── App.tsx          # Root component (handles routing and global providers)
│   └── providers/       # Global context providers (e.g., StoreProvider, ThemeProvider)
├── pages/
│   ├── HomePage/
│   │   ├── index.ts     # Public API for the page
│   │   └── HomePage.tsx # Page component composing widgets/features
│   └── ProfilePage/
│       ├── index.ts
│       └── ProfilePage.tsx
├── widgets/
│   ├── Header/
│   │   ├── index.ts     # Widget public API
│   │   ├── ui/          # UI components (e.g., Header.tsx)
│   │   └── model/       # Widget logic (e.g., menu state)
│   └── UserProfileCard/
│       ├── index.ts
│       ├── ui/          # UI components (UserProfileCard.tsx)
│       └── lib/         # Utility functions (e.g., formatDate.ts)
├── features/
│   ├── ToggleTheme/
│   │   ├── index.ts     # Feature public API
│   │   ├── ui/          # UI component for the feature (ToggleThemeButton.tsx)
│   │   └── model/       # Business logic (theme state, toggle effects)
│   └── SendComment/
│       ├── index.ts
│       ├── ui/          # UI component (SendCommentForm.tsx)
│       ├── model/       # Comment sending logic (e.g., useSendComment hook)
│       └── api/         # API interactions (e.g., commentApi.ts)
├── entities/
│   ├── User/
│   │   ├── index.ts     # Public API for the entity
│   │   ├── model/       # User state logic (e.g., Redux slice)
│   │   └── ui/          # UI components (UserAvatar.tsx, UserInfo.tsx)
│   └── Article/
│       ├── index.ts
│       ├── model/       # Article state management (e.g., useArticle hook)
│       └── ui/          # Article presentation (ArticleSnippet.tsx, etc.)
└── shared/
    ├── api/             # API client configuration (e.g., Axios instance)
    ├── config/          # App configuration (constants, environment variables)
    ├── lib/             # Reusable utilities and helper functions
    ├── hooks/           # Custom hooks used across the project
    ├── ui/              # Base UI components (Button, Input, etc.)
    └── styles/          # Global styles and theming
```
This template follows the [Feature-Sliced Design](https://feature-sliced.github.io/documentation/) methodology, which provides a clear and scalable architecture for frontend applications. The methodology is based on the following principles:

- **Explicit business logic** - Easily discoverable architecture thanks to domain scopes
- **Adaptability** - Architecture components can be flexibly replaced and added for new requirements
- **Tech debt & Refactoring** - Each module can be independently modified/rewritten without side effects
- **Explicit code reuse** - A balance is maintained between DRY and local customization

### Key Concepts

- **Public API** - Each module must have a declaration of its public API at the top level
- **Isolation** - The module should not depend directly on other modules of the same layer or overlying layers
- **Needs Driven** - Orientation to business and user needs

## Project Structure

```
src/
├── app/           # Application initialization, providers, routing
├── pages/         # Page components
├── widgets/       # Complex UI components composed of features
├── features/      # User interactions, actions
├── entities/      # Business entities
└── shared/        # Reusable code, utils, UI components
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Check TypeScript types
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Generate test coverage report

## Path Aliases

- `@/*` - `