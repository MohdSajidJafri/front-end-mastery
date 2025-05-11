/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC', // Stripe-like white
        surface: '#FFFFFF', // Card/section backgrounds
        primary: '#0A2540', // Stripe blue-black for text
        secondary: '#425466', // Stripe gray for secondary text
        accent: '#635BFF', // Stripe purple/blue accent
        accent2: '#00D4FF', // Teal accent
        offwhite: '#F5F6FA', // Soft off-white
        muted: '#A3A8B8', // Muted gray
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
      boxShadow: {
        card: '0 4px 32px 0 rgba(50, 50, 93, 0.07), 0 1.5px 4px 0 rgba(0,0,0,0.03)',
        button: '0 2px 8px 0 rgba(99,91,255,0.08)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
} 