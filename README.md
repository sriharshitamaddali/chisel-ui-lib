# Chisel

A precision UI component library built to power a suite of personal projects. Chisel provides a consistent set of reusable React components with built-in light and dark theme support — so every app that uses it inherits the same design language without duplicating code.

---

## Installation

### Prerequisites

- Node.js 20+
- A GitHub Personal Access Token with `read:packages` scope

### Setup

**1. Clone the repo**

```bash
git clone https://github.com/sriharshitamaddali/chisel.git
cd chisel
```

**2. Install dependencies**

```bash
npm install
```

---

## Theming

Chisel uses CSS custom properties (variables) scoped to `data-theme` for theming. Set `data-theme="light"` or `data-theme="dark"` on your root HTML element and all Chisel components respond automatically — no props needed.

```css
/* In your app's global CSS */
[data-theme='light'] {
  --chisel-btn-primary-bg: #111110;
  --chisel-text-primary: #111110;
  /* ... */
}

[data-theme='dark'] {
  --chisel-btn-primary-bg: #ffffff;
  --chisel-text-primary: #f0ede6;
  /* ... */
}
```

Import Chisel's base CSS in your app entry point to get the default variable values:

```tsx
import '@sriharshitamaddali/chisel/dist/index.css'
```
---

## Components

### Button
A flexible button component with three variants, three sizes, optional left icon support and disabled state.

| Prop | Type | Default |
|---|---|---|
| `variant` | `primary` \| `secondary` \| `tertiary` | required |
| `size` | `small` \| `medium` \| `large` | required |
| `disabled` | `boolean` | `false` |
| `leftIcon` | `React.ReactNode` | — |
| `onClick` | `(event) => void` | — |
| `children` | `React.ReactNode` | required |

```tsx
import { Button } from '@sriharshitamaddali/chisel'

<Button variant="primary" size="medium">Continue</Button>
<Button variant="secondary" size="small" disabled>Cancel</Button>
```

---

### TextBox
A controlled text input with label, placeholder, helper text, error state, character count and read-only support.

| Prop | Type | Default |
|---|---|---|
| `size` | `small` \| `large` | required |
| `label` | `string` | — |
| `placeholder` | `string` | — |
| `value` | `string` | — |
| `onChange` | `(event) => void` | — |
| `helperText` | `string` | — |
| `errorText` | `string` | — |
| `showCharacterCount` | `boolean` | `false` |
| `maxLength` | `number` | — |
| `readOnly` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |

```tsx
import { TextBox } from '@sriharshitamaddali/chisel'

<TextBox
  size="small"
  label="Email address"
  placeholder="you@example.com"
  helperText="We'll never share your email"
/>

<TextBox
  size="small"
  label="Bio"
  showCharacterCount
  maxLength={30}
/>
```

---

### Chip
A single tag/chip component used to display a discrete value with an optional remove button.

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | required |
| `variant` | `default` \| `outlined` | `default` |
| `size` | `small` \| `medium` | required |
| `onRemove` | `(label: string) => void` | — |

```tsx
import { Chip } from '@sriharshitamaddali/chisel'

<Chip label="Technical" size="medium" variant="default" />
<Chip label="Executive" size="small" onRemove={(label) => remove(label)} />
```

---

### ChipInput
A composite component that combines a text input with chip rendering. Users type a value and press Enter to add it as a chip. Press Backspace on an empty input to remove the last chip, or click ✕ on any chip to remove it individually.

| Prop | Type | Default |
|---|---|---|
| `value` | `string[]` | required |
| `onChange` | `(chips: string[]) => void` | required |
| `label` | `string` | — |
| `placeholder` | `string` | — |
| `helperText` | `string` | — |
| `errorText` | `string` | — |

```tsx
import { ChipInput } from '@sriharshitamaddali/chisel'

const [audiences, setAudiences] = useState<string[]>([])

<ChipInput
  value={audiences}
  onChange={setAudiences}
  label="Audience types"
  placeholder="Add audience, press Enter..."
/>
```

---

### ThemeToggle
A sliding toggle switch that switches between light and dark mode. The icon changes between sun and moon on toggle.

| Prop | Type | Default |
|---|---|---|
| `theme` | `light` \| `dark` | required |
| `onToggle` | `() => void` | required |

```tsx
import { ThemeToggle } from '@sriharshitamaddali/chisel'

const [theme, setTheme] = useState<'light' | 'dark'>('light')

<ThemeToggle
  theme={theme}
  onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
/>
```

---

### Loader
A three-dot pulsing animation for loading states. Render it conditionally — the consumer controls visibility.

| Prop | Type | Default |
|---|---|---|
| `size` | `small` \| `medium` \| `large` | `medium` |

```tsx
import { Loader } from '@sriharshitamaddali/chisel'

{isLoading && <Loader size="medium" />}
```

---

## Storybook

Chisel uses Storybook to develop and preview components in isolation. Every component has stories covering all variants, sizes and states.

```bash
npm run storybook
```

Opens at `http://localhost:6006`. Use the Controls panel to interact with component props live — no code changes needed.

---

## Generating a new component

Chisel uses [Plop](https://plopjs.com) to generate component boilerplate. Running the generator scaffolds all five files needed for a new component — keeping every component consistent in structure.

```bash
npm run generate
```

You will be prompted for:
- **Component name** — e.g. `Modal`
- **Type** — `primitive` or `composite`

This generates:

```
src/components/<type>/<name>/
├── <name>.tsx              ← component
├── <name>.types.ts         ← props interface
├── <name>.module.css       ← scoped styles
├── <name>.stories.tsx      ← Storybook stories
├── <name>.test.tsx         ← unit tests
└── index.ts                ← exports
```

**Primitive** components are standalone UI elements — `Button`, `TextBox`, `Chip`.
**Composite** components compose primitives together — `ChipInput` composes `Chip` + an input.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Watch mode — rebuilds on file change |
| `npm run build` | Production build |
| `npm run storybook` | Start Storybook dev server |
| `npm run generate` | Generate new component boilerplate |

---

## CI/CD

Chisel uses two GitHub Actions workflows to automate quality checks and publishing.

### CI — Pull request checks

Every pull request targeting `master` triggers a build check. This ensures no broken installs or build errors are merged.

**Triggers:** PR opened, new commits pushed, draft PR marked ready for review

**Steps:**
1. Checkout code
2. Setup Node 20
3. Install dependencies
4. Run production build

If the build fails the PR is blocked from merging.

---

### Publish — Auto publish on merge to master

When a PR is merged to `master` the publish workflow automatically runs the version bump commit back to master and publishes the package.

**Triggers:** Push to `master`

## Contributing

All changes must go through a pull request. Direct pushes to `master` are not permitted.

1. Create a feature branch
   ```bash
   git checkout -b feat/your-component-name
   ```
2. Make your changes
3. Open a pull request against `master`
4. CI runs automatically — fix any build errors
5. Request review and await approval
6. Merge — publish workflow runs automatically

**Publishing** is restricted to the `@sriharshitamaddali` scope owner. Only the repository owner can publish to GitHub Packages.