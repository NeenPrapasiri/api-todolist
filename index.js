const express = require("express");
const cors = require("cors");
const app = express();
const { errorHandler } = require("./controllers/error-controller");

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
