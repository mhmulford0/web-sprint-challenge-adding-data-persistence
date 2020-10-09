const db = require("../data/db-config");

const getTasks = () => {
  return db("tasks")
    .join("project", "tasks.project_id", "=", "project.id")
    .select(
      "tasks.desc as task_description",
      "tasks.notes as task_notes",
      "project.name as project_name",
      "project.desc as project_description"
    );
};

const addTask = (data) => {
  const { desc, notes, complete, project_id } = data;
  return db("tasks").insert({ desc, notes, complete, project_id });
};

module.exports = { getTasks, addTask };
