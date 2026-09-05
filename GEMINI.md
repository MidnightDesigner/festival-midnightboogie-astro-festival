# Midnight Boogie Festival
Sitio web oficial del festival de música en Vitoria-Gasteiz.

## Stack
- Frontend: Astro v7 (raíz del repo), TypeScript
- CMS: Sanity en midnight-boogie-cms/ (pendiente de configurar; hoy los datos viven en src/data/)
- Tailwind CSS v4 (@theme en global.css)
- Deployment: Vercel (pipeline: local > GitHub > Vercel)

## Reglas de diseño
- Color corporativo: naranja rgb(233,157,56) (#E99D38) — pendiente confirmar con cliente si oficial es #EC9726
- Tipografía marca: ITC Avant Garde Gothic Pro (fallbacks Century Gothic/Jost)
- Fondo nocturno: StarBackground.astro persiste con transition:persist — NUNCA hacerlo condicional ni recrearlo
- No modificar esquemas ni romper layouts; diseño pixel-perfect

## Lecciones de batalla (no repetir)
- Assets en public/ deben pesar KB (ideal <300KB). Optimizar con sips antes de subir. GitHub rechaza >100MB (y 100MB+ en la historia tumba el push entero)
- Scripts interactivos: usar delegación de eventos en document con closest(), NO DOMContentLoaded ni listeners directos por id (mueren con view transitions)
- Ciclo de trabajo obligatorio: petición → propuesta/diff → REVISAR el diff → build verde → commit
- Verificar siempre con npm run build antes de commit
- Nunca pegar literales de placeholders (TU_ID_AQUI, AIzaTuClave) — son pistas, no valores
- Archivos en public/images/ en KB, no MB. SVG de 106MB tumbaron el push

## Contexto del cliente
- Asociación cultural sin ánimo de lucro (Midnight Boogie, Vitoria-Gasteiz)
- El cliente edita contenido; no romper flujos de edición
- Salas 2026: Sala Arkabia, Helldorado, Ttipia Taberna, Creative Soul (logos en /images/salas-logos/)

## Pendientes (lista de pulido)
- Formulario contacto: endpoint Formspree placeholder — pedir ID real al cliente
- Definir naranja corporativo definitivo con cliente
- syl-al.jpg 404 en /artistas
- Micro-flash entre secciones (ajustar color base body vs fondo)
- Valorar logo Arkabia invertido (fondo negro sobre web oscura)