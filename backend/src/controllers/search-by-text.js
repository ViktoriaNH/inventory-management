import { searchByText } from "../services/search.js";

export const searchByTextController = async (req, res) => {
  const { q: text } = req.query;

  const result = await searchByText(text);

  res.json(result);
};
