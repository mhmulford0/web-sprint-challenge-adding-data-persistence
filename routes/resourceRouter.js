const express = require("express");

const router = express.Router();

const { getResources } = require("./resourceModel");

router.get("/", async (req, res) => {
  try {
    const resources = await getResources();
    res.status(200).json({ data: resources });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});

module.exports = router;
