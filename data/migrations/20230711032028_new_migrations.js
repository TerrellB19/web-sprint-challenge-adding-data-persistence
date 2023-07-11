/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl => {
      tbl.increments('project_id')
      tbl.text('project_name').notNullable()
      tbl.text('project_description')
      tbl.boolean('project_completed')
    })
    .createTable("resources", tbl => {
      tbl.increments('resource_id')
      tbl.text('resource_name').unique().notNullable()
      tbl.text('resource_description')
    })
    .createTable("tasks", tbl => {
      tbl.increments('task_id');
      tbl.text('task_description').notNullable()
      tbl.text('task_notes')
      tbl.boolean('task_completed')
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects');
    })
    .createTable("project_resources", tbl => {
      tbl.increments('Pr_id');
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources');
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  };
  