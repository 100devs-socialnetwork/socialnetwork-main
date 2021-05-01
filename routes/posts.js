const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, postsController.getPosts)

router.post('/createPost', postsController.createPost)

router.put('/addLike', postsController.addLike)

//this was "mark incomplete" for todos; we could make this "remove like", or, could be fun to add a dislike button and have this control dislikes?
router.put('/dislike', postsController.dislike)

router.delete('/deletePost', postsController.deletePost)

module.exports = router


//----------------NOTE------------------------------------
//  the above is my edited code from todo-local-auth; below is JOHN'S CODE...
//  which is almost the same except it uses the unique :id path for posts. Once we get our posts set up with ID's we should switch to JOHN'S CODE...

//const express = require("express");
// const router = express.Router();
// const upload = require("../middleware/multer");
// const postsController = require("../controllers/posts");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

// //Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost);

// router.post("/createPost", upload.single("file"), postsController.createPost);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

// module.exports = router;