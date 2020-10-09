require("dotenv").config();
const express = require("express");
const projectRouter = require("./routes/projectRouter");
const resourceRouter = require("./routes/resourceRouter");
const taskRouter = require("./routes/taskRouter");
const app = express();

app.use(express.json());
app.use("/api/projects", projectRouter);
app.use("/api/resources", resourceRouter);
app.use("/api/tasks", taskRouter);

const port = process.env.PORT || 3100;

app.get("/", (req, res) => {
  res.status(200).json({ message: "api is running" });
});



app.listen(port, () => {
  console.log(`Api running on ${port}`);
});
