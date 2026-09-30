// src/middleware.js
import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const locale = context.url.pathname.split('/')[1];
  
  if (!['es', 'eu', 'en', 'fr'].includes(locale)) {
    return response;
  }
  
  response.headers.set('x-locale', locale);
  return response;
});