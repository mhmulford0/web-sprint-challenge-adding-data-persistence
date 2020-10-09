const db = require("../data/db-config");

const getProjects = () => {
  return db("project");
};

module.exports = {
  getProjects,
};
