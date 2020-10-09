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

const getProjectResources = (id) => {
  return db("project")
    .join("resources", "resources.project_id", "=", "project.id")
    .select("resources.name", "resources.desc")
    .where("project.id", id);
};

const addProject = (data) => {
  const { name, desc, complete } = data;
  return db("project").insert({
    name,
    desc,
    complete,
  });
};

const updateProject = (id, data) => {
  return db("project").update({
    complete: data,
  });
};

const deleteProject = (id) => {
  return db("project").where({ id }).del();
};

module.exports = {
  getProjects,
  getProject,
  getProjectTasks,
  getProjectResources,
  addProject,
  updateProject,
  deleteProject,
};
