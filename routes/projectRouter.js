const express = require("express");

const router = express.Router();

const { getProjects, getProject, getProjectTasks } = require("./projectModel");

router.get("/", async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json({ data: projects });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await getProject(id);
    res.status(200).json({ data: project });
  } catch (error) {}
});

router.get("/:id/tasks", async (req, res) => {
  const { id } = req.params;
  try {
    const projTasks = await getProjectTasks(id);
    res.status(200).json({ data: projTasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});

module.exports = router;
