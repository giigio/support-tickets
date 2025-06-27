export function updateStatus({ req, res, database }) {
  const { id } = req.params;
  const { solution } = req.body;

  database.update("tickets", id, {
    status: "closed",
    solution: solution,
    updated_at: new Date(),
  });

  return res.end();
}
