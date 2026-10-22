export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (url.pathname.startsWith('/admin')) {
    const auth = request.headers.get('Authorization');

    if (!auth) {
      return new Response('Accesso Riservato', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Area Admin Arturo"' }
      });
    }

    const [scheme, encoded] = auth.split(' ');
    if (!encoded || scheme !== 'Basic') {
      return new Response('Autenticazione Non Valida', { status: 401 });
    }

    const decoded = atob(encoded);
    const [username, password] = decoded.split(':');

    const VALID_USER = env.ADMIN_USER || "admin";
    const VALID_PASS = env.ADMIN_PASS || "Cambiami2026!";

    if (username !== VALID_USER || password !== VALID_PASS) {
      return new Response('Credenziali Errate', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Area Admin Arturo"' }
      });
    }
  }

  return await context.next();
}
