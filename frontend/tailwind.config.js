/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '500px',
        "smd": '640px',
        'md': '768px',
        'mlg': '880px',
        'lg': '1024px',
        'lxl': '1150px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        lavender: {
          DEFAULT: '#C4D7FF',
          light: '#E0EAFF',
        },
        "sgray" : "#f6f7f9",
        /* OKLCH Color Palette */
        "oklch-bg-primary": "oklch(var(--color-bg-primary)/ <alpha-value>)",
        "oklch-bg-light": "oklch(var(--color-bg-light)/ <alpha-value>)",
        "oklch-bg-light-blue": "oklch(var(--color-bg-light-blue)/ <alpha-value>)",
        "oklch-border-primary": "oklch(var(--color-border-primary)/ <alpha-value>)",
        "oklch-border-light": "oklch(var(--color-border-light)/ <alpha-value>)",
        "oklch-text-dark": "oklch(var(--color-text-dark)/ <alpha-value>)",
        "oklch-text-gray": "oklch(var(--color-text-gray)/ <alpha-value>)",
        "oklch-text-light-gray": "oklch(var(--color-text-light-gray)/ <alpha-value>)",
        "oklch-primary-bright": "oklch(var(--color-primary-bright)/ <alpha-value>)",
        "oklch-primary-base": "oklch(var(--color-primary-base)/ <alpha-value>)",
        "oklch-primary-medium": "oklch(var(--color-primary-medium)/ <alpha-value>)",
        "oklch-primary-dark": "oklch(var(--color-primary-dark)/ <alpha-value>)",
        "oklch-primary-darker": "oklch(var(--color-primary-darker)/ <alpha-value>)",
        "oklch-primary-deepest": "oklch(var(--color-primary-deepest)/ <alpha-value>)",
        "oklch-secondary-light": "oklch(var(--color-secondary-light)/ <alpha-value>)",
        "oklch-secondary-lighter": "oklch(var(--color-secondary-lighter)/ <alpha-value>)",
        "oklch-secondary-lightest": "oklch(var(--color-secondary-lightest)/ <alpha-value>)",
        "oklch-accent-bright": "oklch(var(--color-accent-bright)/ <alpha-value>)",
        "oklch-accent-light": "oklch(var(--color-accent-light)/ <alpha-value>)",
        "oklch-accent-medium": "oklch(var(--color-accent-medium)/ <alpha-value>)",
        "oklch-white-pure": "oklch(var(--color-white-pure)/ <alpha-value>)",
        "oklch-purple-light": "oklch(var(--color-purple-light)/ <alpha-value>)",
        "oklch-sky-base": "oklch(var(--color-sky-base)/ <alpha-value>)",
        "oklch-sky-dark": "oklch(var(--color-sky-dark)/ <alpha-value>)",
        "oklch-gray-inactive": "oklch(var(--color-gray-inactive)/ <alpha-value>)",
        /* Error Colors */
        "oklch-error-light": "oklch(var(--color-error-light)/ <alpha-value>)",
        "oklch-error-base": "oklch(var(--color-error-base)/ <alpha-value>)",
        "oklch-error-dark": "oklch(var(--color-error-dark)/ <alpha-value>)",
        /* Success Colors */
        "oklch-success-light": "oklch(var(--color-success-light)/ <alpha-value>)",
        "oklch-success-base": "oklch(var(--color-success-base)/ <alpha-value>)",
        "oklch-success-dark": "oklch(var(--color-success-dark)/ <alpha-value>)",
        /* Warning Colors */
        "oklch-warning-light": "oklch(var(--color-warning-light)/ <alpha-value>)",
        "oklch-warning-base": "oklch(var(--color-warning-base)/ <alpha-value>)",
        "oklch-warning-dark": "oklch(var(--color-warning-dark)/ <alpha-value>)",
        /* Neutral Colors */
        "oklch-neutral-50": "oklch(var(--color-neutral-50)/ <alpha-value>)",
        "oklch-neutral-100": "oklch(var(--color-neutral-100)/ <alpha-value>)",
        "oklch-neutral-200": "oklch(var(--color-neutral-200)/ <alpha-value>)",
        "oklch-neutral-400": "oklch(var(--color-neutral-400)/ <alpha-value>)",
        "oklch-neutral-500": "oklch(var(--color-neutral-500)/ <alpha-value>)",
        "oklch-neutral-600": "oklch(var(--color-neutral-600)/ <alpha-value>)",
        "oklch-neutral-700": "oklch(var(--color-neutral-700)/ <alpha-value>)",
        "oklch-neutral-900": "oklch(var(--color-neutral-900)/ <alpha-value>)",
        /* Pure White */
        "oklch-pure-white": "oklch(var(--color-pure-white)/ <alpha-value>)",
      },
      backgroundColor : {
        'sgray' : '#f6f7f9',
      },
      borderColor: {
        'sgray' : '#f6f7f9',
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

    },
  },
  plugins: [],
}
