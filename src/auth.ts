import { app } from "./index";
import { compareSync } from "bcryptjs";

app.post("/auth", (req, res) => {
  let authorized = true;
  if (authorized) {
    res.status(200);
    res.json({
      "X-Hasura-User-Id": "25",
      "X-Hasura-Role": "user"
    });
  } else {
    res.status(401);
  }
  res.end();
});
