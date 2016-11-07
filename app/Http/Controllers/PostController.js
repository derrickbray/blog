'use strict';

const Post = use('App/Model/Post');

class PostController {
//list of all results
  * index(request, response) {
    const posts = yield Post.all();

    yield response.sendView('posts.index', { posts:posts.toJSON() });
  }
//show a form to create
  * create(request, response) {
    //
  }
//save a new post to the database
//POST
  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PostController
