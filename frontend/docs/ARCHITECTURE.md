# Architecture Guidelines

This document outlines the architectural principles and guidelines for this project, following the [Feature-Sliced Design](https://feature-sliced.github.io/documentation/) methodology.

## Layers

The project is structured into the following layers (from top to bottom):

### App Layer (`src/app/`)
- Application initialization and setup
- Global providers and configurations
- Routing configuration
- Root component

**Responsibilities:**
- Initialize the application
- Set up global providers (theme, store, etc.)
- Configure routing
- Handle global error boundaries

**Example:**
```typescript
// src/app/App.tsx
export const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <ErrorBoundary>
          <RouterProvider>
            <Routes>
              {/* Routes */}
            </Routes>
          </RouterProvider>
        </ErrorBoundary>
      </StoreProvider>
    </ThemeProvider>
  );
};
```

### Pages Layer (`src/pages/`)
- Route-specific components
- Page layouts
- Page-level state management

**Responsibilities:**
- Define page layouts
- Compose widgets and features
- Handle page-level state
- Manage route-specific logic

**Example:**
```typescript
// src/pages/HomePage/index.ts
export { HomePage } from './HomePage';

// src/pages/HomePage/HomePage.tsx
export const HomePage = () => {
  return (
    <Layout>
      <WidgetA />
      <FeatureB />
    </Layout>
  );
};
```

### Widgets Layer (`src/widgets/`)
- Complex UI components
- Independent blocks of interface
- Composite components

**Responsibilities:**
- Create reusable UI blocks
- Manage widget-specific state
- Compose features and entities

**Example:**
```typescript
// src/widgets/Header/index.ts
export { Header } from './ui/Header';

// src/widgets/Header/ui/Header.tsx
export const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <UserProfile />
    </header>
  );
};
```

### Features Layer (`src/features/`)
- User interactions
- Business actions
- Feature-specific logic

**Responsibilities:**
- Implement user interactions
- Handle feature-specific state
- Manage feature business logic

**Example:**
```typescript
// src/features/ToggleTheme/index.ts
export { ToggleTheme } from './ui/ToggleTheme';
export { useTheme } from './model/useTheme';

// src/features/ToggleTheme/ui/ToggleTheme.tsx
export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};
```

### Entities Layer (`src/entities/`)
- Business entities
- Entity-specific logic
- Entity state management

**Responsibilities:**
- Define business entities
- Manage entity state
- Handle entity-specific logic

**Example:**
```typescript
// src/entities/User/index.ts
export { UserCard } from './ui/UserCard';
export { useUserStore } from './model/store';

// src/entities/User/model/store.ts
export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
```

### Shared Layer (`src/shared/`)
- Reusable code
- UI components
- Utilities
- API configuration

**Responsibilities:**
- Provide reusable components
- Define utility functions
- Configure API clients
- Set up global styles

**Example:**
```typescript
// src/shared/ui/Button/index.ts
export { Button } from './Button';

// src/shared/api/base.ts
export const api = axios.create({/* config */});
```

## Import Rules

1. **Vertical Imports:**
   - Higher layers can import from lower layers
   - Lower layers cannot import from higher layers
   - Same layer imports are allowed

2. **Public API:**
   - Each module must expose its public API through `index.ts`
   - Internal implementation details should not be imported directly

3. **Circular Dependencies:**
   - Avoid circular dependencies between modules
   - Use dependency injection when necessary

## State Management

1. **Global State:**
   - Use Zustand for global state
   - Define stores in the appropriate layer
   - Keep state as close to its usage as possible

2. **Local State:**
   - Use React's useState for component-specific state
   - Consider lifting state up when shared between components

## Error Handling

1. **Global Errors:**
   - Use error boundaries at the app layer
   - Log errors to a monitoring service

2. **Local Errors:**
   - Handle errors at the appropriate layer
   - Provide meaningful error messages
   - Implement fallback UI

## Testing Strategy

1. **Unit Tests:**
   - Test entities and features in isolation
   - Mock dependencies
   - Focus on business logic

2. **Integration Tests:**
   - Test widget compositions
   - Verify feature interactions
   - Check state management

3. **E2E Tests:**
   - Test complete user flows
   - Verify page navigation
   - Check critical paths

## Code Style

1. **Naming Conventions:**
   - Use PascalCase for components
   - Use camelCase for functions and variables
   - Use kebab-case for file names

2. **File Structure:**
   - Keep related files close together
   - Use index files for public API
   - Group by feature, not by type

## Best Practices

1. **Component Design:**
   - Keep components small and focused
   - Use composition over inheritance
   - Follow single responsibility principle

2. **State Management:**
   - Keep state as local as possible
   - Use derived state when appropriate
   - Avoid prop drilling

3. **Performance:**
   - Use React.memo for expensive renders
   - Implement proper code splitting
   - Optimize bundle size

## Migration Guide

When adding new features or refactoring existing code:

1. Identify the appropriate layer
2. Follow the public API pattern
3. Maintain layer isolation
4. Update documentation
5. Add tests

## Resources

- [Feature-Sliced Design Documentation](https://feature-sliced.github.io/documentation/)
- [React Documentation](https://react.dev/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [TypeScript Documentation](https://www.typescriptlang.org/) 