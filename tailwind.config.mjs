import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#000000',
        sub1: '#82C2A9',
        sub2: '#8C8C8C',
        accent: {
          DEFAULT: '#FF463C',
          hover: '#E53935',
          active: '#C62828',
        },
        gray: {
          light: '#E5E5E5',
          mid: '#AEAEB2',
          dark: '#3D3D3D',
        }
      },
      borderRadius: {
        'sm': '2px',
        DEFAULT: '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT: '0 2px 4px rgba(0,0,0,0.1)',
        'md': '0 4px 8px rgba(0,0,0,0.12)',
        'lg': '0 8px 16px rgba(0,0,0,0.15)',
        'xl': '0 12px 24px rgba(0,0,0,0.2)',
        '2xl': '0 24px 48px rgba(0,0,0,0.25)',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.6' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.2' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px
      },
      spacing: {
        '3xs': '4px',  // 3xs
        '2xs': '8px',  // 2xs
        'xs': '12px',  // xs
        'sm': '16px',  // sm
        'md': '24px',  // md
        'lg': '32px',  // lg
        'xl': '48px',  // xl
        '2xl': '64px', // 2xl
        '3xl': '96px', // 3xl
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    }
  },
  plugins: [
    forms,
    aspectRatio,
  ],
};
