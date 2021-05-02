const Post = require('../models/Post')

module.exports = {
    getProfile: async (req,res)=>{
        console.log(req.user)
        try{
            const posts = await Post.find({userId: req.user.id})
            res.render('profile.ejs', {posts: posts, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getPosts: async (req,res)=>{
        console.log(req.user)
        try{
            const posts = await Post.find({userId: req.user.id})
            res.render('post.ejs', {posts: posts, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createPost: async (req, res)=>{
        try{
            await Post.create({post: req.body.postItem, userId: req.user.id})
            console.log('Post has been added!')
            res.redirect('/post')
        }catch(err){
            console.log(err)
        }
    },
    addLike: async (req, res)=>{
        try{
            await Post.findOneAndUpdate({_id: req.body.postIdFromJSFile},
                {
                  $inc: { likes: 1 },
                }
              )
            console.log('Added Like')
            res.json('Added Like')
            res.redirect("/post")
        }catch(err){
            console.log(err)
        }
    },
/* Did not know if we were going to use a remove like or dislike feature */
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deletePost: async (req, res)=>{
        console.log(req.body.postIdFromJSFile)
        try{
            await Post.findOneAndDelete({_id: req.body.postIdFromJSFile})
            console.log('Deleted Post')
            res.json('Deleted It')
            res.redirect("/post")
        }catch(err){
            console.log(err)
        }
    }
}    