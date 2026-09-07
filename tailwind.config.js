/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // 🎨 COLORES (Design Tokens)
      colors: {
        primary: 'rgb(233, 157, 56)',       // El naranja característico del festival
        'primary-hover': 'rgb(255, 255, 255)', // Color al hacer hover en botones naranjas
        dark: 'rgb(15, 15, 15)',            // Fondo principal de la web (casi negro)
        'dark-light': 'rgb(30, 30, 30)',    // Fondo de tarjetas o secciones secundarias
        'text-main': 'rgb(255, 255, 255)',  // Texto principal (blanco)
        'text-muted': 'rgba(255, 255, 255, 0.7)', // Texto secundario (blanco con transparencia)
        'text-dim': 'rgba(255, 255, 255, 0.5)',   // Texto muy secundario o placeholders
      },

      // 🔤 TIPOGRAFÍA
      fontFamily: {
        // Fuente principal para textos largos (cámbiala si usas otra de Google Fonts)
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], 
        // Fuente de títulos y marca (Avant Garde o similar)
        avantgarde: ['"Avant Garde"', 'Avantgarde', 'Century Gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif'],
      },

      // 📏 TAMAÑOS DE FUENTE PERSONALIZADOS (Opcional, pero útil)
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],     // Para H1 gigantes
        'hero-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // Para H1 en móvil
      },

      // 📐 ESPACIADO Y BORDES (Para mantener consistencia)
      borderRadius: {
        'card': '1rem',    // 16px (rounded-2xl en tailwind por defecto, pero así le damos nombre)
        'button': '9999px', // Pill shape (rounded-full)
      },
      
      // 🌫️ SOMBRAS Y EFECTOS
      boxShadow: {
        'glow': '0 0 20px rgba(233, 157, 56, 0.3)', // Resplandor naranja
      }
    },
  },
  plugins: [],
}