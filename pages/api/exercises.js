const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  const bodyPart = req.query["body-part"];
  const data = fs.readFileSync(path.join(process.cwd(), "data.json"), "utf8");

  if (bodyPart) {
    return res
      .status(200)
      .json(JSON.parse(data).filter((item) => item.bodyPart === bodyPart));
  }

  res.status(200).json(JSON.parse(data));
}
