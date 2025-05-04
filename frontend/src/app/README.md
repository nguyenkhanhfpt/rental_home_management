# App Layer

This layer is the application's entry point and contains app-wide configurations and providers.

## Structure

```
app/
  ├── providers/       # Global providers (store, theme, etc.)
  ├── styles/         # Global styles and theme configuration
  ├── config/         # App-wide configuration
  └── types/          # Global TypeScript types
```

## Guidelines

- Keep app-specific logic here
- Configure global providers
- Set up routing and navigation
- Handle app initialization
- Manage global error boundaries
- Configure global styles and themes
- Define app-wide types and interfaces 