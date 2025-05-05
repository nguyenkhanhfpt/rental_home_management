# Testing Guidelines

This document outlines the testing strategy and guidelines for this project, following the Feature-Sliced Design methodology.

## Testing Setup

We use the following tools for testing:
- Jest as the test runner
- React Testing Library for component testing
- MSW for API mocking
- Cypress for E2E testing

## Test Structure

Tests should mirror the project structure:

```
src/
├── app/
│   └── __tests__/
├── pages/
│   └── __tests__/
├── widgets/
│   └── __tests__/
├── features/
│   └── __tests__/
├── entities/
│   └── __tests__/
└── shared/
    └── __tests__/
```

## Testing by Layer

### App Layer Tests

```typescript
// src/app/__tests__/App.test.tsx
import { render } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('handles global errors', () => {
    // Test error boundary
  });
});
```

### Pages Layer Tests

```typescript
// src/pages/HomePage/__tests__/HomePage.test.tsx
import { render, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('HomePage', () => {
  it('renders all required widgets', () => {
    render(<HomePage />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });
});
```

### Widgets Layer Tests

```typescript
// src/widgets/Header/__tests__/Header.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../ui/Header';

describe('Header', () => {
  it('renders navigation items', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('handles navigation clicks', () => {
    const onNavigate = jest.fn();
    render(<Header onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Home'));
    expect(onNavigate).toHaveBeenCalledWith('/');
  });
});
```

### Features Layer Tests

```typescript
// src/features/ToggleTheme/__tests__/ToggleTheme.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleTheme } from '../ui/ToggleTheme';
import { useTheme } from '../model/useTheme';

jest.mock('../model/useTheme');

describe('ToggleTheme', () => {
  it('toggles theme when clicked', () => {
    const toggleTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', toggleTheme });

    render(<ToggleTheme />);
    fireEvent.click(screen.getByRole('button'));
    expect(toggleTheme).toHaveBeenCalled();
  });
});
```

### Entities Layer Tests

```typescript
// src/entities/User/__tests__/UserStore.test.ts
import { useUserStore } from '../model/store';

describe('UserStore', () => {
  it('initializes with null user', () => {
    const { user } = useUserStore.getState();
    expect(user).toBeNull();
  });

  it('updates user state', () => {
    const testUser = { id: 1, name: 'Test User' };
    useUserStore.getState().setUser(testUser);
    const { user } = useUserStore.getState();
    expect(user).toEqual(testUser);
  });
});
```

### Shared Layer Tests

```typescript
// src/shared/ui/Button/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

## API Testing

```typescript
// src/shared/api/__tests__/api.test.ts
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { api } from '../base';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'Test User' }]));
  })
);

describe('API', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('fetches users', async () => {
    const response = await api.get('/users');
    expect(response.data).toEqual([{ id: 1, name: 'Test User' }]);
  });
});
```

## E2E Testing

```typescript
// cypress/e2e/home.cy.ts
describe('Home Page', () => {
  it('loads and displays content', () => {
    cy.visit('/');
    cy.get('[data-testid="header"]').should('be.visible');
    cy.get('[data-testid="main-content"]').should('be.visible');
  });

  it('navigates to about page', () => {
    cy.visit('/');
    cy.get('[data-testid="nav-about"]').click();
    cy.url().should('include', '/about');
  });
});
```

## Best Practices

1. **Test Coverage:**
   - Aim for 80% coverage for critical paths
   - Focus on business logic over implementation details
   - Test edge cases and error scenarios

2. **Test Organization:**
   - Group related tests using describe blocks
   - Use clear, descriptive test names
   - Follow AAA pattern (Arrange, Act, Assert)

3. **Mocking:**
   - Mock external dependencies
   - Use MSW for API mocking
   - Keep mocks close to the tests

4. **Accessibility:**
   - Test keyboard navigation
   - Verify ARIA attributes
   - Check color contrast

5. **Performance:**
   - Test loading states
   - Verify lazy loading
   - Check bundle size impact

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run E2E tests
npm run test:e2e
```

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [MSW Documentation](https://mswjs.io/)
- [Cypress Documentation](https://docs.cypress.io/) 