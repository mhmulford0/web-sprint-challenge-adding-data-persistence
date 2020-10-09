const db = require("../data/db-config");

const getResources = () => {
  return db("resources");
};

const addResources = (data) => {
  const { name, desc, project_id } = data;
  return db("resources").insert({ name, desc, project_id });
};

module.exports = {
  getResources,
  addResources,
};
