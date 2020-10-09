const db = require("../data/db-config");

const getProjects = () => {
  return db("project");
};

const getProject = (id) => {
  return db("project").where({ id });
};

const getProjectTasks = (id) => {
  return db("project")
    .join("tasks", "tasks.project_id", "=", "project.id")
    .select("tasks.desc", "tasks.notes", "tasks.complete")
    .where("project.id", id);
};

module.exports = {
  getProjects,
  getProject,
  getProjectTasks,
};
