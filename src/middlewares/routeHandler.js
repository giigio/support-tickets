import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";

const database = new Database();

export function routeHandler(req, res) {
  const route = routes.find((r) => {
    return r.method === req.method && r.path === req.url;
  });

  if (route) {
    return route.controller({ req, res, database });
  }

  return res.writeHead(404).end("Not Found");
}
