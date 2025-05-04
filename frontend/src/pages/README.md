# Pages Layer

This layer contains page components that compose widgets and features into full pages.

## Structure

```
pages/
  ├── {page-name}/
  │   ├── ui/           # Page components
  │   ├── lib/          # Page-specific utilities
  │   └── model/        # Page-specific state (if needed)
  └── example/          # Example page template
```

## Guidelines

- Pages should focus on layout and composition
- Use widgets to build the main content
- Keep page-specific logic minimal
- Handle routing and navigation
- Each page should be lazy-loaded
- Use shared layouts when possible 