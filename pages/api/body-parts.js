const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  const data = fs.readFileSync(path.join(process.cwd(), "data.json"), "utf8");

  const parsedData = JSON.parse(data).map(({ bodyPart }) => bodyPart);

  const uniqueData = new Set(parsedData);

  res.status(200).json([...uniqueData]);
}
