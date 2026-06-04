import { defineMiddleware } from 'astro:middleware';

function unauthorized() {
  return new Response('Admin authentication required', {
    status: 401,
    headers: {
      'www-authenticate': 'Basic realm="La Brasa Gamberra Cocina"',
    },
  });
}

function decodeBasicAuth(header: string) {
  const [scheme, encoded] = header.split(' ');
  if (scheme !== 'Basic' || !encoded) return null;

  try {
    const decoded = atob(encoded);
    const separator = decoded.indexOf(':');
    if (separator === -1) return null;

    return {
      user: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

export const onRequest = defineMiddleware((context, next) => {
  const adminPassword = import.meta.env.ADMIN_PASSWORD;
  if (!context.url.pathname.startsWith('/admin') || !adminPassword) {
    return next();
  }

  const credentials = decodeBasicAuth(context.request.headers.get('authorization') || '');
  if (credentials?.user === 'admin' && credentials.password === adminPassword) {
    return next();
  }

  return unauthorized();
});
