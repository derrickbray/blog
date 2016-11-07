'use strict'

const Schema = use('Schema')

class PostTableSchema extends Schema {
//describes the changes we mant to make
  up () {
    this.create('posts', (table) => {
        //special command that adds one to id
      table.increments();

      table.string('title');
      table.string('slug');
      table.string('author');

      table.text('content');

      table.date('post_date');

      table.timestamps();

    });
  }
//undo the changes
  down () {
    this.drop('posts')
      // opposite of up goes )
  }

}

module.exports = PostTableSchema
