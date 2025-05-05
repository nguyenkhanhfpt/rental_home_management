# Widgets Layer

This layer contains composite components that combine entities and features into meaningful UI blocks.

## Structure

```
widgets/
  ├── {widget-name}/
  │   ├── ui/           # Widget components
  │   ├── lib/          # Widget-specific utilities
  │   └── model/        # Widget-specific state (if needed)
  └── example/          # Example widget template
```

## Guidelines

- Widgets can use entities and features but not other widgets
- Keep widgets focused on composition and layout
- Avoid complex business logic in widgets
- Use shared UI components when possible
- Each widget should be independent and reusable 