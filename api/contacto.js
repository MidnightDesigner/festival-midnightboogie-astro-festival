// api/contacto.js — Función serverless de Vercel
// Recibe el formulario y lo envía a Brevo (la clave vive en Vercel, nunca en el frontend)

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  }

  const { nombre, email, asunto, mensaje, website } = req.body || {};

  // Honeypot: si el campo trampa viene relleno, es un bot → fingimos éxito y fuera
  if (req.body && req.body.website) {
    return res.status(200).json({ ok: true });
  }

  // Validación básica
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ ok: false, error: 'Faltan campos obligatorios' });
  }

  try {
    // 1. Registrar/actualizar el contacto en Brevo
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          NOMBRE: nombre,
          ASUNTO: asunto || 'general'
        },
        updateEnabled: true   // si ya existe, actualiza en vez de fallar
      })
    });

    // 2. Avisar al festival con un email transaccional
    const asuntoTexto = {
      general: 'Consulta general',
      prensa: 'Prensa y Medios',
      patrocinio: 'Patrocinios y Colaboraciones',
      artistas: 'Contratación Artística'
    }[asunto] || 'Consulta';

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: 'Web Midnight Boogie', email: 'disenua@gmail.com' },
        to: [{ email: 'info@midnightboogie.net', name: 'Midnight Boogie' }],
        replyTo: { email: email, name: nombre },
        subject: `[WEB] ${asunto} — ${nombre}`,
        htmlContent: `
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${asunto}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${String(mensaje).replace(/\n/g, '<br>')}</p>
        `
      })
    });

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error('Error enviando a Brevo:', error);
    return res.status(500).json({ ok: false, error: 'Error interno' });
  }
}