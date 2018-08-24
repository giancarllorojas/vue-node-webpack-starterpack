exports.up = knex => {
  return knex.schema
    .createTable('user', table => {
      table.increments('id').primary();
      table.string('name')
      table.string('email')
      table.boolean('is_auditor')
      table.boolean('is_admin')
      table.timestamp('reg_date')
      table.string('login_origin')
      table.text('picture')
    })

    .createTable('user_essay', table => {
      table.integer('user_id')
           .unsigned()
           .references('id')
           .inTable('user')
           .onDelete('SET NULL');
    })

    .createTable('product', table => {
      table.increments('id').primary();
      table.integer('type').unsigned();
      table.text('description');
    })

    .createTable('user_product', table => {
      table.integer('user_id')
           .unsigned()
           .references('id')
           .inTable('user')
           .onDelete('SET NULL');

      table.integer('product_id')
           .unsigned()
           .references('id')
           .inTable('product')
           .onDelete('SET NULL');
    })

    .createTable('essay', table => {
      table.increments('id').primary();

      table.integer('user_id')
           .unsigned()
           .references('id')
           .inTable('user')
           .onDelete('SET NULL');

      table.decimal('grade_1');
      table.decimal('grade_2');
      table.decimal('grade_3');
      table.decimal('grade_4');
      table.decimal('grade_5');
    })

    .createTable('essay_markers', table => {
      table.integer('essay_id')
           .unsigned()
           .references('id')
           .inTable('essay')
           .onDelete('SET NULL');
    })
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('user_product')
    .dropTableIfExists('product')
    .dropTableIfExists('essay')
    .dropTableIfExists('essay_markers');
};
