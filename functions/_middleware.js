export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Intercetta qualsiasi richiesta che contenga 'admin' nell'URL
  if (url.pathname.toLowerCase().includes('admin')) {
    const auth = request.headers.get('Authorization');

    if (!auth) {
      return new Response('Accesso Riservato - Area Admin Arturo', {
        status: 401,
        headers: { 
          'WWW-Authenticate': 'Basic realm="Area Admin Arturo", charset="UTF-8"' 
        }
      });
    }

    const [scheme, encoded] = auth.split(' ');
    if (!encoded || scheme !== 'Basic') {
      return new Response('Autenticazione Non Valida', { status: 401 });
    }

    try {
      const decoded = atob(encoded);
      const [username, password] = decoded.split(':');

      // Recupera le credenziali impostate nelle variabili d'ambiente (o usa fallback di sicurezza)
      const VALID_USER = env.ADMIN_USER || "admin";
      const VALID_PASS = env.ADMIN_PASS || "Cambiami2026!";

      if (username === VALID_USER && password === VALID_PASS) {
        return await context.next(); // Credenziali corrette: mostra la pagina
      }
    } catch (e) {
      // In caso di errore di decodifica
    }

    // Se le credenziali sono errate, ripropone la finestra di login
    return new Response('Credenziali Errate', {
      status: 401,
      headers: { 
        'WWW-Authenticate': 'Basic realm="Area Admin Arturo", charset="UTF-8"' 
      }
    });
  }

  // Per tutte le altre pagine (home, css, logo, ecc.) lascia passare senza blocchi
  return await context.next();
}
