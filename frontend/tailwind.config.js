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
        "oklch-bg-primary": "var(--color-bg-primary)",
        "oklch-bg-light": "var(--color-bg-light)",
        "oklch-bg-light-blue": "var(--color-bg-light-blue)",
        "oklch-border-primary": "var(--color-border-primary)",
        "oklch-border-light": "var(--color-border-light)",
        "oklch-text-dark": "var(--color-text-dark)",
        "oklch-text-dark-alt": "var(--color-text-dark-alt)",
        "oklch-text-gray": "var(--color-text-gray)",
        "oklch-text-light-gray": "var(--color-text-light-gray)",
        "oklch-primary-bright": "var(--color-primary-bright)",
        "oklch-primary-base": "var(--color-primary-base)",
        "oklch-primary-medium": "var(--color-primary-medium)",
        "oklch-primary-dark": "var(--color-primary-dark)",
        "oklch-primary-darker": "var(--color-primary-darker)",
        "oklch-primary-deepest": "var(--color-primary-deepest)",
        "oklch-secondary-light": "var(--color-secondary-light)",
        "oklch-secondary-lighter": "var(--color-secondary-lighter)",
        "oklch-secondary-lightest": "var(--color-secondary-lightest)",
        "oklch-accent-bright": "var(--color-accent-bright)",
        "oklch-accent-light": "var(--color-accent-light)",
        "oklch-accent-medium": "var(--color-accent-medium)",
        "oklch-white-pure": "var(--color-white-pure)",
        "oklch-purple-light": "var(--color-purple-light)",
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
