const Router = require('express');
const PostController = require('../controller/post.controller');

const router = new Router();

router.post('/post', PostController.createPost);
router.get('/post', PostController.getPostByUser);

module.exports = router;