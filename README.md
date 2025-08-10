# [Gatekeeper](https://mhadikazemian.github.io/gatekeeper/#/login)

A clean, multilingual, and theme-aware authentication portal built with React, TypeScript, Ant Design, and Apollo Client.

Implements secure login, account details view, dark mode, and language switching (English / German).  
Includes unit and integration test coverage.

## Features

- **Login & Logout** via GraphQL API
- **Protected Routes** with React Router
- **Account Page** showing first & last name
- **Dark Mode Toggle** (persisted in localStorage)
- **Language Switcher** (English / German via i18next)
- **Responsive UI** with Ant Design
- **Apollo Client** with auth token handling
- **Unit & Integration Tests** (Vitest + Testing Library)

## Tech Stack

- **React 18 + TypeScript**
- **Ant Design 5**
- **React Router v6**
- **Apollo Client 3**
- **i18next + react-i18next**
- **Vitest + Testing Library**

## Requirements

- Node.js >= 18
- npm >= 9

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/gatekeeper.git
cd gatekeeper
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the project root:

```env
VITE_GRAPHQL_ENDPOINT=https://example.com/graphql
VITE_AUTH_TOKEN_KEY=auth_token
```

You can also create `.env.local` or `.env.production` for different environments.

### 4. Run development server

```bash
npm run dev
```

The app will be available at http://localhost:5173.

## Running Tests

### Run all tests

```bash
npm run test
```

### Run tests with UI

```bash
npm run test:ui
```

### Test Structure

Tests are split into:

- **Unit tests** → For isolated hooks & logic
- **Integration tests** → For page flows with mocked GraphQL

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── apollo/          # Apollo Client configuration
├── components/      # Reusable UI components
├── context/         # React context providers
├── graphql/         # GraphQL queries and mutations
├── pages/           # Page components
├── assets/          # Static assets
└── i18n.ts         # Internationalization setup
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
