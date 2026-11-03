const base = import.meta.env.BASE_URL;
const prefix = base.replace(/\/$/, '');

export function publicPath(path: string) {
  return base + path.replace(/^\/+/, '');
}

export function routePath(route: string) {
  return publicPath(route);
}

export function readRoute(pathname = location.pathname) {
  const route = prefix && (pathname === prefix || pathname.startsWith(prefix + '/'))
    ? pathname.slice(prefix.length)
    : pathname;
  return route.replace(/\/$/, '') || '/';
}
