import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        base:            '#0a0d17',
        surface:         'rgba(255,255,255,0.04)',
        'border-subtle': 'rgba(255,255,255,0.07)',
        'border-card':   'rgba(255,255,255,0.08)',
        accent:          '#8a90f0',
        'accent-glow':   'rgba(138,144,240,0.5)',
        'text-primary':  '#f1f3fa',
        'text-secondary':'#bcc2da',
        'text-muted':    '#aab1cb',
        'text-dim':      '#9097ad',
        'text-faint':    '#6a73a0',
        star:            '#dfe2ff',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        // Fixed scale — never eyeball font sizes in components
        'label':     ['10px',   { lineHeight: '1', letterSpacing: '0.16em' }],
        'tag':       ['10.5px', { lineHeight: '1', letterSpacing: '0.14em' }],
        'mono-sm':   ['11px',   { lineHeight: '1.5' }],
        'mono-md':   ['12px',   { lineHeight: '1.5' }],
        'mono-lg':   ['13px',   { lineHeight: '1.5' }],
        'body-sm':   ['13.5px', { lineHeight: '1.6' }],
        'body':      ['14.5px', { lineHeight: '1.85' }],
        'ui':        ['15px',   { lineHeight: '1.6' }],
        'card-title':['21px',   { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h1':        ['31px',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'detail-h1': ['38px',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'breathe':      'breathe 26s ease-in-out infinite',
        'twinkle':      'twinkle 7s ease-in-out infinite',
        'twinkle-slow': 'twinkle 9s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'translate(-50%,-50%) scale(1)',    opacity: '0.92' },
          '50%':      { transform: 'translate(-50%,-50%) scale(1.07)', opacity: '1' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%':      { opacity: '0.6' },
        },
      },
      boxShadow: {
        'accent-glow': '0 0 16px rgba(138,144,240,0.5)',
        'accent-lift': '0 10px 30px rgba(138,144,240,0.35)',
        'card-hover':  'inset 2px 0 0 #8a90f0',
      },
    },
  },
  plugins: [],
}

export default config
