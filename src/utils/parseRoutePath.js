export function parseRoutePath(path) {
  const routeRegex = /:([a-zA-Z]+)/g;
  const params = path.replaceAll(routeRegex, "(?,<$1>[a-z0-9-_]+)");

  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`);
  return pathRegex;
}
