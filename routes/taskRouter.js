const express = require("express");

const router = express.Router();
const { getTasks, addTask } = require("./taskModel");

router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).json({ data: tasks });
  } catch (error) {}
});

router.post("/", async (req, res) => {
  data = req.body;
  try {
    await addTask(data);
    res.status(201).json({ message: "task added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "task was not added" });
  }
});
module.exports = router;
