import { routes } from "../routes/index.js";

export function routeHandler(req, res) {
  const route = routes.find((r) => {
    return r.method === req.method && r.path === req.url;
  });

  if (route) {
    return route.controller({ req, res });
  }

  return res.writeHead(404).end("Not Found");
}
