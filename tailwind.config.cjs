// tailwind.config.cjs (como backup)
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

darkMode: 'class',  // 👈 IMPORTANTE: dark mode manual o 'media' para system preference
  
  theme: {
    extend: {
      // ==================== COLORES ====================
      colors: {
        // Brand Principal (Midnight Boogie)
        'brand': {
          'orange': '#EC9726',
          'orange-60': 'rgba(233, 157, 56, 0.60)',
          'orange-10': 'rgba(233, 157, 56, 0.10)',
          'orange-30': 'rgba(233, 157, 56, 0.30)',
        },
        
        // Background System
        'bg': {
          'dark': '#0a0a0a',
          'card': 'rgba(255, 255, 255, 0.05)',
          'card-hover': 'rgba(255, 255, 255, 0.10)',
          'modal-overlay': 'rgba(0, 0, 0, 0.85)',
        },
        
        // Border System
        'border': {
          'subtle': 'rgba(255, 255, 255, 0.10)',
          'accent': 'rgba(255, 255, 255, 0.20)',
          'muted': 'rgba(255, 255, 255, 0.05)',
        },
        
        // Text System
        'text': {
          'primary': '#ffffff',
          'secondary': 'rgba(255, 255, 255, 0.80)',
          'tertiary': 'rgba(255, 255, 255, 0.60)',
          'disabled': 'rgba(255, 255, 255, 0.40)',
        },
        
        // Semantic Colors
        'semantic': {
          'success': '#22c55e',
          'warning': '#f59e0b',
          'error': '#ef4444',
          'info': '#3b82f6',
        },
        
        // Neutral Scale (para fondos secundarios)
        'neutral': {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '500': '#888888',
          '800': '#262626',
          '900': '#171717',
        },
        
        // Legacy names (por compatibilidad con tu código actual)
        'primary': '#EC9726',
        'dark': '#0a0a0a',
        'text-main': '#ffffff',
        'text-muted': 'rgba(255, 255, 255, 0.7)',
      },

      // ==================== TIPOGRAFÍA ====================
      fontFamily: {
        'display': ['"ITC Avant Garde Gothic Pro"', '"Century Gothic"', '"Jost"', 'sans-serif'],
        'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],                          // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],                            // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],                         // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],                          // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],                             // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],                        // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],                          // 36px
        '5xl': ['3rem', { lineHeight: '1' }],                                 // 48px
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.05em',
        'widest': '0.1em',
      },
      
      lineHeight: {
        'tight': 1.25,
        'normal': 1.5,
        'relaxed': 1.75,
      },

      // ==================== ESPACIADO ====================
      spacing: {
        'unit': '0.25rem',   // 4px base unit
        '1.5': '0.375rem',   // 👑 TU REGLA DE ORO (6px gap para ubicaciones)
        '1.8': '0.45rem',    // Gap alternative
        '3': '0.75rem',      // 12px
        '4.5': '1.125rem',   // Alternative
        '6.5': '1.625rem',   // Custom
      },

      // ==================== BORDER RADIUS ====================
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'card': '1rem',
        'button': '9999px',
        'full': '9999px',
      },

      // ==================== BREAKPOINTS ====================
      screens: {
        'mobile': '0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'nav-critical': '612px',  // 👑 TU BREAKPOINT CRÍTICO (corrección móvil)
      },

      // ==================== SOMBRAS ====================
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.4)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(233, 157, 56, 0.3)',
        'glow-orange': '0 0 20px rgba(233, 157, 56, 0.4)',
        '2xl': '0 20px 25px rgba(0, 0, 0, 0.5)',
      },

      // ==================== TRANSITIONS ====================
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      
      transitionTimingFunction: {
        'default': 'ease-in-out',
      },

      // ==================== Z-INDEX ====================
      zIndex: {
        'base': 0,
        'dropdown': 100,
        'sticky': 200,
        'fixed': 300,
        'modal-backdrop': 400,
        'modal': 500,
        'toast': 600,
      },

      // ==================== ANIMATIONS ====================
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  
  // ==================== PLUGINS ====================
  plugins: [
    // Puedes añadir plugins futuros aquí
  ],
}
