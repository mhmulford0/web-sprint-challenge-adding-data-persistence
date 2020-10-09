const express = require("express");

const router = express.Router();

const { getProjects } = require("./projectModel");

router.get("/", async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json({ data: projects });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});

module.exports = router;
