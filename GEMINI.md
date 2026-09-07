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
- Mejora la localización en el mapa, ya que va a la dirección pero no a la sala concreta
- Concretar con el dueño la estructura de ediciones pasadas
- Arreglar la foto de entrada se agranda y tapa el logo de vital
- Quitar el Foot de la portada
- En el Foot poner patrocinador principal encima del logo vital
- Enlazar news con el mail del festival
- Configura Brevo para recojer los email de news y hacer mails masivos con plantillas hechas exproceso para ello
- Maquetar un poco mejor el cuadro que abre en Quines somos
- Poner los títulos de las páginas en mismo estilo, tamaño, etc...
- Poner el material propmocional también al final de la programación ya que no hace falta ir al apartado entradas y habra usuarios que no lo visiten
- Probar si lo manda bien en watsup, facebook e instagram
- Automatizar las redes sociales con el dueño
- Comprovar que formulario de contacto se manda al mail señalado
- Queda también pendiente definir los estilos CSS en Tailwind, muy importante
- Preguntar al dueño si quiere que en la progración>comprar entrada quiere que vaya directamente a la url de venta o vaya al apartado de entrasdas de la web
- Flyers 2020 y 2016 para meter en archivo
- Foto syl al y bio
- Foto en color de BEA
- Fotos y bios de los Dj del primer dia
- Repasar los videos que hay dsiponibles para artistas, necesitan url precisa no vevo...
- Configurar Sanity de una vez para CMS y dejar claros todos los elemento editables y explicar el modo de uso al dueño. Modificar, añadir y suprimir info.
- Conseguir logo Creative Soul, es muy chillón, mirar negativo de arkabia, conseguir logo Hell a mas resolución.
- Pulir tamaños de letra y oscuridad del background
- Poner my firma de diseño y desarrollo con mi contacto y copyright de la página de los diseños mios y el las foto mias. Poner mi logotipo y nombre comercial.
- Poner copyright o derechos cedidos en el resto de las fotos
- Videos con url que pague derechos al grupo

- Calcular el trabajo y hacer presupuesto standart, a precio de mercado profesional
- Entregar presupuesto real, muy bajo, por ser viejo cliente y learnig-work
- Mantener los gastos de dominio, alojamiento y mantenimiento cerca de 0.
- Pasar de Arsys, son muy caros y antipáticos
- Consultar últimas modificaciones y entregar el control total del contenido al dueño
- Dejar todo el diseño bloqueado

- IMPORTANTE DNS, y su email no me funciona, domingo por la mañana como tarde arreglar