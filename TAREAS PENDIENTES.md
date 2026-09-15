## Pendientes (lista de pulido)
- Formulario contacto: endpoint Formspree placeholder — pedir ID real al cliente. NO
- Definir naranja corporativo definitivo con cliente. OK
- syl-al.jpg 404 en /artistas . OK
- Micro-flash entre secciones (ajustar color base body vs fondo) OK
- Valorar logo Arkabia invertido (fondo negro sobre web oscura) OK
- Mejora la localización en el mapa, ya que va a la dirección pero no a la sala concreta OK
- Concretar con el dueño la estructura de ediciones pasadas OK
- Arreglar la foto de entrada se agranda y tapa el logo de vital FALTA
- Quitar el Foot de la portada OK
- En el Foot poner patrocinador principal encima del logo vital OK
- Enlazar news con el mail del festival OK
- Configura Brevo para recojer los email de news y hacer mails masivos con plantillas hechas exproceso para ello. X
- Maquetar un poco mejor el cuadro que abre en Quines somos OK
- Poner los títulos de las páginas en mismo estilo, tamaño, etc... FALTA!!
- Poner el material propmocional también al final de la programación ya que no hace falta ir al apartado entradas y habra usuarios que no lo visiten... FALTA!!
- Probar si lo manda bien en watsup, facebook e instagram, no manda el flyer!
- Automatizar las redes sociales con el dueño. NO
- Comprovar que formulario de contacto se manda al mail señalado. OK
- Queda también pendiente definir los estilos CSS en Tailwind, muy importante. OK
- Preguntar al dueño si quiere que en la progración>comprar entrada quiere que vaya directamente a la url de venta o vaya al apartado de entrasdas de la web. OK
- Flyers 2020 y 2016 para meter en archivo. OK
- Foto syl al y bio. OK
- Foto en color de BEA. OK
- Fotos y bios de los Dj del primer dia. OK
- Repasar los videos que hay dsiponibles para artistas, necesitan url precisa no vevo... OK
- Configurar Sanity de una vez para CMS y dejar claros todos los elemento editables y explicar el modo de uso al dueño. Modificar, añadir y suprimir info. NO
- Conseguir logo Creative Soul, es muy chillón, mirar negativo de arkabia, conseguir logo Hell a mas resolución. OK
- Pulir tamaños de letra y oscuridad del background. OK
- Poner my firma de diseño y desarrollo con mi contacto y copyright de la página de los diseños mios y el las foto mias. Poner mi logotipo y nombre comercial. FALTA!!
- Poner copyright o derechos cedidos en el resto de las fotos. FALTA !!
- Videos con url que pague derechos al grupo. OK

- Consultar últimas modificaciones y entregar el control total del contenido al dueño
- Dejar todo el diseño bloqueado. OK

- IMPORTANTE DNS, y su email no me funciona, domingo por la mañana como tarde arreglar. OK

## Estado del formulario de contacto (en curso)
- Sustituido Formspree por Brevo: función serverless api/contacto.js (raíz del repo) OK
- Clave BREVO_API_KEY guardada en Vercel (Settings del proyecto → Environment Variables) OK 
- Remitente Brevo validado con igu.soul@gmail.com (sender de la función usa ese email) OK
- contacto.astro: form con id="contact-form", honeypot "website", script delegado, fetch a /api/contacto OK
- PENDIENTE: hacer commit+push, probar el formulario en producción y verificar llegada en Brevo OK
- La función api/ solo corre en producción (Vercel), no en npm run dev
Revisar analytics OK
Link desde entradas al taller corregir OK
Centrar contacto en dektop OK
Seo OK 
Lightbox en archivo OK

1. Google My Business (GRATIS, 10 min):

https://www.google.com/business/
- Añadir negocio: "Midnight Boogie Festival"
- Categoría: "Event Venue" o "Music Festival"
- Ubicación: Vitoria-Gasteiz
- Web: https://www.midnightboogie.net
- Fotos del flyer/artistas

2. Listados en directorios locales (30 min):

https://www.tripadvisor.com/ (crear evento)
https://www.eventbrite.es/ (añadir evento gratuito como teaser)
Directorio de eventos de Álava/Gipuzkoa

3. Email a blogs musicales (1 hora): Enviar a 5-10 blogs:

Asunto: Fest 2026 - Stone Foundation & boogie en Vitoria

Hola [nombre del blog],

Te escribo para contarte sobre el Midnight Boogie Weekend 2026,
un festival de soul/boogie/rock'n'roll que tendrá lugar en Vitoria-Gasteiz
los días 27-28 de noviembre en salas Arkabia y Helldorado.

Confirmados hasta ahora:
- Stone Foundation (Madrid)
- [lista de artistas]

📅 Fechas: 27-28 noviembre 2026
📍 Lugares: Sala Arkabia + Helldorado
💶 Entradas desde: [precio]
🔗 Más info: https://www.midnightboogie.net/programa

Nos encantaría que pudieras cubrir el festival o añadirnos a tu
calendario de eventos 2026. Estamos abiertos a entrevistas,
cubrimiento de prensa o colaboraciones.

¡Gracias por tu tiempo!

Saludos cordiales,
[Tu nombre]
Organizador, Midnight Boogie Festival
+34 [teléfono]

Herramientas útiles:
Ahrefs (pago): https://ahrefs.com/backlink-checker — analiza competencia
Google Alerts: alerta para "festival boogie Vitoria" + "Midnight Boogie"
Manual: busca en Google "evento boogie" site:.es → contacta a quienes aparecen

Google Alerts: alerta para "festival boogie Vitoria" + "Midnight Boogie"
Manual: busca en Google "evento boogie" site:.es → contacta a quienes aparecen

3. robots.txt — Sí, crear y subir

Crea el archivo public/robots.txt:

User-agent: *
Allow: /

# Sitemaps principales
Sitemap: https://www.midnightboogie.net/sitemap.xml

# Bloquear paths internos (si existen)
Disallow: /_astro/
Disallow: /admin/
Disallow: /private/
Disallow: /*?*

Sube el archivo y valida en: https://www.midnightboogie.net/robots.txt

VERIFICAR, YA ESTÁ SUBIDO

4. Chequeo contenido semántico OK


7. Link building (backlinks) — Explicación completa

LINK BUILDING PARA EVENTOS LOCALES
INFO
Backlinks desde sitios relacionados aumentan autoridad del dominio y posicionamiento. Prioriza directorios locales, blogs musicales y turismo regional.
¿Qué son backlinks?
Son enlaces desde otras webs hacia la tuya. Google los interpreta como "votos de confianza".

Tipos de backlinks (prioridad):
Tipo	Ejemplo	Potencia	Dificultad
Directorios locales	TripAdvisor, Google My Business	⭐⭐⭐⭐⭐	Fácil
Turismo oficial	Turismo Vitoria-Gasteiz, Euskadi.travel	⭐⭐⭐⭐⭐	Medio
Blogs musicales	Zona Zine, Rockdelux, Revolver.es	⭐⭐⭐⭐	Medio
Medios locales	El Correo, Diario Vasco, VitoriaMedia	⭐⭐⭐⭐	Difícil
Redes sociales	Instagram, Facebook	⭐⭐	Muy fácil
