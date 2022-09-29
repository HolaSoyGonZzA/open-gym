const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  const data = fs.readFileSync(path.join(process.cwd(), "data.json"), "utf8");
  res.status(200).json(data);
}
