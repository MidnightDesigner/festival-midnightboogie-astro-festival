markdown



## 🧩 Project Structure: Core Components

### `Button`
Reusable button with support for links and style variants.

**Usage example:**
```vue
<Button href="#" variant="primary" class="w-full justify-center mt-4">
  Download PDF
</Button>

Variants (variant):
primary → Orange background, white text.
outline → White border, transparent background.

Card

Card container with customizable hover effects.
Usage example:

<Card class="p-6" hover="white">
  <p class="text-white">Card content</p>
</Card>

Props:
hover → Defines the hover effect.
"orange" (default)
"white"
"none"
TextMeta

Component for displaying text metadata (venue names, addresses, etc.).
Usage example:

<TextMeta variant="venue-name" text="SALA ARKABIA" />
<TextMeta variant="venue-address" text="Postas 13-15, Vitoria-Gasteiz" />


⚠️ Usage Note: It is mandatory to wrap these components in a flex container with gap-1.5 to maintain visual consistency and correct spacing:

<div class="flex flex-col gap-1.5">
  <TextMeta variant="venue-name" text="SALA ARKABIA" />
  <TextMeta variant="venue-address" text="Postas 13-15, Vitoria-Gasteiz" />
</div>



 
🌍 Internationalization (i18n)

Supported Languages


Code
Language
Priority
eu
Basque (Euskera)
1 (local)
es
Spanish
2 (current)
en
English
3 (intl)
fr
French
4 (European)
Note: Basque (eu) has absolute priority due to the local cultural context and regional regulations.
File Structure

text


12345
locales/├── eu.json├── es.json├── en.json└── fr.json
 
♿ Accessibility (A11Y)

Minimum Required Checklist

All new or modified code must comply with the following standards:
All buttons have a descriptive aria-label.
SVG icons have aria-hidden="true" + alternative text (or title).
Focus rings are visible on all interactive elements.
Minimum WCAG AA contrast (4.5:1 for normal text).
Touch targets ≥ 44px × 44px (according to iOS HIG).
Complete keyboard navigation (Tab, Enter, Escape).
Modals / Lightboxes correctly trap focus (focus trap).