const db = require("../data/db-config");

const getResources = () => {
  return db("resources");
};

module.exports = {
  getResources,
};
