import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to post are present here.
 * */

/**
 * This handler handles gets all posts in the db.
 * send GET Request at /api/posts
 * */

export const getAllpostsHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }

    return new Response(200, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler gets post by postId in the db.
 * send GET Request at /api/posts/:postId
 * */

export const getPostHandler = function (schema, request) {
  const postId = request.params.postId;
  try {
    const post = schema.posts.findBy({ _id: postId }).attrs;
    return new Response(200, {}, { post });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler gets posts of a user in the db.
 * send GET Request at /api/posts/user/:username
 * */

export const getAllUserPostsHandler = function (schema, request) {
  const { username } = request.params;
  try {
    const posts = schema.posts.where({ username })?.models;
    return new Response(200, {}, { posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles creating a post in the db.
 * send POST Request at /api/user/posts/
 * body contains {content}
 * */

export const createPostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postData } = JSON.parse(request.requestBody);
    const post = {
      _id: uuid(),
      postMedia: null,
      ...postData,
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [],
      userId: user._id,
      username: user.username,
      profileImage: user.profileImage,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    };
    this.db.posts.insert(post);
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles updating a post in the db.
 * send POST Request at /api/posts/edit/:postId
 * body contains { postData }
 * */
export const editPostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    const { postData } = JSON.parse(request.requestBody);
    let post = schema.posts.findBy({ _id: postId }).attrs;
    if (post.username !== user.username) {
      return new Response(
        400,
        {},
        {
          errors: ["Cannot edit a Post doesn't belong to the logged in User."],
        }
      );
    }
    post = { ...post, ...postData, updatedAt: formatDate() };
    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles liking a post in the db.
 * send POST Request at /api/posts/like/:postId
 * */

export const likePostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    const post = schema.posts.findBy({ _id: postId }).attrs;
    if (post.likes.likedBy.some(({ _id }) => _id === user._id)) {
      return new Response(
        400,
        {},
        { errors: ["Cannot like a post that is already liked."] }
      );
    }
    post.likes.dislikedBy = post.likes.dislikedBy.filter(
      ({ _id }) => _id !== user._id
    );
    post.likes.likeCount += 1;

    const { _id, username, firstName, lastName } = user;
    post.likes.likedBy.push({
      _id,
      username,
      firstName,
      lastName,
      likeUpdateDate: formatDate(),
    });
    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles disliking a post in the db.
 * send POST Request at /api/posts/dislike/:postId
 * */

export const dislikePostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    let post = schema.posts.findBy({ _id: postId }).attrs;
    if (post.likes.likeCount === 0) {
      return new Response(
        400,
        {},
        { errors: ["Cannot decrement like less than 0."] }
      );
    }
    if (post.likes.dislikedBy.some(({ _id }) => _id === user._id)) {
      return new Response(
        400,
        {},
        { errors: ["Cannot dislike a post that is already disliked. "] }
      );
    }
    post.likes.likeCount -= 1;
    const updatedLikedBy = post.likes.likedBy.filter(
      ({ _id }) => _id !== user._id
    );

    const { _id, username, firstName, lastName } = user;
    post.likes.dislikedBy.push({
      _id,
      username,
      firstName,
      lastName,
      likeUpdateDate: formatDate(),
    });
    post = { ...post, likes: { ...post.likes, likedBy: updatedLikedBy } };
    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles deleting a post in the db.
 * send DELETE Request at /api/user/posts/:postId
 * */
export const deletePostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    let post = schema.posts.findBy({ _id: postId }).attrs;
    if (post.username !== user.username) {
      return new Response(
        400,
        {},
        {
          errors: [
            "Cannot delete a Post doesn't belong to the logged in User.",
          ],
        }
      );
    }
    this.db.posts.remove({ _id: postId });
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles comment on a post in the db.
 * send POST Request at /api/comment/:postId
 * */

export const commentPostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    const { comment } = JSON.parse(request.requestBody);
    const post = schema.posts.findBy({ _id: postId }).attrs;
    const { firstName, lastName, username, profileImage } = user;

    post.comments.push({
      comment,
      _id: uuid(),
      firstName,
      lastName,
      username,
      profileImage,
      commentDate: formatDate(),
    });

    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { comments: post.comments });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles editing a comment to a particular post in the db.
 * send POST Request at /api/comment/edit/:postId/:commentId
 * */

export const editPostCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postId, commentId } = request.params;
    const { commentData } = JSON.parse(request.requestBody);
    const post = schema.posts.findBy({ _id: postId }).attrs;
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id === commentId
    );
    if (post.comments[commentIndex].username !== user.username) {
      return new Response(
        400,
        {},
        { errors: ["Cannot edit a comment doesn't belong to the User."] }
      );
    }
    post.comments[commentIndex] = {
      ...post.comments[commentIndex],
      ...commentData,
      updatedAt: formatDate(),
    };
    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { comments: post.comments });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles deleting a comment to a particular post in the db.
 * send DELETE Request at /api/comment/delete/:postId/:commentId
 * */

export const deletePostCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postId, commentId } = request.params;
    const post = schema.posts.findBy({ _id: postId }).attrs;
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id === commentId
    );
    if (
      post.comments[commentIndex].username !== user.username &&
      post.username !== user.username
    ) {
      return new Response(
        400,
        {},
        { errors: ["Cannot delete a comment doesn't belong to the User."] }
      );
    }
    post.comments = post.comments.filter(
      (comment) => comment._id !== commentId
    );
    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { comments: post.comments });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
