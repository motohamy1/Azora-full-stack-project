# Agent Guidelines for Azora Full-Stack Project

## Project Overview
This is a React 19 + TypeScript + Vite application with Tailwind CSS for styling. The project uses modern React patterns and strict TypeScript configuration.

## Available Commands

### Development
- `npm run dev` - Start Vite development server with hot module replacement
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint on the codebase
- **IMPORTANT**: Always run `npm run lint` after making changes to ensure code quality

### Testing
- **Note**: No test framework is currently configured in this project
- Before adding tests, set up a testing framework (Vitest, Jest + React Testing Library, etc.)
- Single test command will be available after test framework setup

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode is enabled** - All type checking is strict
- **No unused code** - Remove unused locals and parameters (`noUnusedLocals`, `noUnusedParameters`)
- **No fallthrough cases** - All switch statements must explicitly break or return
- **Target**: ES2022, **Module**: ESNext, **JSX**: react-jsx

### Component Structure
- Use function components with default exports
- Name components using PascalCase (e.g., `UserProfile.tsx`)
- React 19 auto-imports hooks - no need to import `useState`, `useEffect`, etc. explicitly
- Use React Fragments (`<>...</>`) for grouping elements

```tsx
function ComponentName() {
  return <div>Content</div>
}
export default ComponentName
```

### Import Organization
1. React and core framework imports
2. Third-party libraries
3. Internal components and utilities
4. Type imports (use `import type` when possible)
5. CSS/asset imports last

### Naming Conventions
- **Components**: PascalCase (`UserProfile.tsx`, `Button.tsx`)
- **Functions/Variables**: camelCase (`getUserData`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_ITEMS`)
- **Interfaces/Types**: PascalCase with descriptive names (`UserData`, `ApiResponse`)

### Error Handling
- Use TypeScript's strict null checks (`document.getElementById('root')!`)
- Implement proper error boundaries for component trees
- Handle async errors with try/catch blocks
- Provide user-friendly error messages in UI

### Styling
- **Tailwind CSS is configured** via `@tailwindcss/vite` plugin
- Use Tailwind utility classes for styling
- Import component-specific CSS modules when needed
- Global styles in `src/index.css`
- Keep styles co-located with components when possible

### JSX Guidelines
- Use self-closing tags for elements without children (`<img />`, `<input />`)
- Add comments in JSX using `{/* comment */}`
- Use descriptive alt text for images
- Maintain proper indentation (2 spaces)

### State Management
- Use React 19 hooks for local state
- Consider Context API for app-wide state
- Keep state close to where it's used
- Use derived state instead of duplicating state

### Best Practices
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks
- Use TypeScript for all function signatures
- Prefer function declarations over arrow functions for components
- Avoid unnecessary re-renders with `useMemo` and `useCallback` when needed
- Always clean up side effects in `useEffect` return functions

### File Organization
```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── assets/        # Static assets (images, fonts)
└── App.tsx        # Main application component
```

### Working with This Project
1. Run `npm run dev` to start development
2. Make changes and observe hot module replacement
3. Run `npm run lint` before committing
4. Build with `npm run build` to verify production readiness
5. Preview builds with `npm run preview`

### Version Control
- Create meaningful commit messages
- Run `npm run lint` before committing
- Ensure builds pass before pushing
- Keep dependencies up to date but test changes thoroughly