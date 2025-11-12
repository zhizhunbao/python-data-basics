# Python Data Basics – Comparative Data Processing Learning Platform

## Project Overview

This project delivers a **comparative Python data processing learning platform** that walks learners through business-inspired scenarios and highlights the full data workflow. The curriculum embraces a **progressive learning** approach, starting with fundamental list operations and gradually introducing more advanced analytics powered by List, NumPy, Pandas, and Matplotlib.

## Tech Stack

### Front-End
- **React 18+** – Modern UI framework with hooks and concurrent rendering support
- **Vite** – Blazing-fast development server with hot reloading
- **Zustand** – Lightweight, flexible state management
- **MDX** – Markdown + JSX for interactive documentation
- **Monaco Editor** – VS Code–style editor with Python syntax highlighting
- **Tailwind CSS** – Utility-first styling for rapid UI development
- **React Router** – Client-side routing

## Project Structure

```
.
├── dist/                        # Production build output
│   ├── assets/                  # Bundled JavaScript, CSS, and maps
│   └── data/                    # Preprocessed datasets for demo mode
├── docs/
│   └── ARCHITECTURE.md          # High-level design documentation
├── public/
│   ├── 404.html                 # Static not-found page
│   └── data/                    # Source CSV files served in dev/prod
├── scripts/
│   └── generate_predictions.py  # Helper script used during content prep
├── src/
│   ├── App.jsx                  # Application shell and route layout
│   ├── index.css                # Tailwind CSS entry point
│   ├── main.jsx                 # Client bootstrap (React + Router)
│   ├── common/
│   │   ├── i18n.jsx             # Shared internationalization setup
│   │   ├── modules/
│   │   │   ├── Charts/          # Chart primitives (box plot, histogram, etc.)
│   │   │   ├── CodeBlock/       # MDX-aware code snippets with highlighting
│   │   │   ├── DataTable/       # Reusable data table with pagination
│   │   │   ├── Elements/        # Shared UI atoms (buttons, typography)
│   │   │   ├── Layout/          # Header, sidebar, layout scaffolding
│   │   │   ├── MDX/             # MDX renderer, ToC, and routing helpers
│   │   │   └── PythonChart/     # Interactive Python chart runner
│   │   └── utils/
│   │       └── dataLoader.jsx   # Data fetching utilities
│   └── modules/
│       ├── Business/            # Module 1: Business goals & data understanding
│       ├── DataTools/           # Module 2: Python tooling deep dive
│       ├── Visualization/       # Module 3: Visualization techniques
│       └── Workflow/            # Module 4: End-to-end analytics workflow
├── package.json
├── package-lock.json
├── postcss.config.js            # Tailwind + PostCSS configuration
├── tailwind.config.js           # Tailwind theme settings
├── vite.config.js               # Vite configuration
└── README.md
```

## Module Overview

### Module 1 – Business Goals & Data Understanding
- 1.1 Business objective: California housing price prediction
- 1.2 CSV dataset exploration
- 1.3 Business value discussion

### Module 2 – Python Data Tooling
- 2.1 Framework comparison (List vs. NumPy vs. Pandas)
- 2.2 Core CSV wrangling techniques
- 2.3 Deep dive: List operations
- 2.4 Deep dive: NumPy workflows
- 2.5 Deep dive: Pandas pipelines

### Module 3 – Data Visualization
- 3.1 Library comparison (Matplotlib vs. Seaborn)
- 3.2 Deep dive: Matplotlib
- 3.3 Deep dive: Seaborn

### Module 4 – End-to-End Workflow
- 4.1 Eight-step analytics process
- 4.2 Toolchain integration
- 4.3 Results presentation and analysis

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run the Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Design Principles

### Algonquin College visual language
- Professional, modern, education-first interface
- Brand colors: green `#00A651`, deep green `#006633`, white as base
- Clean geometric shapes with subtle shadows
- Clear information hierarchy and navigation
- Responsive layouts across device sizes
- Light and dark mode support

### Responsive Layout Breakpoints
- Mobile: `< 768px`
- Tablet: `768px – 1024px`
- Desktop: `≥ 1024px`

### Internationalization
- English and Chinese localization
- Module-specific language bundles
- Runtime language switching

## Core Features

### Interactive Code Editor
- Monaco Editor integration
- Python syntax highlighting
- Inline code execution
- Live output panel

### Data Visualization
- Multiple chart types
- Interactive chart components
- Responsive by design
- Theme-aware rendering

### Data Tables
- Pagination controls
- Sorting and filtering
- Responsive layout
- Dark mode support

### MDX-Powered Content
- Hybrid Markdown + JSX authoring
- Custom component injection
- Code highlighting
- Interactive walkthroughs

## Project Constraints

**Intentionally excluded from this project:**
- ❌ Automated tests
- ❌ Linting tools
- ❌ Code formatters
- ❌ Type checkers
- ❌ Static analysis tooling
- ❌ TypeScript

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License

## Contributing

Contributions are welcome—feel free to open issues or submit pull requests.

## Contact

For questions or suggestions, please file an issue in the repository.