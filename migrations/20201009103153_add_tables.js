exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable();
      tbl.text("desc").notNullable();
      tbl.boolean("complete");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.text("desc").notNullable();
      tbl.text("notes");
      tbl.boolean("complete").notNullable();
      tbl.integer("project_id").references("project.id");
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable();
      tbl.text("desc").notNullable();
      tbl.integer("project_id").references("project.id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("taks")
    .dropTableIfExists("project");
};
