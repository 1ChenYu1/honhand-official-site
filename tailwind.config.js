/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // 渐变、配色等类名常写在数据文件里，漏掉这里会导致样式静默失效
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei UI"',
          '"Microsoft YaHei"',
          '"Source Han Sans SC"',
          '"Noto Sans CJK SC"',
          '"WenQuanYi Micro Hei"',
          'sans-serif',
        ],
        mono: ['var(--font-mono)', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        // 品牌主色：克制、稳重的企业蓝
        primary: {
          50: '#eef3ff',
          100: '#dbe5ff',
          200: '#bdd1ff',
          300: '#92b3ff',
          400: '#618cfb',
          500: '#3a67f2',
          600: '#2549e0',
          700: '#1d38b8',
          800: '#1e3194',
          900: '#1e2e74',
        },
        // 强调色：仅用于高亮点缀
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdaa8',
          300: '#ffbe70',
          400: '#ff9a38',
          500: '#f97c0c',
          600: '#e05c03',
          700: '#b84305',
          800: '#94340c',
          900: '#782c0e',
        },
        corporate: {
          blue: {
            50: '#f0f7ff', 100: '#e0eeff', 200: '#bcd9ff', 300: '#8abaff',
            400: '#5291f5', 500: '#2b6cd8', 600: '#1c51b2', 700: '#1a418e',
            800: '#1b3972', 900: '#1b325e',
          },
          teal: {
            50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
            400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
            800: '#115e59', 900: '#134e4a',
          },
          slate: {
            50: '#f6f8fb', 100: '#eaeff6', 200: '#d2dbe8', 300: '#aab8cd',
            400: '#7b8da8', 500: '#5a6b86', 600: '#455269', 700: '#394254',
            800: '#232b3a', 900: '#151b26',
          },
        },
        neutral: {
          50: '#f7f8fa', 100: '#eef0f4', 200: '#dfe3ea', 300: '#c6ccd8',
          400: '#98a1b3', 500: '#6b7488', 600: '#4d5566', 700: '#3a4152',
          800: '#252b38', 900: '#141922',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #3a67f2 0%, #2549e0 45%, #0f766e 100%)',
        'hairline-gradient':
          'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)',
        'grid-faint':
          "url(\"data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%232549e0' stroke-opacity='0.055' stroke-width='1'%3E%3Cpath d='M64 0H0v64'/%3E%3C/g%3E%3C/svg%3E\")",
        'dot-faint':
          "url(\"data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%232549e0' fill-opacity='0.09'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        // 细腻分层阴影：以海军蓝染色，避免死黑
        corporate: '0 1px 2px rgba(20,25,34,.04), 0 1px 3px rgba(20,25,34,.06)',
        'corporate-lg':
          '0 2px 4px rgba(20,25,34,.03), 0 8px 16px -4px rgba(20,25,34,.07), 0 12px 28px -8px rgba(37,73,224,.08)',
        'corporate-xl':
          '0 4px 8px rgba(20,25,34,.03), 0 18px 32px -8px rgba(20,25,34,.10), 0 28px 56px -16px rgba(37,73,224,.14)',
        card: '0 1px 2px rgba(20,25,34,.04), 0 1px 2px rgba(20,25,34,.03)',
        'card-hover':
          '0 2px 4px rgba(20,25,34,.03), 0 10px 24px -6px rgba(20,25,34,.08), 0 20px 40px -16px rgba(37,73,224,.14)',
        'inner-hairline': 'inset 0 0 0 1px rgba(255,255,255,.6)',
        'nav': '0 1px 0 0 rgba(20,25,34,.06), 0 8px 24px -12px rgba(20,25,34,.14)',
        'focus-brand': '0 0 0 4px rgba(37,73,224,.14)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        prose: '68ch',
      },
      animation: {
        float: 'float 7s cubic-bezier(0.22,1,0.36,1) infinite',
        'float-slow': 'float 11s cubic-bezier(0.22,1,0.36,1) infinite',
        'pulse-soft': 'pulseSoft 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'shimmer': 'shimmer 2.4s linear infinite',
        'marquee-x': 'marqueeX 32s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-18px,0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translate3d(0,16px,0)' },
          to: { opacity: '1', transform: 'translate3d(0,0,0)' },
        },
        shimmer: {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '200% 50%' },
        },
        marqueeX: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
      },
    },
  },
  plugins: [],
}
