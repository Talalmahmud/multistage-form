# Multi-Step Form with Validation

A responsive multi-step form with client-side validation, dark mode support, and form state management built with Next.js (App Router), React Hook Form, and Tailwind CSS.

## Features

- **Multi-step form navigation** with progress tracking
- **Client-side validation** using Zod schema validation
- **React Hook Form** for efficient form state management
- **Dark mode support** with system preference detection
- **Responsive design** that works on all device sizes
- **Form persistence** - remembers user's progress
- **Accessible UI** with proper ARIA labels and semantic HTML
- **Animated transitions** between form steps

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) for schema validation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for type safety

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/multi-step-form.git
   ```
2. Navigate to the project directory:
   ```bash
   cd multi-step-form
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
multi-step-form/
├── app/
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Main form component
├── components/
│   ├── FormProgress.tsx      # Step progress indicator
│   ├── FormStep1.tsx         # Personal information step
│   ├── FormStep2.tsx         # Address information step
│   ├── FormStep3.tsx         # Account setup step
│   ├── FormSummary.tsx       # Review step before submission
│   └── ThemeToggle.tsx       # Dark mode toggle component
├── lib/
│   └── validation.ts         # Zod validation schemas
├── public/                   # Static assets
└── styles/
    └── globals.css           # Global styles
```

## Form Steps

1. **Personal Information**

   - Full name (required)
   - Email (required, valid format)
   - Phone number (required, min 10 digits)

2. **Address Details**

   - Street address (required)
   - City (required)
   - Zip code (required, numbers only)

3. **Account Setup**

   - Username (required, min 4 chars)
   - Password (required, min 6 chars)
   - Password confirmation (must match)

4. **Review & Submit**
   - Summary of all entered information
   - Submit button

## Dark Mode

The application includes a theme toggle that:

- Respects system color scheme preferences
- Persists user preference in localStorage
- Provides smooth transitions between themes
- Works with all form components

## Customization

To modify the form fields or validation:

1. Edit the schemas in `lib/validation.ts`
2. Update the corresponding form step component
3. Adjust the form submission handler in `app/page.tsx`

To customize styles:

1. Modify the Tailwind classes in components
2. Update the color palette in `tailwind.config.js`

## Deployment

You can deploy this project to any Next.js-compatible hosting service:

### Vercel

[![Deploy with Vercel](https://multistage-form-nine.vercel.app/)
