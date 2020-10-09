const express = require("express");

const router = express.Router();

const {
  getProjects,
  getProject,
  getProjectTasks,
  getProjectResources,
  addProject,
  updateProject,
  deleteProject,
} = require("./projectModel");

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

router.get("/:id/resources", async (req, res) => {
  const { id } = req.params;

  try {
    const projResources = await getProjectResources(id);
    res.status(200).json({ data: projResources });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const result = await addProject(data);
    res.status(201).json({ message: "project added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error adding project" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { complete } = req.body;

  try {
    const updates = await updateProject(id, complete);
    res.status(201).json({ message: "project status updated" });
  } catch (error) {
    res.status(500).json({ message: "error updating project" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteProject(id);
    res.status(200).json({ message: "project deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "could not delete project" });
  }
});
module.exports = router;
