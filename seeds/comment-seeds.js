const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "hello new to the site here.......",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "TEXT is a new type of data type i have discovered for entering long forms of text data.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "hello, we would like to collect cookies on this site..",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Great. Now I'm hungry for cookies.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Did you know that the largest animal on earth is the blue whale...fun fact",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "hashing is a great way to manipulate the passwords of users. ",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
