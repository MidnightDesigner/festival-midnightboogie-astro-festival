# Midnight Boogie Design System v1.0

> **"La biblia visual oficial: tipografía, componentes, iconos y reglas de espaciado"**

---

## 🏛️ Filosofía de Diseño

Este sistema de diseño fue creado para **Midnight Boogie Festival** con tres principios fundamentales:

### 1. Sistematicidad
Cada componente está diseñado para ser **reutilizable**, **predecible** y **escalable**. No creamos páginas, creamos **patrones**.

### 2. Accesibilidad Primero
Contraste WCAG AA como mínimo, navegación por teclado nativa, y soporte completo para lectores de pantalla.

### 3. Internacionalización Nativa
El sistema está preparado desde la base para soportar Euskera, Español, Inglés y Francés simultáneamente.

---

## 📐 Estructura del Proyecto
project-root/ ├── design-tokens.json # Tokens centrales (colores, tipografía, spacing) ├── docs/ # Documentación │ ├── CONTRIBUTING.md # Guía para contribuidores │ ├── ACCESSIBILITY.md # Checklist A11Y │ └── CHANGELOG.md # Historial de versiones ├── src/ │ ├── components/ │ │ ├── DesignSystem/ # Componentes documentados │ │ │ ├── Button.astro │ │ │ ├── Card.astro │ │ │ ├── TextMeta.astro │ │ │ └── ... │ │ └── Layouts/ # Layouts principales │ └── pages/ │ ├── design-system.astro # Página de documentación pública │ └── ... └── public/ └── images/ # Activos estáticos



---

## 🎨 Tokens Disponibles

### Colores Principales

| Token | Valor | Uso |
|-------|-------|-----|
| `brand.orange` | `#EC9726` | Color primario del festival |
| `background.dark` | `#0a0a0a` | Fondo principal |
| `text.primary` | `#ffffff` | Texto principal |
| `border.subtle` | `rgba(255,255,255,0.10)` | Bordes discretos |

### Tipografía

| Contexto | Fuente | Pesos |
|----------|--------|-------|
| Títulos | ITC Avant Garde Gothic Pro | Light, Medium, Bold |
| Cuerpo/UI | Inter | Regular, Medium, Light |

### Spacing Key Rules

```css
/* REGLA DE ORO - Ubicaciones */
.gap-1.5 { /* 6px - Nombre + Dirección */ }


Button
<Button href="#" variant="primary" class="w-full justify-center mt-4">
  Descargar PDF
</Button>

Variantes:

primary → Fondo naranja, texto blanco
outline → Borde blanco, fondo transparente
Card
<Card class="p-6" hover="white">
  <p class="text-white">Contenido de tarjeta</p>
</Card>

Props:

hover → "orange" (default) | "white" | "none"
TextMeta
<TextMeta variant="venue-name" text="SALA ARKABIA" />
<TextMeta variant="venue-address" text="Postas 13-15, Vitoria-Gasteiz" />

Uso obligatorio con container flex + gap-1.5:

<div class="flex flex-col gap-1.5">
  <TextMeta variant="venue-name" text="..." />
  <TextMeta variant="venue-address" text="..." />
</div>

