# React Application Development Guidelines

## Architecture & Component Structure

- Implement strict component-based architecture adhering to single responsibility principle — each component handles exactly one concern with no mixed responsibilities.
- Create atomic components for UI primitives (Button, Input, Checkbox, Chip, List, ListItem).
- Create composite components for reusable patterns (forms, filter groups, action bars, status displays).
- Create page-level components for each application section — pages must only be wrappers for other UI components, no logic, no data, only glue pieces together.
- Break components into small, composable units — never create complex conditional components.
- Extract hooks for shared logic and stateful behaviors.
- Implement a simple context provider for global settings and configuration.

## File Structure & Organization
```
/components/ui/                                → reserved by shadcn
/components/composed/<component-name>/[files]  → Composite components
/pages/                → Route-level components
/pages/<page-name>/components/                → page colocated components
/pages/<page-name>/utils/                → page colocated utils
/data/                 → data.ts, types, constants
/hooks/                → Custom hooks
/layouts/              → Shell and layout components
```

- All UI and custom components must be extracted to their own files, well structured, organized, and styled consistently.

## Data Management

- All static data, mock data, type definitions, and constants must reside in a centralized `data.ts` file.
- Components import from this single source — never define inline data structures.
- Define ALL mock data in objects — no hardcoded data anywhere.

## Routing & Navigation

- Use React Router to handle all navigation.
- Establish proper routing structure: root layout component containing persistent chrome elements, nested routes rendering page components into the main content outlet.
- Extract layouts and implement them for each page.
- When creating a new page, ensure the page and all other pages are connected and navigable.

## Styling & Design System

- Use Tailwind CSS exclusively — no custom CSS.
- Use shadcn components and `cn` classNames helper instead of writing custom components.
- Follow the visual design language, spacing system, color palette, typography, and border treatments from the reference with zero deviation.
- Choose ONE dark variant from Tailwind (stone, neutral, slate, gray, zinc) and use it exclusively — no mixing of different grayscale palettes.
- Ensure all UI elements, especially buttons, have consistent styles and colors.
- Ensure background, text, and element backgrounds in normal and hover states do not clash with any other colors.
- Use React Lucide icons exclusively.
- Padding and sizing of sidebar, main area, inner content, popups, and modals must be consistent and intentional.

## Theming

- All designs must support light and dark mode.
- All components and elements must support light and dark mode.
- Ensure colors are consistent and render correctly between dark and light mode.
- Include a light/dark mode toggle switch.

## Responsive Design

- The application must be responsive and functional on all screen sizes.
- All components must support responsive design.

## Testing

- Add `data-testid` attribute to all components created and to main HTML elements.

## Workflow Process

- ALl requirements must be broken down into trackable checkable tasks in `TASKS.json` the list must be detailed and comprehensive with verification steps. it must have status field and it must be updated as we go
- Breakdown the sitemap into an actionable list of items and save it to `SITEMAP.md`.
- Create a `CONTEXT.md` about this project, the prd and info about other artifacts (tasks, sitempa, progress.md ...etc)
- append to `progress.md` your progress as you go.
- When prompted with "NEXT ITEM", read `tasks.json` and pick list of tasks to work on

## Prohibitions

- Do not implement AI integration.
- Do not use custom CSS — Tailwind only.
- Do not define data inline — use `data.ts`.
- Do not mix grayscale palettes.
- Do not skip or modify any of these requirements.



## Architecture

- Implement error boundaries at route and component level for graceful failure handling.
- Create a `/lib/` directory for utility functions, formatters, and helpers.
- Establish a `/constants/` directory for enums, route paths, and configuration constants separate from mock data.

## Type Safety

- Define strict TypeScript interfaces for all component props — no `any` types.
- Create a `/types/` directory for shared type definitions and API response shapes.
- Use discriminated unions for component variant props.

## State Management

- Implement URL state synchronization for filters, tabs, and pagination using search params.
- Create custom hooks for common patterns: `useLocalStorage`, `useMediaQuery`, `useDebounce`.


## UX Patterns

- Implement loading states for all async operations and data fetches.
- Implement empty states for all lists, tables, and data displays.
- Implement error states with recovery actions.
- Add skeleton loaders matching component dimensions.
- Include toast/notification system for user feedback.

## Documentation
- Add JSDoc comments explaining business decisions

