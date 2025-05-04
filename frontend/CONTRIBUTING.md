# Contributing to FSD React Template

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github
We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html)
Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issue tracker](https://github.com/your-username/fsd-react-template/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/your-username/fsd-react-template/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Use a Consistent Coding Style

* Use the provided ESLint and Prettier configurations
* 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

## License
By contributing, you agree that your contributions will be licensed under its MIT License.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch for your feature/fix
4. Make your changes
5. Submit a pull request

## Development Process

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Make your changes following our guidelines
4. Test your changes thoroughly
5. Commit your changes using conventional commits
6. Push to your fork and submit a pull request

## Project Structure

We follow the Feature-Sliced Design methodology. Please maintain the following structure:

```
src/
  ├── app/          # Application initialization layer
  ├── pages/        # Application routes/pages
  ├── widgets/      # Composite components (blocks)
  ├── features/     # User interactions, actions
  ├── entities/     # Business logic, domain
  └── shared/       # Reusable infrastructure
```

## Guidelines

### General

- Follow Feature-Sliced Design principles
- Write clean, maintainable code
- Use TypeScript for all new code
- Follow existing code style and conventions
- Keep changes focused and atomic

### Components

- Use functional components with hooks
- Follow component composition patterns
- Keep components small and focused
- Use proper TypeScript types
- Write reusable components in shared/ui

### Styling

- Use TailwindCSS for styling
- Follow responsive design principles
- Maintain consistent spacing and sizing
- Use design tokens when available

### State Management

- Use Zustand for global state
- Keep state minimal and normalized
- Follow proper state management patterns
- Document complex state interactions

### Testing

- Write tests for new features
- Maintain existing test coverage
- Test edge cases and error states
- Follow testing best practices

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update the README.md if needed
5. Follow the pull request template
6. Request review from maintainers

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## Questions?

If you have questions or need help, please:

1. Check the documentation
2. Search for existing issues
3. Create a new issue if needed

Thank you for contributing! 