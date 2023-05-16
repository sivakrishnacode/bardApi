const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const request = await fetch("https://api.bardapi.dev/chat", {
    headers: { Authorization: "Bearer 1288e6b2-475a-4291-81f3-3658dae4c9b5" },
    method: "POST",
    body: JSON.stringify({ input: "hello" }),
  });
  const response = await request.json();
  res.send(response.output);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
