const express = require("express");

const router = express.Router();

const { getResources, addResources } = require("./resourceModel");

router.get("/", async (req, res) => {
  try {
    const resources = await getResources();
    res.status(200).json({ data: resources });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});

router.post("/", async (req, res) => {
  const data = req.body;
  try {
    await addResources(data);
    res.status(201).json({ message: "added task" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messge: "could not add record" });
  }
});

module.exports = router;
